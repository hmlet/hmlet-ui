import type {Meta, StoryObj} from '@storybook/react'

import {LayoutAspectRatio as AspectRatio} from '../../components/layout'

const meta = {
  title: 'Layout/AspectRatio',
  component: AspectRatio,
  tags: ['autodocs'],
  parameters: {
    controls: {
      include: ['ratio', 'className'],
    },
    docs: {
      description: {
        component:
          'Fixed aspect-ratio container for media. Use it to keep images/video stable while loading and to ensure consistent card layouts.',
      },
    },
  },
  argTypes: {
    ratio: {
      control: {type: 'select'},
      options: ['1/1', '4/3', '16/9', '21/9', '3/4', '9/16'],
      description: 'Aspect ratio preset (width/height).',
    },
    className: {control: 'text'},
  },
  args: {
    ratio: '16/9',
  },
} satisfies Meta<typeof AspectRatio>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: args => (
    <div className="max-w-md overflow-hidden rounded-md border">
      <AspectRatio {...args}>
        <div className="flex h-full w-full items-center justify-center bg-muted text-sm text-muted-foreground">
          ratio: {String(args.ratio)}
        </div>
      </AspectRatio>
    </div>
  ),
}
