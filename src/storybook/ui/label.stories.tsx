import type {Meta, StoryObj} from '@storybook/react'

import * as React from 'react'
import {expect, userEvent, within} from '@storybook/test'

import {Label} from '../../components/ui/label'
import {Input} from '../../components/ui/input'
import {Checkbox} from '../../components/ui/checkbox'

type LabelStoryArgs = React.ComponentProps<typeof Label> & {
  text?: string
  inputId?: string
  inputPlaceholder?: string
  disabled?: boolean
}

const meta: Meta<LabelStoryArgs> = {
  title: 'UI/Label',
  component: Label,
  tags: ['autodocs'],
  parameters: {
    controls: {
      include: [
        'text',
        'htmlFor',
        'className',
        'disabled',
        'onClick',
        'onMouseDown',
      ],
    },
  },
  argTypes: {
    text: {control: 'text'},
    inputId: {control: 'text'},
    inputPlaceholder: {control: 'text'},
    disabled: {control: 'boolean'},
    onClick: {action: 'onClick'},
    onMouseDown: {action: 'onMouseDown'},
  },
  args: {
    text: 'Email',
    inputId: 'email',
    inputPlaceholder: 'you@example.com',
    disabled: false,
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: args => {
    const {
      text = 'Email',
      inputId = 'email',
      inputPlaceholder = 'you@example.com',
      disabled,
      ...labelProps
    } = args

    const htmlFor = labelProps.htmlFor ?? inputId

    return (
      <div className="grid max-w-sm gap-2">
        <Label {...labelProps} htmlFor={htmlFor}>
          {text}
        </Label>
        <Input
          id={inputId}
          placeholder={inputPlaceholder}
          disabled={disabled}
        />
      </div>
    )
  },
  play: async ({canvasElement, args}) => {
    const canvas = within(canvasElement)
    const label = canvas.getByText(args.text ?? 'Email')
    const input = canvas.getByRole('textbox')

    await userEvent.click(label)
    await expect(input).toHaveFocus()
  },
}

export const CheckboxLabel: Story = {
  args: {
    text: 'Accept terms and conditions',
    inputId: 'terms',
    disabled: false,
  },
  render: args => {
    const {
      text = 'Accept terms and conditions',
      inputId = 'terms',
      disabled,
      ...labelProps
    } = args
    const htmlFor = labelProps.htmlFor ?? inputId

    return (
      <div className="flex items-center gap-2">
        <Checkbox id={inputId} disabled={disabled} />
        <Label {...labelProps} htmlFor={htmlFor}>
          {text}
        </Label>
      </div>
    )
  },
  play: async ({canvasElement, args}) => {
    const canvas = within(canvasElement)
    const label = canvas.getByText(args.text ?? 'Accept terms and conditions')
    const checkbox = canvas.getByRole('checkbox')

    await userEvent.click(label)
    await expect(checkbox).toBeChecked()
  },
}

export const DisabledCheckboxLabel: Story = {
  args: {
    text: 'Accept terms and conditions',
    inputId: 'terms-disabled',
    disabled: true,
  },
  render: args => {
    const {
      text = 'Accept terms and conditions',
      inputId = 'terms-disabled',
      disabled,
      ...labelProps
    } = args
    const htmlFor = labelProps.htmlFor ?? inputId

    return (
      <div className="flex items-center gap-2">
        <Checkbox id={inputId} disabled={disabled} />
        <Label {...labelProps} htmlFor={htmlFor}>
          {text}
        </Label>
      </div>
    )
  },
  play: async ({canvasElement, args}) => {
    const canvas = within(canvasElement)
    const label = canvas.getByText(args.text ?? 'Accept terms and conditions')
    const checkbox = canvas.getByRole('checkbox')

    await expect(checkbox).toBeDisabled()
    await userEvent.click(label)
    await expect(checkbox).not.toBeChecked()
  },
}
