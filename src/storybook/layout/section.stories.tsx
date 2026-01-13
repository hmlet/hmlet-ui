import type {Meta, StoryObj} from '@storybook/react'

import {Container, Section, VStack} from '../../components/layout'

const meta = {
  title: 'Layout/Section',
  component: Section,
  tags: ['autodocs'],
  parameters: {
    controls: {
      include: ['paddingY', 'background', 'className'],
    },
    docs: {
      description: {
        component:
          'Page-level vertical grouping. Adds consistent vertical padding and optional background to visually separate major regions (hero, feature band, footer section). Pair with `Container` inside.',
      },
    },
  },
  argTypes: {
    paddingY: {
      control: {type: 'select'},
      options: ['6', '8', '12', '16', '20'],
    },
    background: {
      control: {type: 'select'},
      options: ['none', 'default', 'subtle', 'card', 'primary', 'secondary'],
    },
    className: {control: 'text'},
  },
  args: {
    paddingY: '12',
    background: 'subtle',
  },
} satisfies Meta<typeof Section>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: args => (
    <div className="rounded-md border bg-muted/30">
      <Section {...args} className={`${args.className ?? ''}`.trim()}>
        <Container maxWidth="lg">
          <VStack gap="4" align="start">
            <h3 className="text-lg font-semibold">Section title</h3>
            <p className="text-sm text-muted-foreground">
              Sections define the page rhythm. Put your content inside a
              `Container` so widths are consistent.
            </p>
            <div className="rounded-md border bg-card p-4 text-sm">
              Content block
            </div>
          </VStack>
        </Container>
      </Section>
    </div>
  ),
}
