import type {Meta, StoryObj} from '@storybook/react'

import {ChevronRight, Home, Mail, MoreVertical, User} from 'lucide-react'

import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemGroup,
  ItemHeader,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from '../../components/ui/item'

import {Avatar, AvatarFallback, AvatarImage} from '../../components/ui/avatar'
import {Button} from '../../components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../../components/ui/dropdown-menu'

const meta = {
  title: 'UI/Item',
  component: Item,
  tags: ['autodocs'],
  parameters: {
    controls: {
      include: ['variant', 'size', 'asChild', 'className'],
    },
    docs: {
      description: {
        component:
          'Versatile item container with optional media, title/description, actions, header/footer, and grouping utilities.',
      },
    },
  },
  argTypes: {
    variant: {control: 'select', options: ['default', 'outline', 'muted']},
    size: {control: 'select', options: ['default', 'sm']},
    asChild: {control: 'boolean'},
    className: {control: 'text'},
  },
  args: {
    variant: 'default',
    size: 'default',
    asChild: false,
  },
} satisfies Meta<typeof Item>

export default meta

type Story = StoryObj<typeof meta>

export const Demo: Story = {
  name: 'item-demo',
  render: args => (
    <div className="max-w-md">
      <Item {...args}>
        <ItemMedia variant="icon">
          <Mail />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Inbox</ItemTitle>
          <ItemDescription>12 unread messages</ItemDescription>
        </ItemContent>
        <ItemActions>
          <ChevronRight className="text-muted-foreground" />
        </ItemActions>
      </Item>
    </div>
  ),
}

export const Variants: Story = {
  name: 'item-variant',
  render: () => (
    <div className="max-w-md space-y-2">
      {(['default', 'outline', 'muted'] as const).map(variant => (
        <Item key={variant} variant={variant}>
          <ItemMedia variant="icon">
            <Mail />
          </ItemMedia>
          <ItemContent>
            <ItemTitle className="capitalize">{variant}</ItemTitle>
            <ItemDescription>Variant example</ItemDescription>
          </ItemContent>
          <ItemActions>
            <ChevronRight className="text-muted-foreground" />
          </ItemActions>
        </Item>
      ))}
    </div>
  ),
}

export const Sizes: Story = {
  name: 'item-size',
  render: () => (
    <div className="max-w-md space-y-2">
      <Item size="default">
        <ItemMedia variant="icon">
          <Mail />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Default</ItemTitle>
          <ItemDescription>Standard spacing</ItemDescription>
        </ItemContent>
        <ItemActions>
          <ChevronRight className="text-muted-foreground" />
        </ItemActions>
      </Item>

      <Item size="sm">
        <ItemMedia variant="icon">
          <Mail />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Small</ItemTitle>
          <ItemDescription>Compact spacing</ItemDescription>
        </ItemContent>
        <ItemActions>
          <ChevronRight className="text-muted-foreground" />
        </ItemActions>
      </Item>
    </div>
  ),
}

export const Icon: Story = {
  name: 'item-icon',
  render: () => (
    <div className="max-w-md">
      <Item>
        <ItemMedia variant="icon">
          <Home />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Dashboard</ItemTitle>
          <ItemDescription>
            Overview of your account and activity.
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <ChevronRight className="text-muted-foreground" />
        </ItemActions>
      </Item>
    </div>
  ),
}

export const AvatarMedia: Story = {
  name: 'item-avatar',
  render: () => (
    <div className="max-w-md">
      <Item>
        <ItemMedia>
          <Avatar className="size-full">
            <AvatarImage
              src="https://avatars.githubusercontent.com/u/1?v=4"
              alt="User"
            />
            <AvatarFallback>
              <User className="size-4" />
            </AvatarFallback>
          </Avatar>
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Profile</ItemTitle>
          <ItemDescription>Manage your personal information.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <ChevronRight className="text-muted-foreground" />
        </ItemActions>
      </Item>
    </div>
  ),
}

export const ImageMedia: Story = {
  name: 'item-image',
  render: () => (
    <div className="max-w-md">
      <Item>
        <ItemMedia variant="image">
          <img
            src="https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=120&h=120&q=60"
            alt="Cover"
          />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Image item</ItemTitle>
          <ItemDescription>Media variant: image</ItemDescription>
        </ItemContent>
        <ItemActions>
          <ChevronRight className="text-muted-foreground" />
        </ItemActions>
      </Item>
    </div>
  ),
}

export const Group: Story = {
  name: 'item-group',
  render: () => (
    <div className="max-w-md">
      <ItemGroup>
        <Item>
          <ItemMedia variant="icon">
            <Home />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Dashboard</ItemTitle>
            <ItemDescription>Overview</ItemDescription>
          </ItemContent>
          <ItemActions>
            <ChevronRight className="text-muted-foreground" />
          </ItemActions>
        </Item>
        <ItemSeparator />
        <Item>
          <ItemMedia variant="icon">
            <Mail />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Inbox</ItemTitle>
            <ItemDescription>Messages</ItemDescription>
          </ItemContent>
          <ItemActions>
            <ChevronRight className="text-muted-foreground" />
          </ItemActions>
        </Item>
      </ItemGroup>
    </div>
  ),
}

export const Header: Story = {
  name: 'item-header',
  render: () => (
    <div className="max-w-md">
      <Item>
        <ItemHeader>Account</ItemHeader>
        <ItemMedia variant="icon">
          <User />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Personal info</ItemTitle>
          <ItemDescription>Update your details</ItemDescription>
        </ItemContent>
        <ItemActions>
          <ChevronRight className="text-muted-foreground" />
        </ItemActions>
        <ItemFooter>Last updated: today</ItemFooter>
      </Item>
    </div>
  ),
}

export const Link: Story = {
  name: 'item-link',
  render: () => (
    <div className="max-w-md">
      <Item asChild>
        <a href="/dashboard">
          <ItemMedia variant="icon">
            <Home />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Dashboard</ItemTitle>
            <ItemDescription>
              Overview of your account and activity.
            </ItemDescription>
          </ItemContent>
          <ItemActions>
            <ChevronRight className="text-muted-foreground" />
          </ItemActions>
        </a>
      </Item>
    </div>
  ),
}

export const Dropdown: Story = {
  name: 'item-dropdown',
  render: () => (
    <div className="max-w-md">
      <Item>
        <ItemMedia variant="icon">
          <Mail />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Updates</ItemTitle>
          <ItemDescription>Manage notification settings</ItemDescription>
        </ItemContent>
        <ItemActions>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <MoreVertical />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Mark as read</DropdownMenuItem>
              <DropdownMenuItem>Mute</DropdownMenuItem>
              <DropdownMenuItem>Archive</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </ItemActions>
      </Item>
    </div>
  ),
}
