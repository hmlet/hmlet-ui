import type {Meta, StoryObj} from '@storybook/react'

import * as React from 'react'
import {expect, userEvent, within} from '@storybook/test'

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '../../components/ui/resizable'

type ResizableStoryArgs = Omit<
  React.ComponentProps<typeof ResizablePanelGroup>,
  'direction'
> & {
  direction?: React.ComponentProps<typeof ResizablePanelGroup>['direction']
  withHandle?: boolean
  leftDefaultSize?: number
  rightDefaultSize?: number
  topDefaultSize?: number
  bottomDefaultSize?: number
  onLayout?: (layout: number[]) => void
}

function TwoPanelDemo(args: ResizableStoryArgs) {
  const direction = args.direction ?? 'horizontal'
  const withHandle = args.withHandle ?? true

  const containerHeightClass = direction === 'vertical' ? 'h-[36rem]' : 'h-80'

  const firstDefault =
    direction === 'vertical'
      ? (args.topDefaultSize ?? 60)
      : (args.leftDefaultSize ?? 50)

  const secondDefault =
    direction === 'vertical'
      ? (args.bottomDefaultSize ?? 40)
      : (args.rightDefaultSize ?? 50)

  return (
    <div
      className={`w-full max-w-2xl rounded-md border ${containerHeightClass}`}
    >
      <ResizablePanelGroup
        {...args}
        direction={direction}
        className="h-full"
        onLayout={layout => {
          args.onLayout?.(layout)
        }}
      >
        <ResizablePanel defaultSize={firstDefault} minSize={10}>
          <div
            data-testid="panel-1"
            className="flex h-full items-center justify-center"
          >
            {direction === 'vertical' ? 'Top' : 'Left'}
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle={withHandle} />
        <ResizablePanel defaultSize={secondDefault} minSize={10}>
          <div
            data-testid="panel-2"
            className="flex h-full items-center justify-center"
          >
            {direction === 'vertical' ? 'Bottom' : 'Right'}
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}

function NestedLayoutDemo(args: ResizableStoryArgs) {
  const withHandle = args.withHandle ?? true

  return (
    <div className="h-[36rem] w-full max-w-4xl rounded-md border">
      <ResizablePanelGroup
        {...args}
        direction="horizontal"
        className="h-full"
        onLayout={layout => {
          args.onLayout?.(layout)
        }}
      >
        <ResizablePanel defaultSize={25} minSize={15}>
          <div className="flex h-full items-center justify-center">Sidebar</div>
        </ResizablePanel>
        <ResizableHandle withHandle={withHandle} />
        <ResizablePanel defaultSize={75} minSize={30}>
          <ResizablePanelGroup direction="vertical" className="h-full">
            <ResizablePanel defaultSize={60} minSize={15}>
              <div className="flex h-full items-center justify-center">
                Main
              </div>
            </ResizablePanel>
            <ResizableHandle
              withHandle={withHandle}
              className="bg-transparent after:bg-border data-[panel-group-direction=vertical]:h-4"
            />
            <ResizablePanel defaultSize={40} minSize={10}>
              <div className="flex h-full items-center justify-center">
                Details
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}

const meta: Meta<ResizableStoryArgs> = {
  title: 'UI/Resizable',
  component: ResizablePanelGroup,
  tags: ['autodocs'],
  parameters: {
    controls: {
      include: [
        'direction',
        'withHandle',
        'leftDefaultSize',
        'rightDefaultSize',
        'topDefaultSize',
        'bottomDefaultSize',
        'autoSaveId',
        'keyboardResizeBy',
        'onLayout',
        'className',
      ],
    },
    docs: {
      description: {
        component:
          'Accessible resizable panel groups built on react-resizable-panels. The handle is keyboard-focusable and supports arrow-key resizing.',
      },
    },
  },
  argTypes: {
    direction: {
      options: ['horizontal', 'vertical'],
      control: {type: 'inline-radio'},
    },
    withHandle: {control: 'boolean'},
    leftDefaultSize: {control: {type: 'number', min: 10, max: 90, step: 5}},
    rightDefaultSize: {control: {type: 'number', min: 10, max: 90, step: 5}},
    topDefaultSize: {control: {type: 'number', min: 10, max: 90, step: 5}},
    bottomDefaultSize: {control: {type: 'number', min: 10, max: 90, step: 5}},
    keyboardResizeBy: {control: {type: 'number', min: 1, max: 20, step: 1}},
    onLayout: {action: 'onLayout'},
  },
  args: {
    direction: 'horizontal',
    withHandle: true,
    leftDefaultSize: 50,
    rightDefaultSize: 50,
    topDefaultSize: 60,
    bottomDefaultSize: 40,
    keyboardResizeBy: 10,
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Horizontal: Story = {
  args: {
    direction: 'horizontal',
  },
  render: args => <TwoPanelDemo {...args} />,
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement)
    const handle = canvas.getByRole('separator')

    const panel1 = canvas.getByTestId('panel-1')
    const before = panel1.getBoundingClientRect().width

    await userEvent.click(handle)
    await userEvent.keyboard('{ArrowRight}{ArrowRight}')

    const after = panel1.getBoundingClientRect().width
    await expect(after).toBeGreaterThan(before)
  },
}

export const Vertical: Story = {
  args: {
    direction: 'vertical',
  },
  render: args => <TwoPanelDemo {...args} />,
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement)
    const handle = canvas.getByRole('separator')

    const panel1 = canvas.getByTestId('panel-1')
    const before = panel1.getBoundingClientRect().height

    await userEvent.click(handle)
    await userEvent.keyboard('{ArrowDown}{ArrowDown}')

    const after = panel1.getBoundingClientRect().height
    await expect(after).toBeGreaterThan(before)
  },
}

export const WithoutHandle: Story = {
  args: {
    direction: 'horizontal',
    withHandle: false,
  },
  render: args => <TwoPanelDemo {...args} />,
}

export const NestedLayout: Story = {
  args: {
    withHandle: true,
    keyboardResizeBy: 10,
  },
  render: args => <NestedLayoutDemo {...args} />,
}
