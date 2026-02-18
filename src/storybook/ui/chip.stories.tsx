import {useState} from 'react'
import type {Meta, StoryObj} from '@storybook/react'
import {Chip} from '../../components/ui/chip'
import type {ChipProps} from '../../components/ui/chip'
import {VStack, HStack, Section, Box} from '../../components/layout'

const meta: Meta<ChipProps> = {
  title: 'UI/Chip',
  component: Chip,
  tags: ['autodocs'],
  argTypes: {
    label: {control: 'text'},
    variant: {
      control: 'select',
      options: [
        'success',
        'danger',
        'warning',
        'info',
        'default',
        'primary',
        'secondary',
        'neutral',
        'active',
        'inactive',
        'pending',
        'approved',
        'rejected',
        'cancelled',
        'completed',
        'processing',
        'draft',
        'urgent',
      ],
    },
    size: {control: 'select', options: ['xs', 'sm', 'md', 'lg']},
    onDelete: {action: 'onDelete'},
    onClick: {action: 'onClick'},
  },
  args: {
    label: 'Chip',
    variant: 'default',
    size: 'md',
  },
}
export default meta

type Story = StoryObj<ChipProps>

export const Playground: Story = {
  args: {
    label: 'Chip',
    variant: 'default',
    size: 'md',
  },
  render: args => <Chip {...args} />,
}

export const AllVariants: Story = {
  render: () => (
    <VStack gap={4}>
      <HStack gap={3} className="flex-wrap">
        <Chip label="Success" variant="success" />
        <Chip label="Danger" variant="danger" />
        <Chip label="Warning" variant="warning" />
        <Chip label="Info" variant="info" />
        <Chip label="Default" variant="default" />
        <Chip label="Primary" variant="primary" />
        <Chip label="Secondary" variant="secondary" />
        <Chip label="Neutral" variant="neutral" />
      </HStack>
      <HStack gap={3} className="flex-wrap">
        <Chip label="Active" variant="active" />
        <Chip label="Inactive" variant="inactive" />
        <Chip label="Pending" variant="pending" />
        <Chip label="Approved" variant="approved" />
        <Chip label="Rejected" variant="rejected" />
        <Chip label="Cancelled" variant="cancelled" />
        <Chip label="Completed" variant="completed" />
        <Chip label="Processing" variant="processing" />
        <Chip label="Draft" variant="draft" />
        <Chip label="Urgent" variant="urgent" />
      </HStack>
    </VStack>
  ),
}

export const Sizes: Story = {
  render: () => (
    <HStack gap={3} align="center" className="flex-wrap">
      <Chip label="XS Chip" variant="success" size="xs" />
      <Chip label="Small" variant="success" size="sm" />
      <Chip label="Medium" variant="success" size="md" />
      <Chip label="Large" variant="success" size="lg" />
    </HStack>
  ),
}

export const Clickable: Story = {
  render: () => (
    <HStack gap={3} className="flex-wrap">
      <Chip
        label="Click Me"
        variant="primary"
        onClick={() => alert('Chip clicked!')}
      />
      <Chip
        label="Clickable Success"
        variant="success"
        onClick={() => alert('Success!')}
      />
      <Chip
        label="Clickable Warning"
        variant="warning"
        onClick={() => alert('Warning!')}
      />
    </HStack>
  ),
}

export const Deletable: Story = {
  render: () => <DeletableChipsDemo />,
}

function DeletableChipsDemo() {
  const [chips, setChips] = useState([
    {id: 1, label: 'Removable', variant: 'success' as const},
    {id: 2, label: 'Chip 2', variant: 'danger' as const},
    {id: 3, label: 'Chip 3', variant: 'warning' as const},
  ])
  const handleDelete = (id: number) => {
    setChips(chips.filter(chip => chip.id !== id))
  }
  return (
    <HStack gap={3} className="flex-wrap">
      {chips.map(chip => (
        <Chip
          key={chip.id}
          label={chip.label}
          variant={chip.variant}
          onDelete={() => handleDelete(chip.id)}
        />
      ))}
      {chips.length === 0 && (
        <span className="text-body-sm text-muted-foreground">
          All chips removed!
        </span>
      )}
    </HStack>
  )
}

export const UseCases: Story = {
  render: () => (
    <VStack gap={6}>
      <Section>
        <VStack gap={2}>
          <p className="text-body-md font-semibold">Property Listings:</p>
          <HStack gap={2} className="flex-wrap">
            <Chip label="Available" variant="active" size="sm" />
            <Chip label="Reserved" variant="pending" size="sm" />
            <Chip label="Occupied" variant="danger" size="sm" />
            <Chip label="Under Maintenance" variant="warning" size="sm" />
          </HStack>
        </VStack>
      </Section>
      <Section>
        <VStack gap={2}>
          <p className="text-body-md font-semibold">Booking Status:</p>
          <HStack gap={2} className="flex-wrap">
            <Chip label="Confirmed" variant="approved" size="sm" />
            <Chip label="Pending Payment" variant="pending" size="sm" />
            <Chip label="Cancelled" variant="cancelled" size="sm" />
            <Chip label="Completed" variant="completed" size="sm" />
            <Chip label="Processing" variant="processing" size="sm" />
          </HStack>
        </VStack>
      </Section>
      <Section>
        <VStack gap={2}>
          <p className="text-body-md font-semibold">Priority Levels:</p>
          <HStack gap={2} className="flex-wrap">
            <Chip label="Urgent" variant="urgent" size="sm" />
            <Chip label="High" variant="danger" size="sm" />
            <Chip label="Medium" variant="warning" size="sm" />
            <Chip label="Low" variant="info" size="sm" />
          </HStack>
        </VStack>
      </Section>
      <Section>
        <VStack gap={2}>
          <p className="text-body-md font-semibold">Categories:</p>
          <HStack gap={2} className="flex-wrap">
            <Chip label="Studio" variant="neutral" size="sm" />
            <Chip label="1 Bedroom" variant="neutral" size="sm" />
            <Chip label="2 Bedroom" variant="neutral" size="sm" />
            <Chip label="Penthouse" variant="primary" size="sm" />
          </HStack>
        </VStack>
      </Section>
      <Section>
        <VStack gap={2}>
          <p className="text-body-md font-semibold">Amenities (Deletable):</p>
          <HStack gap={2} className="flex-wrap">
            <Chip
              label="WiFi"
              variant="default"
              size="sm"
              onDelete={() => {}}
            />
            <Chip
              label="Parking"
              variant="default"
              size="sm"
              onDelete={() => {}}
            />
            <Chip label="Gym" variant="default" size="sm" onDelete={() => {}} />
            <Chip
              label="Pool"
              variant="default"
              size="sm"
              onDelete={() => {}}
            />
            <Chip
              label="24/7 Security"
              variant="default"
              size="sm"
              onDelete={() => {}}
            />
          </HStack>
        </VStack>
      </Section>
    </VStack>
  ),
}

export const DarkMode: Story = {
  render: () => (
    <Box className="p-6 bg-[#111111] rounded-lg dark">
      <VStack gap={4}>
        <HStack gap={3} className="flex-wrap">
          <Chip label="Success" variant="success" />
          <Chip label="Danger" variant="danger" />
          <Chip label="Warning" variant="warning" />
          <Chip label="Info" variant="info" />
          <Chip label="Default" variant="default" />
        </HStack>
        <HStack gap={3} className="flex-wrap">
          <Chip label="Active" variant="active" />
          <Chip label="Pending" variant="pending" />
          <Chip label="Approved" variant="approved" />
          <Chip label="Rejected" variant="rejected" />
          <Chip label="Urgent" variant="urgent" />
        </HStack>
      </VStack>
    </Box>
  ),
}
