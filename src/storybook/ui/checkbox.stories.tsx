import type {Meta, StoryObj} from '@storybook/react'

import {useArgs} from '@storybook/preview-api'
import * as React from 'react'

import {Checkbox} from '../../components/ui/checkbox'
import {Label} from '../../components/ui/label'

type CheckboxRootProps = React.ComponentProps<typeof Checkbox>

type CheckboxStoryArgs = CheckboxRootProps & {
  label: string
}

const meta: Meta<CheckboxStoryArgs> = {
  title: 'UI/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    controls: {
      include: [
        'label',
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
          'Radix Checkbox wrapper. Key props: `checked`/`defaultChecked` (can be `true`, `false`, or `indeterminate`), `onCheckedChange`, `disabled`, `required`, `name`, `value`, and `asChild`.',
      },
    },
  },
  argTypes: {
    label: {control: 'text'},
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
  },
}

export default meta

type Story = StoryObj<CheckboxStoryArgs>

function CheckboxRow({
  id,
  label,
  children,
}: {
  id: string
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="flex items-center gap-2">
      {children}
      <Label htmlFor={id}>{label}</Label>
    </div>
  )
}

export const Default: Story = {
  render: args => {
    const {label, checked, defaultChecked, ...rest} = args as CheckboxStoryArgs
    const id = 'terms'

    return (
      <CheckboxRow id={id} label={label}>
        <Checkbox
          id={id}
          {...rest}
          {...(checked !== undefined ? {checked} : {})}
          {...(defaultChecked !== undefined ? {defaultChecked} : {})}
        />
      </CheckboxRow>
    )
  },
}

export const Controlled: Story = {
  args: {
    checked: false,
  },
  render: function ControlledRender(storyArgs) {
    const args = storyArgs as CheckboxStoryArgs
    const [{checked}, updateArgs] = useArgs<{
      checked?: CheckboxRootProps['checked']
    }>()
    const id = 'controlled'

    return (
      <div className="flex flex-col gap-3">
        <CheckboxRow id={id} label={args.label}>
          <Checkbox
            id={id}
            {...args}
            checked={checked}
            onCheckedChange={next => {
              updateArgs({checked: next})
              args.onCheckedChange?.(next)
            }}
          />
        </CheckboxRow>

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
    const args = storyArgs as CheckboxStoryArgs
    const [{checked}, updateArgs] = useArgs<{
      checked?: CheckboxRootProps['checked']
    }>()
    const id = 'indeterminate'

    return (
      <div className="flex flex-col gap-3">
        <CheckboxRow id={id} label={args.label}>
          <Checkbox
            id={id}
            {...args}
            checked={checked}
            onCheckedChange={next => {
              updateArgs({checked: next})
              args.onCheckedChange?.(next)
            }}
          />
        </CheckboxRow>

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
    const {label, checked, defaultChecked, ...rest} = args as CheckboxStoryArgs
    const id = 'disabled'

    return (
      <CheckboxRow id={id} label={label}>
        <Checkbox
          id={id}
          {...rest}
          {...(checked !== undefined ? {checked} : {})}
          {...(defaultChecked !== undefined ? {defaultChecked} : {})}
        />
      </CheckboxRow>
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
    const {label, checked, defaultChecked, ...rest} = args as CheckboxStoryArgs
    const id = 'required'

    return (
      <form
        className="flex flex-col gap-3"
        onSubmit={e => {
          e.preventDefault()
        }}
      >
        <CheckboxRow id={id} label={label}>
          <Checkbox
            id={id}
            {...rest}
            {...(checked !== undefined ? {checked} : {})}
            {...(defaultChecked !== undefined ? {defaultChecked} : {})}
          />
        </CheckboxRow>
        <button type="submit" className="underline underline-offset-4 text-sm">
          Submit (demo)
        </button>
      </form>
    )
  },
}

export const AsChild: Story = {
  args: {
    asChild: true,
  },
  render: args => {
    const {label, checked, defaultChecked, asChild, ...rest} =
      args as CheckboxStoryArgs
    const id = 'as-child'

    return (
      <div className="flex flex-col gap-2">
        <div className="text-muted-foreground text-sm">
          `asChild` lets you render the checkbox root as your own element.
        </div>
        <CheckboxRow id={id} label={label}>
          <Checkbox
            id={id}
            asChild={asChild}
            {...rest}
            {...(checked !== undefined ? {checked} : {})}
            {...(defaultChecked !== undefined ? {defaultChecked} : {})}
          >
            <button type="button" />
          </Checkbox>
        </CheckboxRow>
      </div>
    )
  },
}
