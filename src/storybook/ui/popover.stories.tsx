import type {Meta, StoryObj} from '@storybook/react'

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '../../components/ui/popover'
import {Button} from '../../components/ui/button'

const meta = {
  title: 'UI/Popover',
  component: Popover,
  tags: ['autodocs'],
} satisfies Meta<typeof Popover>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="space-y-1">
          <div className="text-sm font-medium">Popover</div>
          <div className="text-sm text-muted-foreground">Some content.</div>
        </div>
      </PopoverContent>
    </Popover>
  ),
}
