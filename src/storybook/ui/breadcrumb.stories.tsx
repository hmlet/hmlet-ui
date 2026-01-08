import type {Meta, StoryObj} from '@storybook/react'

import * as React from 'react'
import {useArgs} from '@storybook/preview-api'

import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '../../components/ui/breadcrumb'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../../components/ui/dropdown-menu'

type BreadcrumbStoryArgs = React.ComponentProps<typeof Breadcrumb> & {
  homeLabel: string
  libraryLabel: string
  dataLabel: string
  currentLabel: string
  hrefHome: string
  hrefLibrary: string
  hrefData: string
  separatorText: string
  onLinkClick?: React.MouseEventHandler<HTMLAnchorElement>
  dropdownOpen?: boolean
  onDropdownOpenChange?: (open: boolean) => void
  onMenuSelect?: () => void
}

const meta: Meta<BreadcrumbStoryArgs> = {
  title: 'UI/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
  parameters: {
    controls: {
      include: [
        'homeLabel',
        'libraryLabel',
        'dataLabel',
        'currentLabel',
        'hrefHome',
        'hrefLibrary',
        'hrefData',
        'separatorText',
        'onLinkClick',
        'dropdownOpen',
        'onDropdownOpenChange',
        'onMenuSelect',
        'className',
      ],
    },
    docs: {
      description: {
        component:
          'Composed component: `Breadcrumb`, `BreadcrumbList`, `BreadcrumbItem`, `BreadcrumbLink`, `BreadcrumbSeparator`, `BreadcrumbPage`, `BreadcrumbEllipsis`.',
      },
    },
  },
  argTypes: {
    homeLabel: {control: 'text'},
    libraryLabel: {control: 'text'},
    dataLabel: {control: 'text'},
    currentLabel: {control: 'text'},
    hrefHome: {control: 'text'},
    hrefLibrary: {control: 'text'},
    hrefData: {control: 'text'},
    separatorText: {
      control: 'text',
      description: 'Used by the Custom separator story.',
    },
    onLinkClick: {action: 'onLinkClick'},
    dropdownOpen: {
      control: 'boolean',
      description: 'Controlled open state for the Dropdown story.',
    },
    onDropdownOpenChange: {action: 'onDropdownOpenChange'},
    onMenuSelect: {action: 'onMenuSelect'},
    className: {control: 'text'},
  },
  args: {
    homeLabel: 'Home',
    libraryLabel: 'Library',
    dataLabel: 'Data',
    currentLabel: 'Breadcrumb',
    hrefHome: '#',
    hrefLibrary: '#',
    hrefData: '#',
    separatorText: '/',
  },
}

export default meta

type Story = StoryObj<BreadcrumbStoryArgs>

export const Default: Story = {
  render: args => (
    <Breadcrumb {...args}>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href={args.hrefHome} onClick={args.onLinkClick}>
            {args.homeLabel}
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href={args.hrefLibrary} onClick={args.onLinkClick}>
            {args.libraryLabel}
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>{args.dataLabel}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
}

export const CustomSeparator: Story = {
  render: args => (
    <Breadcrumb {...args}>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href={args.hrefHome} onClick={args.onLinkClick}>
            {args.homeLabel}
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <span className="text-muted-foreground">{args.separatorText}</span>
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink href={args.hrefLibrary} onClick={args.onLinkClick}>
            {args.libraryLabel}
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <span className="text-muted-foreground">{args.separatorText}</span>
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage>{args.dataLabel}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
}

export const Dropdown: Story = {
  args: {
    dropdownOpen: false,
  },
  render: function DropdownRender(storyArgs) {
    const [{dropdownOpen}, updateArgs] = useArgs<{dropdownOpen?: boolean}>()
    const open = dropdownOpen

    return (
      <Breadcrumb {...storyArgs}>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink
              href={storyArgs.hrefHome}
              onClick={storyArgs.onLinkClick}
            >
              {storyArgs.homeLabel}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink
              href={storyArgs.hrefLibrary}
              onClick={storyArgs.onLinkClick}
            >
              {storyArgs.libraryLabel}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <DropdownMenu
              {...(open !== undefined ? {open} : {})}
              onOpenChange={(nextOpen: boolean) => {
                updateArgs({dropdownOpen: nextOpen})
                storyArgs.onDropdownOpenChange?.(nextOpen)
              }}
            >
              <DropdownMenuTrigger asChild>
                <button
                  type="button"
                  className="hover:text-foreground flex items-center gap-1 transition-colors"
                >
                  <BreadcrumbEllipsis />
                  <span className="sr-only">Toggle menu</span>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem onSelect={storyArgs.onMenuSelect}>
                  Documentation
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={storyArgs.onMenuSelect}>
                  Themes
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={storyArgs.onMenuSelect}>
                  GitHub
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{storyArgs.currentLabel}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    )
  },
}

export const Collapsed: Story = {
  render: args => (
    <Breadcrumb {...args}>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href={args.hrefHome} onClick={args.onLinkClick}>
            {args.homeLabel}
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbEllipsis />
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href={args.hrefLibrary} onClick={args.onLinkClick}>
            {args.libraryLabel}
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>{args.currentLabel}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
}

const LinkComponent = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentProps<'a'>
>((props, ref) => <a ref={ref} {...props} />)
LinkComponent.displayName = 'LinkComponent'

export const LinkComponentExample: Story = {
  name: 'Link component',
  render: args => (
    <Breadcrumb {...args}>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <LinkComponent href={args.hrefHome} onClick={args.onLinkClick}>
              {args.homeLabel}
            </LinkComponent>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <LinkComponent href={args.hrefLibrary} onClick={args.onLinkClick}>
              {args.libraryLabel}
            </LinkComponent>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>{args.dataLabel}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
}

export const Responsive: Story = {
  render: args => (
    <Breadcrumb {...args}>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href={args.hrefHome} onClick={args.onLinkClick}>
            {args.homeLabel}
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator className="hidden md:block" />
        <BreadcrumbItem className="hidden md:block">
          <BreadcrumbLink href={args.hrefLibrary} onClick={args.onLinkClick}>
            {args.libraryLabel}
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator className="hidden md:block" />
        <BreadcrumbItem className="hidden md:block">
          <BreadcrumbLink href={args.hrefData} onClick={args.onLinkClick}>
            {args.dataLabel}
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>{args.currentLabel}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
}
