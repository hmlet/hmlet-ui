import type {Meta, StoryObj} from '@storybook/react'

import {Wrap} from '../../components/layout'

const meta = {
  title: 'Layout/Wrap',
  component: Wrap,
  tags: ['autodocs'],
  parameters: {
    controls: {
      include: ['gap', 'align', 'justify', 'className'],
    },
    docs: {
      description: {
        component:
          'Wrapping horizontal layout. Use it for tags, filters, and chip collections where items should wrap naturally to new lines. Similar to `Inline`, but intended for block-level collections.',
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
      options: ['start', 'center', 'end', 'stretch', 'baseline'],
    },
    justify: {
      control: {type: 'select'},
      options: ['start', 'center', 'end', 'space-between'],
    },
    className: {control: 'text'},
  },
  args: {
    gap: '2',
    align: 'start',
    justify: 'start',
  },
} satisfies Meta<typeof Wrap>

export default meta

type Story = StoryObj<typeof meta>

const Tag = ({children}: {children: React.ReactNode}) => (
  <span className="inline-flex items-center rounded-full border bg-card px-3 py-1 text-xs">
    {children}
  </span>
)

export const Playground: Story = {
  render: args => (
    <div className="max-w-2xl">
      <Wrap
        {...args}
        className={`rounded-md border bg-muted/30 p-4 ${args.className ?? ''}`.trim()}
      >
        <Tag>Wifi</Tag>
        <Tag>Kitchen</Tag>
        <Tag>Air conditioning</Tag>
        <Tag>Washer</Tag>
        <Tag>Free parking</Tag>
        <Tag>Gym</Tag>
        <Tag>Pool</Tag>
        <Tag>Pet friendly</Tag>
      </Wrap>
    </div>
  ),
}
