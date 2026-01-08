import type {Meta, StoryObj} from '@storybook/react'

import * as React from 'react'
import {expect, userEvent, within} from '@storybook/test'
import {useForm} from 'react-hook-form'

import {Input} from '../../components/ui/input'
import {Label} from '../../components/ui/label'
import {Button} from '../../components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../components/ui/form'

type InputStoryArgs = React.ComponentProps<typeof Input> & {
  label?: string
  helperText?: string
  buttonLabel?: string
  onButtonClick?: () => void

  onSubmit?: (values: {email: string}) => void
  onInvalid?: () => void
}

type InputFormValues = {email: string}

function InputFormExample(args: InputStoryArgs) {
  const form = useForm<InputFormValues>({
    defaultValues: {email: ''},
    mode: 'onSubmit',
  })

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(
          values => {
            args.onSubmit?.(values)
          },
          () => {
            args.onInvalid?.()
          },
        )}
        className="grid max-w-sm gap-4"
      >
        <FormField
          control={form.control}
          name="email"
          rules={{
            required: 'Email is required',
          }}
          render={({field}) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  {...args}
                  type={args.type ?? 'email'}
                  placeholder={args.placeholder ?? 'you@example.com'}
                  value={field.value}
                  onChange={event => {
                    field.onChange(event)
                    args.onChange?.(event)
                  }}
                  onBlur={event => {
                    field.onBlur()
                    args.onBlur?.(event)
                  }}
                />
              </FormControl>
              <FormDescription>We’ll never share your email.</FormDescription>
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

const meta: Meta<InputStoryArgs> = {
  title: 'UI/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    controls: {
      include: [
        'type',
        'placeholder',
        'defaultValue',
        'value',
        'disabled',
        'readOnly',
        'required',
        'name',
        'id',
        'autoComplete',
        'maxLength',
        'minLength',
        'pattern',
        'inputMode',
        'className',
        'label',
        'helperText',
        'buttonLabel',
        'onChange',
        'onFocus',
        'onBlur',
        'onKeyDown',
        'onPaste',
        'onButtonClick',
      ],
    },
    docs: {
      description: {
        component:
          'Key props: `type`, `placeholder`, `defaultValue`/`value`, `disabled`, `readOnly`, `required`, `name`, `id`, `autoComplete`, `maxLength`, `minLength`, `pattern`, `inputMode`, `className`.',
      },
    },
  },
  argTypes: {
    type: {
      options: ['text', 'email', 'password', 'search', 'number', 'file'],
      control: {type: 'select'},
    },
    inputMode: {
      options: [
        'none',
        'text',
        'tel',
        'url',
        'email',
        'numeric',
        'decimal',
        'search',
      ],
      control: {type: 'select'},
    },
    label: {control: 'text'},
    helperText: {control: 'text'},
    buttonLabel: {control: 'text'},
    onChange: {action: 'onChange'},
    onFocus: {action: 'onFocus'},
    onBlur: {action: 'onBlur'},
    onKeyDown: {action: 'onKeyDown'},
    onPaste: {action: 'onPaste'},
    onButtonClick: {action: 'onButtonClick'},
    onSubmit: {action: 'onSubmit'},
    onInvalid: {action: 'onInvalid'},
  },
  args: {
    placeholder: 'Type here…',
    type: 'text',
    label: 'Email',
    helperText: 'We’ll never share your email.',
    buttonLabel: 'Subscribe',
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    type: 'text',
    placeholder: 'Type here…',
  },
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement)
    const input = canvas.getByRole('textbox')

    await userEvent.type(input, 'Hello')
    await expect(input).toHaveValue('Hello')
  },
}

export const FileInput: Story = {
  args: {
    type: 'file',
  },
  render: args => (
    <div className="[&_input]:max-w-xs">
      <Input {...args} />
    </div>
  ),
  play: async ({canvasElement}) => {
    const input = canvasElement.querySelector(
      'input[type="file"]',
    ) as HTMLInputElement | null
    await expect(input).not.toBeNull()

    const file = new window.File(['hello'], 'hello.txt', {type: 'text/plain'})
    await userEvent.upload(input as HTMLInputElement, file)
    await expect((input as HTMLInputElement).files?.[0]?.name).toBe('hello.txt')
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    value: 'Disabled',
  },
}

export const WithValue: Story = {
  args: {
    defaultValue: 'Hello',
  },
}

export const WithLabel: Story = {
  args: {
    id: 'email',
    type: 'email',
    placeholder: 'you@example.com',
    label: 'Email',
    helperText: 'We’ll never share your email.',
  },
  render: args => (
    <div className="grid gap-2 [&_input]:max-w-xs">
      <Label htmlFor={args.id}>{args.label}</Label>
      <Input {...args} />
      {args.helperText ? (
        <p className="text-sm text-muted-foreground">{args.helperText}</p>
      ) : null}
    </div>
  ),
}

export const WithButton: Story = {
  args: {
    type: 'email',
    placeholder: 'Email',
    buttonLabel: 'Subscribe',
  },
  render: function WithButtonRender(args) {
    const [value, setValue] = React.useState('')

    return (
      <div className="flex max-w-sm items-center gap-2">
        <Input
          {...args}
          value={value}
          onChange={event => {
            setValue(event.currentTarget.value)
            args.onChange?.(event)
          }}
        />
        <Button
          type="button"
          onClick={() => {
            args.onButtonClick?.()
          }}
        >
          {args.buttonLabel}
        </Button>
      </div>
    )
  },
}

export const FormIntegration: Story = {
  args: {
    type: 'email',
    placeholder: 'you@example.com',
    disabled: false,
  },
  render: args => <InputFormExample {...args} />,
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole('button', {name: /submit/i}))
    await expect(canvas.getByText('Email is required')).toBeInTheDocument()
  },
}
