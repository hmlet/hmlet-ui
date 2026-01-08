import type {Meta, StoryObj} from '@storybook/react'
import {useState} from 'react'
import {Bold, Italic, Underline, Volume2, VolumeX} from 'lucide-react'

import {Toggle} from '../../components/ui/toggle'

const meta = {
  title: 'UI/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  args: {
    children: 'Toggle',
  },
} satisfies Meta<typeof Toggle>

export default meta

type Story = StoryObj<typeof Toggle>

export const Default: Story = {
  render: () => (
    <Toggle aria-label="Toggle italic">
      <Italic className="h-4 w-4" />
    </Toggle>
  ),
}

export const Outline: Story = {
  render: () => (
    <Toggle variant="outline" aria-label="Toggle italic">
      <Italic className="h-4 w-4" />
    </Toggle>
  ),
}

export const WithText: Story = {
  name: 'With Text',
  render: () => (
    <Toggle aria-label="Toggle italic">
      <Italic className="h-4 w-4 mr-2" />
      Italic
    </Toggle>
  ),
}

export const Small: Story = {
  name: 'Small Size',
  render: () => (
    <Toggle size="sm" aria-label="Toggle italic">
      <Italic className="h-4 w-4" />
    </Toggle>
  ),
}

export const Large: Story = {
  name: 'Large Size',
  render: () => (
    <Toggle size="lg" aria-label="Toggle italic">
      <Italic className="h-4 w-4" />
    </Toggle>
  ),
}

export const Disabled: Story = {
  render: () => (
    <Toggle disabled aria-label="Toggle italic">
      <Italic className="h-4 w-4" />
    </Toggle>
  ),
}

export const DefaultPressed: Story = {
  name: 'Default Pressed',
  render: () => (
    <Toggle defaultPressed aria-label="Toggle italic">
      <Italic className="h-4 w-4" />
    </Toggle>
  ),
}

export const TextOnly: Story = {
  name: 'Text Only',
  render: () => <Toggle aria-label="Toggle bold">Bold</Toggle>,
}

export const AllVariants: Story = {
  name: 'All Variants',
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <div className="space-y-2">
        <p className="text-sm font-medium">Default</p>
        <div className="flex gap-2">
          <Toggle size="sm" aria-label="Toggle bold">
            <Bold className="h-4 w-4" />
          </Toggle>
          <Toggle aria-label="Toggle italic">
            <Italic className="h-4 w-4" />
          </Toggle>
          <Toggle size="lg" aria-label="Toggle underline">
            <Underline className="h-4 w-4" />
          </Toggle>
        </div>
      </div>
      <div className="space-y-2">
        <p className="text-sm font-medium">Outline</p>
        <div className="flex gap-2">
          <Toggle variant="outline" size="sm" aria-label="Toggle bold">
            <Bold className="h-4 w-4" />
          </Toggle>
          <Toggle variant="outline" aria-label="Toggle italic">
            <Italic className="h-4 w-4" />
          </Toggle>
          <Toggle variant="outline" size="lg" aria-label="Toggle underline">
            <Underline className="h-4 w-4" />
          </Toggle>
        </div>
      </div>
    </div>
  ),
}

export const WithTextVariants: Story = {
  name: 'With Text Variants',
  render: () => (
    <div className="flex flex-col gap-4">
      <Toggle aria-label="Toggle bold">
        <Bold className="h-4 w-4 mr-2" />
        Bold
      </Toggle>
      <Toggle variant="outline" aria-label="Toggle italic">
        <Italic className="h-4 w-4 mr-2" />
        Italic
      </Toggle>
      <Toggle size="sm" aria-label="Toggle underline">
        <Underline className="h-4 w-4 mr-2" />
        Underline
      </Toggle>
      <Toggle size="lg" variant="outline" aria-label="Toggle strikethrough">
        <Underline className="h-4 w-4 mr-2" />
        Underline
      </Toggle>
    </div>
  ),
}

export const AudioControls: Story = {
  name: 'Audio Controls Example',
  render: function AudioControlsExample() {
    const [isMuted, setIsMuted] = useState(false)

    return (
      <div className="flex items-center gap-4 p-4 border rounded-lg max-w-sm">
        <div className="flex-1">
          <p className="text-sm font-medium">Audio Player</p>
          <p className="text-xs text-muted-foreground">Playing: Track Name</p>
        </div>
        <Toggle
          pressed={isMuted}
          onPressedChange={setIsMuted}
          aria-label="Toggle mute"
          variant="outline"
        >
          {isMuted ? (
            <VolumeX className="h-4 w-4" />
          ) : (
            <Volume2 className="h-4 w-4" />
          )}
        </Toggle>
      </div>
    )
  },
}

export const TextFormatting: Story = {
  name: 'Text Formatting Toolbar',
  render: () => (
    <div className="flex flex-col gap-4 p-4 border rounded-lg max-w-2xl">
      <div className="flex gap-1">
        <Toggle aria-label="Toggle bold">
          <Bold className="h-4 w-4" />
        </Toggle>
        <Toggle aria-label="Toggle italic">
          <Italic className="h-4 w-4" />
        </Toggle>
        <Toggle aria-label="Toggle underline">
          <Underline className="h-4 w-4" />
        </Toggle>
      </div>
      <textarea
        className="min-h-32 w-full rounded-md border border-input bg-input-background px-3 py-2 text-sm"
        placeholder="Start typing..."
      />
    </div>
  ),
}

export const States: Story = {
  name: 'All States',
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="space-y-2">
        <p className="text-sm font-medium">Normal</p>
        <div className="flex gap-2">
          <Toggle aria-label="Toggle off">
            <Italic className="h-4 w-4" />
          </Toggle>
          <Toggle defaultPressed aria-label="Toggle on">
            <Italic className="h-4 w-4" />
          </Toggle>
        </div>
      </div>
      <div className="space-y-2">
        <p className="text-sm font-medium">Disabled</p>
        <div className="flex gap-2">
          <Toggle disabled aria-label="Toggle disabled off">
            <Italic className="h-4 w-4" />
          </Toggle>
          <Toggle disabled defaultPressed aria-label="Toggle disabled on">
            <Italic className="h-4 w-4" />
          </Toggle>
        </div>
      </div>
    </div>
  ),
}
