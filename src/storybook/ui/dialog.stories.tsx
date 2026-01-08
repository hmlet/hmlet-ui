import type {Meta, StoryObj} from '@storybook/react'

import * as React from 'react'
import {useArgs} from '@storybook/preview-api'

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../../components/ui/dialog'
import {Button} from '../../components/ui/button'
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from '../../components/ui/context-menu'
import {cn} from '../../components/ui/utils'

type DialogStoryArgs = React.ComponentProps<typeof Dialog> & {
  open?: boolean
  defaultOpen?: boolean
  modal?: boolean

  title?: string
  description?: string

  size?: 'sm' | 'md' | 'lg' | 'xl'
  showFooter?: boolean
  showCustomCloseButton?: boolean

  onOpenChange?: (open: boolean) => void
  onEscapeKeyDown?: React.ComponentProps<
    typeof DialogContent
  >['onEscapeKeyDown']
  onInteractOutside?: React.ComponentProps<
    typeof DialogContent
  >['onInteractOutside']
  onCloseAutoFocus?: React.ComponentProps<
    typeof DialogContent
  >['onCloseAutoFocus']
  onOpenAutoFocus?: React.ComponentProps<
    typeof DialogContent
  >['onOpenAutoFocus']
}

function sizeClass(size: DialogStoryArgs['size']) {
  switch (size) {
    case 'sm':
      return 'sm:max-w-sm'
    case 'md':
      return 'sm:max-w-md'
    case 'xl':
      return 'sm:max-w-xl'
    case 'lg':
    default:
      return 'sm:max-w-lg'
  }
}

const meta: Meta<DialogStoryArgs> = {
  title: 'UI/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  parameters: {
    controls: {
      include: [
        'open',
        'defaultOpen',
        'modal',
        'title',
        'description',
        'size',
        'showFooter',
        'showCustomCloseButton',
        'onOpenChange',
        'onEscapeKeyDown',
        'onInteractOutside',
        'onOpenAutoFocus',
        'onCloseAutoFocus',
      ],
    },
    docs: {
      description: {
        component:
          'A window overlaid on either the primary window or another dialog window, rendering the content underneath inert. Docs: https://www.radix-ui.com/primitives/docs/components/dialog',
      },
    },
  },
  argTypes: {
    open: {control: 'boolean'},
    defaultOpen: {control: 'boolean'},
    modal: {control: 'boolean'},
    title: {control: 'text'},
    description: {control: 'text'},
    size: {
      options: ['sm', 'md', 'lg', 'xl'],
      control: {type: 'inline-radio'},
    },
    showFooter: {control: 'boolean'},
    showCustomCloseButton: {control: 'boolean'},
    onOpenChange: {action: 'onOpenChange'},
    onEscapeKeyDown: {action: 'onEscapeKeyDown'},
    onInteractOutside: {action: 'onInteractOutside'},
    onOpenAutoFocus: {action: 'onOpenAutoFocus'},
    onCloseAutoFocus: {action: 'onCloseAutoFocus'},
  },
  args: {
    modal: true,
    title: 'Are you absolutely sure?',
    description:
      'This action cannot be undone. This will permanently delete your account and remove your data from our servers.',
    size: 'lg',
    showFooter: true,
    showCustomCloseButton: false,
  },
}

export default meta

type Story = StoryObj<DialogStoryArgs>

function DialogBody({args}: {args: DialogStoryArgs}) {
  return (
    <>
      <DialogHeader>
        <DialogTitle>{args.title}</DialogTitle>
        <DialogDescription>{args.description}</DialogDescription>
      </DialogHeader>

      {args.showFooter ? (
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button type="submit">Confirm</Button>
        </DialogFooter>
      ) : null}

      {args.showCustomCloseButton ? (
        <div className="flex justify-end">
          <DialogClose asChild>
            <Button variant="outline">Close</Button>
          </DialogClose>
        </div>
      ) : null}
    </>
  )
}

export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dialog title</DialogTitle>
          <DialogDescription>This is a dialog description.</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

export const Playground: Story = {
  args: {
    open: false,
  },
  render: function PlaygroundRender(storyArgs) {
    const args = storyArgs
    const [{open}, updateArgs] = useArgs<{open?: boolean}>()

    return (
      <Dialog
        {...(open !== undefined ? {open} : {})}
        modal={args.modal}
        onOpenChange={(nextOpen: boolean) => {
          updateArgs({open: nextOpen})
          args.onOpenChange?.(nextOpen)
        }}
      >
        <DialogTrigger asChild>
          <Button variant="outline">Open</Button>
        </DialogTrigger>
        <DialogContent
          className={cn(sizeClass(args.size))}
          onEscapeKeyDown={args.onEscapeKeyDown}
          onInteractOutside={args.onInteractOutside}
          onOpenAutoFocus={args.onOpenAutoFocus}
          onCloseAutoFocus={args.onCloseAutoFocus}
        >
          <DialogBody args={args} />
        </DialogContent>
      </Dialog>
    )
  },
}

export const Demo: Story = {
  name: 'Dialog demo',
  render: args => (
    <Dialog modal={args.modal} onOpenChange={args.onOpenChange}>
      <DialogTrigger asChild>
        <Button variant="outline">Open</Button>
      </DialogTrigger>
      <DialogContent className={cn(sizeClass(args.size))}>
        <DialogBody args={args} />
      </DialogContent>
    </Dialog>
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
        <Dialog key={item.size}>
          <DialogTrigger asChild>
            <Button variant="outline">{item.label}</Button>
          </DialogTrigger>
          <DialogContent className={cn(sizeClass(item.size))}>
            <DialogHeader>
              <DialogTitle>{item.label} dialog</DialogTitle>
              <DialogDescription>
                This dialog uses `{item.size}` sizing.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant="outline">Cancel</Button>
              <Button>Continue</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  ),
}

export const CustomCloseButton: Story = {
  args: {
    showCustomCloseButton: true,
    showFooter: false,
  },
  render: args => (
    <Dialog modal={args.modal} onOpenChange={args.onOpenChange}>
      <DialogTrigger asChild>
        <Button variant="outline">Open</Button>
      </DialogTrigger>
      <DialogContent className={cn(sizeClass(args.size))}>
        <DialogHeader>
          <DialogTitle>Custom close button</DialogTitle>
          <DialogDescription>
            This example uses `DialogClose` with a Button.
          </DialogDescription>
        </DialogHeader>
        <DialogClose asChild>
          <Button className="w-fit">Close</Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  ),
}

export const FromContextMenu: Story = {
  name: 'Dialog from context menu',
  render: args => (
    <Dialog modal={args.modal} onOpenChange={args.onOpenChange}>
      <ContextMenu>
        <ContextMenuTrigger asChild>
          <div className="max-w-md rounded-md border p-6 text-sm">
            Right click
          </div>
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem>Open</ContextMenuItem>
          <ContextMenuItem>Download</ContextMenuItem>
          <DialogTrigger asChild>
            <ContextMenuItem>
              <span>Delete</span>
            </ContextMenuItem>
          </DialogTrigger>
        </ContextMenuContent>
      </ContextMenu>

      <DialogContent className={cn(sizeClass(args.size))}>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. Are you sure you want to permanently
            delete this file from our servers?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button type="submit">Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}
