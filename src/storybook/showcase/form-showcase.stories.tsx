import type {Meta, StoryObj} from '@storybook/react'

import {FormShowcase} from '../../components/FormShowcase'

const meta = {
  title: 'Showcase/FormShowcase',
  component: FormShowcase,
  tags: ['autodocs'],
} satisfies Meta<typeof FormShowcase>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="max-w-3xl">
      <FormShowcase />
    </div>
  ),
}
