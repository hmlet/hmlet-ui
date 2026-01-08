import type {Meta, StoryObj} from '@storybook/react'
import * as React from 'react'
import {expect, userEvent, within} from '@storybook/test'
import {REGEXP_ONLY_DIGITS, REGEXP_ONLY_DIGITS_AND_CHARS} from 'input-otp'
import {useForm} from 'react-hook-form'

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '../../components/ui/input-otp'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../components/ui/form'
import {Button} from '../../components/ui/button'

type InputOTPStoryArgs = {
  maxLength?: 4 | 6
  pattern?: 'digits' | 'alphanumeric'
  disabled?: boolean
  placeholder?: string
  value?: string

  onChange?: (value: string) => void
  onComplete?: (value: string) => void
}

function Slots({maxLength}: {maxLength: 4 | 6}) {
  if (maxLength === 4) {
    return (
      <>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
        </InputOTPGroup>
        <InputOTPSeparator>
          <span className="text-muted-foreground">•</span>
        </InputOTPSeparator>
        <InputOTPGroup>
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
        </InputOTPGroup>
      </>
    )
  }

  return (
    <>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </>
  )
}

function InputOTPDemo(args: InputOTPStoryArgs) {
  const [internalValue, setInternalValue] = React.useState('')
  const isControlled = args.value !== undefined
  const value = isControlled ? args.value : internalValue

  const pattern =
    args.pattern === 'alphanumeric'
      ? REGEXP_ONLY_DIGITS_AND_CHARS
      : REGEXP_ONLY_DIGITS

  return (
    <div className="grid gap-3">
      <InputOTP
        maxLength={args.maxLength ?? 6}
        pattern={pattern}
        placeholder={args.placeholder}
        disabled={args.disabled}
        {...(isControlled ? {value} : {})}
        onChange={(next: string) => {
          if (!isControlled) setInternalValue(next)
          args.onChange?.(next)
        }}
        onComplete={(completed: string) => {
          args.onComplete?.(completed)
        }}
      >
        <Slots maxLength={args.maxLength ?? 6} />
      </InputOTP>
      <div className="text-sm text-muted-foreground">Value: {value || '—'}</div>
    </div>
  )
}

type OTPFormValues = {code: string}

function InputOTPFormExample(args: InputOTPStoryArgs) {
  const form = useForm<OTPFormValues>({
    defaultValues: {code: ''},
    mode: 'onSubmit',
  })

  const onSubmit = React.useCallback(
    (values: OTPFormValues) => {
      args.onComplete?.(values.code)
    },
    [args],
  )

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid max-w-sm gap-4"
      >
        <FormField
          control={form.control}
          name="code"
          rules={{
            required: 'Code is required',
            validate: value =>
              value.length === (args.maxLength ?? 6) ||
              `Code must be ${args.maxLength ?? 6} characters.`,
          }}
          render={({field}) => (
            <FormItem>
              <FormLabel>One-time password</FormLabel>
              <FormControl>
                <InputOTP
                  maxLength={args.maxLength ?? 6}
                  disabled={args.disabled}
                  value={field.value}
                  onChange={next => {
                    field.onChange(next)
                    args.onChange?.(next)
                  }}
                  onComplete={completed => {
                    args.onComplete?.(completed)
                  }}
                >
                  <Slots maxLength={args.maxLength ?? 6} />
                </InputOTP>
              </FormControl>
              <FormDescription>
                Enter the code we sent to your email.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={args.disabled || form.formState.isSubmitting}
        >
          Verify
        </Button>
      </form>
    </Form>
  )
}

const meta: Meta<InputOTPStoryArgs> = {
  title: 'UI/InputOTP',
  component: InputOTP,
  tags: ['autodocs'],
  parameters: {
    controls: {
      include: [
        'maxLength',
        'pattern',
        'disabled',
        'placeholder',
        'value',
        'onChange',
        'onComplete',
      ],
    },
    docs: {
      description: {
        component:
          'Accessible one-time password input built on input-otp. Supports copy/paste and patterns.',
      },
    },
  },
  argTypes: {
    maxLength: {
      options: [4, 6],
      control: {type: 'inline-radio'},
    },
    pattern: {
      options: ['digits', 'alphanumeric'],
      control: {type: 'inline-radio'},
    },
    disabled: {control: 'boolean'},
    placeholder: {control: 'text'},
    value: {control: 'text'},
    onChange: {action: 'onChange'},
    onComplete: {action: 'onComplete'},
  },
  args: {
    maxLength: 6,
    pattern: 'digits',
    disabled: false,
    placeholder: '',
    value: undefined,
  },
}

export default meta

type Story = StoryObj<InputOTPStoryArgs>

export const Default: Story = {
  name: 'Demo',
  render: args => <InputOTPDemo {...args} />,
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement)
    const input = canvas.getByRole('textbox')

    await userEvent.type(input, '123456')
    await expect(canvas.getByText('Value: 123456')).toBeInTheDocument()
  },
}

export const Pattern: Story = {
  args: {
    pattern: 'alphanumeric',
  },
  render: args => <InputOTPDemo {...args} />,
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement)
    const input = canvas.getByRole('textbox')

    await userEvent.type(input, 'a1b2c3')
    await expect(canvas.getByText('Value: a1b2c3')).toBeInTheDocument()
  },
}

export const Separator: Story = {
  args: {
    maxLength: 4,
  },
  render: args => <InputOTPDemo {...args} />,
}

export const Controlled: Story = {
  args: {
    value: '12',
    maxLength: 4,
  },
  render: function ControlledRender(args) {
    const [value, setValue] = React.useState(args.value ?? '')
    return (
      <div className="grid gap-3">
        <InputOTPDemo
          {...args}
          value={value}
          onChange={next => {
            setValue(next)
            args.onChange?.(next)
          }}
        />
        <Button
          type="button"
          variant="outline"
          onClick={() => setValue('')}
          className="w-fit"
        >
          Clear
        </Button>
      </div>
    )
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: args => <InputOTPDemo {...args} />,
}

export const FormIntegration: Story = {
  name: 'Form integration',
  render: args => <InputOTPFormExample {...args} />,
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole('button', {name: 'Verify'}))
    await expect(canvas.getByText('Code is required')).toBeInTheDocument()
  },
}
