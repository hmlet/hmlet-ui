import type {Meta, StoryObj} from '@storybook/react'
import {
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
} from 'lucide-react'

import {ToggleGroup, ToggleGroupItem} from '../../components/ui/toggle-group'

const meta = {
  title: 'UI/ToggleGroup',
  component: ToggleGroup,
  tags: ['autodocs'],
} satisfies Meta<typeof ToggleGroup>

export default meta

type Story = StoryObj<typeof ToggleGroup>

export const Default: Story = {
  render: () => (
    <ToggleGroup
      type="single"
      defaultValue="center"
      aria-label="Text alignment"
    >
      <ToggleGroupItem value="left" aria-label="Left aligned">
        <AlignLeft className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Center aligned">
        <AlignCenter className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Right aligned">
        <AlignRight className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
}

export const Single: Story = {
  render: () => (
    <ToggleGroup type="single" defaultValue="left" aria-label="Text alignment">
      <ToggleGroupItem value="left" aria-label="Left aligned">
        Left
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Center aligned">
        Center
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Right aligned">
        Right
      </ToggleGroupItem>
    </ToggleGroup>
  ),
}

export const Multiple: Story = {
  render: () => (
    <ToggleGroup type="multiple" aria-label="Text formatting">
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline">
        <Underline className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
}

export const Outline: Story = {
  render: () => (
    <ToggleGroup
      type="single"
      variant="outline"
      defaultValue="bold"
      aria-label="Text style"
    >
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline">
        <Underline className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
}

export const Small: Story = {
  name: 'Small Size',
  render: () => (
    <ToggleGroup
      type="single"
      size="sm"
      defaultValue="center"
      aria-label="Text alignment"
    >
      <ToggleGroupItem value="left" aria-label="Left aligned">
        <AlignLeft className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Center aligned">
        <AlignCenter className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Right aligned">
        <AlignRight className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
}

export const Large: Story = {
  name: 'Large Size',
  render: () => (
    <ToggleGroup
      type="single"
      size="lg"
      defaultValue="center"
      aria-label="Text alignment"
    >
      <ToggleGroupItem value="left" aria-label="Left aligned">
        <AlignLeft className="h-5 w-5" />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Center aligned">
        <AlignCenter className="h-5 w-5" />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Right aligned">
        <AlignRight className="h-5 w-5" />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
}

export const Disabled: Story = {
  render: () => (
    <ToggleGroup type="single" disabled aria-label="Text alignment">
      <ToggleGroupItem value="left" aria-label="Left aligned">
        <AlignLeft className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Center aligned">
        <AlignCenter className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Right aligned">
        <AlignRight className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
}

export const DisabledItem: Story = {
  name: 'Disabled Item',
  render: () => (
    <ToggleGroup
      type="single"
      defaultValue="center"
      aria-label="Text alignment"
    >
      <ToggleGroupItem value="left" aria-label="Left aligned">
        <AlignLeft className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Center aligned" disabled>
        <AlignCenter className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Right aligned">
        <AlignRight className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
}

export const WithText: Story = {
  name: 'With Text Labels',
  render: () => (
    <ToggleGroup
      type="single"
      variant="outline"
      defaultValue="list"
      aria-label="View mode"
    >
      <ToggleGroupItem value="grid" aria-label="Grid view">
        Grid
      </ToggleGroupItem>
      <ToggleGroupItem value="list" aria-label="List view">
        List
      </ToggleGroupItem>
      <ToggleGroupItem value="map" aria-label="Map view">
        Map
      </ToggleGroupItem>
    </ToggleGroup>
  ),
}

export const FourItems: Story = {
  name: 'Four Items',
  render: () => (
    <ToggleGroup type="single" defaultValue="left" aria-label="Text alignment">
      <ToggleGroupItem value="left" aria-label="Left aligned">
        <AlignLeft className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Center aligned">
        <AlignCenter className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Right aligned">
        <AlignRight className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="justify" aria-label="Justify aligned">
        <AlignJustify className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
}

export const TextEditor: Story = {
  name: 'Text Editor Example',
  render: () => (
    <div className="flex flex-col gap-4 p-4 border rounded-lg max-w-2xl">
      <div className="flex gap-2">
        <ToggleGroup type="multiple" aria-label="Text formatting">
          <ToggleGroupItem value="bold" aria-label="Toggle bold">
            <Bold className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Toggle italic">
            <Italic className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline" aria-label="Toggle underline">
            <Underline className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>
        <ToggleGroup
          type="single"
          defaultValue="left"
          aria-label="Text alignment"
        >
          <ToggleGroupItem value="left" aria-label="Left aligned">
            <AlignLeft className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="center" aria-label="Center aligned">
            <AlignCenter className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="right" aria-label="Right aligned">
            <AlignRight className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="justify" aria-label="Justify aligned">
            <AlignJustify className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      <textarea
        className="min-h-32 w-full rounded-md border border-input bg-input-background px-3 py-2 text-sm"
        placeholder="Start typing your text..."
      />
    </div>
  ),
}

export const PropertyFilters: Story = {
  name: 'Property Filters Example',
  render: () => (
    <div className="space-y-4 max-w-md">
      <div>
        <h4 className="text-sm font-medium mb-2">Property Type</h4>
        <ToggleGroup
          type="single"
          variant="outline"
          defaultValue="apartment"
          aria-label="Property type"
        >
          <ToggleGroupItem value="apartment" aria-label="Apartment">
            Apartment
          </ToggleGroupItem>
          <ToggleGroupItem value="house" aria-label="House">
            House
          </ToggleGroupItem>
          <ToggleGroupItem value="condo" aria-label="Condo">
            Condo
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div>
        <h4 className="text-sm font-medium mb-2">Bedrooms</h4>
        <ToggleGroup
          type="single"
          variant="outline"
          defaultValue="2"
          aria-label="Number of bedrooms"
        >
          <ToggleGroupItem value="1" aria-label="1 bedroom">
            1
          </ToggleGroupItem>
          <ToggleGroupItem value="2" aria-label="2 bedrooms">
            2
          </ToggleGroupItem>
          <ToggleGroupItem value="3" aria-label="3 bedrooms">
            3
          </ToggleGroupItem>
          <ToggleGroupItem value="4+" aria-label="4 or more bedrooms">
            4+
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  ),
}
