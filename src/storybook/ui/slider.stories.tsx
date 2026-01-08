import type {Meta, StoryObj} from '@storybook/react'

import {Slider} from '../../components/ui/slider'

const meta = {
  title: 'UI/Slider',
  component: Slider,
  tags: ['autodocs'],
} satisfies Meta<typeof Slider>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    defaultValue: [40],
    max: 100,
    step: 1,
  },
}
