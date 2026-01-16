import type {Meta, StoryObj} from '@storybook/react'

import {Kbd, KbdGroup} from '../../components/ui/kbd'

import {Command} from 'lucide-react'

import {Button} from '../../components/ui/button'
import {Input} from '../../components/ui/input'
import {InputRightAddon, InputGroup} from '../../components/ui/input-group'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '../../components/ui/tooltip'

const meta = {
  title: 'UI/Kbd',
  component: Kbd,
  tags: ['autodocs'],
  parameters: {
    controls: {
      include: ['children', 'className'],
    },
    docs: {
      description: {
        component:
          'Used to display textual user input from keyboard. Use `KbdGroup` to group keys together.',
      },
    },
  },
  argTypes: {
    className: {control: 'text'},
    children: {control: 'text'},
  },
  args: {
    children: 'Ctrl',
  },
} satisfies Meta<typeof Kbd>

export default meta

type Story = StoryObj<typeof meta>

export const Demo: Story = {
  name: 'kbd-demo',
}

export const Group: Story = {
  name: 'kbd-group',
  render: () => (
    <div className="flex items-center gap-2">
      <span className="text-body-sm text-muted-foreground">
        Command palette:
      </span>
      <KbdGroup>
        <Kbd>⌘</Kbd>
        <Kbd>K</Kbd>
      </KbdGroup>
    </div>
  ),
}

export const ButtonExample: Story = {
  name: 'kbd-button',
  render: () => (
    <Button variant="outline" className="gap-2">
      <Command className="size-4" />
      Command palette
      <KbdGroup className="ml-2">
        <Kbd>⌘</Kbd>
        <Kbd>K</Kbd>
      </KbdGroup>
    </Button>
  ),
}

export const TooltipExample: Story = {
  name: 'kbd-tooltip',
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent>
        <div className="flex items-center gap-2">
          <span>Open command palette</span>
          <KbdGroup>
            <Kbd>⌘</Kbd>
            <Kbd>K</Kbd>
          </KbdGroup>
        </div>
      </TooltipContent>
    </Tooltip>
  ),
}

export const InputGroupExample: Story = {
  name: 'kbd-input-group',
  render: () => (
    <div className="max-w-sm">
      <InputGroup>
        <Input placeholder="Search" className="rounded-r-none" />
        <InputRightAddon>
          <Kbd>/</Kbd>
        </InputRightAddon>
      </InputGroup>
    </div>
  ),
}
