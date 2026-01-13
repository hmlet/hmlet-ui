import type {Meta, StoryObj} from '@storybook/react'

import {LayoutExamples} from '../../components/LayoutExamples'

const meta = {
  title: 'Showcase/LayoutExamples',
  component: LayoutExamples,
  tags: ['autodocs'],
} satisfies Meta<typeof LayoutExamples>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="max-w-6xl">
      <LayoutExamples />
    </div>
  ),
}
