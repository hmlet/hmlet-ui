import type {Meta, StoryObj} from '@storybook/react'
import * as React from 'react'

import {Avatar, AvatarFallback, AvatarImage} from '../../components/ui/avatar'

type AvatarStoryArgs = React.ComponentProps<typeof Avatar> & {
  src: string
  alt: string
  fallback: string
  delayMs?: number
  onLoadingStatusChange?: React.ComponentProps<
    typeof AvatarImage
  >['onLoadingStatusChange']
}

const meta: Meta<AvatarStoryArgs> = {
  title: 'UI/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: {
    controls: {
      include: [
        'src',
        'alt',
        'fallback',
        'delayMs',
        'onLoadingStatusChange',
        'asChild',
        'className',
      ],
    },
    docs: {
      description: {
        component:
          'Key parts: `Avatar` (Root), `AvatarImage`, `AvatarFallback`. Useful props: `src`, `alt`, `delayMs`, `onLoadingStatusChange`, `className`.',
      },
    },
  },
  argTypes: {
    src: {
      control: 'text',
      description: 'Image source URL (empty will show fallback).',
    },
    alt: {
      control: 'text',
    },
    fallback: {
      control: 'text',
      description: 'Fallback text content.',
    },
    delayMs: {
      control: {type: 'number', min: 0, step: 50},
      description: 'Delay (ms) before showing fallback.',
    },
    onLoadingStatusChange: {
      action: 'onLoadingStatusChange',
    },
    asChild: {
      control: 'boolean',
    },
    className: {
      control: 'text',
    },
  },
  args: {
    src: 'https://picsum.photos/64',
    alt: 'Avatar',
    fallback: 'HM',
    delayMs: 0,
  },
}

export default meta

type Story = StoryObj<AvatarStoryArgs>

export const Default: Story = {
  render: args => {
    const {src, alt, fallback, delayMs, onLoadingStatusChange, ...avatarProps} =
      args

    return (
      <div className="flex items-center gap-3">
        <Avatar {...avatarProps}>
          <AvatarImage
            src={src}
            alt={alt}
            onLoadingStatusChange={onLoadingStatusChange}
          />
          <AvatarFallback delayMs={delayMs}>{fallback}</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src="" alt="Broken" />
          <AvatarFallback>NA</AvatarFallback>
        </Avatar>
      </div>
    )
  },
}

export const BrokenImage: Story = {
  args: {
    src: '',
    alt: 'Broken',
    fallback: 'NA',
  },
  render: args => {
    const {src, alt, fallback, delayMs, onLoadingStatusChange, ...avatarProps} =
      args

    return (
      <Avatar {...avatarProps}>
        <AvatarImage
          src={src}
          alt={alt}
          onLoadingStatusChange={onLoadingStatusChange}
        />
        <AvatarFallback delayMs={delayMs}>{fallback}</AvatarFallback>
      </Avatar>
    )
  },
}
