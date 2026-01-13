import type {Meta, StoryObj} from '@storybook/react'

import {Divider, HStack, VStack} from '../../components/layout'

const meta = {
  title: 'Layout/Divider',
  component: Divider,
  tags: ['autodocs'],
  parameters: {
    controls: {
      include: ['orientation', 'thickness', 'spacing', 'className'],
    },
    docs: {
      description: {
        component:
          'Structural separator between content blocks. Supports horizontal/vertical orientation, thickness, and optional spacing. Use it to separate groups without adding decorative styling to children.',
      },
    },
  },
  argTypes: {
    orientation: {
      control: {type: 'select'},
      options: ['horizontal', 'vertical'],
    },
    thickness: {
      control: {type: 'select'},
      options: [1, 2],
    },
    spacing: {
      control: {type: 'select'},
      options: ['none', '2', '4', '6'],
    },
    className: {control: 'text'},
  },
  args: {
    orientation: 'horizontal',
    thickness: 1,
    spacing: '4',
  },
} satisfies Meta<typeof Divider>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: args => (
    <div className="max-w-xl">
      {args.orientation === 'vertical' ? (
        <HStack
          align="stretch"
          className="h-24 rounded-md border bg-muted/30 p-4"
        >
          <div className="rounded-md border bg-card px-3 py-2 text-sm">
            Left
          </div>
          <Divider {...args} />
          <div className="rounded-md border bg-card px-3 py-2 text-sm">
            Right
          </div>
        </HStack>
      ) : (
        <VStack gap="0" className="rounded-md border bg-muted/30 p-4">
          <div className="rounded-md border bg-card px-3 py-2 text-sm">Top</div>
          <Divider {...args} />
          <div className="rounded-md border bg-card px-3 py-2 text-sm">
            Bottom
          </div>
        </VStack>
      )}
    </div>
  ),
}
