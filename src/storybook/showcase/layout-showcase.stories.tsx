import type {Meta, StoryObj} from '@storybook/react'

import {LayoutShowcase} from '../../components/LayoutShowcase'

const meta = {
  title: 'Showcase/LayoutShowcase',
  component: LayoutShowcase,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof LayoutShowcase>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
