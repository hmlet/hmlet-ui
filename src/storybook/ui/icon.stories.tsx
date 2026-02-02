import {Sun, Moon, Heart} from 'lucide-react'
import type {Meta, StoryObj} from '@storybook/react'
import {Icon} from '../../components/ui'

const meta: Meta<typeof Icon> = {
  title: 'UI/Icon',
  component: Icon,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Icon>

export const Default: Story = {
  args: {
    icon: Sun,
    size: 32,
  },
}

export const Themed: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        gap: 24,
        alignItems: 'center',
        background: 'var(--background)',
        padding: 24,
      }}
    >
      <Icon icon={Sun} size={32} />
      <Icon icon={Moon} size={32} />
      <Icon icon={Heart} size={32} />
    </div>
  ),
  parameters: {
    backgrounds: {default: 'light'},
  },
}

export const CustomColor: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        gap: 24,
        alignItems: 'center',
        background: 'var(--background)',
        padding: 24,
      }}
    >
      <Icon icon={Sun} size={32} color="#ff7960" />
      <Icon icon={Moon} size={32} color="#251f42" />
      <Icon icon={Heart} size={32} color="#02b16b" />
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        gap: 24,
        alignItems: 'center',
        background: 'var(--background)',
        padding: 24,
      }}
    >
      <Icon icon={Sun} size={16} />
      <Icon icon={Sun} size={24} />
      <Icon icon={Sun} size={32} />
      <Icon icon={Sun} size={48} />
    </div>
  ),
}
