import type {Meta, StoryObj} from '@storybook/react'

import * as React from 'react'
import {expect, userEvent, waitFor, within} from '@storybook/test'
import {CalendarDays} from 'lucide-react'

import {
  HoverCard,
  HoverCardArrow,
  HoverCardContent,
  HoverCardTrigger,
} from '../../components/ui/hover-card'
import {Button} from '../../components/ui/button'

type HoverCardStoryArgs = React.ComponentProps<typeof HoverCard> &
  Pick<
    React.ComponentProps<typeof HoverCardContent>,
    | 'side'
    | 'align'
    | 'sideOffset'
    | 'alignOffset'
    | 'avoidCollisions'
    | 'collisionPadding'
    | 'sticky'
    | 'hideWhenDetached'
  > & {
    open?: boolean
    defaultOpen?: boolean
    openDelay?: number
    closeDelay?: number
    showArrow?: boolean
  }

const meta: Meta<HoverCardStoryArgs> = {
  title: 'UI/HoverCard',
  component: HoverCard,
  tags: ['autodocs'],
  parameters: {
    controls: {
      include: [
        'open',
        'defaultOpen',
        'openDelay',
        'closeDelay',
        'side',
        'align',
        'sideOffset',
        'alignOffset',
        'avoidCollisions',
        'collisionPadding',
        'sticky',
        'hideWhenDetached',
        'showArrow',
        'onOpenChange',
      ],
    },
    docs: {
      description: {
        component:
          'A hover-triggered card built on Radix Hover Card. Content is rendered in a portal; use Arrow to visually connect to the trigger.',
      },
    },
  },
  argTypes: {
    open: {control: 'boolean'},
    defaultOpen: {control: 'boolean'},
    openDelay: {control: {type: 'number', min: 0, max: 2000, step: 50}},
    closeDelay: {control: {type: 'number', min: 0, max: 2000, step: 50}},
    side: {
      options: ['top', 'right', 'bottom', 'left'],
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
    sticky: {
      options: ['partial', 'always'],
      control: {type: 'inline-radio'},
    },
    hideWhenDetached: {control: 'boolean'},
    showArrow: {control: 'boolean'},
    onOpenChange: {action: 'onOpenChange'},
  },
  args: {
    openDelay: 0,
    closeDelay: 0,
    side: 'bottom',
    align: 'center',
    sideOffset: 4,
    alignOffset: 0,
    avoidCollisions: true,
    collisionPadding: 8,
    hideWhenDetached: false,
    showArrow: true,
  },
}

export default meta

type Story = StoryObj<HoverCardStoryArgs>

function ProfileCardContent({showArrow}: {showArrow?: boolean}) {
  return (
    <div className="flex justify-between gap-4">
      <div className="flex size-12 items-center justify-center rounded-full bg-muted text-sm font-medium">
        SC
      </div>
      <div className="space-y-1">
        <h4 className="text-sm font-semibold">@shadcn</h4>
        <p className="text-muted-foreground text-sm">
          Designing accessible components.
        </p>
        <div className="flex items-center pt-2 text-muted-foreground text-xs">
          <CalendarDays className="mr-2 size-4 opacity-70" />
          Joined December 2020
        </div>
      </div>
      {showArrow ? <HoverCardArrow /> : null}
    </div>
  )
}

export const Default: Story = {
  render: (args: HoverCardStoryArgs) => (
    <HoverCard
      {...(args.open !== undefined ? {open: args.open} : {})}
      {...(args.defaultOpen !== undefined
        ? {defaultOpen: args.defaultOpen}
        : {})}
      openDelay={args.openDelay}
      closeDelay={args.closeDelay}
      onOpenChange={args.onOpenChange}
    >
      <HoverCardTrigger asChild>
        <Button variant="outline">Hover me</Button>
      </HoverCardTrigger>
      <HoverCardContent
        side={args.side}
        align={args.align}
        sideOffset={args.sideOffset}
        alignOffset={args.alignOffset}
        avoidCollisions={args.avoidCollisions}
        collisionPadding={args.collisionPadding}
        sticky={args.sticky}
        hideWhenDetached={args.hideWhenDetached}
        className="w-80"
      >
        <div className="space-y-1">
          <div className="text-sm font-medium">Hover card</div>
          <div className="text-sm text-muted-foreground">
            More details here.
          </div>
        </div>
        {args.showArrow ? <HoverCardArrow /> : null}
      </HoverCardContent>
    </HoverCard>
  ),
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement)
    const body = within(canvasElement.ownerDocument.body)

    await userEvent.hover(canvas.getByRole('button', {name: 'Hover me'}))
    await expect(body.getByText('Hover card')).toBeInTheDocument()

    await userEvent.unhover(canvas.getByRole('button', {name: 'Hover me'}))
    await waitFor(() => {
      expect(body.queryByText('Hover card')).not.toBeInTheDocument()
    })
  },
}

export const ProfileDemo: Story = {
  name: 'Profile demo',
  render: (args: HoverCardStoryArgs) => (
    <div className="flex items-center gap-3">
      <span className="text-sm text-muted-foreground">Hover:</span>
      <HoverCard
        openDelay={args.openDelay}
        closeDelay={args.closeDelay}
        onOpenChange={args.onOpenChange}
      >
        <HoverCardTrigger asChild>
          <Button variant="link" className="px-0">
            @shadcn
          </Button>
        </HoverCardTrigger>
        <HoverCardContent
          side={args.side}
          align={args.align}
          sideOffset={args.sideOffset}
          alignOffset={args.alignOffset}
          avoidCollisions={args.avoidCollisions}
          collisionPadding={args.collisionPadding}
          sticky={args.sticky}
          hideWhenDetached={args.hideWhenDetached}
          className="w-80"
        >
          <ProfileCardContent showArrow={args.showArrow} />
        </HoverCardContent>
      </HoverCard>
    </div>
  ),
}

export const ArrowOnly: Story = {
  name: 'Arrow',
  args: {
    showArrow: true,
  },
  render: (args: HoverCardStoryArgs) => (
    <HoverCard openDelay={0} closeDelay={0}>
      <HoverCardTrigger asChild>
        <Button variant="outline">Hover for arrow</Button>
      </HoverCardTrigger>
      <HoverCardContent side={args.side} align={args.align} className="w-72">
        <div className="text-sm">This hover card shows an arrow.</div>
        <HoverCardArrow />
      </HoverCardContent>
    </HoverCard>
  ),
}

export const Delays: Story = {
  args: {
    openDelay: 600,
    closeDelay: 400,
  },
  render: (args: HoverCardStoryArgs) => (
    <HoverCard openDelay={args.openDelay} closeDelay={args.closeDelay}>
      <HoverCardTrigger asChild>
        <Button variant="outline">Hover (delayed)</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="space-y-1">
          <div className="text-sm font-medium">Delays</div>
          <div className="text-muted-foreground text-sm">
            openDelay={args.openDelay}ms, closeDelay={args.closeDelay}ms
          </div>
        </div>
        {args.showArrow ? <HoverCardArrow /> : null}
      </HoverCardContent>
    </HoverCard>
  ),
}

export const Positions: Story = {
  render: () => (
    <div className="grid min-h-[560px] grid-cols-2 gap-6 p-10">
      {(
        [
          {side: 'top', align: 'start'},
          {side: 'top', align: 'end'},
          {side: 'left', align: 'center'},
          {side: 'right', align: 'center'},
          {side: 'bottom', align: 'start'},
          {side: 'bottom', align: 'end'},
        ] as const
      ).map(item => (
        <div
          key={`${item.side}-${item.align}`}
          className="flex min-h-[220px] items-center justify-center rounded-md border border-dashed p-10"
        >
          <HoverCard openDelay={0} closeDelay={0}>
            <HoverCardTrigger asChild>
              <Button variant="outline">{`${item.side} / ${item.align}`}</Button>
            </HoverCardTrigger>
            <HoverCardContent
              side={item.side}
              align={item.align}
              sideOffset={10}
              avoidCollisions={false}
              className="w-72"
            >
              <div className="text-sm">Positioned content.</div>
              <HoverCardArrow />
            </HoverCardContent>
          </HoverCard>
        </div>
      ))}
    </div>
  ),
}
