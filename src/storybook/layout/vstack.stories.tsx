import type {Meta, StoryObj} from '@storybook/react'

import {VStack} from '../../components/layout'

const meta = {
  title: 'Layout/VStack',
  component: VStack,
  tags: ['autodocs'],
  parameters: {
    controls: {
      include: ['gap', 'align', 'justify', 'wrap', 'className'],
    },
    docs: {
      description: {
        component:
          'Ergonomic vertical `Stack`. Direction is fixed to vertical. Use it to create vertical rhythm (headings, paragraphs, forms) without margins on children.',
      },
    },
  },
  argTypes: {
    gap: {
      control: {type: 'select'},
      options: ['0', '1', '2', '3', '4', '6', '8', '12', '16', '20'],
    },
    align: {
      control: {type: 'select'},
      options: ['start', 'center', 'end', 'stretch', 'baseline'],
    },
    justify: {
      control: {type: 'select'},
      options: [
        'start',
        'center',
        'end',
        'space-between',
        'space-around',
        'space-evenly',
      ],
    },
    wrap: {
      control: {type: 'select'},
      options: ['nowrap', 'wrap', 'wrap-reverse'],
    },
    className: {control: 'text'},
  },
  args: {
    gap: '6',
    align: 'stretch',
    justify: 'start',
    wrap: 'nowrap',
  },
} satisfies Meta<typeof VStack>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: args => (
    <div className="max-w-xl">
      <VStack
        {...args}
        className={`rounded-md border bg-muted/30 p-4 ${args.className ?? ''}`.trim()}
      >
        <div className="rounded-md border bg-card px-3 py-2 text-sm">Title</div>
        <div className="rounded-md border bg-card px-3 py-2 text-sm">
          Body text
        </div>
        <div className="rounded-md border bg-card px-3 py-2 text-sm">
          Action
        </div>
      </VStack>
    </div>
  ),
}
