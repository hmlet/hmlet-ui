// --- Multiple mode story ---
export const MultipleDates: Story = {
  name: 'Multiple Dates',
  args: {
    selectedTimestamp: undefined,
  },
  render: function MultipleDatesRender(storyArgs) {
    const [{selectedTimestamp}, updateArgs] = useArgs<{
      selectedTimestamp?: number[]
    }>()

    // selectedTimestamp is an array of timestamps
    const selected = Array.isArray(selectedTimestamp)
      ? selectedTimestamp.map(toDate).filter((d): d is Date => !!d)
      : []

    return (
      <div className="flex flex-col gap-3">
        <Calendar
          {...storyArgs}
          mode="multiple"
          selected={selected}
          inputProps={{placeholder: 'Select date(s)'}}
          onSelect={(next: Date[] | undefined) => {
            updateArgs({
              selectedTimestamp: next
                ?.map(dateToTimestamp)
                .filter((n): n is number => typeof n === 'number'),
            })
            // Optionally call a story action if needed
          }}
        />
        <div className="text-muted-foreground text-sm">
          Selected:{' '}
          {selected.length > 0
            ? selected.map(d => d?.toDateString()).join(', ')
            : '—'}
        </div>
      </div>
    )
  },
}
import type {Meta, StoryObj} from '@storybook/react'
import {useArgs} from '@storybook/preview-api'
import * as React from 'react'

import {Calendar} from '../../components/ui/calendar'
import {buttonVariants} from '../../components/ui/button'
import {Input} from '../../components/ui/input'
import {Button} from '../../components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../components/ui/select'
import {cn} from '../../components/ui/utils'

type CalendarStoryArgs = Omit<
  React.ComponentProps<typeof Calendar>,
  'mode' | 'selected' | 'onSelect' | 'month' | 'onMonthChange' | 'classNames'
> & {
  selectedTimestamp?: number
  rangeFromTimestamp?: number
  rangeToTimestamp?: number
  monthTimestamp?: number
  time?: string
  cellSize?: 'sm' | 'md' | 'lg'
  naturalText?: string
  disablePast?: boolean
  disableFuture?: boolean
  onSelectDate?: (date?: Date) => void
  onSelectRange?: (range?: {from?: Date; to?: Date}) => void
  onMonthChange?: (month: Date) => void
  onDateTimeChange?: (value?: Date) => void
  onNaturalLanguageApply?: (text: string, parsed?: Date) => void
}

const meta: Meta<CalendarStoryArgs> = {
  title: 'UI/Calendar',
  component: Calendar,
  tags: ['autodocs'],
  parameters: {
    controls: {
      include: [
        'showOutsideDays',
        'fixedWeeks',
        'weekStartsOn',
        'numberOfMonths',
        'pagedNavigation',
        'disablePast',
        'disableFuture',
        'selectedTimestamp',
        'rangeFromTimestamp',
        'rangeToTimestamp',
        'monthTimestamp',
        'fromYear',
        'toYear',
        'time',
        'cellSize',
        'naturalText',
        'onSelectDate',
        'onSelectRange',
        'onMonthChange',
        'onDateTimeChange',
        'onNaturalLanguageApply',
        'className',
      ],
    },
    docs: {
      description: {
        component:
          'Wrapper around `react-day-picker` with theme-aware styles. Stories below add controls/actions and demonstrate common picker patterns (single, range, month/year navigation, DOB, date+time, natural language, and cell sizing).',
      },
    },
  },
  argTypes: {
    showOutsideDays: {control: 'boolean'},
    fixedWeeks: {control: 'boolean'},
    weekStartsOn: {
      options: [0, 1, 2, 3, 4, 5, 6],
      control: {type: 'select'},
      description: '0=Sunday … 6=Saturday',
    },
    numberOfMonths: {
      control: {type: 'number', min: 1, max: 3, step: 1},
    },
    pagedNavigation: {control: 'boolean'},
    disablePast: {control: 'boolean'},
    disableFuture: {control: 'boolean'},
    selectedTimestamp: {control: 'date'},
    rangeFromTimestamp: {control: 'date'},
    rangeToTimestamp: {control: 'date'},
    monthTimestamp: {control: 'date'},
    fromYear: {control: {type: 'number', step: 1}},
    toYear: {control: {type: 'number', step: 1}},
    time: {control: 'text', description: 'HH:MM (24h) for Date+Time picker.'},
    cellSize: {
      options: ['sm', 'md', 'lg'],
      control: {type: 'inline-radio'},
    },
    naturalText: {
      control: 'text',
      description:
        'Try: today, tomorrow, yesterday, next friday, in 3 days, 2026-01-07, 01/07/2026',
    },
    onSelectDate: {action: 'onSelectDate'},
    onSelectRange: {action: 'onSelectRange'},
    onMonthChange: {action: 'onMonthChange'},
    onDateTimeChange: {action: 'onDateTimeChange'},
    onNaturalLanguageApply: {action: 'onNaturalLanguageApply'},
    className: {control: 'text'},
  },
  args: {
    showOutsideDays: true,
    fixedWeeks: false,
    weekStartsOn: 0,
    numberOfMonths: 1,
    pagedNavigation: false,
    disablePast: false,
    disableFuture: false,
    cellSize: 'md',
    fromYear: new Date().getFullYear() - 100,
    toYear: new Date().getFullYear() + 10,
    inputProps: {placeholder: 'Select date'},
  },
}

export default meta

type Story = StoryObj<CalendarStoryArgs>

function toDate(ts?: number): Date | undefined {
  if (typeof ts !== 'number' || !Number.isFinite(ts)) return undefined
  const date = new Date(ts)
  return Number.isNaN(date.getTime()) ? undefined : date
}

function dateToTimestamp(date?: Date): number | undefined {
  if (!date) return undefined
  const ts = date.getTime()
  return Number.isNaN(ts) ? undefined : ts
}

function startOfDay(date: Date) {
  const next = new Date(date)
  next.setHours(0, 0, 0, 0)
  return next
}

function addDays(date: Date, days: number) {
  const next = new Date(date)
  next.setDate(next.getDate() + days)
  return next
}

function combineDateAndTime(date: Date, time: string) {
  const match = time.trim().match(/^(\d{1,2}):(\d{2})$/)
  if (!match) return date
  const hours = Math.min(23, Math.max(0, Number(match[1])))
  const minutes = Math.min(59, Math.max(0, Number(match[2])))
  const next = new Date(date)
  next.setHours(hours, minutes, 0, 0)
  return next
}

const weekdayIndex: Record<string, number> = {
  sunday: 0,
  sun: 0,
  monday: 1,
  mon: 1,
  tuesday: 2,
  tue: 2,
  tues: 2,
  wednesday: 3,
  wed: 3,
  thursday: 4,
  thu: 4,
  thurs: 4,
  friday: 5,
  fri: 5,
  saturday: 6,
  sat: 6,
}

function parseNaturalLanguage(
  text: string,
  base = new Date(),
): Date | undefined {
  const input = text.trim().toLowerCase()
  if (!input) return undefined

  if (input === 'today') return startOfDay(base)
  if (input === 'tomorrow') return startOfDay(addDays(base, 1))
  if (input === 'yesterday') return startOfDay(addDays(base, -1))

  const inDays = input.match(/^in\s+(\d+)\s+days?$/)
  if (inDays) return startOfDay(addDays(base, Number(inDays[1])))

  const nextWeekday = input.match(/^next\s+([a-z]+)$/)
  if (nextWeekday) {
    const target = weekdayIndex[nextWeekday[1]]
    if (target !== undefined) {
      const current = base.getDay()
      const delta = (target - current + 7) % 7 || 7
      return startOfDay(addDays(base, delta))
    }
  }

  const iso = input.match(/^(\d{4})-(\d{2})-(\d{2})$/)
  if (iso) {
    const date = new Date(Number(iso[1]), Number(iso[2]) - 1, Number(iso[3]))
    return Number.isNaN(date.getTime()) ? undefined : startOfDay(date)
  }

  const us = input.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/)
  if (us) {
    const date = new Date(Number(us[3]), Number(us[1]) - 1, Number(us[2]))
    return Number.isNaN(date.getTime()) ? undefined : startOfDay(date)
  }

  return undefined
}

function getMonthOptions() {
  return Array.from({length: 12}, (_, month) => ({
    month,
    label: new Date(2000, month, 1).toLocaleString(undefined, {month: 'long'}),
  }))
}

function getYearOptions(fromYear: number, toYear: number) {
  const start = Math.min(fromYear, toYear)
  const end = Math.max(fromYear, toYear)
  return Array.from({length: end - start + 1}, (_, i) => start + i)
}

export const SingleDate: Story = {
  args: {
    selectedTimestamp: new Date().setHours(0, 0, 0, 0),
  },
  render: function SingleDateRender(storyArgs) {
    const [{selectedTimestamp}, updateArgs] = useArgs<{
      selectedTimestamp?: number
    }>()

    const selected = toDate(selectedTimestamp)

    return (
      <div className="flex flex-col gap-3">
        <Calendar
          {...storyArgs}
          mode="single"
          selected={selected}
          inputProps={{placeholder: 'Select date'}}
          onSelect={(next: Date | undefined) => {
            updateArgs({selectedTimestamp: dateToTimestamp(next)})
            storyArgs.onSelectDate?.(next)
          }}
        />
        <div className="text-muted-foreground text-sm">
          Selected: {selected ? selected.toDateString() : '—'}
        </div>
      </div>
    )
  },
}

export const Range: Story = {
  args: {
    numberOfMonths: 2,
    pagedNavigation: true,
    rangeFromTimestamp: new Date().setHours(0, 0, 0, 0),
    rangeToTimestamp: addDays(new Date(), 7).setHours(0, 0, 0, 0),
  },
  render: function RangeRender(storyArgs) {
    const [{rangeFromTimestamp, rangeToTimestamp}, updateArgs] = useArgs<{
      rangeFromTimestamp?: number
      rangeToTimestamp?: number
    }>()

    const from = toDate(rangeFromTimestamp)
    const to = toDate(rangeToTimestamp)
    const selected = from || to ? {from, to} : undefined

    return (
      <div className="flex flex-col gap-3">
        <Calendar
          {...storyArgs}
          mode="range"
          selected={selected}
          inputProps={{placeholder: 'Select date range'}}
          onSelect={(next: {from?: Date; to?: Date} | undefined) => {
            updateArgs({
              rangeFromTimestamp: dateToTimestamp(next?.from),
              rangeToTimestamp: dateToTimestamp(next?.to),
            })
            storyArgs.onSelectRange?.(next)
          }}
        />
        <div className="text-muted-foreground text-sm">
          Range: {from ? from.toDateString() : '—'} →{' '}
          {to ? to.toDateString() : '—'}
        </div>
      </div>
    )
  },
}

export const MonthYearSelector: Story = {
  name: 'Month and Year Selector',
  args: {
    monthTimestamp: new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      1,
    ).getTime(),
    selectedTimestamp: new Date().setHours(0, 0, 0, 0),
  },
  render: function MonthYearSelectorRender(storyArgs) {
    const [{monthTimestamp, selectedTimestamp}, updateArgs] = useArgs<{
      monthTimestamp?: number
      selectedTimestamp?: number
    }>()

    const month = toDate(monthTimestamp) ?? new Date()
    const selected = toDate(selectedTimestamp)
    const monthOptions = getMonthOptions()
    const fromYear = storyArgs.fromYear ?? new Date().getFullYear() - 100
    const toYear = storyArgs.toYear ?? new Date().getFullYear() + 10
    const yearOptions = getYearOptions(fromYear, toYear)

    const monthValue = String(month.getMonth())
    const yearValue = String(month.getFullYear())

    return (
      <div className="flex flex-col gap-3">
        <div className="grid grid-cols-2 gap-2 max-w-sm">
          <Select
            value={monthValue}
            onValueChange={(nextMonthStr: string) => {
              const nextMonth = Number(nextMonthStr)
              const next = new Date(month)
              next.setMonth(nextMonth)
              next.setDate(1)
              updateArgs({monthTimestamp: next.getTime()})
              storyArgs.onMonthChange?.(next)
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder="Month" />
            </SelectTrigger>
            <SelectContent>
              {monthOptions.map(m => (
                <SelectItem key={m.month} value={String(m.month)}>
                  {m.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select
            value={yearValue}
            onValueChange={(nextYearStr: string) => {
              const nextYear = Number(nextYearStr)
              const next = new Date(month)
              next.setFullYear(nextYear)
              next.setDate(1)
              updateArgs({monthTimestamp: next.getTime()})
              storyArgs.onMonthChange?.(next)
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder="Year" />
            </SelectTrigger>
            <SelectContent>
              {yearOptions.map(y => (
                <SelectItem key={y} value={String(y)}>
                  {y}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Calendar
          {...storyArgs}
          mode="single"
          month={month}
          onMonthChange={(next: Date) => {
            const normalized = new Date(next)
            normalized.setDate(1)
            updateArgs({monthTimestamp: normalized.getTime()})
            storyArgs.onMonthChange?.(normalized)
          }}
          selected={selected}
          onSelect={(next: Date | undefined) => {
            updateArgs({selectedTimestamp: dateToTimestamp(next)})
            storyArgs.onSelectDate?.(next)
          }}
        />
      </div>
    )
  },
}

export const DateOfBirthPicker: Story = {
  name: 'Date of Birth Picker',
  args: {
    fromYear: 1900,
    toYear: new Date().getFullYear(),
    disableFuture: true,
    selectedTimestamp: undefined,
    monthTimestamp: new Date(new Date().getFullYear() - 25, 0, 1).getTime(),
  },
  render: function DateOfBirthPickerRender(storyArgs) {
    const [{selectedTimestamp, monthTimestamp}, updateArgs] = useArgs<{
      selectedTimestamp?: number
      monthTimestamp?: number
    }>()

    const selected = toDate(selectedTimestamp)
    const month = toDate(monthTimestamp) ?? new Date()
    const fromYear = storyArgs.fromYear ?? 1900
    const toYear = storyArgs.toYear ?? new Date().getFullYear()
    const yearOptions = getYearOptions(fromYear, toYear)
    const monthOptions = getMonthOptions()
    const disableFuture = Boolean(storyArgs.disableFuture)

    const disabled = disableFuture
      ? (d: Date) => startOfDay(d) > startOfDay(new Date())
      : undefined

    return (
      <div className="flex flex-col gap-3">
        <div className="grid grid-cols-2 gap-2 max-w-sm">
          <Select
            value={String(month.getMonth())}
            onValueChange={(m: string) => {
              const next = new Date(month)
              next.setMonth(Number(m))
              next.setDate(1)
              updateArgs({monthTimestamp: next.getTime()})
              storyArgs.onMonthChange?.(next)
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder="Month" />
            </SelectTrigger>
            <SelectContent>
              {monthOptions.map(o => (
                <SelectItem key={o.month} value={String(o.month)}>
                  {o.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select
            value={String(month.getFullYear())}
            onValueChange={(y: string) => {
              const next = new Date(month)
              next.setFullYear(Number(y))
              next.setDate(1)
              updateArgs({monthTimestamp: next.getTime()})
              storyArgs.onMonthChange?.(next)
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder="Year" />
            </SelectTrigger>
            <SelectContent>
              {yearOptions.map(y => (
                <SelectItem key={y} value={String(y)}>
                  {y}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Calendar
          {...storyArgs}
          mode="single"
          month={month}
          onMonthChange={(next: Date) => {
            const normalized = new Date(next)
            normalized.setDate(1)
            updateArgs({monthTimestamp: normalized.getTime()})
            storyArgs.onMonthChange?.(normalized)
          }}
          disabled={disabled}
          selected={selected}
          onSelect={(next: Date | undefined) => {
            updateArgs({selectedTimestamp: dateToTimestamp(next)})
            storyArgs.onSelectDate?.(next)
          }}
        />
        <div className="text-muted-foreground text-sm">
          DOB: {selected ? selected.toDateString() : '—'}
        </div>
      </div>
    )
  },
}

export const DateAndTimePicker: Story = {
  name: 'Date and Time Picker',
  args: {
    selectedTimestamp: new Date().setHours(0, 0, 0, 0),
    time: '09:00',
  },
  render: function DateAndTimePickerRender(storyArgs) {
    const [{selectedTimestamp, time}, updateArgs] = useArgs<{
      selectedTimestamp?: number
      time?: string
    }>()

    const selectedDate = toDate(selectedTimestamp)
    const safeTime = typeof time === 'string' ? time : ''

    const dateTime = selectedDate
      ? combineDateAndTime(selectedDate, safeTime)
      : undefined

    const disabledMatcher = (d: Date) => {
      if (storyArgs.disablePast && startOfDay(d) < startOfDay(new Date())) {
        return true
      }
      if (storyArgs.disableFuture && startOfDay(d) > startOfDay(new Date())) {
        return true
      }
      return false
    }

    const disabled =
      storyArgs.disablePast || storyArgs.disableFuture
        ? disabledMatcher
        : undefined

    return (
      <div className="flex flex-col gap-3">
        <div className="grid gap-2 max-w-sm">
          <label className="text-sm font-medium">Time</label>
          <Input
            type="time"
            value={safeTime}
            onChange={e => {
              const nextTime = e.target.value
              updateArgs({time: nextTime})
              if (selectedDate) {
                storyArgs.onDateTimeChange?.(
                  combineDateAndTime(selectedDate, nextTime),
                )
              }
            }}
          />
        </div>
        <Calendar
          {...storyArgs}
          mode="single"
          disabled={disabled}
          selected={selectedDate}
          onSelect={(next: Date | undefined) => {
            updateArgs({selectedTimestamp: dateToTimestamp(next)})
            storyArgs.onSelectDate?.(next)
            if (next) {
              storyArgs.onDateTimeChange?.(combineDateAndTime(next, safeTime))
            } else {
              storyArgs.onDateTimeChange?.(undefined)
            }
          }}
        />
        <div className="text-muted-foreground text-sm">
          Date+Time: {dateTime ? dateTime.toString() : '—'}
        </div>
      </div>
    )
  },
}

export const NaturalLanguagePicker: Story = {
  name: 'Natural Language Picker',
  args: {
    naturalText: 'tomorrow',
    selectedTimestamp: undefined,
  },
  render: function NaturalLanguagePickerRender(storyArgs) {
    const [{naturalText, selectedTimestamp}, updateArgs] = useArgs<{
      naturalText?: string
      selectedTimestamp?: number
    }>()

    const selected = toDate(selectedTimestamp)
    const value = typeof naturalText === 'string' ? naturalText : ''

    const apply = () => {
      const parsed = parseNaturalLanguage(value)
      updateArgs({selectedTimestamp: dateToTimestamp(parsed)})
      storyArgs.onNaturalLanguageApply?.(value, parsed)
      if (parsed) storyArgs.onSelectDate?.(parsed)
    }

    return (
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-2 max-w-md">
          <label className="text-sm font-medium">Natural language</label>
          <div className="flex items-center gap-2">
            <Input
              value={value}
              placeholder="e.g. next friday"
              onChange={e => updateArgs({naturalText: e.target.value})}
              onKeyDown={e => {
                if (e.key === 'Enter') apply()
              }}
            />
            <Button type="button" onClick={apply}>
              Apply
            </Button>
          </div>
          <div className="text-muted-foreground text-sm">
            Parsed: {selected ? selected.toDateString() : '—'}
          </div>
        </div>

        <Calendar
          {...storyArgs}
          mode="single"
          selected={selected}
          onSelect={(next: Date | undefined) => {
            updateArgs({selectedTimestamp: dateToTimestamp(next)})
            storyArgs.onSelectDate?.(next)
          }}
        />
      </div>
    )
  },
}

export const CustomCellSize: Story = {
  name: 'Custom Cell Size',
  args: {
    cellSize: 'lg',
    selectedTimestamp: new Date().setHours(0, 0, 0, 0),
  },
  render: function CustomCellSizeRender(storyArgs) {
    const [{cellSize, selectedTimestamp}, updateArgs] = useArgs<{
      cellSize?: 'sm' | 'md' | 'lg'
      selectedTimestamp?: number
    }>()

    const selected = toDate(selectedTimestamp)

    const size = cellSize ?? 'md'
    const sizeClasses =
      size === 'sm'
        ? {day: 'size-7', head: 'w-7', text: 'text-[0.75rem]'}
        : size === 'lg'
          ? {day: 'size-10', head: 'w-10', text: 'text-sm'}
          : {day: 'size-8', head: 'w-8', text: 'text-[0.8rem]'}

    const classNames = {
      head_cell: cn(
        'text-muted-foreground rounded-md font-normal',
        sizeClasses.head,
        sizeClasses.text,
      ),
      day: cn(
        buttonVariants({variant: 'ghost'}),
        sizeClasses.day,
        'p-0 font-normal aria-selected:opacity-100',
      ),
    } satisfies React.ComponentProps<typeof Calendar>['classNames']

    return (
      <div className="flex flex-col gap-3">
        <div className="text-muted-foreground text-sm">
          Cell size: <span className="text-foreground font-medium">{size}</span>
        </div>
        <Calendar
          {...storyArgs}
          mode="single"
          classNames={classNames}
          selected={selected}
          onSelect={(next: Date | undefined) => {
            updateArgs({selectedTimestamp: dateToTimestamp(next)})
            storyArgs.onSelectDate?.(next)
          }}
        />
        <div className="text-muted-foreground text-sm">
          Selected: {selected ? selected.toDateString() : '—'}
        </div>
      </div>
    )
  },
}

export const Minimal: Story = {
  render: args => (
    <Calendar {...args} mode="single" selected={undefined} className="w-fit" />
  ),
}
