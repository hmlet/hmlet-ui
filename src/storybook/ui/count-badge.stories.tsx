import type {Meta, StoryObj} from '@storybook/react'
import {CountBadge} from '../../components/ui/count-badge'

const meta: Meta<typeof CountBadge> = {
  title: 'UI/CountBadge',
  component: CountBadge,
  tags: ['autodocs'],
  parameters: {
    controls: {include: ['count', 'variant', 'size', 'className']},
    docs: {
      description: {
        component:
          'A circular badge for displaying counts, such as notifications or items in a cart.',
      },
    },
  },
  argTypes: {
    count: {control: {type: 'number', min: 0, step: 1}},
    variant: {
      control: {type: 'select'},
      options: ['primary', 'secondary', 'success', 'destructive', 'muted'],
    },
    size: {
      control: {type: 'select'},
      options: ['sm', 'md', 'lg'],
    },
    className: {control: 'text'},
  },
  args: {
    count: 5,
    variant: 'secondary',
    size: 'sm',
  },
}

export default meta

type Story = StoryObj<typeof CountBadge>

export const Playground: Story = {
  render: args => <CountBadge {...args} />,
}

export const AllVariants: Story = {
  render: args => (
    <div style={{display: 'flex', gap: 16}}>
      {(
        ['primary', 'secondary', 'success', 'destructive', 'muted'] as const
      ).map(variant => (
        <CountBadge key={variant} {...args} variant={variant} />
      ))}
    </div>
  ),
  args: {count: 8, size: 'md'},
}

export const AllSizes: Story = {
  render: args => (
    <div style={{display: 'flex', gap: 16}}>
      {(['sm', 'md', 'lg'] as const).map(size => (
        <CountBadge key={size} {...args} size={size} />
      ))}
    </div>
  ),
  args: {count: 12, variant: 'primary'},
}
