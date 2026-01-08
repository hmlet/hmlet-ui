import type {Meta, StoryObj} from '@storybook/react'

import {Separator} from '../../components/ui/separator'

const meta = {
  title: 'UI/Separator',
  component: Separator,
  tags: ['autodocs'],
} satisfies Meta<typeof Separator>

export default meta

type Story = StoryObj<typeof meta>

export const Horizontal: Story = {
  render: () => (
    <div className="w-full max-w-md">
      <div className="text-sm">Above</div>
      <Separator className="my-3" />
      <div className="text-sm">Below</div>
    </div>
  ),
}

export const Vertical: Story = {
  render: () => (
    <div className="flex h-12 items-center gap-3">
      <div className="text-sm">Left</div>
      <Separator orientation="vertical" />
      <div className="text-sm">Right</div>
    </div>
  ),
}
