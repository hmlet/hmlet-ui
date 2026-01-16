import type {Meta, StoryObj} from '@storybook/react'

import {LoaderCircle} from 'lucide-react'

import {
  Spinner,
  SpinnerContainer,
  SpinnerOverlay,
} from '../../components/ui/spinner'

import {Badge} from '../../components/ui/badge'
import {Button} from '../../components/ui/button'
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '../../components/ui/empty'
import {Input} from '../../components/ui/input'
import {InputGroup, InputRightAddon} from '../../components/ui/input-group'
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from '../../components/ui/item'

const meta = {
  title: 'UI/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  parameters: {
    controls: {
      include: ['variant', 'size', 'label', 'className'],
    },
    docs: {
      description: {
        component:
          'An indicator that can be used to show a loading state. Supports theming via `variant`/`size` and can also be styled via utility classes (e.g. `size-*`, `text-*`).',
      },
    },
  },
  argTypes: {
    variant: {
      options: [
        'primary',
        'secondary',
        'destructive',
        'success',
        'muted',
        'current',
      ],
      control: 'select',
    },
    size: {options: ['sm', 'md', 'lg', 'xl'], control: 'select'},
    label: {control: 'text'},
    className: {control: 'text'},
  },
  args: {
    variant: 'muted',
    size: 'sm',
    label: 'Loading',
  },
} satisfies Meta<typeof Spinner>

export default meta

type Story = StoryObj<typeof meta>

export const Demo: Story = {
  name: 'spinner-demo',
  render: args => (
    <div className="flex items-center justify-center">
      <Spinner {...args} />
    </div>
  ),
}

function CustomSpinner(props: React.ComponentProps<'svg'>) {
  return (
    <LoaderCircle
      role="status"
      aria-label="Loading"
      className="size-4 animate-spin"
      {...props}
    />
  )
}

export const Custom: Story = {
  name: 'spinner-custom',
  render: () => (
    <div className="flex items-center justify-center">
      <CustomSpinner className="text-primary" />
    </div>
  ),
}

export const Size: Story = {
  name: 'spinner-size',
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Spinner className="size-4" />
      <Spinner className="size-6" />
      <Spinner className="size-8" />
      <Spinner className="size-12" />
    </div>
  ),
}

export const Color: Story = {
  name: 'spinner-color',
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Spinner className="text-primary" />
      <Spinner className="text-secondary" />
      <Spinner className="text-success" />
      <Spinner className="text-destructive" />
      <div className="text-foreground">
        <Spinner className="text-current" />
      </div>
    </div>
  ),
}

export const ButtonExample: Story = {
  name: 'spinner-button',
  render: () => (
    <Button disabled>
      <Spinner variant="current" className="size-4" />
      Loading
    </Button>
  ),
}

export const BadgeExample: Story = {
  name: 'spinner-badge',
  render: () => (
    <Badge variant="secondary">
      <Spinner variant="current" className="size-3" />
      Syncing
    </Badge>
  ),
}

export const InputGroupExample: Story = {
  name: 'spinner-input-group',
  render: () => (
    <div className="max-w-sm">
      <InputGroup>
        <Input placeholder="Search" className="rounded-r-none" />
        <InputRightAddon>
          <Spinner className="size-4" />
        </InputRightAddon>
      </InputGroup>
    </div>
  ),
}

export const EmptyExample: Story = {
  name: 'spinner-empty',
  render: () => (
    <div className="max-w-md rounded-lg border bg-card">
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <Spinner className="size-8" />
          </EmptyMedia>
          <EmptyTitle>Loading</EmptyTitle>
          <EmptyDescription>Fetching your data…</EmptyDescription>
        </EmptyHeader>
      </Empty>
    </div>
  ),
}

export const ItemExample: Story = {
  name: 'spinner-item',
  render: () => (
    <div className="max-w-md">
      <Item>
        <ItemMedia variant="icon">
          <Spinner className="size-5" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Syncing</ItemTitle>
          <ItemDescription>Please wait…</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Spinner className="size-4" />
        </ItemActions>
      </Item>

      <div className="mt-4 max-w-md rounded-lg border bg-card">
        <SpinnerContainer text="Fetching data…">
          <Spinner size="lg" />
        </SpinnerContainer>
      </div>

      <div className="relative mt-4 min-h-[160px] rounded-lg border bg-card p-6">
        <p className="text-body-base text-muted-foreground">Overlay example.</p>
        <SpinnerOverlay className="absolute inset-0">
          <Spinner size="lg" />
        </SpinnerOverlay>
      </div>
    </div>
  ),
}
