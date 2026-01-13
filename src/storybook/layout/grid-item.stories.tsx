import type {Meta, StoryObj} from '@storybook/react'

import {Grid, GridItem} from '../../components/layout'

const meta = {
  title: 'Layout/GridItem',
  component: GridItem,
  tags: ['autodocs'],
  parameters: {
    controls: {
      include: ['colSpan', 'rowSpan', 'alignSelf', 'justifySelf', 'className'],
    },
    docs: {
      description: {
        component:
          'Placement controller for `Grid` children. Use `colSpan`/`rowSpan` to span tracks and `alignSelf`/`justifySelf` to override alignment per item.',
      },
    },
  },
  argTypes: {
    colSpan: {
      control: {type: 'select'},
      options: ['1', '2', '3', '4', '6', '8', '12', 'full'],
    },
    rowSpan: {
      control: {type: 'select'},
      options: ['1', '2', '3', '4', '6', 'full'],
    },
    alignSelf: {
      control: {type: 'select'},
      options: ['auto', 'start', 'center', 'end', 'stretch'],
    },
    justifySelf: {
      control: {type: 'select'},
      options: ['auto', 'start', 'center', 'end', 'stretch'],
    },
    className: {control: 'text'},
  },
  args: {
    colSpan: '8',
  },
} satisfies Meta<typeof GridItem>

export default meta

type Story = StoryObj<typeof meta>

export const TwoColumnLayout: Story = {
  name: 'Two-column layout',
  render: args => (
    <div className="max-w-5xl">
      <Grid columns="12" gap="4" className="rounded-md border bg-muted/30 p-4">
        <GridItem
          {...args}
          className={`rounded-md border bg-card p-3 ${args.className ?? ''}`.trim()}
        >
          Main (colSpan={String(args.colSpan)})
        </GridItem>
        <GridItem colSpan="4" className="rounded-md border bg-card p-3">
          Sidebar (colSpan=4)
        </GridItem>
      </Grid>
    </div>
  ),
}
