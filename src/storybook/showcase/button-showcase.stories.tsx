import type {Meta, StoryObj} from '@storybook/react'

import {ButtonShowcase} from '../../components/ButtonShowcase'

const meta = {
  title: 'Showcase/ButtonShowcase',
  component: ButtonShowcase,
  tags: ['autodocs'],
} satisfies Meta<typeof ButtonShowcase>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="max-w-5xl">
      <ButtonShowcase />
    </div>
  ),
}
