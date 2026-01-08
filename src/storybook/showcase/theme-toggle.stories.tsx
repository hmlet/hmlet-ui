import type {Meta, StoryObj} from '@storybook/react'

import {ThemeToggle} from '../../components/ThemeToggle'

const meta = {
  title: 'Showcase/ThemeToggle',
  component: ThemeToggle,
  tags: ['autodocs'],
} satisfies Meta<typeof ThemeToggle>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="min-h-[200px] flex items-center justify-center bg-background">
      <ThemeToggle />
    </div>
  ),
}
