import type {Meta, StoryObj} from '@storybook/react'

import {RadioGroup, RadioGroupItem} from '../../components/ui/radio-group'
import {Label} from '../../components/ui/label'

const meta = {
  title: 'UI/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
} satisfies Meta<typeof RadioGroup>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="one" className="grid gap-2">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="one" id="r1" />
        <Label htmlFor="r1">Option one</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="two" id="r2" />
        <Label htmlFor="r2">Option two</Label>
      </div>
    </RadioGroup>
  ),
}
