import type {Meta, StoryObj} from '@storybook/react'

import {LayoutGuide} from '../../components/LayoutGuide'

const meta = {
  title: 'Showcase/LayoutGuide',
  component: LayoutGuide,
  tags: ['autodocs'],
} satisfies Meta<typeof LayoutGuide>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="max-w-6xl">
      <LayoutGuide />
    </div>
  ),
}
