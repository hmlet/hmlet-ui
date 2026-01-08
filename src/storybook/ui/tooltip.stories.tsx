import type {Meta, StoryObj} from '@storybook/react'
import {Plus, Info, HelpCircle, Settings, Trash2} from 'lucide-react'

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '../../components/ui/tooltip'
import {Button} from '../../components/ui/button'

const meta = {
  title: 'UI/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
} satisfies Meta<typeof Tooltip>

export default meta

type Story = StoryObj<typeof Tooltip>

export const Default: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Add to library</p>
      </TooltipContent>
    </Tooltip>
  ),
}

export const WithIcon: Story = {
  name: 'With Icon',
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline" size="icon">
          <Plus className="h-4 w-4" />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Add to library</p>
      </TooltipContent>
    </Tooltip>
  ),
}

export const Sides: Story = {
  name: 'Different Sides',
  render: () => (
    <div className="flex items-center justify-center gap-4 p-8">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Top</Button>
        </TooltipTrigger>
        <TooltipContent side="top">
          <p>Top tooltip</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Right</Button>
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>Right tooltip</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Bottom</Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p>Bottom tooltip</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Left</Button>
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>Left tooltip</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
}

export const WithDelay: Story = {
  name: 'With Custom Delay',
  render: () => (
    <Tooltip delayDuration={0}>
      <TooltipTrigger asChild>
        <Button variant="outline">Instant</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Shows instantly</p>
      </TooltipContent>
    </Tooltip>
  ),
}

export const LongContent: Story = {
  name: 'Long Content',
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">
          <Info className="h-4 w-4" />
        </Button>
      </TooltipTrigger>
      <TooltipContent className="max-w-xs">
        <p>
          This is a longer tooltip content that provides more detailed
          information about the feature. It can wrap to multiple lines as
          needed.
        </p>
      </TooltipContent>
    </Tooltip>
  ),
}

export const WithOffset: Story = {
  name: 'With Side Offset',
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover</Button>
      </TooltipTrigger>
      <TooltipContent sideOffset={10}>
        <p>Tooltip with 10px offset</p>
      </TooltipContent>
    </Tooltip>
  ),
}

export const OnDisabledButton: Story = {
  name: 'On Disabled Button',
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <span tabIndex={0}>
          <Button disabled>Disabled</Button>
        </span>
      </TooltipTrigger>
      <TooltipContent>
        <p>This action is currently unavailable</p>
      </TooltipContent>
    </Tooltip>
  ),
}

export const IconButtons: Story = {
  name: 'Icon Button Examples',
  render: () => (
    <div className="flex items-center gap-2">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon">
            <Plus className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Add item</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon">
            <Settings className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Settings</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon">
            <HelpCircle className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Help & Support</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="destructive" size="icon">
            <Trash2 className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Delete</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
}

export const PropertyCard: Story = {
  name: 'Property Card Example',
  render: () => (
    <div className="max-w-sm p-4 border rounded-lg space-y-2">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">Luxury Apartment</h3>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon">
              <Info className="h-4 w-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent className="max-w-xs">
            <p>
              This property includes premium amenities such as a gym, pool, and
              24/7 concierge service.
            </p>
          </TooltipContent>
        </Tooltip>
      </div>
      <p className="text-sm text-muted-foreground">
        2 bed • 2 bath • 1,200 sq ft
      </p>
      <div className="flex gap-2 pt-2">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" size="sm">
              View Details
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>See full property details</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button size="sm">Book Tour</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Schedule a property viewing</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </div>
  ),
}

export const MultipleTooltips: Story = {
  name: 'Multiple Tooltips',
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <span className="text-sm">Keyboard shortcuts:</span>
        <Tooltip>
          <TooltipTrigger asChild>
            <kbd className="pointer-events-auto px-2 py-1 text-xs border rounded cursor-pointer">
              ⌘K
            </kbd>
          </TooltipTrigger>
          <TooltipContent>
            <p>Quick search</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <kbd className="pointer-events-auto px-2 py-1 text-xs border rounded cursor-pointer">
              ⌘B
            </kbd>
          </TooltipTrigger>
          <TooltipContent>
            <p>Toggle sidebar</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <kbd className="pointer-events-auto px-2 py-1 text-xs border rounded cursor-pointer">
              ⌘/
            </kbd>
          </TooltipTrigger>
          <TooltipContent>
            <p>Show keyboard shortcuts</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </div>
  ),
}

export const WithRichContent: Story = {
  name: 'With Rich Content',
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">
          <Info className="h-4 w-4 mr-2" />
          Property Info
        </Button>
      </TooltipTrigger>
      <TooltipContent className="max-w-xs">
        <div className="space-y-2">
          <p className="font-semibold">Property Features</p>
          <ul className="text-xs space-y-1">
            <li>• Smart home technology</li>
            <li>• Energy efficient</li>
            <li>• Pet friendly</li>
            <li>• On-site parking</li>
          </ul>
        </div>
      </TooltipContent>
    </Tooltip>
  ),
}
