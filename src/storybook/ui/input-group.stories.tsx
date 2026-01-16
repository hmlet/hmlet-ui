import type {Meta, StoryObj} from '@storybook/react'

import {Mail, Search} from 'lucide-react'

import {
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  InputRightAddon,
  InputRightElement,
} from '../../components/ui/input-group'
import {Input} from '../../components/ui/input'

const meta = {
  title: 'UI/Input Group',
  component: InputGroup,
  tags: ['autodocs'],
  parameters: {
    controls: {
      include: ['className'],
    },
    docs: {
      description: {
        component:
          'Composable wrapper for building inputs with addons (text blocks) and elements (icons). Subcomponents: `InputLeftAddon`, `InputRightAddon`, `InputLeftElement`, `InputRightElement`.',
      },
    },
  },
  argTypes: {
    className: {control: 'text'},
  },
  args: {
    children: <></>,
  },
} satisfies Meta<typeof InputGroup>

export default meta

type Story = StoryObj<typeof meta>

export const LeftAddon: Story = {
  render: () => (
    <div className="max-w-md">
      <InputGroup>
        <InputLeftAddon>https://</InputLeftAddon>
        <Input
          className="rounded-l-none"
          placeholder="example.com"
          aria-label="Website"
        />
      </InputGroup>
    </div>
  ),
}

export const RightAddon: Story = {
  render: () => (
    <div className="max-w-md">
      <InputGroup>
        <Input
          className="rounded-r-none"
          placeholder="username"
          aria-label="Username"
        />
        <InputRightAddon>@hmlet</InputRightAddon>
      </InputGroup>
    </div>
  ),
}

export const LeftElement: Story = {
  render: () => (
    <div className="max-w-md">
      <InputGroup>
        <InputLeftElement>
          <Search />
        </InputLeftElement>
        <Input className="pl-10" placeholder="Search" aria-label="Search" />
      </InputGroup>
    </div>
  ),
}

export const RightElement: Story = {
  render: () => (
    <div className="max-w-md">
      <InputGroup>
        <Input
          className="pr-10"
          placeholder="you@example.com"
          aria-label="Email"
        />
        <InputRightElement>
          <Mail />
        </InputRightElement>
      </InputGroup>
    </div>
  ),
}

export const BothElements: Story = {
  name: 'Both elements',
  render: () => (
    <div className="max-w-md">
      <InputGroup>
        <InputLeftElement>
          <Search />
        </InputLeftElement>
        <InputRightElement>
          <Mail />
        </InputRightElement>
        <Input
          className="pl-10 pr-10"
          placeholder="Search email"
          aria-label="Search email"
        />
      </InputGroup>
    </div>
  ),
}

export const AddonsAndElements: Story = {
  name: 'Addons + elements',
  render: () => (
    <div className="max-w-md">
      <InputGroup>
        <InputLeftAddon>To</InputLeftAddon>
        <InputLeftElement className="left-[3.5rem]">
          <Mail />
        </InputLeftElement>
        <Input
          className="rounded-l-none pl-[3.25rem]"
          placeholder="you@example.com"
          aria-label="Recipient"
        />
        <InputRightAddon>cc</InputRightAddon>
      </InputGroup>
    </div>
  ),
}
