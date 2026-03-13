import type {Meta, StoryObj} from '@storybook/react'

import * as React from 'react'

import {TimePicker} from '../../components/ui/time-picker'
import {Label} from '../../components/ui/label'

type TimePickerStoryArgs = React.ComponentProps<typeof TimePicker> & {
  label?: string
  helperText?: string
}

const meta: Meta<TimePickerStoryArgs> = {
  title: 'UI/TimePicker',
  component: TimePicker,
  tags: ['autodocs'],
  parameters: {
    controls: {
      include: [
        'value',
        'disabled',
        'required',
        'name',
        'id',
        'className',
        'variant',
        'size',
        'minTime',
        'maxTime',
        'use12Hours',
        'placeholder',
        'label',
        'helperText',
        'onChange',
      ],
    },
    docs: {
      description: {
        component:
          'A time picker component with an analog clock face. Click/drag on the clock to select hours then minutes. Supports light/dark themes and matches Input sizing variants (sm, md, lg). Clear button appears on the right only when a time is selected.',
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
      description: 'Display in 12-hour format (AM/PM)',
    },
    disabled: {control: 'boolean'},
    required: {control: 'boolean'},
    placeholder: {control: 'text'},
    label: {control: 'text'},
    helperText: {control: 'text'},
    onChange: {action: 'onChange'},
  },
  args: {
    value: '10:00',
    use12Hours: true,
    size: 'md',
    variant: 'default',
    placeholder: 'Select time',
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    value: '10:00',
  },
  render: function DefaultRender(args) {
    const [time, setTime] = React.useState(args.value ?? '10:00')
    return (
      <div className="max-w-xs">
        <TimePicker
          {...args}
          value={time}
          onChange={val => {
            setTime(val)
            args.onChange?.(val)
          }}
        />
      </div>
    )
  },
}

export const NoValueSelected: Story = {
  args: {
    value: null,
    placeholder: 'Pick a time…',
  },
  render: function NoValueRender(args) {
    const [time, setTime] = React.useState<string | null>(null)
    return (
      <div className="max-w-xs">
        <TimePicker
          {...args}
          value={time}
          onChange={val => {
            setTime(val)
            args.onChange?.(val)
          }}
        />
      </div>
    )
  },
}

export const WithLabel: Story = {
  args: {
    value: '09:30',
    label: 'Start Time',
    helperText: 'Select the event start time.',
  },
  render: function WithLabelRender(args) {
    const [time, setTime] = React.useState(args.value ?? '09:30')
    return (
      <div className="grid max-w-xs gap-2">
        {args.label ? <Label>{args.label}</Label> : null}
        <TimePicker
          {...args}
          value={time}
          onChange={val => {
            setTime(val)
            args.onChange?.(val)
          }}
        />
        {args.helperText ? (
          <p className="text-sm text-muted-foreground">{args.helperText}</p>
        ) : null}
      </div>
    )
  },
}

export const TwentyFourHourFormat: Story = {
  args: {
    value: '14:00',
    use12Hours: false,
  },
  render: function TwentyFourHourRender(args) {
    const [time, setTime] = React.useState(args.value ?? '14:00')
    return (
      <div className="max-w-xs">
        <TimePicker
          {...args}
          value={time}
          onChange={val => {
            setTime(val)
            args.onChange?.(val)
          }}
        />
      </div>
    )
  },
}

export const Small: Story = {
  args: {
    value: '14:00',
    size: 'sm',
  },
  render: function SmallRender(args) {
    const [time, setTime] = React.useState(args.value ?? '14:00')
    return (
      <div className="max-w-xs">
        <TimePicker
          {...args}
          value={time}
          onChange={val => {
            setTime(val)
            args.onChange?.(val)
          }}
        />
      </div>
    )
  },
}

export const Large: Story = {
  args: {
    value: '16:30',
    size: 'lg',
  },
  render: function LargeRender(args) {
    const [time, setTime] = React.useState(args.value ?? '16:30')
    return (
      <div className="max-w-xs">
        <TimePicker
          {...args}
          value={time}
          onChange={val => {
            setTime(val)
            args.onChange?.(val)
          }}
        />
      </div>
    )
  },
}

export const Disabled: Story = {
  args: {
    value: '12:00',
    disabled: true,
  },
}

export const ErrorVariant: Story = {
  args: {
    value: '08:00',
    variant: 'error',
  },
  render: function ErrorRender(args) {
    const [time, setTime] = React.useState(args.value ?? '08:00')
    return (
      <div className="grid max-w-xs gap-2">
        <Label>Deadline</Label>
        <TimePicker
          {...args}
          value={time}
          onChange={val => {
            setTime(val)
            args.onChange?.(val)
          }}
        />
        <p className="text-sm text-destructive">Please select a valid time.</p>
      </div>
    )
  },
}

export const SuccessVariant: Story = {
  args: {
    value: '17:00',
    variant: 'success',
  },
  render: function SuccessRender(args) {
    const [time, setTime] = React.useState(args.value ?? '17:00')
    return (
      <div className="grid max-w-xs gap-2">
        <Label>End Time</Label>
        <TimePicker
          {...args}
          value={time}
          onChange={val => {
            setTime(val)
            args.onChange?.(val)
          }}
        />
        <p className="text-sm text-success">Time confirmed.</p>
      </div>
    )
  },
}

export const Sizes: Story = {
  render: function SizesRender() {
    const [time, setTime] = React.useState<string | null>('10:00')
    return (
      <div className="grid max-w-xs gap-4">
        <div className="grid gap-1">
          <Label>Small</Label>
          <TimePicker size="sm" value={time} onChange={setTime} />
        </div>
        <div className="grid gap-1">
          <Label>Medium (default)</Label>
          <TimePicker size="md" value={time} onChange={setTime} />
        </div>
        <div className="grid gap-1">
          <Label>Large</Label>
          <TimePicker size="lg" value={time} onChange={setTime} />
        </div>
      </div>
    )
  },
}

export const WithMinMaxTime: Story = {
  args: {
    value: '10:00',
    minTime: '08:00',
    maxTime: '18:00',
  },
  render: function MinMaxRender(args) {
    const [time, setTime] = React.useState(args.value ?? '10:00')
    return (
      <div className="grid max-w-xs gap-2">
        <Label>Business Hours (08:00 – 18:00)</Label>
        <TimePicker
          {...args}
          value={time}
          onChange={val => {
            setTime(val)
            args.onChange?.(val)
          }}
        />
      </div>
    )
  },
}
