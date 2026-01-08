import type {Meta, StoryObj} from '@storybook/react'

import * as React from 'react'
import {expect, userEvent, within} from '@storybook/test'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from '../../components/ui/select'

type SelectStoryArgs = React.ComponentProps<typeof Select> & {
  triggerWidth?: number
  triggerSize?: React.ComponentProps<typeof SelectTrigger>['size']
  placeholder?: string
  disabled?: boolean
  items?: Array<{value: string; label: string; disabled?: boolean}>
}

const DEFAULT_ITEMS: Array<{value: string; label: string; disabled?: boolean}> =
  [
    {value: 'apple', label: 'Apple'},
    {value: 'banana', label: 'Banana'},
    {value: 'orange', label: 'Orange'},
  ]

function SimpleSelect(args: SelectStoryArgs) {
  const triggerWidth = args.triggerWidth ?? 200
  const placeholder = args.placeholder ?? 'Select an option'
  const triggerSize = args.triggerSize ?? 'default'
  const items = args.items ?? DEFAULT_ITEMS

  return (
    <Select
      {...args}
      disabled={args.disabled}
      onValueChange={value => {
        args.onValueChange?.(value)
      }}
      onOpenChange={open => {
        args.onOpenChange?.(open)
      }}
    >
      <SelectTrigger size={triggerSize} style={{width: triggerWidth}}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {items.map(item => (
          <SelectItem
            key={item.value}
            value={item.value}
            disabled={item.disabled}
          >
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

function GroupedSelect(args: SelectStoryArgs) {
  const triggerWidth = args.triggerWidth ?? 240
  const placeholder = args.placeholder ?? 'Theme'
  const triggerSize = args.triggerSize ?? 'default'

  return (
    <Select
      {...args}
      disabled={args.disabled}
      onValueChange={value => {
        args.onValueChange?.(value)
      }}
      onOpenChange={open => {
        args.onOpenChange?.(open)
      }}
    >
      <SelectTrigger size={triggerSize} style={{width: triggerWidth}}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Theme</SelectLabel>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Disabled</SelectLabel>
          <SelectItem value="disabled" disabled>
            Disabled option
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

function ScrollableSelect(args: SelectStoryArgs) {
  const triggerWidth = args.triggerWidth ?? 280
  const placeholder = args.placeholder ?? 'Pick a country'
  const triggerSize = args.triggerSize ?? 'default'

  const items = React.useMemo(
    () =>
      Array.from({length: 40}).map((_, index) => {
        const n = index + 1
        return {value: `country-${n}`, label: `Country ${n}`}
      }),
    [],
  )

  return (
    <Select
      {...args}
      disabled={args.disabled}
      onValueChange={value => {
        args.onValueChange?.(value)
      }}
      onOpenChange={open => {
        args.onOpenChange?.(open)
      }}
    >
      <SelectTrigger size={triggerSize} style={{width: triggerWidth}}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {items.map(item => (
          <SelectItem key={item.value} value={item.value}>
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

const meta: Meta<SelectStoryArgs> = {
  title: 'UI/Select',
  component: Select,
  tags: ['autodocs'],
  parameters: {
    controls: {
      include: [
        'value',
        'defaultValue',
        'disabled',
        'name',
        'required',
        'dir',
        'triggerWidth',
        'triggerSize',
        'placeholder',
        'onValueChange',
        'onOpenChange',
      ],
    },
    docs: {
      description: {
        component:
          'Displays a list of options for the user to pick from—triggered by a button. Content is portaled; in play functions, query `document.body` for options.',
      },
    },
  },
  argTypes: {
    dir: {options: ['ltr', 'rtl'], control: {type: 'inline-radio'}},
    triggerWidth: {control: {type: 'number', min: 140, max: 420, step: 20}},
    triggerSize: {options: ['sm', 'default'], control: {type: 'inline-radio'}},
    placeholder: {control: 'text'},
    disabled: {control: 'boolean'},
    value: {control: 'text'},
    defaultValue: {control: 'text'},
    onValueChange: {action: 'onValueChange'},
    onOpenChange: {action: 'onOpenChange'},
  },
  args: {
    dir: 'ltr',
    triggerWidth: 200,
    triggerSize: 'default',
    placeholder: 'Select a fruit',
    disabled: false,
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: 'Demo',
  args: {
    defaultValue: 'apple',
    placeholder: 'Select a fruit',
  },
  render: args => <SimpleSelect {...args} />,
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement)
    const body = within(document.body)

    await userEvent.click(canvas.getByRole('combobox'))
    await expect(body.getByRole('option', {name: 'Banana'})).toBeInTheDocument()
    await userEvent.click(body.getByRole('option', {name: 'Banana'}))

    await expect(canvas.getByRole('combobox')).toHaveTextContent('Banana')
  },
}

export const Sizes: Story = {
  render: args => (
    <div className="grid gap-4">
      <div className="grid gap-2">
        <div className="text-sm text-muted-foreground">Small</div>
        <SimpleSelect
          {...args}
          triggerSize="sm"
          triggerWidth={240}
          placeholder="Small trigger"
        />
      </div>
      <div className="grid gap-2">
        <div className="text-sm text-muted-foreground">Default</div>
        <SimpleSelect
          {...args}
          triggerSize="default"
          triggerWidth={240}
          placeholder="Default trigger"
        />
      </div>
    </div>
  ),
}

export const Grouped: Story = {
  args: {
    placeholder: 'Theme',
  },
  render: args => <GroupedSelect {...args} />,
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement)
    const body = within(document.body)

    await userEvent.click(canvas.getByRole('combobox'))
    await expect(body.getByText('Theme')).toBeInTheDocument()
    await expect(
      body.getByRole('option', {name: 'Disabled option'}),
    ).toHaveAttribute('aria-disabled', 'true')
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Disabled',
  },
  render: args => <SimpleSelect {...args} />,
}

export const Controlled: Story = {
  args: {
    placeholder: 'Controlled select',
  },
  render: function ControlledRender(args) {
    const [value, setValue] = React.useState('apple')

    return (
      <div className="grid gap-3">
        <div className="text-sm text-muted-foreground">Value: {value}</div>
        <Select
          {...args}
          value={value}
          onValueChange={next => {
            setValue(next)
            args.onValueChange?.(next)
          }}
          onOpenChange={open => {
            args.onOpenChange?.(open)
          }}
        >
          <SelectTrigger
            size={args.triggerSize ?? 'default'}
            style={{width: args.triggerWidth ?? 200}}
          >
            <SelectValue placeholder={args.placeholder ?? 'Select'} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="orange">Orange</SelectItem>
          </SelectContent>
        </Select>
      </div>
    )
  },
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement)
    const body = within(document.body)

    await userEvent.click(canvas.getByRole('combobox'))
    await userEvent.click(body.getByRole('option', {name: 'Orange'}))
    await expect(canvas.getByText(/value: orange/i)).toBeInTheDocument()
  },
}

export const Scrollable: Story = {
  args: {
    placeholder: 'Pick a country',
    triggerWidth: 280,
  },
  render: args => <ScrollableSelect {...args} />,
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement)
    const body = within(document.body)

    await userEvent.click(canvas.getByRole('combobox'))
    await expect(body.getByText('Country 1')).toBeInTheDocument()
    await userEvent.click(body.getByRole('option', {name: 'Country 30'}))
    await expect(canvas.getByRole('combobox')).toHaveTextContent('Country 30')
  },
}
