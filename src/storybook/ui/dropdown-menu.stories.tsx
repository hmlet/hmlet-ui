import type {Meta, StoryObj} from '@storybook/react'

import * as React from 'react'
import {useArgs} from '@storybook/preview-api'
import {expect, userEvent, within} from '@storybook/test'
import {
  CreditCard,
  LogOut,
  Mail,
  MessageSquare,
  PlusCircle,
  Settings,
  Trash2,
  User,
  Users,
} from 'lucide-react'

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '../../components/ui/dropdown-menu'
import {Button} from '../../components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '../../components/ui/dialog'

type DropdownMenuStoryArgs = React.ComponentProps<typeof DropdownMenu> &
  Pick<
    React.ComponentProps<typeof DropdownMenuContent>,
    | 'side'
    | 'align'
    | 'sideOffset'
    | 'alignOffset'
    | 'avoidCollisions'
    | 'collisionPadding'
    | 'hideWhenDetached'
    | 'loop'
  > & {
    open?: boolean
    defaultOpen?: boolean
    modal?: boolean

    onSelectItem?: (id: string) => void
    onCheckedChange?: (id: string, checked: boolean) => void
    onRadioChange?: (value: string) => void
    onDialogOpenChange?: (open: boolean) => void
  }

const meta: Meta<DropdownMenuStoryArgs> = {
  title: 'UI/DropdownMenu',
  component: DropdownMenu,
  tags: ['autodocs'],
  parameters: {
    controls: {
      include: [
        'open',
        'defaultOpen',
        'modal',
        'side',
        'align',
        'sideOffset',
        'alignOffset',
        'avoidCollisions',
        'collisionPadding',
        'hideWhenDetached',
        'loop',
        'onOpenChange',
        'onSelectItem',
        'onCheckedChange',
        'onRadioChange',
        'onDialogOpenChange',
      ],
    },
  },
  argTypes: {
    open: {control: 'boolean'},
    defaultOpen: {control: 'boolean'},
    modal: {control: 'boolean'},
    side: {
      options: ['bottom', 'top', 'left', 'right'],
      control: {type: 'inline-radio'},
    },
    align: {
      options: ['start', 'center', 'end'],
      control: {type: 'inline-radio'},
    },
    sideOffset: {control: {type: 'number', min: 0, max: 24, step: 1}},
    alignOffset: {control: {type: 'number', min: -24, max: 24, step: 1}},
    avoidCollisions: {control: 'boolean'},
    collisionPadding: {control: {type: 'number', min: 0, max: 32, step: 1}},
    hideWhenDetached: {control: 'boolean'},
    loop: {control: 'boolean'},

    onOpenChange: {action: 'onOpenChange'},
    onSelectItem: {action: 'onSelectItem'},
    onCheckedChange: {action: 'onCheckedChange'},
    onRadioChange: {action: 'onRadioChange'},
    onDialogOpenChange: {action: 'onDialogOpenChange'},
  },
  args: {
    open: false,
    modal: true,
    side: 'bottom',
    align: 'start',
    sideOffset: 4,
    alignOffset: 0,
    avoidCollisions: true,
    collisionPadding: 8,
    hideWhenDetached: false,
    loop: true,
  },
}

export default meta

type Story = StoryObj<DropdownMenuStoryArgs>

export const Default: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}

export const Demo: Story = {
  name: 'Dropdown menu demo',
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User />
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CreditCard />
            Billing
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings />
            Settings
            <DropdownMenuShortcut>⌘,</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <Users />
            Invite users
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem>
              <Mail />
              Email
            </DropdownMenuItem>
            <DropdownMenuItem>
              <MessageSquare />
              Message
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <PlusCircle />
              More…
            </DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          <Trash2 />
          Delete
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LogOut />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}

export const Playground: Story = {
  render: function PlaygroundRender(args) {
    const [{open}, updateArgs] = useArgs<Pick<DropdownMenuStoryArgs, 'open'>>()

    return (
      <DropdownMenu
        {...(open !== undefined ? {open} : {})}
        {...(args.defaultOpen !== undefined
          ? {defaultOpen: args.defaultOpen}
          : {})}
        modal={args.modal}
        onOpenChange={(nextOpen: boolean) => {
          updateArgs({open: nextOpen})
          args.onOpenChange?.(nextOpen)
        }}
      >
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Open</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          side={args.side}
          align={args.align}
          sideOffset={args.sideOffset}
          alignOffset={args.alignOffset}
          avoidCollisions={args.avoidCollisions}
          collisionPadding={args.collisionPadding}
          hideWhenDetached={args.hideWhenDetached}
          loop={args.loop}
        >
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onSelect={() => args.onSelectItem?.('profile')}>
            <User />
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => args.onSelectItem?.('settings')}>
            <Settings />
            Settings
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            variant="destructive"
            onSelect={() => args.onSelectItem?.('delete')}
          >
            <Trash2 />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  },
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement)
    const body = within(canvasElement.ownerDocument.body)

    await userEvent.click(canvas.getByRole('button', {name: 'Open'}))
    await expect(body.getByText('Actions')).toBeInTheDocument()
    await userEvent.click(body.getByText('Profile'))
    await expect(body.queryByText('Actions')).not.toBeInTheDocument()
  },
}

export const Checkboxes: Story = {
  render: function CheckboxesRender(args) {
    const [showStatusBar, setShowStatusBar] = React.useState(true)
    const [showActivityBar, setShowActivityBar] = React.useState(false)
    const [showPanel, setShowPanel] = React.useState(false)

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Open</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuLabel>View</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem
            checked={showStatusBar}
            onCheckedChange={checked => {
              const next = Boolean(checked)
              setShowStatusBar(next)
              args.onCheckedChange?.('statusBar', next)
            }}
          >
            Status bar
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={showActivityBar}
            onCheckedChange={checked => {
              const next = Boolean(checked)
              setShowActivityBar(next)
              args.onCheckedChange?.('activityBar', next)
            }}
          >
            Activity bar
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={showPanel}
            onCheckedChange={checked => {
              const next = Boolean(checked)
              setShowPanel(next)
              args.onCheckedChange?.('panel', next)
            }}
          >
            Panel
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  },
}

export const RadioGroup: Story = {
  render: function RadioGroupRender(args) {
    const [position, setPosition] = React.useState<'top' | 'bottom' | 'right'>(
      'bottom',
    )

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Open</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuLabel>Panel position</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup
            value={position}
            onValueChange={value => {
              setPosition(value as typeof position)
              args.onRadioChange?.(value)
            }}
          >
            <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  },
}

export const DialogFromMenu: Story = {
  name: 'Dialog from dropdown',
  render: function DialogFromMenuRender(args) {
    const [dialogOpen, setDialogOpen] = React.useState(false)

    return (
      <>
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Actions</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuItem onSelect={() => setDialogOpen(true)}>
              Open dialog
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Dialog
          open={dialogOpen}
          onOpenChange={open => {
            setDialogOpen(open)
            args.onDialogOpenChange?.(open)
          }}
        >
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Confirm action</DialogTitle>
              <DialogDescription>
                This is opened from a dropdown menu (menu uses modal=false).
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button>Continue</Button>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </>
    )
  },
}
