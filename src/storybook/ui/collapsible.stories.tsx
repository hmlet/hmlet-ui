import type {Meta, StoryObj} from '@storybook/react'

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '../../components/ui/collapsible'
import {Button} from '../../components/ui/button'

const meta = {
  title: 'UI/Collapsible',
  component: Collapsible,
  tags: ['autodocs'],
} satisfies Meta<typeof Collapsible>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Collapsible
      className="max-w-md space-y-2"
      p={4}
      m={2}
      shadow="md"
      w="fit"
      h="auto"
      display="block"
    >
      <CollapsibleTrigger asChild>
        <Button variant="outline">Toggle</Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="rounded-md border p-3 text-sm">
        Collapsible content.
      </CollapsibleContent>
    </Collapsible>
  ),
}

export const WithCustomSpacing: Story = {
  render: () => (
    <Collapsible
      px={8}
      py={6}
      mx={4}
      my={2}
      shadow="lg"
      w="full"
      h="auto"
      display="flex"
      className="max-w-lg flex-col space-y-2"
    >
      <CollapsibleTrigger asChild>
        <Button variant="outline">Toggle Custom Spacing</Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="rounded-md border p-3 text-sm">
        Collapsible content with custom spacing and shadow.
      </CollapsibleContent>
    </Collapsible>
  ),
}

export const WithLongContent: Story = {
  render: () => (
    <Collapsible
      p={6}
      m={4}
      shadow="xl"
      w="full"
      h="auto"
      display="block"
      className="max-w-2xl bg-gray-50"
    >
      <CollapsibleTrigger asChild>
        <Button variant="outline">Show More</Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="rounded-md border p-4 text-base">
        <h3 className="font-semibold mb-2">About Collapsible</h3>
        <p>
          This is a longer content section inside the Collapsible component. You
          can use it to display detailed information, such as FAQs,
          documentation, or any other expandable content. The padding and margin
          are set to provide ample spacing.
        </p>
        <ul className="list-disc pl-5 mt-2">
          <li>Flexible box properties</li>
          <li>Customizable padding and margin</li>
          <li>Supports any React node as content</li>
        </ul>
      </CollapsibleContent>
    </Collapsible>
  ),
}

export const NoPaddingNoMargin: Story = {
  render: () => (
    <Collapsible
      p="none"
      m="none"
      shadow="none"
      w="auto"
      h="auto"
      display="inline-block"
      className="border border-dashed border-gray-400"
    >
      <CollapsibleTrigger asChild>
        <Button variant="outline">No Padding/Margin</Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="text-xs">
        This Collapsible has no padding or margin. Useful for tight layouts.
      </CollapsibleContent>
    </Collapsible>
  ),
}

export const WithDifferentShadows: Story = {
  render: () => (
    <div className="flex flex-wrap gap-6">
      {(
        ['sm', 'md', 'lg', 'xl', '2xl', 'inner', 'outline', 'default'] as const
      ).map(shadow => (
        <Collapsible
          key={shadow}
          p={4}
          m={2}
          shadow={shadow}
          w="fit"
          h="auto"
          display="block"
          className="min-w-[200px]"
        >
          <CollapsibleTrigger asChild>
            <Button variant="outline">Shadow: {shadow}</Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="rounded-md border p-2 text-xs">
            This Collapsible uses <b>{shadow}</b> shadow.
          </CollapsibleContent>
        </Collapsible>
      ))}
    </div>
  ),
}

export const ResponsiveWidth: Story = {
  render: () => (
    <Collapsible
      p={3}
      m={2}
      shadow="md"
      w="screen"
      h="auto"
      display="block"
      className="bg-blue-50"
    >
      <CollapsibleTrigger asChild>
        <Button variant="outline">Full Screen Width</Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="rounded-md border p-3 text-sm">
        This Collapsible stretches to the full width of the screen.
      </CollapsibleContent>
    </Collapsible>
  ),
}
