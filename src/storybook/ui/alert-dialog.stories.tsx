import type {Meta, StoryObj} from '@storybook/react'
import {useArgs} from '@storybook/preview-api'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '../../components/ui/alert-dialog'
import {Button} from '../../components/ui/button'

const meta = {
  title: 'UI/AlertDialog',
  component: AlertDialog,
  tags: ['autodocs'],
  parameters: {
    controls: {
      include: ['open', 'defaultOpen', 'onOpenChange'],
    },
    docs: {
      description: {
        component: 'Key props: `open`/`defaultOpen`, `onOpenChange`.',
      },
    },
  },
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Controlled open state.',
    },
    defaultOpen: {
      control: 'boolean',
      description: 'Uncontrolled initial open state.',
    },
    onOpenChange: {
      action: 'onOpenChange',
    },
  },
} satisfies Meta<typeof AlertDialog>

export default meta

type Story = StoryObj<typeof meta>

type AlertDialogProps = React.ComponentProps<typeof AlertDialog>

export const Default: Story = {
  render: args => {
    const {open, defaultOpen, ...rest} = args as AlertDialogProps

    return (
      <AlertDialog
        {...rest}
        {...(open !== undefined ? {open} : {})}
        {...(defaultOpen !== undefined ? {defaultOpen} : {})}
      >
        <AlertDialogTrigger asChild>
          <Button variant="outline">Open</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  },
}

export const Controlled: Story = {
  args: {
    open: false,
  },
  render: ControlledRender,
}

function ControlledRender(args: AlertDialogProps) {
  const [{open}, updateArgs] = useArgs<{open?: boolean}>()

  return (
    <AlertDialog
      {...args}
      open={open ?? false}
      onOpenChange={(nextOpen: boolean) => {
        updateArgs({open: nextOpen})
        args.onOpenChange?.(nextOpen)
      }}
    >
      <AlertDialogTrigger asChild>
        <Button variant="outline">Open</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Controlled alert dialog</AlertDialogTitle>
          <AlertDialogDescription>
            Open state is synced with Storybook Controls.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
