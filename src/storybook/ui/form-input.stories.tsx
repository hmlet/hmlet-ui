import type {Meta, StoryObj} from '@storybook/react'
import {
  FormInput,
  FormTextarea,
  FormSelect,
  FormPhoneInput,
} from '../../components/ui/form-input'
import {Mail} from 'lucide-react'
import * as React from 'react'
import type {Value} from 'react-phone-number-input'
import {isValidPhoneNumber} from '../../components/ui/phone-input'
import {VStack, HStack} from '../../components/layout'
import {Button} from '../../components/ui/button'
import {Typography} from '../../components/ui/typography'

const meta: Meta<typeof FormInput> = {
  title: 'UI/FormInput',
  tags: ['autodocs'],
  parameters: {
    controls: {
      include: [
        'label',
        'error',
        'helperText',
        'icon',
        'required',
        'options',
        'placeholder',
        'value',
        'defaultValue',
        'type',
      ],
    },
    docs: {
      description: {
        component:
          'FormInput, FormTextarea, and FormSelect are form field wrappers with label, error, and helper text support.',
      },
    },
  },
}

export default meta

type InputStory = StoryObj<typeof FormInput>
type TextareaStory = StoryObj<typeof FormTextarea>
type SelectStory = StoryObj<typeof FormSelect>

export const InputPlayground: InputStory = {
  render: args => <FormInput {...args} />,
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    type: 'email',
    required: true,
    icon: Mail,
    helperText: 'We will not share your email.',
    error: '',
  },
}

export const InputWithError: InputStory = {
  render: args => <FormInput {...args} />,
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
    error: 'Username is required',
  },
}

export const TextareaPlayground: TextareaStory = {
  render: args => <FormTextarea {...args} />,
  args: {
    label: 'Message',
    placeholder: 'Type your message...',
    required: true,
    helperText: 'Max 500 characters.',
    error: '',
  },
}

export const SelectPlayground: SelectStory = {
  render: args => <FormSelect {...args} />,
  args: {
    label: 'Country',
    options: [
      {value: 'sg', label: 'Singapore'},
      {value: 'my', label: 'Malaysia'},
      {value: 'id', label: 'Indonesia'},
    ],
    required: true,
    error: '',
    helperText: 'Choose your country of residence.',
    placeholder: 'Select a country',
    loading: false,
    emptyText: 'No countries available',
    apiError: undefined,
    defaultValue: 'sg',
  },
}

export const SelectWithError: SelectStory = {
  render: args => <FormSelect {...args} />,
  args: {
    label: 'Country',
    options: [
      {value: 'sg', label: 'Singapore'},
      {value: 'my', label: 'Malaysia'},
      {value: 'id', label: 'Indonesia'},
    ],
    error: 'Country is required',
    placeholder: 'Select a country',
    loading: false,
    emptyText: 'No countries available',
    apiError: undefined,
    defaultValue: 'my',
  },
}

export const SelectLoading: SelectStory = {
  render: args => <FormSelect {...args} />,
  args: {
    label: 'Country',
    options: [],
    loading: true,
    placeholder: 'Select a country',
    emptyText: 'Loading countries...',
    helperText: 'Fetching country list...',
  },
}

export const SelectEmpty: SelectStory = {
  render: args => <FormSelect {...args} />,
  args: {
    label: 'Country',
    options: [],
    loading: false,
    placeholder: 'Select a country',
    emptyText: 'No countries available',
    helperText: 'No countries found.',
  },
}

export const SelectApiError: SelectStory = {
  render: args => <FormSelect {...args} />,
  args: {
    label: 'Country',
    options: [],
    loading: false,
    placeholder: 'Select a country',
    emptyText: 'No countries available',
    apiError: {message: 'Failed to fetch countries', code: 500},
    helperText: 'Please try again later.',
  },
}

export const SelectSearchable: SelectStory = {
  name: 'Select Searchable',
  render: args => <FormSelect {...args} />,
  args: {
    label: 'Country',
    options: [
      {value: 'sg', label: 'Singapore'},
      {value: 'my', label: 'Malaysia'},
      {value: 'id', label: 'Indonesia'},
      {value: 'th', label: 'Thailand'},
      {value: 'vn', label: 'Vietnam'},
      {value: 'ph', label: 'Philippines'},
      {value: 'jp', label: 'Japan'},
      {value: 'kr', label: 'South Korea'},
      {value: 'cn', label: 'China'},
      {value: 'tw', label: 'Taiwan'},
    ],
    placeholder: 'Search countries...',
    isSearchable: true,
    searchPlaceholder: 'Type to search...',
    helperText: 'Search through the list of countries.',
  },
}

export const SelectSearchDisabled: SelectStory = {
  name: 'Select Search Disabled',
  render: args => <FormSelect {...args} />,
  args: {
    label: 'Country',
    options: [
      {value: 'sg', label: 'Singapore'},
      {value: 'my', label: 'Malaysia'},
      {value: 'id', label: 'Indonesia'},
    ],
    placeholder: 'Select a country',
    isSearchable: false,
    helperText: 'Search is disabled for this select.',
  },
}

type PhoneInputStory = StoryObj<typeof FormPhoneInput>

export const PhoneInputPlayground: PhoneInputStory = {
  render: function PhoneInputPlaygroundRender(args) {
    const [value, setValue] = React.useState<Value>()
    return (
      <div className="w-80">
        <FormPhoneInput {...args} value={value} onChange={setValue} />
      </div>
    )
  },
  args: {
    label: 'Phone Number',
    placeholder: 'Enter your phone number',
    required: true,
    helperText: 'Click the flag to search and select a country.',
    error: '',
    defaultCountry: 'US',
    size: 'md',
  },
}

export const PhoneInputWithError: PhoneInputStory = {
  render: function PhoneInputWithErrorRender(args) {
    const [value, setValue] = React.useState<Value>()
    return (
      <div className="w-80">
        <FormPhoneInput {...args} value={value} onChange={setValue} />
      </div>
    )
  },
  args: {
    label: 'Phone Number',
    placeholder: 'Enter your phone number',
    error: 'Please enter a valid phone number',
    defaultCountry: 'US',
  },
}

export const PhoneInputSizes: PhoneInputStory = {
  render: function PhoneInputSizesRender() {
    const [values, setValues] = React.useState<{[key: string]: Value}>({})

    return (
      <VStack gap="6" className="w-80">
        <FormPhoneInput
          label="Small"
          size="sm"
          defaultCountry="US"
          value={values.sm}
          onChange={v => setValues(prev => ({...prev, sm: v}))}
          helperText="Size: sm (h-9)"
        />
        <FormPhoneInput
          label="Medium (default)"
          size="md"
          defaultCountry="US"
          value={values.md}
          onChange={v => setValues(prev => ({...prev, md: v}))}
          helperText="Size: md (h-11)"
        />
        <FormPhoneInput
          label="Large"
          size="lg"
          defaultCountry="US"
          value={values.lg}
          onChange={v => setValues(prev => ({...prev, lg: v}))}
          helperText="Size: lg (h-12)"
        />
      </VStack>
    )
  },
}

export const PhoneInputValidation: PhoneInputStory = {
  render: function PhoneInputValidationRender() {
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
          <FormPhoneInput
            label="Phone Number"
            required
            defaultCountry="US"
            value={phone}
            onChange={v => {
              setPhone(v)
              if (errors.phone) setErrors({})
            }}
            error={errors.phone}
            helperText={
              !errors.phone
                ? 'Enter your phone number with country code'
                : undefined
            }
          />
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

export const PhoneInputDifferentCountries: PhoneInputStory = {
  name: 'Phone Input - Searchable Countries',
  render: function PhoneInputDifferentCountriesRender() {
    const [value, setValue] = React.useState<Value>()
    const [selectedCountry, setSelectedCountry] = React.useState<string>('SG')

    return (
      <VStack gap="6" className="w-96">
        <FormPhoneInput
          label="Phone Number"
          required
          defaultCountry="SG"
          value={value}
          onChange={setValue}
          onCountryChange={country => setSelectedCountry(country || 'SG')}
          helperText={`Selected country: ${selectedCountry}`}
        />

        <div className="p-4 bg-muted/50 rounded-lg">
          <Typography variant="body-sm" className="font-medium mb-2">
            Country Search Features:
          </Typography>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Click the flag icon to open the searchable dropdown</li>
            <li>• Type to filter ~240 countries instantly</li>
            <li>• Flags are displayed next to each country name</li>
            <li>• Press Enter when one match remains to select it</li>
            <li>• Works in both light and dark themes</li>
          </ul>
        </div>
      </VStack>
    )
  },
}
