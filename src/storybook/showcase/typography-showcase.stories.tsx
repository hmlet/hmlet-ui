import type {Meta, StoryObj} from '@storybook/react'

import {TypographyShowcase} from '../../components/TypographyShowcase'

const meta = {
  title: 'Showcase/TypographyShowcase',
  component: TypographyShowcase,
  tags: ['autodocs'],
} satisfies Meta<typeof TypographyShowcase>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="max-w-5xl">
      <TypographyShowcase />
    </div>
  ),
}
