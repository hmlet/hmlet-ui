import type {Meta, StoryObj} from '@storybook/react'

import * as React from 'react'

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '../../components/ui/drawer'
import {Button} from '../../components/ui/button'

type DrawerStoryArgs = React.ComponentProps<typeof Drawer> & {
  open?: boolean
  defaultOpen?: boolean
  direction?: 'top' | 'bottom' | 'left' | 'right'
  dismissible?: boolean
  handleOnly?: boolean
  closeThreshold?: number
  shouldScaleBackground?: boolean

  title?: string
  description?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'

  onOpenChange?: (open: boolean) => void
}

const meta: Meta<DrawerStoryArgs> = {
  title: 'UI/Drawer',
  component: Drawer,
  tags: ['autodocs'],
  parameters: {
    controls: {
      include: [
        'open',
        'defaultOpen',
        'direction',
        'dismissible',
        'handleOnly',
        'closeThreshold',
        'shouldScaleBackground',
        'title',
        'description',
        'size',
        'onOpenChange',
      ],
    },
    docs: {
      description: {
        component:
          'A drawer component for React. Built on top of Vaul (https://vaul.emilkowal.ski/getting-started).',
      },
    },
  },
  argTypes: {
    open: {control: 'boolean'},
    defaultOpen: {control: 'boolean'},
    direction: {
      options: ['bottom', 'top', 'left', 'right'],
      control: {type: 'inline-radio'},
    },
    dismissible: {control: 'boolean'},
    handleOnly: {control: 'boolean'},
    closeThreshold: {control: {type: 'number', min: 0, max: 1, step: 0.05}},
    shouldScaleBackground: {control: 'boolean'},
    title: {control: 'text'},
    description: {control: 'text'},
    size: {
      options: ['sm', 'md', 'lg', 'xl'],
      control: {type: 'inline-radio'},
    },
    onOpenChange: {action: 'onOpenChange'},
  },
  args: {
    direction: 'bottom',
    dismissible: true,
    handleOnly: false,
    closeThreshold: 0.25,
    shouldScaleBackground: true,
    title: 'Are you absolutely sure?',
    description: 'This action cannot be undone.',
    size: 'md',
  },
}

export default meta

type Story = StoryObj<DrawerStoryArgs>

export const Default: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Drawer title</DrawerTitle>
          <DrawerDescription>Drawer description.</DrawerDescription>
        </DrawerHeader>
        <div className="px-4 pb-4 text-sm text-muted-foreground">Content</div>
        <DrawerFooter>
          <Button>Confirm</Button>
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
}

export const Demo: Story = {
  name: 'Drawer demo',
  render: (args: DrawerStoryArgs) => (
    <Drawer
      {...(args.open !== undefined ? {open: args.open} : {})}
      {...(args.defaultOpen !== undefined
        ? {defaultOpen: args.defaultOpen}
        : {})}
      direction={args.direction}
      dismissible={args.dismissible}
      handleOnly={args.handleOnly}
      closeThreshold={args.closeThreshold}
      shouldScaleBackground={args.shouldScaleBackground}
      onOpenChange={args.onOpenChange}
    >
      <DrawerTrigger asChild>
        <Button variant="outline">Open</Button>
      </DrawerTrigger>
      <DrawerContent size={args.size}>
        <DrawerHeader>
          <DrawerTitle>{args.title}</DrawerTitle>
          <DrawerDescription>{args.description}</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button>Submit</Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
}

export const Directions: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      {(
        [
          {direction: 'bottom', label: 'Bottom'},
          {direction: 'top', label: 'Top'},
          {direction: 'left', label: 'Left'},
          {direction: 'right', label: 'Right'},
        ] as const
      ).map(item => (
        <Drawer key={item.direction} direction={item.direction}>
          <DrawerTrigger asChild>
            <Button variant="outline">{item.label}</Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>{item.label} drawer</DrawerTitle>
              <DrawerDescription>Direction: {item.direction}</DrawerDescription>
            </DrawerHeader>
            <div className="px-4 pb-4 text-sm text-muted-foreground">
              Content
            </div>
            <DrawerFooter>
              <Button>Confirm</Button>
              <DrawerClose asChild>
                <Button variant="outline">Close</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      ))}
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      {(
        [
          {size: 'sm', label: 'Small'},
          {size: 'md', label: 'Medium'},
          {size: 'lg', label: 'Large'},
          {size: 'xl', label: 'Extra large'},
        ] as const
      ).map(item => (
        <Drawer key={item.size} direction="right">
          <DrawerTrigger asChild>
            <Button variant="outline">{item.label}</Button>
          </DrawerTrigger>
          <DrawerContent size={item.size}>
            <DrawerHeader>
              <DrawerTitle>{item.label} drawer</DrawerTitle>
              <DrawerDescription>
                Direction: right · Size token: {item.size}
              </DrawerDescription>
            </DrawerHeader>
            <div className="px-4 pb-4 text-sm text-muted-foreground">
              Content
            </div>
            <DrawerFooter>
              <Button>Confirm</Button>
              <DrawerClose asChild>
                <Button variant="outline">Close</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      ))}
    </div>
  ),
}
