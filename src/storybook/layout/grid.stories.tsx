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
      options: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        'responsive-2',
        'responsive-3',
        'responsive-4',
        'responsive-1-2-3-4',
        'responsive-2-3-4-5',
        'responsive-auto-fit',
        'responsive-auto-fill',
      ],
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

export const ResponsiveColumns: Story = {
  args: {
    columns: 'responsive-1-2-3-4',
    gap: '4',
  },
  render: args => (
    <div className="max-w-5xl">
      <Grid {...args} className="rounded-md border bg-muted/30 p-4">
        {Array.from({length: 10}).map((_, index) => (
          <div key={index} className="rounded-md border bg-card p-3 text-sm">
            Responsive Item {index + 1}
          </div>
        ))}
      </Grid>
    </div>
  ),
}

export const AutoFitColumns: Story = {
  args: {
    columns: 'responsive-auto-fit',
    gap: '4',
  },
  render: args => (
    <div className="max-w-5xl">
      <Grid {...args} className="rounded-md border bg-muted/30 p-4">
        {Array.from({length: 12}).map((_, index) => (
          <div
            key={index}
            className="rounded-md border bg-card p-3 text-sm min-w-[120px]"
          >
            Auto-fit {index + 1}
          </div>
        ))}
      </Grid>
    </div>
  ),
}
