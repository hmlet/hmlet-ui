import type {Meta, StoryObj} from '@storybook/react'

import {AlertsShowcase} from '../../components/AlertsShowcase'

const meta = {
  title: 'Showcase/AlertsShowcase',
  component: AlertsShowcase,
  tags: ['autodocs'],
} satisfies Meta<typeof AlertsShowcase>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="max-w-3xl">
      <AlertsShowcase />
    </div>
  ),
}
