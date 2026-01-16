import type {Meta, StoryObj} from '@storybook/react'

import {
  FieldContent,
  FieldDescription,
  Field,
  FieldError,
  FieldErrorText,
  FieldGroup,
  FieldHelpText,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from '../../components/ui/field'
import {Input} from '../../components/ui/input'
import {Textarea} from '../../components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../components/ui/select'
import {Slider} from '../../components/ui/slider'
import {Checkbox} from '../../components/ui/checkbox'
import {RadioGroup, RadioGroupItem} from '../../components/ui/radio-group'
import {Switch} from '../../components/ui/switch'

const meta = {
  title: 'UI/Field',
  component: Field,
  tags: ['autodocs'],
  parameters: {
    controls: {
      include: ['orientation', 'className'],
    },
    docs: {
      description: {
        component:
          'Composable field primitives for accessible forms: `Field`, `FieldLabel`, `FieldDescription`, `FieldError`, `FieldGroup`, and semantic grouping via `FieldSet` + `FieldLegend`.',
      },
    },
  },
  argTypes: {
    orientation: {
      control: {type: 'select'},
      options: ['vertical', 'horizontal', 'responsive'],
    },
    className: {control: 'text'},
  },
  args: {
    children: <></>,
    orientation: 'vertical',
  },
} satisfies Meta<typeof Field>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: args => {
    const inputId = 'field-playground'

    return (
      <div className="max-w-md">
        <Field {...args} data-invalid={false}>
          <FieldLabel htmlFor={inputId} required>
            Email
          </FieldLabel>
          <Input
            id={inputId}
            placeholder="you@example.com"
            aria-invalid={undefined}
          />
          <FieldDescription>We’ll never share your email.</FieldDescription>
        </Field>
      </div>
    )
  },
}

export const FieldSetDemo: Story = {
  render: () => {
    return (
      <div className="max-w-xl">
        <FieldSet>
          <FieldLegend>Profile</FieldLegend>
          <FieldDescription>
            This appears on invoices and emails.
          </FieldDescription>
          <FieldGroup className="@container/field-group">
            <Field>
              <FieldLabel htmlFor="name">Full name</FieldLabel>
              <Input id="name" autoComplete="off" placeholder="Evil Rabbit" />
              <FieldDescription>
                This appears on invoices and emails.
              </FieldDescription>
            </Field>
            <Field data-invalid>
              <FieldLabel htmlFor="username">Username</FieldLabel>
              <Input id="username" autoComplete="off" aria-invalid />
              <FieldError>Choose another username.</FieldError>
            </Field>
            <Field orientation="horizontal">
              <Switch id="newsletter" />
              <FieldContent>
                <FieldLabel htmlFor="newsletter">
                  Subscribe to the newsletter
                </FieldLabel>
                <FieldDescription>
                  Get product updates once a month.
                </FieldDescription>
              </FieldContent>
            </Field>
          </FieldGroup>
        </FieldSet>
      </div>
    )
  },
}

export const InputStory: Story = {
  name: 'Input',
  render: () => (
    <div className="max-w-md">
      <Field>
        <FieldLabel htmlFor="email">Email</FieldLabel>
        <Input id="email" placeholder="you@example.com" />
        <FieldDescription>We’ll never share your email.</FieldDescription>
      </Field>
    </div>
  ),
}

export const TextareaStory: Story = {
  name: 'Textarea',
  render: () => (
    <div className="max-w-md">
      <Field>
        <FieldLabel htmlFor="bio">Bio</FieldLabel>
        <Textarea id="bio" placeholder="Tell us about yourself…" />
        <FieldDescription>Keep it short and friendly.</FieldDescription>
      </Field>
    </div>
  ),
}

export const SelectStory: Story = {
  name: 'Select',
  render: () => (
    <div className="max-w-md">
      <Field>
        <FieldLabel htmlFor="country">Country</FieldLabel>
        <Select>
          <SelectTrigger id="country">
            <SelectValue placeholder="Select a country" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="sg">Singapore</SelectItem>
            <SelectItem value="jp">Japan</SelectItem>
            <SelectItem value="us">United States</SelectItem>
          </SelectContent>
        </Select>
        <FieldDescription>Used for taxes and billing.</FieldDescription>
      </Field>
    </div>
  ),
}

export const SliderStory: Story = {
  name: 'Slider',
  render: () => (
    <div className="max-w-md">
      <Field>
        <FieldLabel>Volume</FieldLabel>
        <Slider defaultValue={[40]} max={100} step={1} />
        <FieldDescription>Adjust notification volume.</FieldDescription>
      </Field>
    </div>
  ),
}

export const CheckboxStory: Story = {
  name: 'Checkbox',
  render: () => (
    <div className="max-w-md">
      <Field>
        <Checkbox id="terms" />
        <FieldContent>
          <FieldLabel htmlFor="terms">Accept terms</FieldLabel>
          <FieldDescription>Required to continue.</FieldDescription>
        </FieldContent>
      </Field>
    </div>
  ),
}

export const RadioStory: Story = {
  name: 'Radio',
  render: () => (
    <div className="max-w-md">
      <FieldSet>
        <FieldLegend variant="label">Plan</FieldLegend>
        <RadioGroup defaultValue="starter" className="flex flex-col gap-3">
          <Field>
            <RadioGroupItem id="starter" value="starter" />
            <FieldContent>
              <FieldLabel htmlFor="starter">Starter</FieldLabel>
              <FieldDescription>For personal use.</FieldDescription>
            </FieldContent>
          </Field>
          <Field>
            <RadioGroupItem id="team" value="team" />
            <FieldContent>
              <FieldLabel htmlFor="team">Team</FieldLabel>
              <FieldDescription>For small teams.</FieldDescription>
            </FieldContent>
          </Field>
        </RadioGroup>
      </FieldSet>
    </div>
  ),
}

export const SwitchStory: Story = {
  name: 'Switch',
  render: () => (
    <div className="max-w-md">
      <Field orientation="horizontal">
        <Switch id="notifications" />
        <FieldContent>
          <FieldTitle>Notifications</FieldTitle>
          <FieldDescription>Email, SMS, and push options.</FieldDescription>
        </FieldContent>
      </Field>
    </div>
  ),
}

export const ChoiceCard: Story = {
  render: () => (
    <div className="max-w-xl">
      <RadioGroup defaultValue="basic" className="grid gap-3">
        <FieldLabel asChild>
          <label className="cursor-pointer">
            <Field className="rounded-lg border p-4">
              <div className="flex items-start gap-3">
                <RadioGroupItem id="basic" value="basic" className="mt-1" />
                <FieldContent>
                  <FieldTitle className="leading-none">Basic</FieldTitle>
                  <FieldDescription>
                    Good for trying things out.
                  </FieldDescription>
                </FieldContent>
              </div>
            </Field>
          </label>
        </FieldLabel>
        <FieldLabel asChild>
          <label className="cursor-pointer">
            <Field className="rounded-lg border p-4">
              <div className="flex items-start gap-3">
                <RadioGroupItem id="pro" value="pro" className="mt-1" />
                <FieldContent>
                  <FieldTitle className="leading-none">Pro</FieldTitle>
                  <FieldDescription>Best for teams.</FieldDescription>
                </FieldContent>
              </div>
            </Field>
          </label>
        </FieldLabel>
      </RadioGroup>
    </div>
  ),
}

export const FieldGroupWithSeparator: Story = {
  name: 'Field Group',
  render: () => (
    <div className="max-w-md">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="first">First name</FieldLabel>
          <Input id="first" placeholder="Evil" />
        </Field>
        <FieldSeparator>Or continue with</FieldSeparator>
        <Field>
          <FieldLabel htmlFor="last">Last name</FieldLabel>
          <Input id="last" placeholder="Rabbit" />
        </Field>
      </FieldGroup>
    </div>
  ),
}

export const Responsive: Story = {
  render: () => (
    <div className="max-w-2xl">
      <FieldGroup className="@container/field-group">
        <Field orientation="responsive">
          <FieldLabel htmlFor="address">Address</FieldLabel>
          <FieldContent>
            <Input id="address" placeholder="123 Example St" />
            <FieldDescription>
              Used for deliveries and invoices.
            </FieldDescription>
          </FieldContent>
        </Field>
        <Field orientation="responsive" data-invalid>
          <FieldLabel htmlFor="zip">Postal code</FieldLabel>
          <FieldContent>
            <Input id="zip" placeholder="123456" aria-invalid />
            <FieldError errors={[{message: 'Enter a valid postal code.'}]} />
          </FieldContent>
        </Field>
      </FieldGroup>
    </div>
  ),
}

export const BackCompatAliases: Story = {
  name: 'Aliases (Legacy)',
  render: () => (
    <div className="max-w-md">
      <Field>
        <FieldLabel htmlFor="legacy">Legacy API</FieldLabel>
        <Input id="legacy" placeholder="Still works" />
        <FieldHelpText>
          Old `FieldHelpText` maps to `FieldDescription`.
        </FieldHelpText>
        <FieldErrorText>Old `FieldErrorText` still renders.</FieldErrorText>
      </Field>
    </div>
  ),
}
