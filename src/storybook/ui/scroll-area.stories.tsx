import type {Meta, StoryObj} from '@storybook/react'

import * as React from 'react'
import {expect, within} from '@storybook/test'

import {ScrollArea, ScrollBar} from '../../components/ui/scroll-area'

type ScrollAreaStoryArgs = React.ComponentProps<typeof ScrollArea> & {
  content?: 'text' | 'rows'
  rows?: number
  showVerticalScrollbar?: boolean
  showHorizontalScrollbar?: boolean
  scrollbarOrientation?: React.ComponentProps<typeof ScrollBar>['orientation']
  onScroll?: (payload: {scrollTop: number; scrollLeft: number}) => void
}

const LOREM =
  "Jokester began sneaking into the castle in the middle of the night and leaving jokes all over the place: under the king's pillow, in his soup, even in the royal toilet. The king was furious, but he couldn't seem to stop Jokester. And then, one day, the people of the kingdom discovered that the jokes left by Jokester were so funny that they couldn't help but laugh. And once they started laughing, they couldn't stop."

function RowsContent({rows}: {rows: number}) {
  return (
    <div className="space-y-2 p-2">
      {Array.from({length: rows}).map((_, i) => (
        <div key={i} className="text-sm">
          Row {i + 1}
        </div>
      ))}
    </div>
  )
}

function ScrollAreaDemo(args: ScrollAreaStoryArgs) {
  const {
    content = 'text',
    rows = 30,
    showVerticalScrollbar = true,
    showHorizontalScrollbar = false,
    scrollbarOrientation = 'vertical',
    onScroll,
    ...scrollAreaProps
  } = args

  return (
    <ScrollArea
      {...scrollAreaProps}
      className={
        scrollAreaProps.className ?? 'h-[200px] w-[350px] rounded-md border p-4'
      }
      onScroll={event => {
        const target = event.currentTarget
        onScroll?.({scrollTop: target.scrollTop, scrollLeft: target.scrollLeft})
      }}
    >
      <div data-testid="viewport-content">
        {content === 'rows' ? (
          <RowsContent rows={rows} />
        ) : (
          <div className="text-sm leading-relaxed">{LOREM}</div>
        )}
      </div>

      {showVerticalScrollbar ? <ScrollBar orientation="vertical" /> : null}
      {showHorizontalScrollbar ? <ScrollBar orientation="horizontal" /> : null}

      {/* Optional extra scrollbar to demonstrate orientation control in isolation */}
      {scrollbarOrientation &&
      scrollbarOrientation !== 'vertical' &&
      scrollbarOrientation !== 'horizontal'
        ? null
        : null}
    </ScrollArea>
  )
}

function HorizontalScrollDemo(args: ScrollAreaStoryArgs) {
  const {onScroll, ...rest} = args

  return (
    <ScrollArea
      {...rest}
      className={rest.className ?? 'w-[350px] rounded-md border'}
      onScroll={event => {
        const target = event.currentTarget
        onScroll?.({scrollTop: target.scrollTop, scrollLeft: target.scrollLeft})
      }}
    >
      <div className="flex w-max gap-4 p-4" data-testid="hstrip">
        {Array.from({length: 18}).map((_, i) => (
          <div
            key={i}
            className="bg-muted flex h-24 w-24 items-center justify-center rounded-md text-sm"
          >
            Card {i + 1}
          </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}

const meta: Meta<ScrollAreaStoryArgs> = {
  title: 'UI/ScrollArea',
  component: ScrollArea,
  tags: ['autodocs'],
  parameters: {
    controls: {
      include: [
        'type',
        'dir',
        'scrollHideDelay',
        'className',
        'content',
        'rows',
        'showVerticalScrollbar',
        'showHorizontalScrollbar',
        'onScroll',
      ],
    },
    docs: {
      description: {
        component:
          'Augments native scroll behavior for custom, cross-browser styling. This wrapper renders a viewport + default scrollbar + corner by default.',
      },
    },
  },
  argTypes: {
    dir: {options: ['ltr', 'rtl'], control: {type: 'inline-radio'}},
    scrollHideDelay: {control: {type: 'number', min: 0, step: 100}},
    content: {options: ['text', 'rows'], control: {type: 'inline-radio'}},
    rows: {control: {type: 'number', min: 5, max: 100, step: 5}},
    showVerticalScrollbar: {control: 'boolean'},
    showHorizontalScrollbar: {control: 'boolean'},
    onScroll: {action: 'onScroll'},
  },
  args: {
    dir: 'ltr',
    scrollHideDelay: 600,
    content: 'text',
    rows: 30,
    showVerticalScrollbar: true,
    showHorizontalScrollbar: false,
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: 'Demo',
  render: args => <ScrollAreaDemo {...args} />,
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement)
    const region = canvas
      .getByTestId('viewport-content')
      .closest('[data-slot="scroll-area"]') as HTMLElement
    await expect(region.scrollTop).toBe(0)

    // Simulate wheel scroll
    region.dispatchEvent(new WheelEvent('wheel', {deltaY: 300, bubbles: true}))
    await expect(region.scrollTop).toBeGreaterThan(0)
  },
}

export const Rows: Story = {
  args: {
    content: 'rows',
    rows: 40,
  },
  render: args => <ScrollAreaDemo {...args} />,
}

export const HorizontalScrolling: Story = {
  render: args => <HorizontalScrollDemo {...args} />,
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement)
    const root = canvas
      .getByTestId('hstrip')
      .closest('[data-slot="scroll-area"]') as HTMLElement

    await expect(root.scrollLeft).toBe(0)
    root.dispatchEvent(new WheelEvent('wheel', {deltaX: 300, bubbles: true}))
    await expect(root.scrollLeft).toBeGreaterThan(0)
  },
}

export const BothScrollbars: Story = {
  render: args => (
    <ScrollArea
      {...args}
      className={args.className ?? 'h-[220px] w-[350px] rounded-md border'}
      onScroll={event => {
        const target = event.currentTarget
        args.onScroll?.({
          scrollTop: target.scrollTop,
          scrollLeft: target.scrollLeft,
        })
      }}
    >
      <div className="h-[600px] w-[700px] p-4" data-testid="big-surface">
        <div className="text-sm">Scroll both directions</div>
        <div className="mt-4 grid gap-2">
          {Array.from({length: 24}).map((_, i) => (
            <div key={i} className="text-sm">
              Row {i + 1}
            </div>
          ))}
        </div>
      </div>
      <ScrollBar orientation="vertical" />
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  ),
}
