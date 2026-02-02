import {ThemeToggle} from './ThemeToggle'
import {Meta, StoryObj} from '@storybook/react'

const meta: Meta<typeof ThemeToggle> = {
  title: 'Components/ThemeToggle',
  component: ThemeToggle,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof ThemeToggle>

export const Default: Story = {
  args: {},
}

export const Sizes: Story = {
  render: () => (
    <div style={{display: 'flex', gap: 24, alignItems: 'center'}}>
      <ThemeToggle iconSize={16} srText="Toggle theme small" />
      <ThemeToggle iconSize={24} srText="Toggle theme medium" />
      <ThemeToggle iconSize={32} srText="Toggle theme large" />
      <ThemeToggle iconSize={48} srText="Toggle theme x-large" />
    </div>
  ),
}
