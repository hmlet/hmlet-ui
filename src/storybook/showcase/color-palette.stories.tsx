import type {Meta, StoryObj} from '@storybook/react'

import {ColorPalette} from '../../components/ColorPalette'

const meta = {
  title: 'Showcase/ColorPalette',
  component: ColorPalette,
  tags: ['autodocs'],
} satisfies Meta<typeof ColorPalette>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="max-w-5xl">
      <ColorPalette />
    </div>
  ),
}
