import type {Meta, StoryObj} from '@storybook/react'

import {Badge} from '../../components/ui/badge'
import {BadgeCheck} from 'lucide-react'

const meta = {
  title: 'UI/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    controls: {
      include: ['children', 'variant', 'asChild', 'className'],
    },
    docs: {
      description: {
        component: 'Key props: `variant`, `asChild`, `className`, `children`.',
      },
    },
  },
  argTypes: {
    children: {
      control: 'text',
    },
    variant: {
      options: ['default', 'secondary', 'outline', 'destructive'],
      control: {type: 'inline-radio'},
    },
    asChild: {
      control: 'boolean',
    },
    className: {
      control: 'text',
    },
  },
  args: {
    children: 'Badge',
  },
} satisfies Meta<typeof Badge>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="destructive">Destructive</Badge>
    </div>
  ),
}

export const Examples: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap items-center gap-2">
        <Badge className="rounded-full px-4 py-2">Badge</Badge>
        <Badge variant="secondary" className="rounded-full px-4 py-2">
          Secondary
        </Badge>
        <Badge variant="destructive" className="rounded-full px-4 py-2">
          Destructive
        </Badge>
        <Badge variant="outline" className="rounded-full px-4 py-2">
          Outline
        </Badge>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <Badge className="rounded-full px-4 py-2">
          <BadgeCheck />
          Verified
        </Badge>
        <Badge
          variant="secondary"
          className="size-8 justify-center rounded-full p-0"
        >
          8
        </Badge>
        <Badge
          variant="destructive"
          className="size-8 justify-center rounded-full p-0"
        >
          99
        </Badge>
        <Badge
          variant="outline"
          className="size-8 justify-center rounded-full p-0"
        >
          20+
        </Badge>
      </div>
    </div>
  ),
}
