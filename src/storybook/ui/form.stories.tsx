import type {Meta, StoryObj} from '@storybook/react'
import * as React from 'react'
import {expect, userEvent, within} from '@storybook/test'
import {useForm} from 'react-hook-form'
import type {FieldErrors} from 'react-hook-form'
import {Info} from 'lucide-react'

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../components/ui/form'
import {Input} from '../../components/ui/input'
import {Button} from '../../components/ui/button'

type FormStoryArgs = {
  mode?: 'onSubmit' | 'onBlur' | 'onChange'
  defaultEmail?: string
  defaultUsername?: string

  disabled?: boolean
  showDescription?: boolean
  showInfo?: boolean
  presetError?: boolean
  serverError?: boolean

  onSubmit?: (values: unknown) => void
  onInvalid?: (messages: Record<string, string>) => void
}

function errorsToMessages(errors: FieldErrors) {
  const messages: Record<string, string> = {}
  for (const [key, value] of Object.entries(errors)) {
    const message = (value as {message?: unknown} | undefined)?.message
    if (typeof message === 'string') messages[key] = message
  }
  return messages
}

type EmailValues = {email: string}

function EmailFormExample(args: FormStoryArgs) {
  const form = useForm<EmailValues>({
    mode: args.mode ?? 'onSubmit',
    defaultValues: {
      email: args.defaultEmail ?? '',
    },
  })

  React.useEffect(() => {
    if (!args.presetError) return
    form.setError('email', {
      type: 'manual',
      message: 'This email is already in use.',
    })
  }, [args.presetError, form])

  const [serverMessage, setServerMessage] = React.useState<string | null>(null)

  const onSubmit = React.useCallback(
    async (values: EmailValues) => {
      setServerMessage(null)

      if (args.serverError) {
        setServerMessage('Server error: please try again.')
        return
      }

      args.onSubmit?.(values)
    },
    [args],
  )

  const onInvalid = React.useCallback(
    (errors: FieldErrors<EmailValues>) => {
      args.onInvalid?.(errorsToMessages(errors))
    },
    [args],
  )

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit, onInvalid)}
        className="grid max-w-sm gap-4"
      >
        {serverMessage ? (
          <p role="alert" className="text-destructive text-sm">
            {serverMessage}
          </p>
        ) : null}

        <FormField
          control={form.control}
          name="email"
          rules={{
            required: 'Email is required',
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: 'Please enter a valid email address.',
            },
          }}
          render={({field}) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="you@example.com"
                  disabled={args.disabled}
                  autoComplete="email"
                  {...field}
                />
              </FormControl>

              {args.showInfo ? (
                <FormDescription className="flex items-center gap-2">
                  <Info className="size-4" />
                  Use a real address for verification.
                </FormDescription>
              ) : null}

              {args.showDescription ? (
                <FormDescription>We’ll never share your email.</FormDescription>
              ) : null}

              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={args.disabled || form.formState.isSubmitting}
        >
          Submit
        </Button>
      </form>
    </Form>
  )
}

type ProfileValues = {username: string; email: string}

function ProfileFormExample(args: FormStoryArgs) {
  const form = useForm<ProfileValues>({
    mode: args.mode ?? 'onSubmit',
    defaultValues: {
      username: args.defaultUsername ?? '',
      email: args.defaultEmail ?? '',
    },
  })

  const onSubmit = React.useCallback(
    (values: ProfileValues) => {
      args.onSubmit?.(values)
    },
    [args],
  )

  const onInvalid = React.useCallback(
    (errors: FieldErrors<ProfileValues>) => {
      args.onInvalid?.(errorsToMessages(errors))
    },
    [args],
  )

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit, onInvalid)}
        className="grid max-w-sm gap-4"
      >
        <FormField
          control={form.control}
          name="username"
          rules={{
            required: 'Username is required',
            minLength: {
              value: 2,
              message: 'Username must be at least 2 characters.',
            },
            maxLength: {
              value: 50,
              message: 'Username must be at most 50 characters.',
            },
          }}
          render={({field}) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input
                  placeholder="shadcn"
                  disabled={args.disabled}
                  autoComplete="username"
                  {...field}
                />
              </FormControl>
              {args.showDescription ? (
                <FormDescription>
                  This is your public display name.
                </FormDescription>
              ) : null}
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          rules={{
            required: 'Email is required',
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: 'Please enter a valid email address.',
            },
          }}
          render={({field}) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="you@example.com"
                  disabled={args.disabled}
                  autoComplete="email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={args.disabled || form.formState.isSubmitting}
        >
          Submit
        </Button>
      </form>
    </Form>
  )
}

const meta: Meta<FormStoryArgs> = {
  title: 'UI/Form',
  component: Form,
  tags: ['autodocs'],
  parameters: {
    controls: {
      include: [
        'mode',
        'defaultEmail',
        'defaultUsername',
        'disabled',
        'showDescription',
        'showInfo',
        'presetError',
        'serverError',
        'onSubmit',
        'onInvalid',
      ],
    },
    docs: {
      description: {
        component:
          'The Form component is an abstraction over react-hook-form. These stories demonstrate common patterns (required fields, validation errors, helper/info text, and server errors).',
      },
    },
  },
  argTypes: {
    mode: {
      options: ['onSubmit', 'onBlur', 'onChange'],
      control: {type: 'inline-radio'},
    },
    defaultEmail: {control: 'text'},
    defaultUsername: {control: 'text'},
    disabled: {control: 'boolean'},
    showDescription: {control: 'boolean'},
    showInfo: {control: 'boolean'},
    presetError: {control: 'boolean'},
    serverError: {control: 'boolean'},
    onSubmit: {action: 'onSubmit'},
    onInvalid: {action: 'onInvalid'},
  },
  args: {
    mode: 'onSubmit',
    defaultEmail: '',
    defaultUsername: '',
    disabled: false,
    showDescription: true,
    showInfo: false,
    presetError: false,
    serverError: false,
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: args => <EmailFormExample {...args} />,
}

export const RequiredAndPatternValidation: Story = {
  name: 'Required + pattern',
  render: args => <EmailFormExample {...args} />,
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement)

    await userEvent.click(canvas.getByRole('button', {name: 'Submit'}))
    await expect(canvas.getByText('Email is required')).toBeInTheDocument()

    await userEvent.type(
      canvas.getByPlaceholderText('you@example.com'),
      'not-an-email',
    )
    await userEvent.click(canvas.getByRole('button', {name: 'Submit'}))
    await expect(
      canvas.getByText('Please enter a valid email address.'),
    ).toBeInTheDocument()

    await userEvent.clear(canvas.getByPlaceholderText('you@example.com'))
    await userEvent.type(
      canvas.getByPlaceholderText('you@example.com'),
      'you@example.com',
    )
    await userEvent.click(canvas.getByRole('button', {name: 'Submit'}))
    await expect(
      canvas.queryByText('Email is required'),
    ).not.toBeInTheDocument()
    await expect(
      canvas.queryByText('Please enter a valid email address.'),
    ).not.toBeInTheDocument()
  },
}

export const InfoAndDescription: Story = {
  args: {
    showInfo: true,
    showDescription: true,
  },
  render: args => <EmailFormExample {...args} />,
}

export const PresetErrorState: Story = {
  args: {
    presetError: true,
  },
  render: args => <EmailFormExample {...args} />,
}

export const ServerErrorOnSubmit: Story = {
  args: {
    serverError: true,
  },
  render: args => <EmailFormExample {...args} />,
}

export const ProfileForm: Story = {
  name: 'Multi-field form',
  args: {
    showDescription: true,
  },
  render: args => <ProfileFormExample {...args} />,
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole('button', {name: 'Submit'}))
    await expect(canvas.getByText('Username is required')).toBeInTheDocument()
    await expect(canvas.getByText('Email is required')).toBeInTheDocument()
  },
}
