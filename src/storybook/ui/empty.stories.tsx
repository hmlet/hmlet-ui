import type {Meta, StoryObj} from '@storybook/react'

import {Inbox, Plus, Users} from 'lucide-react'

import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '../../components/ui/empty'
import {Avatar, AvatarFallback} from '../../components/ui/avatar'
import {Button} from '../../components/ui/button'
import {Input} from '../../components/ui/input'
import {InputGroup} from '../../components/ui/input-group'

const meta = {
  title: 'UI/Empty',
  component: Empty,
  tags: ['autodocs'],
  parameters: {
    controls: {
      include: ['className'],
    },
    docs: {
      description: {
        component:
          'Empty state composition component with subcomponents: `EmptyHeader`, `EmptyMedia`, `EmptyTitle`, `EmptyDescription`, `EmptyContent`.',
      },
    },
  },
  argTypes: {
    className: {control: 'text'},
  },
  args: {
    children: <></>,
  },
} satisfies Meta<typeof Empty>

export default meta

type Story = StoryObj<typeof meta>

export const EmptyDemo: Story = {
  name: 'Demo',
  render: () => (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Inbox />
        </EmptyMedia>
        <EmptyTitle>No messages</EmptyTitle>
        <EmptyDescription>
          When you receive messages, they’ll show up here.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="primary">
          <Plus />
          New message
        </Button>
        <Button variant="outline">Refresh</Button>
      </EmptyContent>
    </Empty>
  ),
}

export const EmptyOutline: Story = {
  name: 'Outline',
  render: () => (
    <Empty className="rounded-lg border border-border">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Inbox />
        </EmptyMedia>
        <EmptyTitle>No results</EmptyTitle>
        <EmptyDescription>
          Your search didn’t match anything. Try a different query.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="primary">Clear search</Button>
        <Button variant="outline">Try again</Button>
      </EmptyContent>
    </Empty>
  ),
}

export const EmptyBackground: Story = {
  name: 'Background',
  render: () => (
    <Empty className="rounded-lg bg-gradient-to-b from-muted/40 to-background">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Inbox />
        </EmptyMedia>
        <EmptyTitle>Nothing here</EmptyTitle>
        <EmptyDescription>
          There’s no data to show yet. Add your first item to get started.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="primary">
          <Plus />
          Add data
        </Button>
      </EmptyContent>
    </Empty>
  ),
}

export const EmptyAvatar: Story = {
  name: 'Avatar',
  render: () => (
    <Empty>
      <EmptyHeader>
        <EmptyMedia>
          <Avatar>
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </EmptyMedia>
        <EmptyTitle>No profile yet</EmptyTitle>
        <EmptyDescription>
          Add a photo and a name so your teammates can recognize you.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="primary">Complete profile</Button>
      </EmptyContent>
    </Empty>
  ),
}

export const EmptyAvatarGroup: Story = {
  name: 'Avatar Group',
  render: () => (
    <Empty>
      <EmptyHeader>
        <EmptyMedia>
          <div className="flex -space-x-2">
            <Avatar className="ring-2 ring-background">
              <AvatarFallback>A</AvatarFallback>
            </Avatar>
            <Avatar className="ring-2 ring-background">
              <AvatarFallback>B</AvatarFallback>
            </Avatar>
            <Avatar className="ring-2 ring-background">
              <AvatarFallback>C</AvatarFallback>
            </Avatar>
          </div>
        </EmptyMedia>
        <EmptyTitle>No members</EmptyTitle>
        <EmptyDescription>
          Invite people to collaborate on this workspace.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="primary">
          <Users />
          Invite members
        </Button>
      </EmptyContent>
    </Empty>
  ),
}

export const EmptyInputGroup: Story = {
  name: 'InputGroup',
  render: () => (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Users />
        </EmptyMedia>
        <EmptyTitle>Invite teammates</EmptyTitle>
        <EmptyDescription>
          Add an email address to send an invitation.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent className="w-full max-w-md">
        <InputGroup>
          <Input placeholder="name@company.com" className="rounded-r-none" />
          <Button variant="primary" className="rounded-l-none">
            Send
          </Button>
        </InputGroup>
      </EmptyContent>
    </Empty>
  ),
}
