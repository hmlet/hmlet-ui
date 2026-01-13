import type {Meta, StoryObj} from '@storybook/react'

import {Container} from '../../components/layout'

const meta = {
  title: 'Layout/Container',
  component: Container,
  tags: ['autodocs'],
  parameters: {
    controls: {
      include: ['maxWidth', 'padding', 'className'],
    },
    docs: {
      description: {
        component:
          'Width-constraining wrapper. Centers content and applies consistent horizontal padding. Use it to keep reading width comfortable and align page sections.',
      },
    },
  },
  argTypes: {
    maxWidth: {
      control: {type: 'select'},
      options: ['sm', 'md', 'lg', 'xl', '2xl', 'full'],
    },
    padding: {
      control: {type: 'select'},
      options: ['none', '4', '6', '8'],
      description: 'Horizontal padding (px) using spacing tokens.',
    },
    className: {control: 'text'},
  },
  args: {
    maxWidth: 'lg',
    padding: '4',
  },
} satisfies Meta<typeof Container>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: args => (
    <div className="w-full">
      <div className="rounded-md border bg-muted/30 py-6">
        <Container {...args} className={`${args.className ?? ''}`.trim()}>
          <div className="rounded-md border bg-card p-4 text-sm">
            Container content (maxWidth={String(args.maxWidth)}, padding=
            {String(args.padding)})
          </div>
        </Container>
      </div>
    </div>
  ),
}
