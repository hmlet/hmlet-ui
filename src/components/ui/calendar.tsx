'use client'

import * as React from 'react'
import {ChevronLeft, ChevronRight} from 'lucide-react'
import {DayPicker} from 'react-day-picker'
import {cn} from './utils'
import {buttonVariants} from './button'
import {Popover, PopoverContent, PopoverTrigger} from './popover'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './select'

import type {DateRange} from 'react-day-picker'
import {Input, type InputProps} from './input'

const CURRENT_YEAR = new Date().getFullYear()
const DEFAULT_FROM_YEAR = CURRENT_YEAR - 100
const DEFAULT_TO_YEAR = CURRENT_YEAR + 100
const MONTH_LABELS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

type CalendarMonthYearPickerProps = {
  month: Date
  fromYear: number
  toYear: number
  onMonthChange: (nextMonth: Date) => void
}

type CalendarContentProps = {
  className?: string
  month: Date
  fromYear: number
  toYear: number
  onMonthChange: (nextMonth: Date) => void
  children: React.ReactNode
}

function CalendarMonthYearPicker(props: CalendarMonthYearPickerProps) {
  const {month, fromYear, toYear, onMonthChange} = props
  const year = month.getFullYear()
  const monthIndex = month.getMonth()
  const yearOptions = React.useMemo(() => {
    const years: number[] = []
    for (let currentYear = toYear; currentYear >= fromYear; currentYear -= 1) {
      years.push(currentYear)
    }
    return years
  }, [fromYear, toYear])

  const setYear = (nextYear: number) => {
    const clampedYear = Math.min(toYear, Math.max(fromYear, nextYear))
    onMonthChange(new Date(clampedYear, monthIndex, 1))
  }

  return (
    <div className="border-b p-3 space-y-3">
      <div className="flex items-center gap-2">
        <button
          type="button"
          className={cn(buttonVariants({variant: 'outline'}), 'size-8 p-0')}
          onClick={() => setYear(year - 1)}
          disabled={year <= fromYear}
          aria-label="Previous year"
        >
          <ChevronLeft className="size-4" />
        </button>

        <Select
          isSearchable={false}
          value={String(year)}
          onValueChange={value => setYear(Number(value))}
        >
          <SelectTrigger
            size="sm"
            className="h-8 min-w-36 flex-1"
            aria-label="Calendar year"
          >
            <SelectValue placeholder="Year" />
          </SelectTrigger>
          <SelectContent isSearchable={false} className="max-h-64">
            {yearOptions.map(optionYear => (
              <SelectItem key={optionYear} value={String(optionYear)}>
                {optionYear}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <button
          type="button"
          className={cn(buttonVariants({variant: 'outline'}), 'size-8 p-0')}
          onClick={() => setYear(year + 1)}
          disabled={year >= toYear}
          aria-label="Next year"
        >
          <ChevronRight className="size-4" />
        </button>
      </div>
      <Select
        isSearchable={false}
        value={String(monthIndex)}
        onValueChange={value => onMonthChange(new Date(year, Number(value), 1))}
      >
        <SelectTrigger
          size="sm"
          className="h-8 min-w-36 flex-1"
          aria-label="Calendar month"
        >
          <SelectValue placeholder="Month" />
        </SelectTrigger>
        <SelectContent className="max-h-64" isSearchable={false}>
          {MONTH_LABELS.map((label, index) => (
            <SelectItem key={label} value={String(index)}>
              {label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

function resolveYearBounds(fromYear?: number, toYear?: number) {
  if (fromYear != null && toYear != null) {
    return {fromYear, toYear}
  }

  if (fromYear != null) {
    return {fromYear, toYear: fromYear + 100}
  }

  if (toYear != null) {
    return {fromYear: toYear - 100, toYear}
  }

  return {fromYear: DEFAULT_FROM_YEAR, toYear: DEFAULT_TO_YEAR}
}

function CalendarContent(props: CalendarContentProps) {
  const {className, month, fromYear, toYear, onMonthChange, children} = props

  return (
    <PopoverContent
      align="start"
      className="p-0 w-auto bg-background border"
      onPointerDownOutside={e => {
        // Don't close popover when interacting with Select dropdowns
        const target = e.target as Element
        if (
          target.closest('[role="option"]') ||
          target.closest('[role="listbox"]') ||
          target.closest('[role="presentation"]')
        ) {
          e.preventDefault()
        }
      }}
    >
      <CalendarMonthYearPicker
        month={month}
        fromYear={fromYear}
        toYear={toYear}
        onMonthChange={onMonthChange}
      />
      <div className={cn('p-3', className)}>{children}</div>
    </PopoverContent>
  )
}

const getCalendarClassNames = (
  classNames?: React.ComponentProps<typeof DayPicker>['classNames'],
) => ({
  ...classNames,
  months: 'flex flex-col sm:flex-row gap-2',
  month: 'flex flex-col gap-4',
  caption: cn('hidden', classNames?.caption),
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
})

export type CalendarBaseProps = Omit<
  React.ComponentProps<typeof DayPicker>,
  'selected' | 'onSelect'
> & {
  inputProps?: InputProps
}

export type CalendarProps =
  | (CalendarBaseProps & {
      mode: 'single'
      selected?: Date
      onSelect?: (date?: Date) => void
    })
  | (CalendarBaseProps & {
      mode: 'multiple'
      selected?: Date[]
      onSelect?: (dates?: Date[]) => void
    })
  | (CalendarBaseProps & {
      mode: 'range'
      selected?: DateRange
      onSelect?: (range?: DateRange) => void
    })
  | (CalendarBaseProps & {
      mode?: undefined
      selected?: undefined
      onSelect?: undefined
    })

// Single mode calendar
function CalendarSingle(props: Extract<CalendarProps, {mode: 'single'}>) {
  const [open, setOpen] = React.useState(false)
  const [selected, setSelected] = React.useState<Date | undefined>(
    props.selected,
  )
  const [month, setMonth] = React.useState<Date>(props.selected ?? new Date())
  React.useEffect(() => {
    setSelected(props.selected)
    if (props.selected) setMonth(props.selected)
  }, [props.selected])
  const {
    className,
    classNames,
    showOutsideDays = true,
    fromYear,
    toYear,
    inputProps,
    onSelect,
    ...rest
  } = props
  const yearBounds = resolveYearBounds(fromYear, toYear)
  const inputValue = selected ? selected.toLocaleDateString() : undefined
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger className="w-full flex-1">
        <Input
          readOnly
          value={inputValue}
          {...inputProps}
          placeholder={inputProps?.placeholder || 'Select date'}
          onClick={e => {
            setOpen(true)
            inputProps?.onClick?.(e)
          }}
        />
      </PopoverTrigger>
      <CalendarContent
        className={className}
        month={month}
        fromYear={yearBounds.fromYear}
        toYear={yearBounds.toYear}
        onMonthChange={setMonth}
      >
        <DayPicker
          showOutsideDays={showOutsideDays}
          month={month}
          onMonthChange={setMonth}
          fromYear={yearBounds.fromYear}
          toYear={yearBounds.toYear}
          selected={selected}
          onSelect={(date: Date | undefined) => {
            setSelected(date)
            if (date) setMonth(date)
            setOpen(false)
            onSelect?.(date)
          }}
          classNames={getCalendarClassNames(classNames)}
          components={{
            IconLeft: ({className, ...props}) => (
              <ChevronLeft className={cn('size-4', className)} {...props} />
            ),
            IconRight: ({className, ...props}) => (
              <ChevronRight className={cn('size-4', className)} {...props} />
            ),
          }}
          {...rest}
        />
      </CalendarContent>
    </Popover>
  )
}

// Multiple mode calendar
function CalendarMultiple(props: Extract<CalendarProps, {mode: 'multiple'}>) {
  const [open, setOpen] = React.useState(false)
  const [selected, setSelected] = React.useState<Date[] | undefined>(
    props.selected,
  )
  const [month, setMonth] = React.useState<Date>(
    props.selected?.[0] ?? new Date(),
  )
  React.useEffect(() => {
    setSelected(props.selected)
    if (props.selected?.[0]) setMonth(props.selected[0])
  }, [props.selected])
  const {
    className,
    classNames,
    showOutsideDays = true,
    fromYear,
    toYear,
    inputProps,
    onSelect,
    ...rest
  } = props
  const yearBounds = resolveYearBounds(fromYear, toYear)
  const inputValue =
    selected && selected.length > 0
      ? selected.map(d => d.toLocaleDateString()).join(', ')
      : undefined
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger className="w-full flex-1">
        <Input
          readOnly
          value={inputValue}
          {...inputProps}
          placeholder={inputProps?.placeholder || 'Select date(s)'}
          onClick={e => {
            setOpen(true)
            inputProps?.onClick?.(e)
          }}
        />
      </PopoverTrigger>
      <CalendarContent
        className={className}
        month={month}
        fromYear={yearBounds.fromYear}
        toYear={yearBounds.toYear}
        onMonthChange={setMonth}
      >
        <DayPicker
          showOutsideDays={showOutsideDays}
          month={month}
          onMonthChange={setMonth}
          fromYear={yearBounds.fromYear}
          toYear={yearBounds.toYear}
          selected={selected}
          onSelect={(dates: Date[] | undefined) => {
            setSelected(dates)
            if (dates?.[0]) setMonth(dates[0])
            setOpen(false)
            onSelect?.(dates)
          }}
          classNames={getCalendarClassNames(classNames)}
          components={{
            IconLeft: ({className, ...props}) => (
              <ChevronLeft className={cn('size-4', className)} {...props} />
            ),
            IconRight: ({className, ...props}) => (
              <ChevronRight className={cn('size-4', className)} {...props} />
            ),
          }}
          {...rest}
        />
      </CalendarContent>
    </Popover>
  )
}

// Range mode calendar
function CalendarRange(props: Extract<CalendarProps, {mode: 'range'}>) {
  const [open, setOpen] = React.useState(false)
  const [selected, setSelected] = React.useState<DateRange | undefined>(
    props.selected,
  )
  const [month, setMonth] = React.useState<Date>(
    props.selected?.from ?? new Date(),
  )
  const [hoveredDate, setHoveredDate] = React.useState<Date | undefined>()
  React.useEffect(() => {
    setSelected(props.selected)
    if (props.selected?.from) setMonth(props.selected.from)
  }, [props.selected])
  const {
    className,
    classNames,
    showOutsideDays = true,
    fromYear,
    toYear,
    inputProps,
    onSelect,
    ...rest
  } = props
  const yearBounds = resolveYearBounds(fromYear, toYear)
  let inputValue: string | undefined = undefined
  if (selected?.from && selected?.to) {
    inputValue =
      selected.from.toLocaleDateString() +
      ' - ' +
      selected.to.toLocaleDateString()
  }
  // Compute hovered range
  const hoveredRange =
    selected?.from && !selected?.to && hoveredDate
      ? {from: selected.from, to: hoveredDate}
      : null

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger className="w-full flex-1">
        <Input
          readOnly
          value={inputValue ? inputValue : undefined}
          {...inputProps}
          placeholder={inputProps?.placeholder || 'Select date range'}
          onClick={e => {
            setOpen(true)
            inputProps?.onClick?.(e)
          }}
        />
      </PopoverTrigger>
      <CalendarContent
        className={className}
        month={month}
        fromYear={yearBounds.fromYear}
        toYear={yearBounds.toYear}
        onMonthChange={setMonth}
      >
        <DayPicker
          showOutsideDays={showOutsideDays}
          month={month}
          onMonthChange={setMonth}
          fromYear={yearBounds.fromYear}
          toYear={yearBounds.toYear}
          selected={selected}
          onSelect={(range: DateRange | undefined, selectedDate?: Date) => {
            // If both from and to are already selected, and user selects another date, reset range
            if (selected?.from && selected?.to && selectedDate) {
              const newRange = {from: selectedDate, to: undefined}
              setSelected(newRange)
              onSelect?.(newRange)
              // Do not close popover
              return
            }
            setSelected(range)
            if (selectedDate) setMonth(selectedDate)
            onSelect?.(range)
            // Only close if both from and to are selected (range complete)
            if (range?.from && range?.to) {
              setOpen(false)
            }
          }}
          onDayMouseEnter={date => setHoveredDate(date)}
          onDayMouseLeave={() => setHoveredDate(undefined)}
          modifiers={{
            hoveredRange: hoveredRange ? [hoveredRange] : [],
          }}
          modifiersClassNames={{
            hoveredRange: 'bg-accent/50 text-accent-foreground',
          }}
          classNames={getCalendarClassNames(classNames)}
          components={{
            IconLeft: ({className, ...props}) => (
              <ChevronLeft className={cn('size-4', className)} {...props} />
            ),
            IconRight: ({className, ...props}) => (
              <ChevronRight className={cn('size-4', className)} {...props} />
            ),
          }}
          {...rest}
        />
      </CalendarContent>
    </Popover>
  )
}

// Wrapper Calendar
function Calendar(props: CalendarProps) {
  if (props.mode === 'multiple')
    return (
      <CalendarMultiple
        {...(props as Extract<CalendarProps, {mode: 'multiple'}>)}
      />
    )
  if (props.mode === 'range')
    return (
      <CalendarRange {...(props as Extract<CalendarProps, {mode: 'range'}>)} />
    )
  // Default to single
  return (
    <CalendarSingle {...(props as Extract<CalendarProps, {mode: 'single'}>)} />
  )
}

export {Calendar}
