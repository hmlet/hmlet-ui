import type {Meta, StoryObj} from '@storybook/react'

import {Bleed, Container, VStack} from '../../components/layout'

const meta = {
  title: 'Layout/Bleed',
  component: Bleed,
  tags: ['autodocs'],
  parameters: {
    controls: {
      include: ['horizontal', 'vertical', 'all', 'className'],
    },
    docs: {
      description: {
        component:
          'Escape parent padding. Use it inside padded containers to make specific content span edge-to-edge (e.g., full-bleed images) while keeping surrounding content aligned.',
      },
    },
  },
  argTypes: {
    horizontal: {control: 'boolean'},
    vertical: {control: 'boolean'},
    all: {control: 'boolean'},
    className: {control: 'text'},
  },
  args: {
    horizontal: true,
    vertical: false,
    all: false,
  },
} satisfies Meta<typeof Bleed>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: args => (
    <div className="rounded-md border bg-muted/30 py-6">
      <Container maxWidth="md" padding="4">
        <VStack gap="4" align="stretch">
          <div className="rounded-md border bg-card p-4 text-sm">
            Content inside container
          </div>
          <Bleed {...args} className={`${args.className ?? ''}`.trim()}>
            <div className="rounded-md border bg-card p-4 text-sm">
              This block bleeds (horizontal={String(args.horizontal)}, vertical=
              {String(args.vertical)}, all={String(args.all)})
            </div>
          </Bleed>
          <div className="rounded-md border bg-card p-4 text-sm">
            More content inside container
          </div>
        </VStack>
      </Container>
    </div>
  ),
}
