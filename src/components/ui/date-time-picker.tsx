'use client'

import * as React from 'react'
import {CalendarIcon, Clock, X, ChevronDown} from 'lucide-react'
import {DayPicker, type DateRange} from 'react-day-picker'
import {cva, type VariantProps} from './cva'
import {cn} from './utils'
import {buttonVariants} from './button'
import {ChevronLeft, ChevronRight} from 'lucide-react'
import {Popover, PopoverContent, PopoverTrigger} from './popover'

/* ─── Variants (matches Input sizing) ─── */

const dateTimePickerVariants = cva(
  'relative flex w-full min-w-0 items-center rounded-md border bg-input-background text-base transition-all duration-200 outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'border-input hover:border-muted-foreground dark:hover:border-muted-foreground focus-within:border-primary focus-within:ring-2 focus-within:ring-ring/20',
        error:
          'border-destructive focus-within:border-destructive focus-within:ring-2 focus-within:ring-destructive/20',
        success:
          'border-success focus-within:border-success focus-within:ring-2 focus-within:ring-success/20',
      },
      size: {
        sm: 'h-9 text-sm px-3',
        md: 'h-11 text-base px-3',
        lg: 'h-12 text-lg px-3',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  },
) satisfies ReturnType<typeof cva>

/* ─── Helpers ─── */

function padTwo(n: number) {
  return n.toString().padStart(2, '0')
}

function formatTime(h: number, m: number, use12Hours: boolean): string {
  if (!use12Hours) return `${padTwo(h)}:${padTwo(m)}`
  const period = h >= 12 ? 'PM' : 'AM'
  const hour12 = h % 12 || 12
  return `${hour12}:${padTwo(m)} ${period}`
}

function formatDate(date: Date): string {
  return date.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

/* ─── Inline Clock Face ─── */

type ClockMode = 'hours' | 'minutes'

const CLOCK_SIZE = 220
const CLOCK_RADIUS = CLOCK_SIZE / 2
const OUTER_RADIUS = 85
const INNER_RADIUS = 58
const NUMBER_SIZE = 28

interface InlineClockProps {
  hour: number
  minute: number
  use12Hours: boolean
  onChange: (h: number, m: number) => void
}

function InlineClock({hour, minute, use12Hours, onChange}: InlineClockProps) {
  const svgRef = React.useRef<SVGSVGElement>(null)
  const isDragging = React.useRef(false)
  const lastClient = React.useRef({x: 0, y: 0})
  const [mode, setMode] = React.useState<ClockMode>('hours')
  const [period, setPeriod] = React.useState<'AM' | 'PM'>(
    hour >= 12 ? 'PM' : 'AM',
  )

  React.useEffect(() => {
    setPeriod(hour >= 12 ? 'PM' : 'AM')
  }, [hour])

  function getAngleFromEvent(e: React.MouseEvent | MouseEvent) {
    if (!svgRef.current) return 0
    const rect = svgRef.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const x = e.clientX - cx
    const y = e.clientY - cy
    let angle = Math.atan2(y, x) * (180 / Math.PI) + 90
    if (angle < 0) angle += 360
    return angle
  }

  function getDistFromCenter() {
    if (!svgRef.current) return OUTER_RADIUS
    const rect = svgRef.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const x = lastClient.current.x - cx
    const y = lastClient.current.y - cy
    return Math.sqrt(x * x + y * y)
  }

  function handleFromAngle(angle: number) {
    if (mode === 'hours') {
      if (use12Hours) {
        let h = Math.round(angle / 30) % 12
        if (h === 0) h = 12
        let h24 = h
        if (period === 'AM') h24 = h === 12 ? 0 : h
        else h24 = h === 12 ? 12 : h + 12
        onChange(h24, minute)
      } else {
        const dist = getDistFromCenter()
        const threshold = (OUTER_RADIUS + INNER_RADIUS) / 2
        let h: number
        if (dist < threshold) {
          h = Math.round(angle / 30) % 12
          h = h === 0 ? 0 : h + 12
        } else {
          h = Math.round(angle / 30) % 12
          if (h === 0) h = 12
        }
        onChange(h, minute)
      }
    } else {
      const m = Math.round(angle / 6) % 60
      onChange(hour, m)
    }
  }

  function handlePointerDown(e: React.MouseEvent<SVGSVGElement>) {
    isDragging.current = true
    lastClient.current = {x: e.clientX, y: e.clientY}
    handleFromAngle(getAngleFromEvent(e))
  }

  function handlePointerMove(e: React.MouseEvent<SVGSVGElement>) {
    if (!isDragging.current) return
    lastClient.current = {x: e.clientX, y: e.clientY}
    handleFromAngle(getAngleFromEvent(e))
  }

  function handlePointerUp() {
    if (isDragging.current) {
      isDragging.current = false
      if (mode === 'hours') setMode('minutes')
    }
  }

  function handlePeriodChange(p: 'AM' | 'PM') {
    setPeriod(p)
    let newHour = hour
    if (p === 'AM' && hour >= 12) newHour = hour - 12
    if (p === 'PM' && hour < 12) newHour = hour + 12
    onChange(newHour, minute)
  }

  // Hand position
  let handAngle: number
  let handRadius: number
  if (mode === 'hours') {
    const displayHour = use12Hours ? hour % 12 : hour
    handAngle = (displayHour % 12) * 30
    if (!use12Hours && (hour === 0 || hour > 12)) {
      handRadius = INNER_RADIUS
    } else {
      handRadius = OUTER_RADIUS
    }
  } else {
    handAngle = minute * 6
    handRadius = OUTER_RADIUS
  }

  const handRad = ((handAngle - 90) * Math.PI) / 180
  const handX = CLOCK_RADIUS + handRadius * Math.cos(handRad)
  const handY = CLOCK_RADIUS + handRadius * Math.sin(handRad)

  // Hour numbers
  const hourNumbers: {
    value: number
    label: string
    x: number
    y: number
    inner: boolean
  }[] = []
  if (use12Hours) {
    for (let i = 1; i <= 12; i++) {
      const a = ((i * 30 - 90) * Math.PI) / 180
      hourNumbers.push({
        value: i,
        label: String(i),
        x: CLOCK_RADIUS + OUTER_RADIUS * Math.cos(a),
        y: CLOCK_RADIUS + OUTER_RADIUS * Math.sin(a),
        inner: false,
      })
    }
  } else {
    for (let i = 1; i <= 12; i++) {
      const a = ((i * 30 - 90) * Math.PI) / 180
      hourNumbers.push({
        value: i,
        label: String(i),
        x: CLOCK_RADIUS + OUTER_RADIUS * Math.cos(a),
        y: CLOCK_RADIUS + OUTER_RADIUS * Math.sin(a),
        inner: false,
      })
    }
    for (let i = 0; i < 12; i++) {
      const h = i === 0 ? 0 : i + 12
      const a = ((i * 30 - 90) * Math.PI) / 180
      hourNumbers.push({
        value: h,
        label: padTwo(h),
        x: CLOCK_RADIUS + INNER_RADIUS * Math.cos(a),
        y: CLOCK_RADIUS + INNER_RADIUS * Math.sin(a),
        inner: true,
      })
    }
  }

  // Minute numbers
  const minuteNumbers: {
    value: number
    label: string
    x: number
    y: number
  }[] = []
  for (let i = 0; i < 12; i++) {
    const m = i * 5
    const a = ((m * 6 - 90) * Math.PI) / 180
    minuteNumbers.push({
      value: m,
      label: padTwo(m),
      x: CLOCK_RADIUS + OUTER_RADIUS * Math.cos(a),
      y: CLOCK_RADIUS + OUTER_RADIUS * Math.sin(a),
    })
  }

  const isHourSelected = (h: number) => {
    if (use12Hours) {
      return hour % 12 === h % 12 && (h !== 0 || hour === 0 || hour === 12)
    }
    return hour === h
  }

  return (
    <div className="flex flex-col items-center gap-2">
      {/* Time header */}
      <div className="flex items-center gap-1 text-xl font-medium tabular-nums">
        <button
          type="button"
          onClick={() => setMode('hours')}
          className={cn(
            'rounded px-1.5 py-0.5 transition-colors text-lg',
            mode === 'hours'
              ? 'bg-primary text-primary-foreground'
              : 'hover:bg-muted text-foreground',
          )}
        >
          {padTwo(use12Hours ? hour % 12 || 12 : hour)}
        </button>
        <span className="text-muted-foreground">:</span>
        <button
          type="button"
          onClick={() => setMode('minutes')}
          className={cn(
            'rounded px-1.5 py-0.5 transition-colors text-lg',
            mode === 'minutes'
              ? 'bg-primary text-primary-foreground'
              : 'hover:bg-muted text-foreground',
          )}
        >
          {padTwo(minute)}
        </button>
        {use12Hours && (
          <div className="ml-1.5 flex flex-col text-[10px] gap-0.5">
            <button
              type="button"
              onClick={() => handlePeriodChange('AM')}
              className={cn(
                'rounded px-1 py-0.5 transition-colors',
                period === 'AM'
                  ? 'bg-primary text-primary-foreground'
                  : 'hover:bg-muted text-muted-foreground',
              )}
            >
              AM
            </button>
            <button
              type="button"
              onClick={() => handlePeriodChange('PM')}
              className={cn(
                'rounded px-1 py-0.5 transition-colors',
                period === 'PM'
                  ? 'bg-primary text-primary-foreground'
                  : 'hover:bg-muted text-muted-foreground',
              )}
            >
              PM
            </button>
          </div>
        )}
      </div>

      {/* Clock SVG */}
      <svg
        ref={svgRef}
        width={CLOCK_SIZE}
        height={CLOCK_SIZE}
        className="cursor-pointer select-none"
        onMouseDown={handlePointerDown}
        onMouseMove={handlePointerMove}
        onMouseUp={handlePointerUp}
        onMouseLeave={handlePointerUp}
      >
        <circle
          cx={CLOCK_RADIUS}
          cy={CLOCK_RADIUS}
          r={CLOCK_RADIUS - 2}
          className="fill-muted/50"
        />
        <circle
          cx={CLOCK_RADIUS}
          cy={CLOCK_RADIUS}
          r={3}
          className="fill-primary"
        />
        <line
          x1={CLOCK_RADIUS}
          y1={CLOCK_RADIUS}
          x2={handX}
          y2={handY}
          strokeWidth={2}
          className="stroke-primary"
        />
        <circle
          cx={handX}
          cy={handY}
          r={NUMBER_SIZE / 2}
          className="fill-primary"
        />
        {mode === 'hours'
          ? hourNumbers.map(({value: h, label, x, y, inner}) => {
              const selected = isHourSelected(h)
              return (
                <text
                  key={`h-${h}-${inner ? 'i' : 'o'}`}
                  x={x}
                  y={y}
                  textAnchor="middle"
                  dominantBaseline="central"
                  className={cn(
                    'pointer-events-none text-[12px]',
                    inner ? 'font-normal' : 'font-medium',
                    selected ? 'fill-primary-foreground' : 'fill-foreground',
                  )}
                >
                  {label}
                </text>
              )
            })
          : minuteNumbers.map(({value: m, label, x, y}) => {
              const selected = minute === m
              return (
                <text
                  key={`m-${m}`}
                  x={x}
                  y={y}
                  textAnchor="middle"
                  dominantBaseline="central"
                  className={cn(
                    'pointer-events-none text-[12px] font-medium',
                    selected ? 'fill-primary-foreground' : 'fill-foreground',
                  )}
                >
                  {label}
                </text>
              )
            })}
      </svg>
    </div>
  )
}

/* ─── Shared DayPicker classNames ─── */

const dayPickerClassNames = {
  months: 'flex flex-col sm:flex-row gap-2',
  month: 'flex flex-col gap-4',
  caption: 'flex justify-center pt-1 relative items-center w-full',
  caption_label: 'text-sm font-medium',
  nav: 'flex items-center gap-1',
  nav_button: cn(
    buttonVariants({variant: 'outline'}),
    'size-7 bg-transparent p-0 opacity-50 hover:opacity-100',
  ),
  nav_button_previous: 'absolute left-1',
  nav_button_next: 'absolute right-1',
  table: 'w-full border-collapse space-x-1',
  head_row: 'flex',
  head_cell: 'text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]',
  row: 'flex w-full mt-2',
  cell: cn(
    'relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-range-end)]:rounded-r-md',
    '[&:has([aria-selected])]:rounded-md',
  ),
  day: cn(
    buttonVariants({variant: 'ghost'}),
    'size-8 p-0 font-normal aria-selected:opacity-100',
  ),
  day_range_start:
    'day-range-start aria-selected:bg-primary aria-selected:text-primary-foreground',
  day_range_end:
    'day-range-end aria-selected:bg-primary aria-selected:text-primary-foreground',
  day_selected:
    'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground',
  day_today: 'bg-accent text-accent-foreground',
  day_outside:
    'day-outside text-muted-foreground aria-selected:text-muted-foreground',
  day_disabled: 'text-muted-foreground opacity-50',
  day_range_middle:
    'aria-selected:bg-accent aria-selected:text-accent-foreground',
  day_hidden: 'invisible',
}

const dayPickerComponents = {
  IconLeft: ({className: c, ...p}: {className?: string}) => (
    <ChevronLeft className={cn('size-4', c)} {...p} />
  ),
  IconRight: ({className: c, ...p}: {className?: string}) => (
    <ChevronRight className={cn('size-4', c)} {...p} />
  ),
}

/* ─── Types ─── */

export type DateTimeValue = {
  date: Date
  hour: number
  minute: number
}

export type DateTimeRangeValue = {
  from?: DateTimeValue
  to?: DateTimeValue
}

export interface DateTimePickerBaseProps extends Omit<
  VariantProps<typeof dateTimePickerVariants>,
  'inputSize'
> {
  /** Size variant matching Input sizes */
  size?: 'sm' | 'md' | 'lg'
  /** Visual variant */
  variant?: 'default' | 'error' | 'success'
  /** Whether the picker is disabled */
  disabled?: boolean
  /** Additional class names */
  className?: string
  /** Name attribute */
  name?: string
  /** Id attribute */
  id?: string
  /** Whether the field is required */
  required?: boolean
  /** Placeholder text */
  placeholder?: string
  /** Whether to use 12-hour format */
  use12Hours?: boolean
  /** Props passed to DayPicker */
  calendarProps?: Omit<
    React.ComponentProps<typeof DayPicker>,
    'mode' | 'selected' | 'onSelect'
  >
}

export interface DateTimePickerSingleProps extends DateTimePickerBaseProps {
  mode?: 'single'
  value?: DateTimeValue | null
  onChange?: (value: DateTimeValue | null) => void
}

export interface DateTimePickerRangeProps extends DateTimePickerBaseProps {
  mode: 'range'
  value?: DateTimeRangeValue | null
  onChange?: (value: DateTimeRangeValue | null) => void
}

export type DateTimePickerProps =
  | DateTimePickerSingleProps
  | DateTimePickerRangeProps

/* ─── Single DateTimePicker ─── */

function DateTimePickerSingle({
  className,
  variant = 'default',
  size = 'md',
  value,
  onChange,
  disabled,
  name,
  id,
  required,
  placeholder = 'Select date & time',
  use12Hours = true,
  calendarProps,
}: DateTimePickerSingleProps) {
  const [open, setOpen] = React.useState(false)
  const [tab, setTab] = React.useState<'date' | 'time'>('date')

  const selectedDate = value?.date
  const hour = value?.hour ?? 0
  const minute = value?.minute ?? 0

  function handleDateSelect(date?: Date) {
    if (!date) return
    onChange?.({date, hour, minute})
    setTab('time')
  }

  function handleTimeChange(h: number, m: number) {
    const date = selectedDate ?? new Date()
    onChange?.({date, hour: h, minute: m})
  }

  function handleClear(e: React.MouseEvent) {
    e.stopPropagation()
    e.preventDefault()
    onChange?.(null)
  }

  const displayText = value
    ? `${formatDate(value.date)}, ${formatTime(value.hour, value.minute, use12Hours)}`
    : null

  const iconSize = size === 'sm' ? 14 : size === 'lg' ? 18 : 16

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild disabled={disabled}>
        <button
          type="button"
          disabled={disabled}
          className={cn(
            dateTimePickerVariants({variant, size}),
            'cursor-pointer select-none gap-2',
            disabled && 'pointer-events-none opacity-50',
            className,
          )}
          aria-expanded={open}
          aria-haspopup="dialog"
          {...(id ? {id} : {})}
        >
          <CalendarIcon
            size={iconSize}
            className="shrink-0 text-muted-foreground"
          />
          <span
            className={cn(
              'flex-1 text-left truncate',
              !displayText && 'text-muted-foreground',
            )}
          >
            {displayText ?? placeholder}
          </span>
          {value ? (
            <span
              role="button"
              tabIndex={0}
              onClick={handleClear}
              onKeyDown={e => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleClear(e as unknown as React.MouseEvent)
                }
              }}
              className="shrink-0 rounded-sm p-0.5 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              aria-label="Clear"
            >
              <X size={iconSize} />
            </span>
          ) : (
            <ChevronDown
              size={iconSize}
              className={cn(
                'shrink-0 text-muted-foreground transition-transform duration-200',
                open && 'rotate-180',
              )}
            />
          )}
        </button>
      </PopoverTrigger>

      <PopoverContent align="start" className="w-auto p-0 bg-popover border">
        {name && (
          <input
            type="hidden"
            name={name}
            value={
              value
                ? `${value.date.toISOString().split('T')[0]}T${padTwo(value.hour)}:${padTwo(value.minute)}`
                : ''
            }
          />
        )}
        {required && !value && (
          <input
            tabIndex={-1}
            className="absolute opacity-0 h-0 w-0"
            required
            value=""
            onChange={() => {}}
          />
        )}

        {/* Tabs */}
        <div className="flex border-b border-input">
          <button
            type="button"
            onClick={() => setTab('date')}
            className={cn(
              'flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-medium transition-colors',
              tab === 'date'
                ? 'text-primary border-b-2 border-primary'
                : 'text-muted-foreground hover:text-foreground',
            )}
          >
            <CalendarIcon size={14} />
            Date
          </button>
          <button
            type="button"
            onClick={() => setTab('time')}
            className={cn(
              'flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-medium transition-colors',
              tab === 'time'
                ? 'text-primary border-b-2 border-primary'
                : 'text-muted-foreground hover:text-foreground',
            )}
          >
            <Clock size={14} />
            Time
          </button>
        </div>

        {/* Content */}
        {tab === 'date' ? (
          <DayPicker
            mode="single"
            showOutsideDays
            selected={selectedDate}
            onSelect={handleDateSelect}
            className="p-3"
            classNames={dayPickerClassNames}
            components={dayPickerComponents}
            {...calendarProps}
          />
        ) : (
          <div className="p-3">
            <InlineClock
              hour={hour}
              minute={minute}
              use12Hours={use12Hours}
              onChange={handleTimeChange}
            />
          </div>
        )}
      </PopoverContent>
    </Popover>
  )
}

/* ─── Range DateTimePicker ─── */

function DateTimePickerRange({
  className,
  variant = 'default',
  size = 'md',
  value,
  onChange,
  disabled,
  name,
  id,
  required,
  placeholder = 'Select date & time range',
  use12Hours = true,
  calendarProps,
}: DateTimePickerRangeProps) {
  const [open, setOpen] = React.useState(false)
  const [tab, setTab] = React.useState<'date' | 'start-time' | 'end-time'>(
    'date',
  )
  const [hoveredDate, setHoveredDate] = React.useState<Date | undefined>()

  const fromDate = value?.from?.date
  const toDate = value?.to?.date
  const fromHour = value?.from?.hour ?? 0
  const fromMinute = value?.from?.minute ?? 0
  const toHour = value?.to?.hour ?? 0
  const toMinute = value?.to?.minute ?? 0

  const dateRange: DateRange | undefined =
    fromDate || toDate ? {from: fromDate, to: toDate} : undefined

  // Hover preview for range selection
  const hoveredRange =
    fromDate && !toDate && hoveredDate
      ? {from: fromDate, to: hoveredDate}
      : null

  function handleDateRangeSelect(range?: DateRange, selectedDate?: Date) {
    // If both from and to are already selected and user clicks again, reset range
    if (fromDate && toDate && selectedDate) {
      const newValue: DateTimeRangeValue = {
        from: {date: selectedDate, hour: 0, minute: 0},
        to: undefined,
      }
      onChange?.(newValue)
      return
    }

    if (!range?.from) {
      onChange?.(null)
      return
    }

    const newValue: DateTimeRangeValue = {
      from: {
        date: range.from,
        hour: value?.from?.hour ?? 0,
        minute: value?.from?.minute ?? 0,
      },
      to: range.to
        ? {
            date: range.to,
            hour: value?.to?.hour ?? 0,
            minute: value?.to?.minute ?? 0,
          }
        : undefined,
    }
    onChange?.(newValue)

    if (range.from && range.to) {
      setTab('start-time')
    }
  }

  function handleStartTimeChange(h: number, m: number) {
    const from: DateTimeValue = {
      date: fromDate ?? new Date(),
      hour: h,
      minute: m,
    }
    onChange?.({
      from,
      to: value?.to,
    })
  }

  function handleEndTimeChange(h: number, m: number) {
    const to: DateTimeValue = {
      date: toDate ?? new Date(),
      hour: h,
      minute: m,
    }
    onChange?.({
      from: value?.from,
      to,
    })
  }

  function handleClear(e: React.MouseEvent) {
    e.stopPropagation()
    e.preventDefault()
    onChange?.(null)
  }

  let displayText: string | null = null
  if (value?.from) {
    const fromStr = `${formatDate(value.from.date)}, ${formatTime(value.from.hour, value.from.minute, use12Hours)}`
    if (value?.to) {
      const toStr = `${formatDate(value.to.date)}, ${formatTime(value.to.hour, value.to.minute, use12Hours)}`
      displayText = `${fromStr} – ${toStr}`
    } else {
      displayText = fromStr
    }
  }

  const iconSize = size === 'sm' ? 14 : size === 'lg' ? 18 : 16

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild disabled={disabled}>
        <button
          type="button"
          disabled={disabled}
          className={cn(
            dateTimePickerVariants({variant, size}),
            'cursor-pointer select-none gap-2',
            disabled && 'pointer-events-none opacity-50',
            className,
          )}
          aria-expanded={open}
          aria-haspopup="dialog"
          {...(id ? {id} : {})}
        >
          <CalendarIcon
            size={iconSize}
            className="shrink-0 text-muted-foreground"
          />
          <span
            className={cn(
              'flex-1 text-left truncate',
              !displayText && 'text-muted-foreground',
            )}
          >
            {displayText ?? placeholder}
          </span>
          {value ? (
            <span
              role="button"
              tabIndex={0}
              onClick={handleClear}
              onKeyDown={e => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleClear(e as unknown as React.MouseEvent)
                }
              }}
              className="shrink-0 rounded-sm p-0.5 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              aria-label="Clear"
            >
              <X size={iconSize} />
            </span>
          ) : (
            <ChevronDown
              size={iconSize}
              className={cn(
                'shrink-0 text-muted-foreground transition-transform duration-200',
                open && 'rotate-180',
              )}
            />
          )}
        </button>
      </PopoverTrigger>

      <PopoverContent align="start" className="w-auto p-0 bg-popover border">
        {name && (
          <input
            type="hidden"
            name={name}
            value={
              value?.from && value?.to
                ? `${value.from.date.toISOString().split('T')[0]}T${padTwo(value.from.hour)}:${padTwo(value.from.minute)}/${value.to.date.toISOString().split('T')[0]}T${padTwo(value.to.hour)}:${padTwo(value.to.minute)}`
                : ''
            }
          />
        )}
        {required && !value?.from && (
          <input
            tabIndex={-1}
            className="absolute opacity-0 h-0 w-0"
            required
            value=""
            onChange={() => {}}
          />
        )}

        {/* Tabs */}
        <div className="flex border-b border-input">
          <button
            type="button"
            onClick={() => setTab('date')}
            className={cn(
              'flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-medium transition-colors',
              tab === 'date'
                ? 'text-primary border-b-2 border-primary'
                : 'text-muted-foreground hover:text-foreground',
            )}
          >
            <CalendarIcon size={14} />
            Dates
          </button>
          <button
            type="button"
            onClick={() => setTab('start-time')}
            className={cn(
              'flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-medium transition-colors',
              tab === 'start-time'
                ? 'text-primary border-b-2 border-primary'
                : 'text-muted-foreground hover:text-foreground',
            )}
          >
            <Clock size={14} />
            Start
          </button>
          <button
            type="button"
            onClick={() => setTab('end-time')}
            className={cn(
              'flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-medium transition-colors',
              tab === 'end-time'
                ? 'text-primary border-b-2 border-primary'
                : 'text-muted-foreground hover:text-foreground',
            )}
          >
            <Clock size={14} />
            End
          </button>
        </div>

        {/* Content */}
        {tab === 'date' ? (
          <DayPicker
            mode="range"
            numberOfMonths={2}
            showOutsideDays
            selected={dateRange}
            onSelect={handleDateRangeSelect}
            onDayMouseEnter={date => setHoveredDate(date)}
            onDayMouseLeave={() => setHoveredDate(undefined)}
            modifiers={{
              hoveredRange: hoveredRange ? [hoveredRange] : [],
            }}
            modifiersClassNames={{
              hoveredRange: 'bg-accent/50 text-accent-foreground',
            }}
            className="p-3"
            classNames={dayPickerClassNames}
            components={dayPickerComponents}
            {...calendarProps}
          />
        ) : tab === 'start-time' ? (
          <div className="p-3">
            <p className="text-xs text-muted-foreground text-center mb-2">
              {fromDate ? formatDate(fromDate) : 'Select start date first'}
            </p>
            <InlineClock
              hour={fromHour}
              minute={fromMinute}
              use12Hours={use12Hours}
              onChange={handleStartTimeChange}
            />
          </div>
        ) : (
          <div className="p-3">
            <p className="text-xs text-muted-foreground text-center mb-2">
              {toDate ? formatDate(toDate) : 'Select end date first'}
            </p>
            <InlineClock
              hour={toHour}
              minute={toMinute}
              use12Hours={use12Hours}
              onChange={handleEndTimeChange}
            />
          </div>
        )}
      </PopoverContent>
    </Popover>
  )
}

/* ─── Wrapper Component ─── */

const DateTimePicker = React.forwardRef<HTMLButtonElement, DateTimePickerProps>(
  props => {
    if (props.mode === 'range') {
      return <DateTimePickerRange {...props} />
    }
    return <DateTimePickerSingle {...props} />
  },
)
DateTimePicker.displayName = 'DateTimePicker'

export type DateTimePickerVariants = VariantProps<typeof dateTimePickerVariants>

export {DateTimePicker, dateTimePickerVariants}
