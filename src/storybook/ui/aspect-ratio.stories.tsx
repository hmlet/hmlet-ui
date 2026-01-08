import type {Meta, StoryObj} from '@storybook/react'

import {AspectRatio} from '../../components/ui/aspect-ratio'

const meta = {
  title: 'UI/AspectRatio',
  component: AspectRatio,
  tags: ['autodocs'],
  parameters: {
    controls: {
      include: ['ratio', 'asChild', 'className'],
    },
    docs: {
      description: {
        component: 'Key props: `ratio`, `asChild`, `className`.',
      },
    },
  },
  argTypes: {
    ratio: {
      control: {type: 'range', min: 0.25, max: 4, step: 0.05},
      description: 'The aspect ratio (width / height).',
    },
    asChild: {
      control: 'boolean',
    },
    className: {
      control: 'text',
    },
  },
  args: {
    ratio: 16 / 9,
  },
} satisfies Meta<typeof AspectRatio>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: args => (
    <div className="w-full max-w-sm overflow-hidden rounded-md border">
      <AspectRatio {...args}>
        <div className="flex h-full w-full items-center justify-center bg-muted text-sm text-muted-foreground">
          ratio: {Number(args.ratio ?? 0).toFixed(2)}
        </div>
      </AspectRatio>
    </div>
  ),
}
