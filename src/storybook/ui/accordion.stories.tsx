import type {Meta, StoryObj} from '@storybook/react'
import {useArgs} from '@storybook/preview-api'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../components/ui/accordion'

const meta = {
  title: 'UI/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  parameters: {
    controls: {
      include: [
        'type',
        'collapsible',
        'value',
        'defaultValue',
        'onValueChange',
        'disabled',
        'dir',
        'className',
      ],
    },
    docs: {
      description: {
        component:
          'Key props: `type`, `collapsible` (single only), `value`/`defaultValue`, `onValueChange`, `disabled`, `dir`, `className`.',
      },
    },
  },
  argTypes: {
    type: {
      options: ['single', 'multiple'],
      control: {type: 'inline-radio'},
    },
    collapsible: {
      control: 'boolean',
      description: 'Only applies when `type="single"`.',
    },
    value: {
      control: 'text',
      description:
        'Controlled value. For `type="single"` this is a string; for `type="multiple"` this is an array of strings.',
    },
    defaultValue: {
      control: 'text',
      description:
        'Uncontrolled initial value. For `type="single"` this is a string; for `type="multiple"` this is an array of strings.',
    },
    onValueChange: {
      action: 'onValueChange',
    },
    disabled: {
      control: 'boolean',
    },
    dir: {
      options: ['ltr', 'rtl'],
      control: {type: 'inline-radio'},
    },
    className: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Accordion>

export default meta

type Story = StoryObj<typeof meta>

type AccordionProps = React.ComponentProps<typeof Accordion>
type AccordionSingleProps = Extract<AccordionProps, {type: 'single'}>
type AccordionMultipleProps = Extract<AccordionProps, {type: 'multiple'}>

export const Default: Story = {
  args: {
    type: 'single',
    collapsible: true,
    defaultValue: 'item-1',
  },
  render: args => {
    const {value, defaultValue, ...rest} = args as AccordionSingleProps

    return (
      <Accordion
        {...rest}
        {...(value !== undefined ? {value} : {})}
        {...(defaultValue !== undefined ? {defaultValue} : {})}
        className="w-full max-w-md"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>What is hmlet-ui?</AccordionTrigger>
          <AccordionContent>
            A set of reusable UI primitives for your app.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it themeable?</AccordionTrigger>
          <AccordionContent>
            Yes — it uses CSS variables and Tailwind tokens.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  },
}

export const ControlledSingle: Story = {
  args: {
    type: 'single',
    collapsible: true,
    value: 'item-1',
  },
  render: ControlledSingleRender,
}

export const ControlledMultiple: Story = {
  args: {
    type: 'multiple',
    value: ['item-1'],
  },
  argTypes: {
    value: {control: 'object'},
    defaultValue: {control: 'object'},
  },
  render: ControlledMultipleRender,
}

function ControlledSingleRender(storyArgs: AccordionProps) {
  const args = storyArgs as AccordionSingleProps
  const [{value}, updateArgs] = useArgs<{value?: string}>()

  return (
    <Accordion
      {...args}
      value={value}
      onValueChange={(nextValue: string) => {
        updateArgs({value: nextValue})
        args.onValueChange?.(nextValue)
      }}
      className="w-full max-w-md"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>Controlled: item 1</AccordionTrigger>
        <AccordionContent>
          Value is synced with Storybook controls.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Controlled: item 2</AccordionTrigger>
        <AccordionContent>Try changing `value` in Controls.</AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

function ControlledMultipleRender(storyArgs: AccordionProps) {
  const args = storyArgs as AccordionMultipleProps
  const [{value}, updateArgs] = useArgs<{value?: string[]}>()

  return (
    <Accordion
      {...args}
      value={value}
      onValueChange={(nextValue: string[]) => {
        updateArgs({value: nextValue})
        args.onValueChange?.(nextValue)
      }}
      className="w-full max-w-md"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>Multiple: item 1</AccordionTrigger>
        <AccordionContent>Multiple items can be open.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Multiple: item 2</AccordionTrigger>
        <AccordionContent>Value is an array of strings.</AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
