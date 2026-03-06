import type {Meta, StoryObj} from '@storybook/react'
import * as React from 'react'
import type {Value} from 'react-phone-number-input'

import {PhoneInput, isValidPhoneNumber} from '../../components/ui/phone-input'
import {VStack, HStack} from '../../components/layout'
import {Typography} from '../../components/ui/typography'
import {Button} from '../../components/ui/button'

type PhoneInputStoryArgs = React.ComponentProps<typeof PhoneInput> & {
  showValidation?: boolean
}

const meta: Meta<PhoneInputStoryArgs> = {
  title: 'UI/PhoneInput',
  component: PhoneInput,
  tags: ['autodocs'],
  parameters: {
    controls: {
      include: [
        'size',
        'variant',
        'placeholder',
        'defaultCountry',
        'international',
        'disabled',
      ],
    },
    docs: {
      description: {
        component:
          'Phone input with searchable country selection. Click the flag/chevron to open a dropdown with search functionality to quickly find countries. Supports different sizes (sm, md, lg) and variants (default, error, success). Includes built-in validation with `isValidPhoneNumber`.',
      },
    },
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {type: 'select'},
      description: 'Size variant of the input',
    },
    variant: {
      options: ['default', 'error', 'success'],
      control: {type: 'select'},
      description: 'Visual variant of the input',
    },
    defaultCountry: {
      control: {type: 'text'},
      description:
        'Two-letter country code for default country (e.g., US, GB, DE)',
    },
    international: {
      control: {type: 'boolean'},
      description: 'Show international format with country code',
    },
    disabled: {
      control: {type: 'boolean'},
    },
    placeholder: {
      control: {type: 'text'},
    },
  },
  args: {
    placeholder: 'Enter phone number',
    defaultCountry: 'US',
    international: true,
    size: 'md',
    variant: 'default',
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: function DefaultRender(args) {
    const [value, setValue] = React.useState<Value>()
    return (
      <div className="w-80">
        <PhoneInput {...args} value={value} onChange={setValue} />
      </div>
    )
  },
}

export const Sizes: Story = {
  render: function SizesRender() {
    const [values, setValues] = React.useState<{[key: string]: Value}>({})

    return (
      <VStack gap="4" className="w-80">
        <VStack gap="1">
          <Typography variant="body-sm" className="text-muted-foreground">
            Small
          </Typography>
          <PhoneInput
            size="sm"
            defaultCountry="US"
            value={values.sm}
            onChange={v => setValues(prev => ({...prev, sm: v}))}
            placeholder="Small input"
          />
        </VStack>
        <VStack gap="1">
          <Typography variant="body-sm" className="text-muted-foreground">
            Medium (default)
          </Typography>
          <PhoneInput
            size="md"
            defaultCountry="US"
            value={values.md}
            onChange={v => setValues(prev => ({...prev, md: v}))}
            placeholder="Medium input"
          />
        </VStack>
        <VStack gap="1">
          <Typography variant="body-sm" className="text-muted-foreground">
            Large
          </Typography>
          <PhoneInput
            size="lg"
            defaultCountry="US"
            value={values.lg}
            onChange={v => setValues(prev => ({...prev, lg: v}))}
            placeholder="Large input"
          />
        </VStack>
      </VStack>
    )
  },
}

export const Variants: Story = {
  render: function VariantsRender() {
    const [values, setValues] = React.useState<{[key: string]: Value}>({})

    return (
      <VStack gap="4" className="w-80">
        <VStack gap="1">
          <Typography variant="body-sm" className="text-muted-foreground">
            Default
          </Typography>
          <PhoneInput
            variant="default"
            defaultCountry="US"
            value={values.default}
            onChange={v => setValues(prev => ({...prev, default: v}))}
          />
        </VStack>
        <VStack gap="1">
          <Typography variant="body-sm" className="text-muted-foreground">
            Error
          </Typography>
          <PhoneInput
            variant="error"
            defaultCountry="US"
            value={values.error}
            onChange={v => setValues(prev => ({...prev, error: v}))}
          />
        </VStack>
        <VStack gap="1">
          <Typography variant="body-sm" className="text-muted-foreground">
            Success
          </Typography>
          <PhoneInput
            variant="success"
            defaultCountry="US"
            value={values.success}
            onChange={v => setValues(prev => ({...prev, success: v}))}
          />
        </VStack>
      </VStack>
    )
  },
}

export const WithValidation: Story = {
  render: function WithValidationRender() {
    const [value, setValue] = React.useState<Value>()
    const [submitted, setSubmitted] = React.useState(false)

    const isValid = value ? isValidPhoneNumber(value) : false
    const showError = submitted && !isValid

    return (
      <VStack gap="4" className="w-80">
        <PhoneInput
          variant={showError ? 'error' : isValid ? 'success' : 'default'}
          defaultCountry="US"
          value={value}
          onChange={v => {
            setValue(v)
            setSubmitted(false)
          }}
        />
        {showError && (
          <Typography variant="body-sm" className="text-destructive">
            Please enter a valid phone number
          </Typography>
        )}
        {isValid && (
          <Typography variant="body-sm" className="text-success">
            Valid phone number! ({value})
          </Typography>
        )}
        <Button onClick={() => setSubmitted(true)}>Validate</Button>
      </VStack>
    )
  },
}

export const DifferentCountries: Story = {
  name: 'Searchable Country Selector',
  render: function DifferentCountriesRender() {
    const [value, setValue] = React.useState<Value>()
    const [selectedCountry, setSelectedCountry] = React.useState<string>('US')

    return (
      <VStack gap="4" className="w-96">
        <VStack gap="2">
          <Typography variant="body-sm" className="text-muted-foreground">
            Click the flag to open the country selector with search
          </Typography>
          <PhoneInput
            defaultCountry="US"
            value={value}
            onChange={setValue}
            onCountryChange={country => setSelectedCountry(country || 'US')}
            placeholder="Try searching for a country..."
          />
          <Typography variant="body-sm" className="text-muted-foreground">
            Selected country:{' '}
            <span className="font-medium text-foreground">
              {selectedCountry}
            </span>
          </Typography>
        </VStack>

        <div className="p-4 bg-muted/50 rounded-lg">
          <Typography variant="body-sm" className="font-medium mb-2">
            Tips:
          </Typography>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Click the flag icon to open the country dropdown</li>
            <li>• Type to search for a country (e.g., "united", "germany")</li>
            <li>• Press Enter when one country matches to select it</li>
            <li>• Click outside or press Escape to close</li>
          </ul>
        </div>
      </VStack>
    )
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: function DisabledRender(args) {
    return (
      <div className="w-80">
        <PhoneInput {...args} value={'+1234567890' as Value} />
      </div>
    )
  },
}

export const InForm: Story = {
  render: function InFormRender() {
    const [phone, setPhone] = React.useState<Value>()
    const [errors, setErrors] = React.useState<{phone?: string}>({})

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      const newErrors: {phone?: string} = {}

      if (!phone) {
        newErrors.phone = 'Phone number is required'
      } else if (!isValidPhoneNumber(phone)) {
        newErrors.phone = 'Please enter a valid phone number'
      }

      setErrors(newErrors)

      if (Object.keys(newErrors).length === 0) {
        alert(`Form submitted! Phone: ${phone}`)
      }
    }

    return (
      <form onSubmit={handleSubmit} className="w-80">
        <VStack gap="4">
          <VStack gap="2">
            <Typography variant="body-sm" className="font-medium">
              Phone Number <span className="text-destructive">*</span>
            </Typography>
            <PhoneInput
              variant={errors.phone ? 'error' : 'default'}
              defaultCountry="US"
              value={phone}
              onChange={v => {
                setPhone(v)
                if (errors.phone) setErrors({})
              }}
            />
            {errors.phone && (
              <Typography variant="body-sm" className="text-destructive">
                {errors.phone}
              </Typography>
            )}
          </VStack>
          <HStack gap="2">
            <Button type="submit">Submit</Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                setPhone(undefined)
                setErrors({})
              }}
            >
              Reset
            </Button>
          </HStack>
        </VStack>
      </form>
    )
  },
}
