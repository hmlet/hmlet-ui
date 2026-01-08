import type {Meta, StoryObj} from '@storybook/react'

import {ImplementationGuide} from '../../components/ImplementationGuide'

const meta = {
  title: 'Showcase/ImplementationGuide',
  component: ImplementationGuide,
  tags: ['autodocs'],
} satisfies Meta<typeof ImplementationGuide>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="max-w-6xl">
      <ImplementationGuide />
    </div>
  ),
}
