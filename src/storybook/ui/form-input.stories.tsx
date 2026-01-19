import type {Meta, StoryObj} from '@storybook/react'
import {
  FormInput,
  FormTextarea,
  FormSelect,
} from '../../components/ui/form-input'
import {Mail} from 'lucide-react'

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
      {value: '', label: 'Select a country'},
      {value: 'sg', label: 'Singapore'},
      {value: 'my', label: 'Malaysia'},
      {value: 'id', label: 'Indonesia'},
    ],
    required: true,
    error: '',
    helperText: 'Choose your country of residence.',
  },
}

export const SelectWithError: SelectStory = {
  render: args => <FormSelect {...args} />,
  args: {
    label: 'Country',
    options: [
      {value: '', label: 'Select a country'},
      {value: 'sg', label: 'Singapore'},
      {value: 'my', label: 'Malaysia'},
      {value: 'id', label: 'Indonesia'},
    ],
    error: 'Country is required',
  },
}
