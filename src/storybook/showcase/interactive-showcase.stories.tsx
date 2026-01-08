import type {Meta, StoryObj} from '@storybook/react'

import {InteractiveShowcase} from '../../components/InteractiveShowcase'

const meta = {
  title: 'Showcase/InteractiveShowcase',
  component: InteractiveShowcase,
  tags: ['autodocs'],
} satisfies Meta<typeof InteractiveShowcase>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="max-w-5xl">
      <InteractiveShowcase />
    </div>
  ),
}
