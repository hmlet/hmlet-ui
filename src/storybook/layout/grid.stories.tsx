import type {Meta, StoryObj} from '@storybook/react'

import {Grid} from '../../components/layout'

const meta = {
  title: 'Layout/Grid',
  component: Grid,
  tags: ['autodocs'],
  parameters: {
    controls: {
      include: [
        'columns',
        'gap',
        'autoFlow',
        'alignItems',
        'justifyItems',
        'className',
      ],
    },
    docs: {
      description: {
        component:
          'Two-dimensional layout using CSS Grid. Use `columns` (1–12) and `gap` for spacing. Use with `GridItem` when you need explicit spans and placement.',
      },
    },
  },
  argTypes: {
    columns: {
      control: {type: 'select'},
      options: ['1', '2', '3', '4', '6', '12'],
    },
    gap: {
      control: {type: 'select'},
      options: ['0', '1', '2', '3', '4', '6', '8', '12', '16', '20'],
    },
    autoFlow: {
      control: {type: 'select'},
      options: ['row', 'column', 'dense'],
    },
    alignItems: {
      control: {type: 'select'},
      options: ['start', 'center', 'end', 'stretch'],
    },
    justifyItems: {
      control: {type: 'select'},
      options: ['start', 'center', 'end', 'stretch'],
    },
    className: {control: 'text'},
  },
  args: {
    columns: '3',
    gap: '4',
    autoFlow: 'row',
  },
} satisfies Meta<typeof Grid>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: args => (
    <div className="max-w-5xl">
      <Grid
        {...args}
        className={`rounded-md border bg-muted/30 p-4 ${args.className ?? ''}`.trim()}
      >
        {Array.from({length: 8}).map((_, index) => (
          <div key={index} className="rounded-md border bg-card p-3 text-sm">
            Item {index + 1}
          </div>
        ))}
      </Grid>
    </div>
  ),
}
