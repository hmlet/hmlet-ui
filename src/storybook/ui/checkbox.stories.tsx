import type {Meta, StoryObj} from '@storybook/react'

import {useArgs} from '@storybook/preview-api'
import * as React from 'react'

import {Checkbox} from '../../components/ui/checkbox'

type CheckboxStoryArgs = React.ComponentProps<typeof Checkbox>

const meta: Meta<CheckboxStoryArgs> = {
  title: 'UI/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    controls: {
      include: [
        'label',
        'variant',
        'size',
        'asChild',
        'checked',
        'defaultChecked',
        'onCheckedChange',
        'disabled',
        'required',
        'name',
        'value',
        'className',
      ],
    },
    docs: {
      description: {
        component:
          'Radix Checkbox wrapper with built-in label support. Key props: `label`, `variant`, `size`, `checked`/`defaultChecked` (can be `true`, `false`, or `indeterminate`), `onCheckedChange`, `disabled`, `required`, `name`, `value`, and `asChild`.',
      },
    },
  },
  argTypes: {
    label: {control: 'text'},
    variant: {
      options: ['primary', 'secondary', 'error'],
      control: {type: 'inline-radio'},
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: {type: 'inline-radio'},
    },
    asChild: {control: 'boolean'},
    checked: {
      options: [true, false, 'indeterminate'],
      control: {type: 'inline-radio'},
      description:
        'Controlled state. Use the Controlled story for two-way sync.',
    },
    defaultChecked: {
      options: [true, false, 'indeterminate'],
      control: {type: 'inline-radio'},
      description: 'Uncontrolled initial state.',
    },
    onCheckedChange: {action: 'onCheckedChange'},
    disabled: {control: 'boolean'},
    required: {control: 'boolean'},
    name: {control: 'text'},
    value: {
      control: 'text',
      description: 'Form value when checked (defaults to "on" in HTML forms).',
    },
    className: {control: 'text'},
  },
  args: {
    label: 'Accept terms',
    value: 'on',
    variant: 'primary',
    size: 'md',
  },
}

export default meta

type Story = StoryObj<CheckboxStoryArgs>

export const Default: Story = {
  render: args => {
    const {checked, defaultChecked, ...rest} = args
    const id = 'terms'

    return (
      <Checkbox
        id={id}
        {...rest}
        {...(checked !== undefined ? {checked} : {})}
        {...(defaultChecked !== undefined ? {defaultChecked} : {})}
      />
    )
  },
}

export const Controlled: Story = {
  args: {
    checked: false,
  },
  render: function ControlledRender(storyArgs) {
    const [{checked}, updateArgs] = useArgs<{
      checked?: CheckboxStoryArgs['checked']
    }>()
    const id = 'controlled'

    return (
      <div className="flex flex-col gap-3">
        <Checkbox
          id={id}
          {...storyArgs}
          checked={checked}
          onCheckedChange={next => {
            updateArgs({checked: next})
            storyArgs.onCheckedChange?.(next)
          }}
        />
        <div className="text-muted-foreground text-sm">
          State:{' '}
          {checked === 'indeterminate'
            ? 'indeterminate'
            : checked
              ? 'checked'
              : 'unchecked'}
        </div>
      </div>
    )
  },
}

export const Indeterminate: Story = {
  name: 'Intermediate (Indeterminate)',
  args: {
    checked: 'indeterminate',
  },
  render: function IndeterminateRender(storyArgs) {
    const [{checked}, updateArgs] = useArgs<{
      checked?: CheckboxStoryArgs['checked']
    }>()
    const id = 'indeterminate'

    return (
      <div className="flex flex-col gap-3">
        <Checkbox
          id={id}
          {...storyArgs}
          checked={checked}
          onCheckedChange={next => {
            updateArgs({checked: next})
            storyArgs.onCheckedChange?.(next)
          }}
        />
        <div className="text-muted-foreground text-sm">
          Tip: Click to cycle between indeterminate → checked → unchecked.
        </div>
      </div>
    )
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultChecked: true,
  },
  render: args => {
    const {checked, defaultChecked, ...rest} = args
    const id = 'disabled'

    return (
      <Checkbox
        id={id}
        {...rest}
        {...(checked !== undefined ? {checked} : {})}
        {...(defaultChecked !== undefined ? {defaultChecked} : {})}
      />
    )
  },
}

export const Required: Story = {
  args: {
    required: true,
    name: 'terms',
    value: 'yes',
  },
  render: args => {
    const {checked, defaultChecked, ...rest} = args
    const id = 'required'

    return (
      <form
        className="flex flex-col gap-3"
        onSubmit={e => {
          e.preventDefault()
        }}
      >
        <Checkbox
          id={id}
          {...rest}
          {...(checked !== undefined ? {checked} : {})}
          {...(defaultChecked !== undefined ? {defaultChecked} : {})}
        />
        <button type="submit" className="underline underline-offset-4 text-sm">
          Submit (demo)
        </button>
      </form>
    )
  },
}

export const Sizes: Story = {
  name: 'Sizes',
  render: args => {
    return (
      <div className="flex flex-col gap-4">
        <Checkbox {...args} size="sm" label="Small checkbox" />
        <Checkbox {...args} size="md" label="Medium checkbox" />
        <Checkbox {...args} size="lg" label="Large checkbox" />
      </div>
    )
  },
}

export const Variants: Story = {
  name: 'Variants',
  args: {
    defaultChecked: true,
  },
  render: args => {
    return (
      <div className="flex flex-col gap-4">
        <Checkbox {...args} variant="primary" label="Primary variant" />
        <Checkbox {...args} variant="secondary" label="Secondary variant" />
        <Checkbox {...args} variant="error" label="Error variant" />
      </div>
    )
  },
}

export const AsChild: Story = {
  args: {
    asChild: true,
  },
  render: args => {
    const {checked, defaultChecked, asChild, ...rest} = args
    const id = 'as-child'

    return (
      <div className="flex flex-col gap-2">
        <div className="text-muted-foreground text-sm">
          \`asChild\` lets you render the checkbox root as your own element.
        </div>
        <Checkbox
          id={id}
          asChild={asChild}
          {...rest}
          {...(checked !== undefined ? {checked} : {})}
          {...(defaultChecked !== undefined ? {defaultChecked} : {})}
        >
          <button type="button" />
        </Checkbox>
      </div>
    )
  },
}
