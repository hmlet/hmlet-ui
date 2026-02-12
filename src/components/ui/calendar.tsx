'use client'

import * as React from 'react'
import {ChevronLeft, ChevronRight} from 'lucide-react'
import {DayPicker} from 'react-day-picker'
import {cn} from './utils'
import {buttonVariants} from './button'
import {Popover, PopoverContent, PopoverTrigger} from './popover'

import type {DateRange} from 'react-day-picker'

export type CalendarBaseProps = Omit<
  React.ComponentProps<typeof DayPicker>,
  'selected' | 'onSelect'
> & {
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>
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
  React.useEffect(() => {
    setSelected(props.selected)
  }, [props.selected])
  const {
    className,
    classNames,
    showOutsideDays = true,
    inputProps,
    onSelect,
    ...rest
  } = props
  const inputValue = selected ? selected.toLocaleDateString() : ''
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <input
          readOnly
          className={cn(
            'w-full cursor-pointer rounded-md border bg-input-background px-3 py-2 text-base outline-none transition-all text-left',
            inputProps?.className,
          )}
          value={inputValue}
          placeholder={inputProps?.placeholder || 'Select date'}
          {...inputProps}
          onClick={e => {
            setOpen(true)
            inputProps?.onClick?.(e)
          }}
        />
      </PopoverTrigger>
      <PopoverContent align="start" className="p-0 w-auto bg-background border">
        <DayPicker
          showOutsideDays={showOutsideDays}
          selected={selected}
          onSelect={(date: Date | undefined) => {
            setSelected(date)
            setOpen(false)
            onSelect?.(date)
          }}
          className={cn('p-3', className)}
          classNames={{
            ...classNames,
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
            head_cell:
              'text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]',
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
          }}
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
      </PopoverContent>
    </Popover>
  )
}

// Multiple mode calendar
function CalendarMultiple(props: Extract<CalendarProps, {mode: 'multiple'}>) {
  const [open, setOpen] = React.useState(false)
  const [selected, setSelected] = React.useState<Date[] | undefined>(
    props.selected,
  )
  React.useEffect(() => {
    setSelected(props.selected)
  }, [props.selected])
  const {
    className,
    classNames,
    showOutsideDays = true,
    inputProps,
    onSelect,
    ...rest
  } = props
  const inputValue =
    selected && selected.length > 0
      ? selected.map(d => d.toLocaleDateString()).join(', ')
      : ''
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <input
          readOnly
          className={cn(
            'w-full cursor-pointer rounded-md border bg-input-background px-3 py-2 text-base outline-none transition-all text-left',
            inputProps?.className,
          )}
          value={inputValue}
          placeholder={inputProps?.placeholder || 'Select date(s)'}
          {...inputProps}
          onClick={e => {
            setOpen(true)
            inputProps?.onClick?.(e)
          }}
        />
      </PopoverTrigger>
      <PopoverContent align="start" className="p-0 w-auto bg-background border">
        <DayPicker
          showOutsideDays={showOutsideDays}
          selected={selected}
          onSelect={(dates: Date[] | undefined) => {
            setSelected(dates)
            setOpen(false)
            onSelect?.(dates)
          }}
          className={cn('p-3', className)}
          classNames={{
            ...classNames,
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
            head_cell:
              'text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]',
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
          }}
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
      </PopoverContent>
    </Popover>
  )
}

// Range mode calendar
function CalendarRange(props: Extract<CalendarProps, {mode: 'range'}>) {
  const [open, setOpen] = React.useState(false)
  const [selected, setSelected] = React.useState<DateRange | undefined>(
    props.selected,
  )
  React.useEffect(() => {
    setSelected(props.selected)
  }, [props.selected])
  const {
    className,
    classNames,
    showOutsideDays = true,
    inputProps,
    onSelect,
    ...rest
  } = props
  let inputValue = ''
  if (selected?.from) {
    inputValue = selected.from.toLocaleDateString()
    if (selected.to) inputValue += ' - ' + selected.to.toLocaleDateString()
  }
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <input
          readOnly
          className={cn(
            'w-full cursor-pointer rounded-md border bg-input-background px-3 py-2 text-base outline-none transition-all text-left',
            inputProps?.className,
          )}
          value={inputValue}
          placeholder={inputProps?.placeholder || 'Select date range'}
          {...inputProps}
          onClick={e => {
            setOpen(true)
            inputProps?.onClick?.(e)
          }}
        />
      </PopoverTrigger>
      <PopoverContent align="start" className="p-0 w-auto bg-background border">
        <DayPicker
          showOutsideDays={showOutsideDays}
          selected={selected}
          onSelect={(range: DateRange | undefined) => {
            setSelected(range)
            // Only close if both from and to are selected (range complete)
            if (range?.from && range?.to) {
              setOpen(false)
            }
            onSelect?.(range)
          }}
          className={cn('p-3', className)}
          classNames={{
            ...classNames,
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
            head_cell:
              'text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]',
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
          }}
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
      </PopoverContent>
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
