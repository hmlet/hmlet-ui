import type {Meta, StoryObj} from '@storybook/react'

import {CardsShowcase} from '../../components/CardsShowcase'

const meta = {
  title: 'Showcase/CardsShowcase',
  component: CardsShowcase,
  tags: ['autodocs'],
} satisfies Meta<typeof CardsShowcase>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="max-w-6xl">
      <CardsShowcase />
    </div>
  ),
}
