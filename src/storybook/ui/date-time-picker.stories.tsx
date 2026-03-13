import type {Meta, StoryObj} from '@storybook/react'

import * as React from 'react'

import {
  DateTimePicker,
  type DateTimeValue,
  type DateTimeRangeValue,
  type DateTimePickerSingleProps,
} from '../../components/ui/date-time-picker'
import {Label} from '../../components/ui/label'

const meta: Meta<DateTimePickerSingleProps> = {
  title: 'UI/DateTimePicker',
  component: DateTimePicker,
  tags: ['autodocs'],
  parameters: {
    controls: {
      include: [
        'disabled',
        'required',
        'variant',
        'size',
        'use12Hours',
        'placeholder',
      ],
    },
    docs: {
      description: {
        component:
          'A combined date and time picker component. Provides tabbed UI with a calendar for date selection and an analog clock face for time selection. Supports single and range modes, 12/24-hour formats, and matches Input sizing variants (sm, md, lg).',
      },
    },
  },
  argTypes: {
    variant: {
      options: ['default', 'error', 'success'],
      control: {type: 'select'},
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: {type: 'select'},
    },
    use12Hours: {
      control: 'boolean',
      description: 'Display time in 12-hour format (AM/PM)',
    },
    disabled: {control: 'boolean'},
    required: {control: 'boolean'},
    placeholder: {control: 'text'},
  },
  args: {
    use12Hours: true,
    size: 'md',
    variant: 'default',
  },
}

export default meta

type Story = StoryObj<typeof meta>

/* ─── Single Mode Stories ─── */

export const Default: Story = {
  render: function DefaultRender(args) {
    const [val, setVal] = React.useState<DateTimeValue | null>(null)
    return (
      <div className="max-w-sm">
        <DateTimePicker {...args} mode="single" value={val} onChange={setVal} />
      </div>
    )
  },
}

export const WithPreselectedValue: Story = {
  render: function PreselectedRender(args) {
    const [val, setVal] = React.useState<DateTimeValue | null>({
      date: new Date(),
      hour: 14,
      minute: 30,
    })
    return (
      <div className="max-w-sm">
        <DateTimePicker {...args} mode="single" value={val} onChange={setVal} />
      </div>
    )
  },
}

export const WithLabel: Story = {
  render: function WithLabelRender(args) {
    const [val, setVal] = React.useState<DateTimeValue | null>(null)
    return (
      <div className="max-w-sm space-y-2">
        <Label htmlFor="dt-label">Meeting time</Label>
        <DateTimePicker
          {...args}
          id="dt-label"
          mode="single"
          value={val}
          onChange={setVal}
        />
      </div>
    )
  },
}

export const TwentyFourHourFormat: Story = {
  args: {
    use12Hours: false,
  },
  render: function TwentyFourRender(args) {
    const [val, setVal] = React.useState<DateTimeValue | null>({
      date: new Date(),
      hour: 16,
      minute: 45,
    })
    return (
      <div className="max-w-sm">
        <DateTimePicker {...args} mode="single" value={val} onChange={setVal} />
      </div>
    )
  },
}

export const Small: Story = {
  args: {size: 'sm'},
  render: function SmallRender(args) {
    const [val, setVal] = React.useState<DateTimeValue | null>(null)
    return (
      <div className="max-w-sm">
        <DateTimePicker {...args} mode="single" value={val} onChange={setVal} />
      </div>
    )
  },
}

export const Large: Story = {
  args: {size: 'lg'},
  render: function LargeRender(args) {
    const [val, setVal] = React.useState<DateTimeValue | null>(null)
    return (
      <div className="max-w-sm">
        <DateTimePicker {...args} mode="single" value={val} onChange={setVal} />
      </div>
    )
  },
}

export const Disabled: Story = {
  args: {disabled: true},
  render: function DisabledRender(args) {
    return (
      <div className="max-w-sm">
        <DateTimePicker
          {...args}
          mode="single"
          value={{date: new Date(), hour: 9, minute: 0}}
          onChange={() => {}}
        />
      </div>
    )
  },
}

export const ErrorVariant: Story = {
  args: {variant: 'error'},
  render: function ErrorRender(args) {
    const [val, setVal] = React.useState<DateTimeValue | null>(null)
    return (
      <div className="max-w-sm">
        <DateTimePicker {...args} mode="single" value={val} onChange={setVal} />
      </div>
    )
  },
}

export const SuccessVariant: Story = {
  args: {variant: 'success'},
  render: function SuccessRender(args) {
    const [val, setVal] = React.useState<DateTimeValue | null>({
      date: new Date(),
      hour: 10,
      minute: 0,
    })
    return (
      <div className="max-w-sm">
        <DateTimePicker {...args} mode="single" value={val} onChange={setVal} />
      </div>
    )
  },
}

export const Sizes: Story = {
  render: function SizesRender() {
    const [val1, setVal1] = React.useState<DateTimeValue | null>(null)
    const [val2, setVal2] = React.useState<DateTimeValue | null>(null)
    const [val3, setVal3] = React.useState<DateTimeValue | null>(null)
    return (
      <div className="max-w-sm space-y-4">
        <div className="space-y-1">
          <Label>Small</Label>
          <DateTimePicker
            mode="single"
            size="sm"
            value={val1}
            onChange={setVal1}
          />
        </div>
        <div className="space-y-1">
          <Label>Medium (default)</Label>
          <DateTimePicker
            mode="single"
            size="md"
            value={val2}
            onChange={setVal2}
          />
        </div>
        <div className="space-y-1">
          <Label>Large</Label>
          <DateTimePicker
            mode="single"
            size="lg"
            value={val3}
            onChange={setVal3}
          />
        </div>
      </div>
    )
  },
}

/* ─── Range Mode Stories ─── */

export const RangeMode: Story = {
  render: function RangeRender(args) {
    const [val, setVal] = React.useState<DateTimeRangeValue | null>(null)
    return (
      <div className="max-w-md">
        <DateTimePicker
          {...args}
          mode="range"
          value={val}
          onChange={setVal}
          placeholder="Select date & time range"
        />
      </div>
    )
  },
}

export const RangeWithPreselectedDates: Story = {
  render: function RangePreselectedRender(args) {
    const today = new Date()
    const nextWeek = new Date(today)
    nextWeek.setDate(today.getDate() + 7)

    const [val, setVal] = React.useState<DateTimeRangeValue | null>({
      from: {date: today, hour: 9, minute: 0},
      to: {date: nextWeek, hour: 17, minute: 30},
    })
    return (
      <div className="max-w-md">
        <DateTimePicker {...args} mode="range" value={val} onChange={setVal} />
      </div>
    )
  },
}

export const Range24Hour: Story = {
  args: {use12Hours: false},
  render: function Range24Render(args) {
    const [val, setVal] = React.useState<DateTimeRangeValue | null>(null)
    return (
      <div className="max-w-md">
        <DateTimePicker {...args} mode="range" value={val} onChange={setVal} />
      </div>
    )
  },
}
