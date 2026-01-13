import type {Meta, StoryObj} from '@storybook/react'

import {Box} from '../../components/layout'

const meta = {
  title: 'Layout/Box',
  component: Box,
  tags: ['autodocs'],
  parameters: {
    controls: {
      include: [
        'children',
        'padding',
        'paddingX',
        'paddingY',
        'width',
        'height',
        'display',
        'className',
      ],
    },
    docs: {
      description: {
        component:
          'Base layout primitive. Use it for padding, sizing, and display control. Prefer `Stack`/`Grid` for flow layouts; use `Box` as the building block when you only need a container.',
      },
    },
  },
  argTypes: {
    padding: {
      control: {type: 'select'},
      options: ['none', '1', '2', '3', '4', '6', '8', '12', '16', '20'],
      description: 'Applies padding on all sides using spacing tokens.',
    },
    paddingX: {
      control: {type: 'select'},
      options: ['none', '1', '2', '3', '4', '6', '8', '12', '16', '20'],
      description: 'Applies horizontal padding (left/right).',
    },
    paddingY: {
      control: {type: 'select'},
      options: ['none', '1', '2', '3', '4', '6', '8', '12', '16', '20'],
      description: 'Applies vertical padding (top/bottom).',
    },
    width: {
      control: {type: 'select'},
      options: ['auto', 'full', 'fit', 'screen'],
    },
    height: {
      control: {type: 'select'},
      options: ['auto', 'full', 'fit', 'screen'],
    },
    display: {
      control: {type: 'select'},
      options: [
        'block',
        'inline',
        'inline-block',
        'flex',
        'inline-flex',
        'grid',
      ],
    },
    className: {control: 'text'},
    children: {control: 'text'},
  },
  args: {
    padding: '4',
    width: 'full',
    children: 'Box content',
  },
} satisfies Meta<typeof Box>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: args => (
    <div className="max-w-xl">
      <Box
        {...args}
        className={`rounded-md border bg-card ${args.className ?? ''}`.trim()}
      />
    </div>
  ),
}

export const Sizing: Story = {
  name: 'Sizing',
  render: () => (
    <div className="grid max-w-3xl grid-cols-1 gap-4 md:grid-cols-2">
      <Box padding="4" width="full" className="rounded-md border bg-card">
        width=&quot;full&quot;
      </Box>
      <Box padding="4" width="fit" className="rounded-md border bg-card">
        width=&quot;fit&quot;
      </Box>
      <Box padding="4" height="full" className="rounded-md border bg-card">
        height=&quot;full&quot; (parent defines height)
      </Box>
      <div className="h-24 rounded-md border bg-muted/30 p-2">
        <Box
          padding="2"
          height="full"
          width="full"
          className="rounded-md border bg-card"
        >
          Nested full height
        </Box>
      </div>
    </div>
  ),
}
