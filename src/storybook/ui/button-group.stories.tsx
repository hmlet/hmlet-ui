import type {Meta, StoryObj} from '@storybook/react'

import {Button} from '../../components/ui/button'
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from '../../components/ui/button-group'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../../components/ui/dropdown-menu'
import {Input} from '../../components/ui/input'
import {InputGroup, InputLeftAddon} from '../../components/ui/input-group'
import {Label} from '../../components/ui/label'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '../../components/ui/popover'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../components/ui/select'

const meta = {
  title: 'UI/Button Group',
  component: ButtonGroup,
  tags: ['autodocs'],
  parameters: {
    controls: {
      include: ['variant', 'orientation', 'className'],
    },
    docs: {
      description: {
        component:
          'Groups related controls (buttons, inputs, select triggers) with consistent styling. Supports optional separators and inline text via `ButtonGroupSeparator` and `ButtonGroupText`.',
      },
    },
  },
  argTypes: {
    variant: {options: ['attached', 'separated'], control: {type: 'select'}},
    orientation: {
      options: ['horizontal', 'vertical'],
      control: {type: 'select'},
    },
    className: {control: 'text'},
  },
  args: {
    variant: 'attached',
    orientation: 'horizontal',
    children: (
      <>
        <Button variant="outline">First</Button>
        <Button variant="outline">Second</Button>
        <Button variant="outline">Third</Button>
      </>
    ),
  },
} satisfies Meta<typeof ButtonGroup>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: {
    children: (
      <>
        <Button variant="outline">First</Button>
        <Button variant="outline">Second</Button>
        <Button variant="outline">Third</Button>
      </>
    ),
  },
}

export const AttachedHorizontal: Story = {
  name: 'Attached (horizontal)',
  render: () => (
    <ButtonGroup variant="attached" orientation="horizontal">
      <Button variant="outline">Day</Button>
      <Button variant="outline">Week</Button>
      <Button variant="outline">Month</Button>
    </ButtonGroup>
  ),
}

export const AttachedVertical: Story = {
  name: 'Attached (vertical)',
  render: () => (
    <ButtonGroup variant="attached" orientation="vertical">
      <Button variant="outline">Top</Button>
      <Button variant="outline">Middle</Button>
      <Button variant="outline">Bottom</Button>
    </ButtonGroup>
  ),
}

export const Nested: Story = {
  render: () => (
    <ButtonGroup variant="separated" aria-label="Nested button groups">
      <ButtonGroup>
        <Button variant="outline">Left</Button>
        <Button variant="outline">Center</Button>
        <Button variant="outline">Right</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline">A</Button>
        <Button variant="outline">B</Button>
      </ButtonGroup>
    </ButtonGroup>
  ),
}

export const Separator: Story = {
  name: 'Separator',
  render: () => (
    <ButtonGroup aria-label="Split with separator">
      <Button variant="primary">Action</Button>
      <ButtonGroupSeparator />
      <Button variant="secondary">Secondary</Button>
    </ButtonGroup>
  ),
}

export const Split: Story = {
  name: 'Split',
  render: () => (
    <ButtonGroup aria-label="Split button group">
      <Button variant="primary">Run</Button>
      <ButtonGroupSeparator />
      <Button variant="primary-outline">Options</Button>
    </ButtonGroup>
  ),
}

export const InputExample: Story = {
  render: () => (
    <ButtonGroup aria-label="Button group with input">
      <ButtonGroupText asChild>
        <Label htmlFor="bg-name">Name</Label>
      </ButtonGroupText>
      <Input id="bg-name" placeholder="Type something…" />
      <Button variant="primary">Save</Button>
    </ButtonGroup>
  ),
}

export const InputGroupExample: Story = {
  name: 'Input Group',
  render: () => (
    <ButtonGroup aria-label="Button group with input group">
      <InputGroup className="w-72 border border-input bg-input-background rounded-md">
        <InputLeftAddon>https://</InputLeftAddon>
        <Input className="rounded-none border-x-0" placeholder="example.com" />
      </InputGroup>
      <Button variant="outline">Go</Button>
    </ButtonGroup>
  ),
}

export const DropdownMenuExample: Story = {
  name: 'Dropdown Menu',
  render: () => (
    <ButtonGroup aria-label="Split with dropdown">
      <Button variant="primary">Create</Button>
      <ButtonGroupSeparator />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="primary-outline">More</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>Duplicate</DropdownMenuItem>
          <DropdownMenuItem>Archive</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </ButtonGroup>
  ),
}

export const SelectExample: Story = {
  name: 'Select',
  render: () => (
    <ButtonGroup aria-label="Button group with select">
      <Button variant="outline" size="sm">
        Filter
      </Button>
      <Select defaultValue="week">
        <SelectTrigger className="w-32">
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="day">Day</SelectItem>
          <SelectItem value="week">Week</SelectItem>
          <SelectItem value="month">Month</SelectItem>
        </SelectContent>
      </Select>
    </ButtonGroup>
  ),
}

export const PopoverExample: Story = {
  name: 'Popover',
  render: () => (
    <ButtonGroup aria-label="Button group with popover">
      <Button variant="outline">Left</Button>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Details</Button>
        </PopoverTrigger>
        <PopoverContent>Popover content</PopoverContent>
      </Popover>
      <Button variant="outline">Right</Button>
    </ButtonGroup>
  ),
}
