import type {Meta, StoryObj} from '@storybook/react'

import {
  Typography,
  type TypographyVariant,
} from '../../components/ui/typography'

const meta = {
  title: 'UI/Typography',
  component: Typography,
  tags: ['autodocs'],
  parameters: {
    controls: {
      include: ['variant', 'as', 'asChild', 'children', 'className'],
    },
    docs: {
      description: {
        component:
          'Typography primitive for consistent text sizing. Use `variant` for design-system sizes; override element with `as` or `asChild` when needed.',
      },
    },
  },
  argTypes: {
    children: {control: 'text'},
    variant: {
      options: [
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'display-xl',
        'display-lg',
        'display-md',
        'body-xl',
        'body-lg',
        'body-md',
        'body-base',
        'body-sm',
        'body-xs',
      ] satisfies TypographyVariant[],
      control: {type: 'select'},
    },
    as: {control: 'text'},
    asChild: {control: 'boolean'},
    className: {control: 'text'},
  },
  args: {
    variant: 'body-base',
    children: 'The quick brown fox jumps over the lazy dog.',
  },
} satisfies Meta<typeof Typography>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const AllVariants: Story = {
  name: 'All Variants',
  render: () => (
    <div className="space-y-6">
      <div>
        <Typography
          className="mb-3 text-sm font-medium text-muted-foreground"
          as="p"
        >
          Headings
        </Typography>
        <div className="space-y-3">
          {(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const).map(v => (
            <div
              key={v}
              className="flex items-baseline gap-4 border-b border-border pb-3"
            >
              <span className="min-w-16 text-xs text-muted-foreground">
                {v.toUpperCase()}
              </span>
              <Typography variant={v}>Sample heading ({v})</Typography>
            </div>
          ))}
        </div>
      </div>

      <div>
        <Typography
          className="mb-3 text-sm font-medium text-muted-foreground"
          as="p"
        >
          Display + Body
        </Typography>
        <div className="space-y-3">
          {(
            [
              'display-xl',
              'display-lg',
              'display-md',
              'body-xl',
              'body-lg',
              'body-md',
              'body-base',
              'body-sm',
              'body-xs',
            ] as const
          ).map(v => (
            <div key={v} className="flex items-start gap-4">
              <span className="min-w-24 pt-1 text-xs text-muted-foreground">
                {v}
              </span>
              <Typography variant={v}>
                The quick brown fox jumps over the lazy dog.
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
}
