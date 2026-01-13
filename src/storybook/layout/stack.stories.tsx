import type {Meta, StoryObj} from '@storybook/react'

import {Stack} from '../../components/layout'

const meta = {
  title: 'Layout/Stack',
  component: Stack,
  tags: ['autodocs'],
  parameters: {
    controls: {
      include: ['direction', 'gap', 'align', 'justify', 'wrap', 'className'],
    },
    docs: {
      description: {
        component:
          'One-dimensional layout for vertical or horizontal flow. `Stack` owns spacing via `gap`—children should not use margins. Use `align`/`justify` to position children and `wrap` for responsive rows.',
      },
    },
  },
  argTypes: {
    direction: {
      control: {type: 'select'},
      options: ['vertical', 'horizontal'],
    },
    gap: {
      control: {type: 'select'},
      options: ['0', '1', '2', '3', '4', '6', '8', '12', '16', '20'],
      description: 'Space between children (token-driven).',
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
    direction: 'vertical',
    gap: '4',
    align: 'stretch',
    justify: 'start',
    wrap: 'nowrap',
  },
} satisfies Meta<typeof Stack>

export default meta

type Story = StoryObj<typeof meta>

const Item = ({label}: {label: string}) => (
  <div className="rounded-md border bg-card px-3 py-2 text-sm">{label}</div>
)

export const Playground: Story = {
  name: 'Playground',
  render: args => (
    <div className="max-w-xl">
      <Stack
        {...args}
        className={`rounded-md border bg-muted/30 p-4 ${args.className ?? ''}`.trim()}
      >
        <Item label="Item 1" />
        <Item label="Item 2" />
        <Item label="Item 3" />
      </Stack>
    </div>
  ),
}

export const WithWrap: Story = {
  name: 'Horizontal + Wrap',
  render: () => (
    <div className="max-w-xl">
      <Stack
        direction="horizontal"
        gap="2"
        wrap="wrap"
        className="rounded-md border bg-muted/30 p-4"
      >
        {Array.from({length: 10}).map((_, index) => (
          <Item key={index} label={`Tag ${index + 1}`} />
        ))}
      </Stack>
    </div>
  ),
}
