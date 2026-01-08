import type {Meta, StoryObj} from '@storybook/react'
import {toast} from 'sonner'

import {Toaster, showToast} from '../../components/ui/sonner'
import {Button} from '../../components/ui/button'

type ToastArgs = {
  type: 'default' | 'success' | 'info' | 'warning' | 'error' | 'loading'
  title: string
  description: string
  action: boolean
  cancel: boolean
  duration: number
  position:
    | 'top-left'
    | 'top-center'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right'
  richColors: boolean
  closeButton: boolean
  onAction?: () => void
  onCancel?: () => void
  onDismiss?: () => void
}

type MultiToastArgs = {
  count: number
  duration: number
  position:
    | 'top-left'
    | 'top-center'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right'
}

type ToastTypesArgs = {
  richColors: boolean
  closeButton: boolean
}

type PromiseToastArgs = {
  duration: number
  position:
    | 'top-left'
    | 'top-center'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right'
}

const meta: Meta = {
  title: 'UI/Sonner',
  component: Toaster,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}

export default meta

export const Default: StoryObj<ToastArgs> = {
  args: {
    type: 'default',
    title: 'Event has been created',
    description: 'Monday, January 3rd at 6:00pm',
    action: false,
    cancel: false,
    duration: 4000,
    position: 'bottom-right',
    richColors: false,
    closeButton: false,
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['default', 'success', 'info', 'warning', 'error', 'loading'],
      description: 'Toast type',
    },
    title: {control: 'text', description: 'Toast title'},
    description: {control: 'text', description: 'Toast description'},
    action: {control: 'boolean', description: 'Show action button'},
    cancel: {control: 'boolean', description: 'Show cancel button'},
    duration: {
      control: {type: 'number', min: 1000, max: 10000, step: 500},
      description: 'Duration (ms)',
    },
    position: {
      control: 'select',
      options: [
        'top-left',
        'top-center',
        'top-right',
        'bottom-left',
        'bottom-center',
        'bottom-right',
      ],
      description: 'Toast position',
    },
    richColors: {control: 'boolean', description: 'Use rich colors'},
    closeButton: {control: 'boolean', description: 'Show close button'},
    onAction: {action: 'action-clicked'},
    onCancel: {action: 'cancel-clicked'},
    onDismiss: {action: 'toast-dismissed'},
  },
  parameters: {
    controls: {
      include: [
        'type',
        'title',
        'description',
        'action',
        'cancel',
        'duration',
        'position',
        'richColors',
        'closeButton',
      ],
    },
  },
  render: args => {
    const handleShowToast = () => {
      showToast({
        title: args.title,
        description: args.description,
        type: args.type,
        duration: args.duration,
        closeButton: args.closeButton,
        action:
          args.action && args.onAction
            ? {
                label: 'Undo',
                onClick: () => args.onAction?.(),
              }
            : undefined,
        cancel:
          args.cancel && args.onCancel
            ? {
                label: 'Cancel',
                onClick: () => args.onCancel?.(),
              }
            : undefined,
        onDismiss: args.onDismiss,
      })
    }

    return (
      <div className="flex items-center justify-center p-8">
        <Button variant="outline" onClick={handleShowToast}>
          Show Toast
        </Button>
        <Toaster
          position={args.position}
          richColors={args.richColors}
          closeButton={args.closeButton}
        />
      </div>
    )
  },
}

export const ToastTypes: StoryObj<ToastTypesArgs> = {
  args: {
    richColors: false,
    closeButton: false,
  },
  argTypes: {
    richColors: {control: 'boolean', description: 'Use rich colors'},
    closeButton: {control: 'boolean', description: 'Show close button'},
  },
  parameters: {
    controls: {include: ['richColors', 'closeButton']},
  },
  render: args => (
    <div className="flex flex-col gap-3 p-8">
      <div className="flex flex-wrap gap-2">
        <Button
          variant="outline"
          onClick={() =>
            showToast({title: 'Event has been created', type: 'default'})
          }
        >
          Default
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            showToast({
              title: 'Event has been created',
              description: 'Monday, January 3rd at 6:00pm',
              type: 'success',
            })
          }
        >
          Success
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            showToast({
              title: 'Be at the area 10 minutes before the event time',
              type: 'info',
            })
          }
        >
          Info
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            showToast({
              title: 'Event start time cannot be earlier than 8am',
              type: 'warning',
            })
          }
        >
          Warning
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            showToast({title: 'Event has not been created', type: 'error'})
          }
        >
          Error
        </Button>
        <Button
          variant="outline"
          onClick={() => showToast({title: 'Loading...', type: 'loading'})}
        >
          Loading
        </Button>
      </div>
      <Toaster richColors={args.richColors} closeButton={args.closeButton} />
    </div>
  ),
}

export const WithActions: StoryObj<ToastArgs> = {
  args: {
    type: 'default',
    title: 'Event has been created',
    description: 'Monday, January 3rd at 6:00pm',
    action: true,
    cancel: false,
    duration: 5000,
    position: 'bottom-right',
    richColors: false,
    closeButton: false,
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['default', 'success', 'info', 'warning', 'error'],
      description: 'Toast type',
    },
    title: {control: 'text', description: 'Toast title'},
    description: {control: 'text', description: 'Toast description'},
    action: {control: 'boolean', description: 'Show action button'},
    cancel: {control: 'boolean', description: 'Show cancel button'},
    duration: {
      control: {type: 'number', min: 1000, max: 10000, step: 500},
      description: 'Duration (ms)',
    },
    position: {
      control: 'select',
      options: [
        'top-left',
        'top-center',
        'top-right',
        'bottom-left',
        'bottom-center',
        'bottom-right',
      ],
      description: 'Toast position',
    },
    richColors: {control: 'boolean', description: 'Use rich colors'},
    closeButton: {control: 'boolean', description: 'Show close button'},
    onAction: {action: 'action-clicked'},
    onCancel: {action: 'cancel-clicked'},
  },
  parameters: {
    controls: {
      include: [
        'type',
        'title',
        'description',
        'action',
        'cancel',
        'duration',
        'position',
        'richColors',
        'closeButton',
      ],
    },
  },
  render: args => {
    const handleShowToast = () => {
      showToast({
        title: args.title,
        description: args.description,
        type: args.type,
        duration: args.duration,
        closeButton: args.closeButton,
        action:
          args.action && args.onAction
            ? {
                label: typeof args.action === 'string' ? args.action : 'Action',
                onClick: () => args.onAction?.(),
              }
            : undefined,
        cancel:
          args.cancel && args.onCancel
            ? {
                label: typeof args.cancel === 'string' ? args.cancel : 'Cancel',
                onClick: () => args.onCancel?.(),
              }
            : undefined,
      })
    }

    return (
      <div className="flex items-center justify-center p-8">
        <Button variant="outline" onClick={handleShowToast}>
          Show Toast with Action
        </Button>
        <Toaster
          position={args.position}
          richColors={args.richColors}
          closeButton={args.closeButton}
        />
      </div>
    )
  },
}

export const PromiseToast: StoryObj<PromiseToastArgs> = {
  args: {
    duration: 4000,
    position: 'bottom-right',
  },
  argTypes: {
    duration: {
      control: {type: 'number', min: 1000, max: 10000, step: 500},
      description: 'Duration (ms)',
    },
    position: {
      control: 'select',
      options: [
        'top-left',
        'top-center',
        'top-right',
        'bottom-left',
        'bottom-center',
        'bottom-right',
      ],
      description: 'Toast position',
    },
  },
  parameters: {
    controls: {include: ['duration', 'position']},
  },
  render: args => {
    const showPromiseToast = () => {
      const promise = () =>
        new globalThis.Promise<{name: string}>(resolve => {
          setTimeout(() => {
            resolve({name: 'Sonner'})
          }, 2000)
        })

      toast.promise(promise, {
        loading: 'Loading...',
        success: (data: {name: string}) => `${data.name} has been added`,
        error: 'Error',
        duration: args.duration,
      })
    }

    return (
      <div className="flex items-center justify-center p-8">
        <Button variant="outline" onClick={showPromiseToast}>
          Show Promise Toast
        </Button>
        <Toaster position={args.position} />
      </div>
    )
  },
}

export const CustomJSX: StoryObj = {
  render: () => {
    const showCustomToast = () => {
      toast(
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-green-500" />
          <div>
            <div className="font-semibold">Custom JSX Toast</div>
            <div className="text-sm text-muted-foreground">
              You can render custom JSX in toasts
            </div>
          </div>
        </div>,
      )
    }

    return (
      <div className="flex items-center justify-center p-8">
        <Button variant="outline" onClick={showCustomToast}>
          Show Custom JSX Toast
        </Button>
        <Toaster />
      </div>
    )
  },
}

export const MultipleToasts: StoryObj<MultiToastArgs> = {
  args: {
    count: 3,
    duration: 4000,
    position: 'bottom-right',
  },
  argTypes: {
    count: {
      control: {type: 'number', min: 1, max: 10},
      description: 'Number of toasts',
    },
    duration: {
      control: {type: 'number', min: 1000, max: 10000, step: 500},
      description: 'Duration (ms)',
    },
    position: {
      control: 'select',
      options: [
        'top-left',
        'top-center',
        'top-right',
        'bottom-left',
        'bottom-center',
        'bottom-right',
      ],
      description: 'Toast position',
    },
  },
  parameters: {
    controls: {include: ['count', 'duration', 'position']},
  },
  render: args => {
    const showMultipleToasts = () => {
      for (let i = 1; i <= args.count; i++) {
        setTimeout(() => {
          showToast({
            title: `Toast ${i}`,
            description: `This is toast number ${i}`,
            duration: args.duration,
          })
        }, i * 200)
      }
    }

    return (
      <div className="flex items-center justify-center p-8">
        <Button variant="outline" onClick={showMultipleToasts}>
          Show {args.count} Toasts
        </Button>
        <Toaster position={args.position} />
      </div>
    )
  },
}

export const Positions: StoryObj<{
  position:
    | 'top-left'
    | 'top-center'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right'
}> = {
  args: {
    position: 'bottom-right',
  },
  argTypes: {
    position: {
      control: 'select',
      options: [
        'top-left',
        'top-center',
        'top-right',
        'bottom-left',
        'bottom-center',
        'bottom-right',
      ],
      description: 'Toast position',
    },
  },
  render: args => {
    return (
      <div className="flex flex-col gap-3 p-8">
        <Button
          variant="outline"
          onClick={() =>
            showToast({
              title: `Toast at ${args.position}`,
              description: 'This toast appears at the selected position',
            })
          }
        >
          Show Toast at {args.position}
        </Button>
        <Toaster position={args.position} />
      </div>
    )
  },
}

export const RichColors: StoryObj = {
  render: () => (
    <div className="flex flex-col gap-3 p-8">
      <div className="flex flex-wrap gap-2">
        <Button
          variant="outline"
          onClick={() =>
            showToast({title: 'Event has been created', type: 'default'})
          }
        >
          Default
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            showToast({
              title: 'Event has been created',
              description: 'Monday, January 3rd at 6:00pm',
              type: 'success',
            })
          }
        >
          Success
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            showToast({
              title: 'Be at the area 10 minutes before the event time',
              type: 'info',
            })
          }
        >
          Info
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            showToast({
              title: 'Event start time cannot be earlier than 8am',
              type: 'warning',
            })
          }
        >
          Warning
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            showToast({title: 'Event has not been created', type: 'error'})
          }
        >
          Error
        </Button>
      </div>
      <Toaster richColors />
    </div>
  ),
}

export const CloseButton: StoryObj = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <Button
        variant="outline"
        onClick={() =>
          showToast({
            title: 'Event has been created',
            description: 'You can close this manually with the X button',
            duration: 10000,
            closeButton: true,
          })
        }
      >
        Show Toast with Close Button
      </Button>
      <Toaster closeButton />
    </div>
  ),
}
