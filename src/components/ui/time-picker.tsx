'use client'

import * as React from 'react'
import {Clock, X, ChevronDown} from 'lucide-react'
import {cva, type VariantProps} from './cva'

import {cn} from './utils'

const timePickerVariants = cva(
  'hmlet-time-picker relative flex w-full min-w-0 items-center rounded-md border bg-input-background text-base transition-all duration-200 outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
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

type TimePickerValue = string | null

export interface TimePickerProps extends Omit<
  VariantProps<typeof timePickerVariants>,
  'inputSize'
> {
  /** The current time value (e.g. "10:00" or "14:30") */
  value?: TimePickerValue
  /** Callback when the time changes */
  onChange?: (value: TimePickerValue) => void
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
  /** Minimum time (e.g. "08:00") */
  minTime?: string
  /** Maximum time (e.g. "18:00") */
  maxTime?: string
  /** Placeholder text */
  placeholder?: string
  /** Whether to use 12-hour format */
  use12Hours?: boolean
}

function parseTimeToMinutes(time: string): number {
  const [h, m] = time.split(':').map(Number)
  return h * 60 + m
}

function formatDisplay(time: string, use12Hours: boolean): string {
  if (!use12Hours) return time
  const [h, m] = time.split(':').map(Number)
  const period = h >= 12 ? 'PM' : 'AM'
  const hour12 = h % 12 || 12
  return `${hour12}:${m.toString().padStart(2, '0')} ${period}`
}

function padTwo(n: number) {
  return n.toString().padStart(2, '0')
}

/* ─── Clock Face Sub-Component ─── */

type ClockMode = 'hours' | 'minutes'

interface ClockFaceProps {
  hour: number
  minute: number
  mode: ClockMode
  use12Hours: boolean
  period: 'AM' | 'PM'
  onSelectHour: (h: number) => void
  onSelectMinute: (m: number) => void
  onModeChange: (mode: ClockMode) => void
  onPeriodChange: (p: 'AM' | 'PM') => void
  minTime?: string
  maxTime?: string
}

const CLOCK_SIZE = 250
const CLOCK_RADIUS = CLOCK_SIZE / 2
const OUTER_RADIUS = 90
const INNER_RADIUS = 62
const NUMBER_SIZE = 32

function ClockFace({
  hour,
  minute,
  mode,
  use12Hours,
  period,
  onSelectHour,
  onSelectMinute,
  onModeChange,
  onPeriodChange,
  minTime,
  maxTime,
}: ClockFaceProps) {
  const svgRef = React.useRef<SVGSVGElement>(null)
  const isDragging = React.useRef(false)
  const lastClient = React.useRef({x: 0, y: 0})

  const minMinutes = minTime ? parseTimeToMinutes(minTime) : 0
  const maxMinutes = maxTime ? parseTimeToMinutes(maxTime) : 24 * 60 - 1

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

  function handleFromAngle(angle: number) {
    if (mode === 'hours') {
      if (use12Hours) {
        let h = Math.round(angle / 30) % 12
        if (h === 0) h = 12
        // Convert to 24h for comparison
        let h24 = h
        if (period === 'AM') h24 = h === 12 ? 0 : h
        else h24 = h === 12 ? 12 : h + 12
        const totalMin = h24 * 60 + minute
        if (totalMin >= minMinutes && totalMin <= maxMinutes) {
          onSelectHour(h24)
        }
      } else {
        // Determine inner vs outer ring by distance
        const dist = getDistFromCenter()
        const threshold = (OUTER_RADIUS + INNER_RADIUS) / 2
        let h: number
        if (dist < threshold) {
          // Inner ring: 0, 13-23
          h = Math.round(angle / 30) % 12
          h = h === 0 ? 0 : h + 12
        } else {
          // Outer ring: 1-12
          h = Math.round(angle / 30) % 12
          if (h === 0) h = 12
        }
        const totalMin = h * 60 + minute
        if (totalMin >= minMinutes && totalMin <= maxMinutes) {
          onSelectHour(h)
        }
      }
    } else {
      const m = Math.round(angle / 6) % 60
      const totalMin = hour * 60 + m
      if (totalMin >= minMinutes && totalMin <= maxMinutes) {
        onSelectMinute(m)
      }
    }
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

  function handlePointerDown(e: React.MouseEvent<SVGSVGElement>) {
    isDragging.current = true
    lastClient.current = {x: e.clientX, y: e.clientY}
    const angle = getAngleFromEvent(e)
    handleFromAngle(angle)
  }

  function handlePointerMove(e: React.MouseEvent<SVGSVGElement>) {
    if (!isDragging.current) return
    lastClient.current = {x: e.clientX, y: e.clientY}
    const angle = getAngleFromEvent(e)
    handleFromAngle(angle)
  }

  function handlePointerUp() {
    if (isDragging.current) {
      isDragging.current = false
      if (mode === 'hours') {
        onModeChange('minutes')
      }
    }
  }

  // Compute hand angle
  let handAngle: number
  let handRadius: number

  if (mode === 'hours') {
    const displayHour = use12Hours ? hour % 12 : hour
    handAngle = (displayHour % 12) * 30
    // In 24h mode, inner ring for 0, 13-23
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
      const angle = ((i * 30 - 90) * Math.PI) / 180
      hourNumbers.push({
        value: i,
        label: String(i),
        x: CLOCK_RADIUS + OUTER_RADIUS * Math.cos(angle),
        y: CLOCK_RADIUS + OUTER_RADIUS * Math.sin(angle),
        inner: false,
      })
    }
  } else {
    // Outer ring: 1-12
    for (let i = 1; i <= 12; i++) {
      const angle = ((i * 30 - 90) * Math.PI) / 180
      hourNumbers.push({
        value: i,
        label: String(i),
        x: CLOCK_RADIUS + OUTER_RADIUS * Math.cos(angle),
        y: CLOCK_RADIUS + OUTER_RADIUS * Math.sin(angle),
        inner: false,
      })
    }
    // Inner ring: 0, 13-23
    for (let i = 0; i < 12; i++) {
      const h = i === 0 ? 0 : i + 12
      const angle = ((i * 30 - 90) * Math.PI) / 180
      hourNumbers.push({
        value: h,
        label: padTwo(h),
        x: CLOCK_RADIUS + INNER_RADIUS * Math.cos(angle),
        y: CLOCK_RADIUS + INNER_RADIUS * Math.sin(angle),
        inner: true,
      })
    }
  }

  // Minute numbers (every 5 min)
  const minuteNumbers: {value: number; label: string; x: number; y: number}[] =
    []
  for (let i = 0; i < 12; i++) {
    const m = i * 5
    const angle = ((m * 6 - 90) * Math.PI) / 180
    minuteNumbers.push({
      value: m,
      label: padTwo(m),
      x: CLOCK_RADIUS + OUTER_RADIUS * Math.cos(angle),
      y: CLOCK_RADIUS + OUTER_RADIUS * Math.sin(angle),
    })
  }

  const isHourSelected = (h: number) => {
    if (use12Hours) {
      return hour % 12 === h % 12 && (h !== 0 || hour === 0 || hour === 12)
    }
    return hour === h
  }

  return (
    <div className="flex flex-col items-center gap-3 p-4">
      {/* Header: display selected time */}
      <div className="flex items-center gap-1 text-2xl font-medium tabular-nums">
        <button
          type="button"
          onClick={() => onModeChange('hours')}
          className={cn(
            'rounded px-2 py-1 transition-colors',
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
          onClick={() => onModeChange('minutes')}
          className={cn(
            'rounded px-2 py-1 transition-colors',
            mode === 'minutes'
              ? 'bg-primary text-primary-foreground'
              : 'hover:bg-muted text-foreground',
          )}
        >
          {padTwo(minute)}
        </button>
        {use12Hours && (
          <div className="ml-2 flex flex-col text-xs gap-0.5">
            <button
              type="button"
              onClick={() => onPeriodChange('AM')}
              className={cn(
                'rounded px-1.5 py-0.5 transition-colors',
                period === 'AM'
                  ? 'bg-primary text-primary-foreground'
                  : 'hover:bg-muted text-muted-foreground',
              )}
            >
              AM
            </button>
            <button
              type="button"
              onClick={() => onPeriodChange('PM')}
              className={cn(
                'rounded px-1.5 py-0.5 transition-colors',
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

      {/* Clock face */}
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
        {/* Background circle */}
        <circle
          cx={CLOCK_RADIUS}
          cy={CLOCK_RADIUS}
          r={CLOCK_RADIUS - 2}
          className="fill-muted/50"
        />

        {/* Center dot */}
        <circle
          cx={CLOCK_RADIUS}
          cy={CLOCK_RADIUS}
          r={3}
          className="fill-primary"
        />

        {/* Hand line */}
        <line
          x1={CLOCK_RADIUS}
          y1={CLOCK_RADIUS}
          x2={handX}
          y2={handY}
          strokeWidth={2}
          className="stroke-primary"
        />

        {/* Hand end dot */}
        <circle
          cx={handX}
          cy={handY}
          r={NUMBER_SIZE / 2}
          className="fill-primary"
        />

        {/* Numbers */}
        {mode === 'hours'
          ? hourNumbers.map(({value: h, label, x, y, inner}) => {
              const selected = isHourSelected(h)
              return (
                <text
                  key={`h-${h}-${inner ? 'inner' : 'outer'}`}
                  x={x}
                  y={y}
                  textAnchor="middle"
                  dominantBaseline="central"
                  className={cn(
                    'pointer-events-none text-[13px]',
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
                    'pointer-events-none text-[13px] font-medium',
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

/* ─── TimePicker Component ─── */

const TimePicker = React.forwardRef<HTMLDivElement, TimePickerProps>(
  (
    {
      className,
      variant = 'default',
      size = 'md',
      value,
      onChange,
      disabled,
      name,
      id,
      required,
      minTime,
      maxTime,
      placeholder = 'Select time',
      use12Hours = true,
    },
    ref,
  ) => {
    const [isOpen, setIsOpen] = React.useState(false)
    const [clockMode, setClockMode] = React.useState<ClockMode>('hours')
    const containerRef = React.useRef<HTMLDivElement>(null)

    React.useImperativeHandle(ref, () => containerRef.current as HTMLDivElement)

    // Parse current value
    const parsedHour = value ? parseInt(value.split(':')[0], 10) : 0
    const parsedMinute = value ? parseInt(value.split(':')[1], 10) : 0
    const [tempHour, setTempHour] = React.useState(parsedHour)
    const [tempMinute, setTempMinute] = React.useState(parsedMinute)
    const [period, setPeriod] = React.useState<'AM' | 'PM'>(
      parsedHour >= 12 ? 'PM' : 'AM',
    )

    // Sync temp state when value changes externally
    React.useEffect(() => {
      const h = value ? parseInt(value.split(':')[0], 10) : 0
      const m = value ? parseInt(value.split(':')[1], 10) : 0
      setTempHour(h)
      setTempMinute(m)
      setPeriod(h >= 12 ? 'PM' : 'AM')
    }, [value])

    // Reset mode when opening
    React.useEffect(() => {
      if (isOpen) {
        setClockMode('hours')
      }
    }, [isOpen])

    // Close on outside click
    React.useEffect(() => {
      function handleClickOutside(e: MouseEvent) {
        if (
          containerRef.current &&
          !containerRef.current.contains(e.target as Node)
        ) {
          setIsOpen(false)
        }
      }
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    // Close on Escape
    React.useEffect(() => {
      function handleKeyDown(e: KeyboardEvent) {
        if (e.key === 'Escape') setIsOpen(false)
      }
      if (isOpen) {
        document.addEventListener('keydown', handleKeyDown)
        return () => document.removeEventListener('keydown', handleKeyDown)
      }
    }, [isOpen])

    function emitChange(h: number, m: number) {
      onChange?.(`${padTwo(h)}:${padTwo(m)}`)
    }

    function handleSelectHour(h: number) {
      setTempHour(h)
      emitChange(h, tempMinute)
    }

    function handleSelectMinute(m: number) {
      setTempMinute(m)
      emitChange(tempHour, m)
    }

    function handlePeriodChange(p: 'AM' | 'PM') {
      setPeriod(p)
      let newHour = tempHour
      if (p === 'AM' && tempHour >= 12) newHour = tempHour - 12
      if (p === 'PM' && tempHour < 12) newHour = tempHour + 12
      setTempHour(newHour)
      emitChange(newHour, tempMinute)
    }

    const handleClear = (e: React.MouseEvent) => {
      e.stopPropagation()
      onChange?.(null)
    }

    const iconSize = size === 'sm' ? 14 : size === 'lg' ? 18 : 16

    return (
      <div
        ref={containerRef}
        data-slot="time-picker"
        className={cn('relative', disabled && 'pointer-events-none opacity-50')}
        {...(id ? {id} : {})}
      >
        {name && <input type="hidden" name={name} value={value ?? ''} />}
        {required && !value && (
          <input
            tabIndex={-1}
            className="absolute opacity-0 h-0 w-0"
            required
            value=""
            onChange={() => {}}
          />
        )}
        <button
          type="button"
          disabled={disabled}
          onClick={() => setIsOpen(prev => !prev)}
          className={cn(
            timePickerVariants({variant, size}),
            'cursor-pointer select-none gap-2',
            className,
          )}
          aria-expanded={isOpen}
          aria-haspopup="dialog"
        >
          <Clock size={iconSize} className="shrink-0 text-muted-foreground" />
          <span
            className={cn(
              'flex-1 text-left',
              !value && 'text-muted-foreground',
            )}
          >
            {value ? formatDisplay(value, use12Hours) : placeholder}
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
              aria-label="Clear time"
            >
              <X size={iconSize} />
            </span>
          ) : (
            <ChevronDown
              size={iconSize}
              className={cn(
                'shrink-0 text-muted-foreground transition-transform duration-200',
                isOpen && 'rotate-180',
              )}
            />
          )}
        </button>

        {isOpen && (
          <div
            role="dialog"
            aria-label="Select time"
            className="absolute z-50 mt-1 rounded-md border border-input bg-popover text-popover-foreground shadow-md"
          >
            <ClockFace
              hour={tempHour}
              minute={tempMinute}
              mode={clockMode}
              use12Hours={use12Hours}
              period={period}
              onSelectHour={handleSelectHour}
              onSelectMinute={handleSelectMinute}
              onModeChange={setClockMode}
              onPeriodChange={handlePeriodChange}
              minTime={minTime}
              maxTime={maxTime}
            />
          </div>
        )}
      </div>
    )
  },
)
TimePicker.displayName = 'TimePicker'

export type TimePickerVariants = VariantProps<typeof timePickerVariants>

export {TimePicker, timePickerVariants}
