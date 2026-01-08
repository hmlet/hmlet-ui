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
    <Collapsible className="max-w-md space-y-2">
      <CollapsibleTrigger asChild>
        <Button variant="outline">Toggle</Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="rounded-md border p-3 text-sm">
        Collapsible content.
      </CollapsibleContent>
    </Collapsible>
  ),
}
