import type {Meta, StoryObj} from '@storybook/react'

import {Center} from '../../components/layout'

const meta = {
  title: 'Layout/Center',
  component: Center,
  tags: ['autodocs'],
  parameters: {
    controls: {
      include: ['inline', 'height', 'className'],
    },
    docs: {
      description: {
        component:
          'Centering utility. Centers children both horizontally and vertically using flexbox. Use `height="full" | "screen"` for empty states and page-level center layouts.',
      },
    },
  },
  argTypes: {
    inline: {control: 'boolean'},
    height: {
      control: {type: 'select'},
      options: ['auto', 'full', 'screen'],
    },
    className: {control: 'text'},
  },
  args: {
    inline: false,
    height: 'auto',
  },
} satisfies Meta<typeof Center>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: args => (
    <div className="h-48 rounded-md border bg-muted/30 p-4">
      <Center
        {...args}
        className={`h-full rounded-md border bg-card ${args.className ?? ''}`.trim()}
      >
        <div className="text-sm">Centered</div>
      </Center>
    </div>
  ),
}
