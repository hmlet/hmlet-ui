import type {Meta, StoryObj} from '@storybook/react'

import {Inline} from '../../components/layout'

const meta = {
  title: 'Layout/Inline',
  component: Inline,
  tags: ['autodocs'],
  parameters: {
    controls: {
      include: ['gap', 'align', 'className'],
    },
    docs: {
      description: {
        component:
          'Inline, wrapping, text-adjacent layout. Always uses `inline-flex` + `flex-wrap` so it behaves well inside paragraphs and tight UI (icons + labels, metadata chips, inline actions).',
      },
    },
  },
  argTypes: {
    gap: {
      control: {type: 'select'},
      options: ['0', '1', '2', '3', '4', '6'],
    },
    align: {
      control: {type: 'select'},
      options: ['start', 'center', 'end', 'baseline'],
    },
    className: {control: 'text'},
  },
  args: {
    gap: '2',
    align: 'center',
  },
} satisfies Meta<typeof Inline>

export default meta

type Story = StoryObj<typeof meta>

const Chip = ({children}: {children: React.ReactNode}) => (
  <span className="inline-flex items-center rounded-full border bg-card px-2 py-1 text-xs">
    {children}
  </span>
)

export const Playground: Story = {
  render: args => (
    <div className="max-w-2xl">
      <p className="text-sm text-foreground">
        Inline content:
        <Inline {...args} className={`ml-2 ${args.className ?? ''}`.trim()}>
          <Chip>Wifi</Chip>
          <Chip>Parking</Chip>
          <Chip>Pet friendly</Chip>
          <Chip>Breakfast included</Chip>
          <Chip>Flexible cancellation</Chip>
        </Inline>
      </p>
    </div>
  ),
}
