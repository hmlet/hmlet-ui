import type {Meta, StoryObj} from '@storybook/react'

import {Button} from '../../components/ui/button'
import {ButtonShowcase} from '../../components/ButtonShowcase'
import {Loader2, Mail} from 'lucide-react'

const meta = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    controls: {
      include: [
        'children',
        'variant',
        'size',
        'asChild',
        'disabled',
        'type',
        'onClick',
        'className',
      ],
    },
    docs: {
      description: {
        component:
          'Key props: `variant`, `size`, `asChild`, `disabled`, `type`, `onClick`, `className`, `children`.',
      },
    },
  },
  argTypes: {
    variant: {
      options: [
        'primary',
        'primary-outline',
        'primary-ghost',
        'secondary',
        'secondary-outline',
        'secondary-ghost',
        'success',
        'destructive',
        'outline',
        'ghost',
        'link',
      ],
      control: {type: 'select'},
    },
    size: {
      options: ['sm', 'md', 'lg', 'icon-sm', 'icon', 'icon-lg'],
      control: {type: 'select'},
    },
    asChild: {control: 'boolean'},
    disabled: {control: 'boolean'},
    className: {control: 'text'},
  },
  args: {
    children: 'Button',
  },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Example: Story = {
  name: 'Examples',
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button variant="primary">Primary</Button>
      <Button variant="primary-outline">Primary Outline</Button>
      <Button variant="primary-ghost">Primary Ghost</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="secondary-outline">Secondary Outline</Button>
      <Button variant="secondary-ghost">Secondary Ghost</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="success">Success</Button>
      <Button variant="link">Link</Button>
      <Button size="icon" aria-label="Icon">
        <Mail />
      </Button>
      <Button size="icon-sm" aria-label="Small icon button">
        <Mail />
      </Button>
      <Button size="icon-lg" aria-label="Large icon button">
        <Mail />
      </Button>
      <Button>
        <Mail />
        With Icon
      </Button>
      <Button className="rounded-full">Rounded</Button>
      <Button disabled>
        <Loader2 className="animate-spin" />
        Spinner
      </Button>
    </div>
  ),
}

export const Showcase: Story = {
  name: 'Showcase',
  render: () => (
    <div className="max-w-5xl">
      <ButtonShowcase />
    </div>
  ),
}

export const Default: Story = {
  args: {
    variant: 'primary',
    children: 'Default',
  },
}

export const PrimaryOutline: Story = {
  name: 'Primary Outline',
  args: {
    variant: 'primary-outline',
    children: 'Primary Outline',
  },
}

export const PrimaryGhost: Story = {
  name: 'Primary Ghost',
  args: {
    variant: 'primary-ghost',
    children: 'Primary Ghost',
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
  },
}

export const SecondaryOutline: Story = {
  name: 'Secondary Outline',
  args: {
    variant: 'secondary-outline',
    children: 'Secondary Outline',
  },
}

export const SecondaryGhost: Story = {
  name: 'Secondary Ghost',
  args: {
    variant: 'secondary-ghost',
    children: 'Secondary Ghost',
  },
}

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost',
  },
}

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Destructive',
  },
}

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Success',
  },
}

export const Link: Story = {
  args: {
    variant: 'link',
    children: 'Link',
  },
}

export const Icon: Story = {
  args: {
    size: 'icon',
    'aria-label': 'Icon button',
    children: <Mail />,
  },
}

export const IconSmall: Story = {
  name: 'Icon (sm)',
  args: {
    size: 'icon-sm',
    'aria-label': 'Small icon button',
    children: <Mail />,
  },
}

export const IconLarge: Story = {
  name: 'Icon (lg)',
  args: {
    size: 'icon-lg',
    'aria-label': 'Large icon button',
    children: <Mail />,
  },
}

export const WithIcon: Story = {
  name: 'With Icon',
  args: {
    children: (
      <>
        <Mail />
        With Icon
      </>
    ),
  },
}

export const Rounded: Story = {
  args: {
    className: 'rounded-full',
    children: 'Rounded',
  },
}

export const Spinner: Story = {
  args: {
    disabled: true,
    children: (
      <>
        <Loader2 className="animate-spin" />
        Spinner
      </>
    ),
  },
}

export const ButtonGroup: Story = {
  name: 'Button Group',
  render: () => (
    <div className="inline-flex overflow-hidden rounded-md border">
      <Button className="rounded-none" variant="ghost">
        Left
      </Button>
      <div className="bg-border w-px" />
      <Button className="rounded-none" variant="ghost">
        Middle
      </Button>
      <div className="bg-border w-px" />
      <Button className="rounded-none" variant="ghost">
        Right
      </Button>
    </div>
  ),
}

export const LinkComponent: Story = {
  name: 'Link (asChild)',
  args: {
    asChild: true,
    children: <a href="#">Link as child</a>,
  },
}

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button variant="primary">Primary</Button>
      <Button variant="primary-outline">Primary Outline</Button>
      <Button variant="primary-ghost">Primary Ghost</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="secondary-outline">Secondary Outline</Button>
      <Button variant="secondary-ghost">Secondary Ghost</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="success">Success</Button>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button size="icon" aria-label="Icon">
        +
      </Button>
    </div>
  ),
}
