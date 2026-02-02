const manyOptions: MultiselectOption[] = [
  {value: 'apple', label: 'Apple'},
  {value: 'banana', label: 'Banana'},
  {value: 'orange', label: 'Orange'},
  {value: 'grape', label: 'Grape'},
  {value: 'kiwi', label: 'Kiwi'},
  {value: 'pear', label: 'Pear'},
  {value: 'mango', label: 'Mango'},
  {value: 'pineapple', label: 'Pineapple'},
  {value: 'peach', label: 'Peach'},
  {value: 'plum', label: 'Plum'},
  {value: 'melon', label: 'Melon'},
  {value: 'berry', label: 'Berry'},
]
export const EllipsisOverflow: Story = {
  args: {
    options: manyOptions,
    placeholder: 'Select many fruits...',
    optionVariant: 'default',
  },
  render: function EllipsisOverflowRender(args) {
    const [value, setValue] = React.useState<string[]>([
      'apple',
      'banana',
      'orange',
      'grape',
      'kiwi',
      'pear',
      'mango',
      'pineapple',
      'peach',
      'plum',
      'melon',
      'berry',
    ])
    return (
      <div style={{maxWidth: 220}}>
        <Multiselect {...args} value={value} onChange={setValue} />
      </div>
    )
  },
}

export const TooltipOnOverflow: Story = {
  args: {
    options: manyOptions,
    placeholder: 'Select fruits...',
    optionVariant: 'checkbox',
  },
  render: function TooltipOnOverflowRender(args) {
    const [value, setValue] = React.useState<string[]>([
      'apple',
      'banana',
      'orange',
      'grape',
      'kiwi',
      'pear',
      'mango',
    ])
    return (
      <div style={{maxWidth: 180}}>
        <Multiselect {...args} value={value} onChange={setValue} />
      </div>
    )
  },
}
import type {Meta, StoryObj} from '@storybook/react'
import * as React from 'react'
import {Multiselect} from '../../components/ui/multiselect'
import type {MultiselectOption} from '../../components/ui/multiselect'

const options: MultiselectOption[] = [
  {value: 'apple', label: 'Apple'},
  {value: 'banana', label: 'Banana'},
  {value: 'orange', label: 'Orange'},
  {value: 'grape', label: 'Grape'},
  {value: 'kiwi', label: 'Kiwi', disabled: true},
]

const meta: Meta = {
  title: 'UI/Multiselect',
  component: Multiselect,
  tags: ['autodocs'],
  args: {
    options,
    placeholder: 'Select fruits...',
    optionVariant: 'default',
  },
  argTypes: {
    value: {control: 'object'},
    optionVariant: {
      options: ['default', 'checkbox'],
      control: {type: 'inline-radio'},
    },
    onChange: {action: 'onChange'},
  },
}

export default meta

type Story = StoryObj<typeof Multiselect>

export const Default: Story = {
  args: {
    optionVariant: 'default',
  },
}

export const Checkbox: Story = {
  args: {
    optionVariant: 'checkbox',
  },
}

export const Controlled: Story = {
  render: function ControlledRender(args) {
    const [value, setValue] = React.useState<string[]>(['banana'])
    return <Multiselect {...args} value={value} onChange={setValue} />
  },
}
