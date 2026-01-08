import type {Meta, StoryObj} from '@storybook/react'

import * as React from 'react'
import {expect, userEvent, within} from '@storybook/test'
import {CircleCheckIcon, CircleHelpIcon, CircleIcon} from 'lucide-react'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from '../../components/ui/navigation-menu'

type NavigationMenuStoryArgs = React.ComponentProps<typeof NavigationMenu> & {
  onLinkClick?: (href: string) => void
}

const meta: Meta<NavigationMenuStoryArgs> = {
  title: 'UI/NavigationMenu',
  component: NavigationMenu,
  tags: ['autodocs'],
  parameters: {
    controls: {
      include: [
        'viewport',
        'dir',
        'orientation',
        'delayDuration',
        'skipDelayDuration',
        'value',
        'defaultValue',
        'onValueChange',
        'onLinkClick',
        'className',
      ],
    },
    docs: {
      description: {
        component:
          'A collection of links for navigating websites. Supports indicator + viewport (default) or inline content via `viewport={false}`.',
      },
    },
  },
  argTypes: {
    viewport: {control: 'boolean'},
    dir: {options: ['ltr', 'rtl'], control: {type: 'inline-radio'}},
    orientation: {
      options: ['horizontal', 'vertical'],
      control: {type: 'inline-radio'},
    },
    delayDuration: {control: {type: 'number', min: 0, step: 50}},
    skipDelayDuration: {control: {type: 'number', min: 0, step: 50}},
    value: {control: 'text'},
    defaultValue: {control: 'text'},
    onValueChange: {action: 'onValueChange'},
    onLinkClick: {action: 'onLinkClick'},
  },
  args: {
    viewport: true,
    dir: 'ltr',
    orientation: 'horizontal',
    delayDuration: 150,
    skipDelayDuration: 300,
  },
}

export default meta

type Story = StoryObj<typeof meta>

const SHADCN_COMPONENTS: Array<{
  title: string
  href: string
  description: string
}> = [
  {
    title: 'Alert Dialog',
    href: '/docs/primitives/alert-dialog',
    description:
      'A modal dialog that interrupts the user with important content and expects a response.',
  },
  {
    title: 'Hover Card',
    href: '/docs/primitives/hover-card',
    description:
      'For sighted users to preview content available behind a link.',
  },
  {
    title: 'Progress',
    href: '/docs/primitives/progress',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  },
  {
    title: 'Scroll-area',
    href: '/docs/primitives/scroll-area',
    description: 'Visually or semantically separates content.',
  },
  {
    title: 'Tabs',
    href: '/docs/primitives/tabs',
    description:
      'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
  },
  {
    title: 'Tooltip',
    href: '/docs/primitives/tooltip',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  },
]

function ShadcnListItem({
  title,
  children,
  href,
  onLinkClick,
  ...props
}: React.ComponentPropsWithoutRef<'li'> & {
  href: string
  title: string
  onLinkClick?: (href: string) => void
}) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <a
          href={href}
          onClick={event => {
            event.preventDefault()
            onLinkClick?.(href)
          }}
        >
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
}

function DemoLinks({onLinkClick}: {onLinkClick?: (href: string) => void}) {
  return (
    <div className="grid gap-2 p-2 md:w-[360px]">
      <NavigationMenuLink
        href="#introduction"
        onClick={event => {
          event.preventDefault()
          onLinkClick?.('#introduction')
        }}
      >
        Introduction
      </NavigationMenuLink>
      <NavigationMenuLink
        href="#installation"
        onClick={event => {
          event.preventDefault()
          onLinkClick?.('#installation')
        }}
      >
        Installation
      </NavigationMenuLink>
      <NavigationMenuLink
        href="#usage"
        onClick={event => {
          event.preventDefault()
          onLinkClick?.('#usage')
        }}
      >
        Usage
      </NavigationMenuLink>
    </div>
  )
}

export const Default: Story = {
  name: 'Demo',
  render: args => (
    <NavigationMenu {...args}>
      <NavigationMenuList>
        <NavigationMenuItem value="getting-started">
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <DemoLinks onLinkClick={args.onLinkClick} />
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink
            href="/docs"
            onClick={event => {
              event.preventDefault()
              args.onLinkClick?.('/docs')
            }}
          >
            Docs
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuIndicator />
      </NavigationMenuList>
    </NavigationMenu>
  ),
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement)
    await userEvent.click(
      canvas.getByRole('button', {name: /getting started/i}),
    )
    await expect(
      canvas.getByRole('link', {name: 'Introduction'}),
    ).toBeInTheDocument()
    await userEvent.click(canvas.getByRole('link', {name: 'Installation'}))
  },
}

export const WithViewportOff: Story = {
  args: {
    viewport: false,
  },
  render: args => (
    <NavigationMenu {...args}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
          <NavigationMenuContent>
            <DemoLinks onLinkClick={args.onLinkClick} />
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="/docs"
            onClick={event => {
              event.preventDefault()
              args.onLinkClick?.('/docs')
            }}
          >
            Documentation
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
}

export const AsChildLink: Story = {
  render: args => (
    <NavigationMenu {...args}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <a
              href="/docs"
              onClick={event => {
                event.preventDefault()
                args.onLinkClick?.('/docs')
              }}
            >
              Documentation
            </a>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement)
    await expect(
      canvas.getByRole('link', {name: 'Documentation'}),
    ).toBeInTheDocument()
  },
}

export const ControlledValue: Story = {
  args: {
    defaultValue: undefined,
    value: undefined,
  },
  render: function ControlledValueRender(args) {
    const [value, setValue] = React.useState('getting-started')

    return (
      <div className="grid gap-3">
        <div className="text-sm text-muted-foreground">
          Value: {value || '—'}
        </div>
        <NavigationMenu
          {...args}
          value={value}
          onValueChange={next => {
            setValue(next)
            args.onValueChange?.(next)
          }}
        >
          <NavigationMenuList>
            <NavigationMenuItem value="getting-started">
              <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
              <NavigationMenuContent>
                <DemoLinks onLinkClick={args.onLinkClick} />
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem value="resources">
              <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-2 p-2 md:w-[360px]">
                  <NavigationMenuLink
                    href="#components"
                    onClick={event => {
                      event.preventDefault()
                      args.onLinkClick?.('#components')
                    }}
                  >
                    Components
                  </NavigationMenuLink>
                  <NavigationMenuLink
                    href="#guides"
                    onClick={event => {
                      event.preventDefault()
                      args.onLinkClick?.('#guides')
                    }}
                  >
                    Guides
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuIndicator />
          </NavigationMenuList>
          <NavigationMenuViewport />
        </NavigationMenu>
      </div>
    )
  },
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole('button', {name: /resources/i}))
    await expect(canvas.getByText(/value: resources/i)).toBeInTheDocument()
  },
}

export const DifferentNavigationMenu: Story = {
  args: {
    // In the upstream example, `viewport={isMobile}`.
    // Toggle `viewport` here to simulate that behavior.
    viewport: false,
  },
  render: args => (
    <NavigationMenu viewport={args.viewport}>
      <NavigationMenuList className="flex-wrap">
        <NavigationMenuItem>
          <NavigationMenuTrigger>Home</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-4 no-underline outline-hidden transition-all duration-200 select-none focus:shadow-md md:p-6"
                    href="/"
                    onClick={event => {
                      event.preventDefault()
                      args.onLinkClick?.('/')
                    }}
                  >
                    <div className="mb-2 text-lg font-medium sm:mt-4">
                      shadcn/ui
                    </div>
                    <p className="text-muted-foreground text-sm leading-tight">
                      Beautifully designed components built with Tailwind CSS.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ShadcnListItem
                href="/docs"
                title="Introduction"
                onLinkClick={args.onLinkClick}
              >
                Re-usable components built using Radix UI and Tailwind CSS.
              </ShadcnListItem>
              <ShadcnListItem
                href="/docs/installation"
                title="Installation"
                onLinkClick={args.onLinkClick}
              >
                How to install dependencies and structure your app.
              </ShadcnListItem>
              <ShadcnListItem
                href="/docs/primitives/typography"
                title="Typography"
                onLinkClick={args.onLinkClick}
              >
                Styles for headings, paragraphs, lists...etc
              </ShadcnListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {SHADCN_COMPONENTS.map(component => (
                <ShadcnListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                  onLinkClick={args.onLinkClick}
                >
                  {component.description}
                </ShadcnListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <a
              href="/docs"
              onClick={event => {
                event.preventDefault()
                args.onLinkClick?.('/docs')
              }}
            >
              Docs
            </a>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem className="hidden md:block">
          <NavigationMenuTrigger>List</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-4">
              <li className="grid gap-2">
                <NavigationMenuLink asChild>
                  <a
                    href="#components"
                    onClick={event => {
                      event.preventDefault()
                      args.onLinkClick?.('#components')
                    }}
                  >
                    <div className="font-medium">Components</div>
                    <div className="text-muted-foreground">
                      Browse all components in the library.
                    </div>
                  </a>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <a
                    href="#documentation"
                    onClick={event => {
                      event.preventDefault()
                      args.onLinkClick?.('#documentation')
                    }}
                  >
                    <div className="font-medium">Documentation</div>
                    <div className="text-muted-foreground">
                      Learn how to use the library.
                    </div>
                  </a>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <a
                    href="#blog"
                    onClick={event => {
                      event.preventDefault()
                      args.onLinkClick?.('#blog')
                    }}
                  >
                    <div className="font-medium">Blog</div>
                    <div className="text-muted-foreground">
                      Read our latest blog posts.
                    </div>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem className="hidden md:block">
          <NavigationMenuTrigger>Simple</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-4">
              <li className="grid gap-2">
                <NavigationMenuLink asChild>
                  <a
                    href="#simple-components"
                    onClick={event => {
                      event.preventDefault()
                      args.onLinkClick?.('#simple-components')
                    }}
                  >
                    Components
                  </a>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <a
                    href="#simple-docs"
                    onClick={event => {
                      event.preventDefault()
                      args.onLinkClick?.('#simple-docs')
                    }}
                  >
                    Documentation
                  </a>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <a
                    href="#simple-blocks"
                    onClick={event => {
                      event.preventDefault()
                      args.onLinkClick?.('#simple-blocks')
                    }}
                  >
                    Blocks
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem className="hidden md:block">
          <NavigationMenuTrigger>With Icon</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-4">
              <li className="grid gap-2">
                <NavigationMenuLink asChild>
                  <a
                    href="#backlog"
                    className="flex flex-row items-center gap-2"
                    onClick={event => {
                      event.preventDefault()
                      args.onLinkClick?.('#backlog')
                    }}
                  >
                    <CircleHelpIcon className="size-4" />
                    Backlog
                  </a>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <a
                    href="#todo"
                    className="flex flex-row items-center gap-2"
                    onClick={event => {
                      event.preventDefault()
                      args.onLinkClick?.('#todo')
                    }}
                  >
                    <CircleIcon className="size-4" />
                    To Do
                  </a>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <a
                    href="#done"
                    className="flex flex-row items-center gap-2"
                    onClick={event => {
                      event.preventDefault()
                      args.onLinkClick?.('#done')
                    }}
                  >
                    <CircleCheckIcon className="size-4" />
                    Done
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuIndicator />
      </NavigationMenuList>
    </NavigationMenu>
  ),
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement)

    await userEvent.click(canvas.getByRole('button', {name: 'Components'}))
    await expect(
      canvas.getByRole('link', {name: 'Alert Dialog'}),
    ).toBeInTheDocument()
  },
}
