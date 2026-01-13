import type {Meta, StoryObj} from '@storybook/react'

import {HStack, Spacer} from '../../components/layout'

const meta = {
  title: 'Layout/Spacer',
  component: Spacer,
  tags: ['autodocs'],
  parameters: {
    controls: {
      include: ['className'],
    },
    docs: {
      description: {
        component:
          'Flexible space for flex layouts. `Spacer` renders a `flex: 1` element (and is `aria-hidden`) that expands to fill available space—use it to push siblings apart inside `HStack`/`Stack`/`Inline`.',
      },
    },
  },
  argTypes: {
    className: {control: 'text'},
  },
} satisfies Meta<typeof Spacer>

export default meta

type Story = StoryObj<typeof meta>

export const Example: Story = {
  name: 'Example',
  render: () => (
    <div className="max-w-2xl">
      <HStack
        gap="3"
        align="center"
        className="rounded-md border bg-muted/30 p-4"
      >
        <div className="rounded-md border bg-card px-3 py-2 text-sm">Left</div>
        <Spacer />
        <div className="rounded-md border bg-card px-3 py-2 text-sm">Right</div>
      </HStack>
    </div>
  ),
}
