import type {Meta, StoryObj} from '@storybook/react'

import {HStack, Spacer} from '../../components/layout'

const meta = {
  title: 'Layout/HStack',
  component: HStack,
  tags: ['autodocs'],
  parameters: {
    controls: {
      include: ['gap', 'align', 'justify', 'wrap', 'className'],
    },
    docs: {
      description: {
        component:
          'Ergonomic horizontal `Stack`. Direction is fixed to horizontal. Use `Spacer` inside to push content apart (e.g., left + right sections in headers).',
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
    gap: '4',
    align: 'center',
    justify: 'start',
    wrap: 'nowrap',
  },
} satisfies Meta<typeof HStack>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: args => (
    <div className="max-w-2xl">
      <HStack
        {...args}
        className={`rounded-md border bg-muted/30 p-4 ${args.className ?? ''}`.trim()}
      >
        <div className="rounded-md border bg-card px-3 py-2 text-sm">Left</div>
        <div className="rounded-md border bg-card px-3 py-2 text-sm">
          Middle
        </div>
        <div className="rounded-md border bg-card px-3 py-2 text-sm">Right</div>
      </HStack>
    </div>
  ),
}

export const WithSpacer: Story = {
  name: 'Using Spacer',
  render: () => (
    <div className="max-w-2xl">
      <HStack
        gap="4"
        align="center"
        className="rounded-md border bg-muted/30 p-4"
      >
        <div className="rounded-md border bg-card px-3 py-2 text-sm">Logo</div>
        <Spacer />
        <HStack gap="2" align="center">
          <div className="rounded-md border bg-card px-3 py-2 text-sm">
            Docs
          </div>
          <div className="rounded-md border bg-card px-3 py-2 text-sm">
            Pricing
          </div>
          <div className="rounded-md border bg-card px-3 py-2 text-sm">
            Sign in
          </div>
        </HStack>
      </HStack>
    </div>
  ),
}
