import type {Meta, StoryObj} from '@storybook/react'
import * as React from 'react'
import {Multiselect} from '../../components/ui/multiselect'
import type {MultiselectOption} from '../../components/ui/multiselect'

const manyOptions: MultiselectOption[] = [
  {value: 'apple', label: 'Apple'},
  {value: 'banana', label: 'Banana'},
  {value: 'orange', label: 'Orange'},
  {value: 'grape', label: 'Grape'},
  {value: 'kiwi', label: 'Kiwi'},
  {value: 'pear', label: 'Pear'},
  {value: 'mango', label: 'Mango'},
  {value: 'pineapple', label: 'Pineapple'},
  {value: 'peach', label: 'Peach'},
  {value: 'plum', label: 'Plum'},
  {value: 'melon', label: 'Melon'},
  {value: 'berry', label: 'Berry'},
]

export const Loading: Story = {
  args: {
    options: manyOptions,
    placeholder: 'Loading fruits...',
    loading: true,
  },
  render: function LoadingRender(args) {
    return (
      <div style={{maxWidth: 300}}>
        <Multiselect {...args} />
      </div>
    )
  },
}

export const ApiError: Story = {
  args: {
    options: [],
    placeholder: 'Select fruits...',
    apiError: {
      error: true,
      text: 'Failed to load. Retry?',
      onClick: () => alert('Retry clicked!'),
    },
  },
  render: function ApiErrorRender(args) {
    return (
      <div style={{maxWidth: 300}}>
        <Multiselect {...args} />
      </div>
    )
  },
}

export const EmptyState: Story = {
  args: {
    options: [],
    placeholder: 'No fruits available',
  },
  render: function EmptyStateRender(args) {
    return (
      <div style={{maxWidth: 300}}>
        <Multiselect {...args} />
      </div>
    )
  },
}

export const EllipsisOverflow: Story = {
  args: {
    options: manyOptions,
    placeholder: 'Select many fruits...',
    optionVariant: 'default',
  },
  render: function EllipsisOverflowRender(args) {
    const [value, setValue] = React.useState<string[]>([
      'apple',
      'banana',
      'orange',
      'grape',
      'kiwi',
      'pear',
      'mango',
      'pineapple',
      'peach',
      'plum',
      'melon',
      'berry',
    ])
    return (
      <div style={{maxWidth: 220}}>
        <Multiselect {...args} value={value} onChange={setValue} />
      </div>
    )
  },
}

export const TooltipOnOverflow: Story = {
  args: {
    options: manyOptions,
    placeholder: 'Select fruits...',
    optionVariant: 'checkbox',
  },
  render: function TooltipOnOverflowRender(args) {
    const [value, setValue] = React.useState<string[]>([
      'apple',
      'banana',
      'orange',
      'grape',
      'kiwi',
      'pear',
      'mango',
    ])
    return (
      <div style={{maxWidth: 180}}>
        <Multiselect {...args} value={value} onChange={setValue} />
      </div>
    )
  },
}

const options: MultiselectOption[] = [
  {value: 'apple', label: 'Apple'},
  {value: 'banana', label: 'Banana'},
  {value: 'orange', label: 'Orange'},
  {value: 'grape', label: 'Grape'},
  {value: 'kiwi', label: 'Kiwi', disabled: true},
]

const meta: Meta = {
  title: 'UI/Multiselect',
  component: Multiselect,
  tags: ['autodocs'],
  args: {
    options,
    placeholder: 'Select fruits...',
    optionVariant: 'default',
    isSearchable: true,
    searchPlaceholder: 'Search...',
  },
  argTypes: {
    value: {control: 'object'},
    optionVariant: {
      options: ['default', 'checkbox'],
      control: {type: 'inline-radio'},
    },
    onChange: {action: 'onChange'},
    isSearchable: {control: 'boolean'},
    searchPlaceholder: {control: 'text'},
  },
}

export default meta

type Story = StoryObj<typeof Multiselect>

export const Default: Story = {
  args: {
    optionVariant: 'default',
  },
}

export const Checkbox: Story = {
  args: {
    optionVariant: 'checkbox',
  },
}

export const Controlled: Story = {
  render: function ControlledRender(args) {
    const [value, setValue] = React.useState<string[]>(['banana'])
    return <Multiselect {...args} value={value} onChange={setValue} />
  },
}

export const Searchable: Story = {
  name: 'Searchable (Local)',
  args: {
    options: manyOptions,
    placeholder: 'Search fruits...',
    isSearchable: true,
    searchPlaceholder: 'Type to search...',
  },
  render: function SearchableRender(args) {
    return (
      <div style={{maxWidth: 300}}>
        <Multiselect {...args} />
      </div>
    )
  },
}

export const SearchableDisabled: Story = {
  name: 'Search Disabled',
  args: {
    options: manyOptions,
    placeholder: 'Select fruits...',
    isSearchable: false,
  },
  render: function SearchableDisabledRender(args) {
    return (
      <div style={{maxWidth: 300}}>
        <Multiselect {...args} />
      </div>
    )
  },
}

export const SearchableWithCustomFn: Story = {
  name: 'Searchable (Custom Function)',
  args: {
    placeholder: 'Search fruits...',
    isSearchable: true,
    searchPlaceholder: 'Type to search (async)...',
  },
  render: function SearchableCustomFnRender(args) {
    const [opts, setOpts] = React.useState(manyOptions)
    const [loading, setLoading] = React.useState(false)

    const handleSearch = React.useCallback((searchTerm: string) => {
      setLoading(true)
      // Simulate API call with setTimeout
      setTimeout(() => {
        if (!searchTerm) {
          setOpts(manyOptions)
        } else {
          const filtered = manyOptions.filter(opt => {
            const label =
              typeof opt.label === 'string' ? opt.label : String(opt.value)
            return label.toLowerCase().includes(searchTerm.toLowerCase())
          })
          setOpts(filtered)
        }
        setLoading(false)
      }, 500)
    }, [])

    return (
      <div style={{maxWidth: 300}}>
        <Multiselect
          {...args}
          options={opts}
          loading={loading}
          searchFn={handleSearch}
        />
      </div>
    )
  },
}
