import type {Meta, StoryObj} from '@storybook/react'

import * as React from 'react'
import {useArgs} from '@storybook/preview-api'
import {expect, userEvent, within} from '@storybook/test'
import {
  Briefcase,
  Calendar,
  ChevronDown,
  ChevronUp,
  Folder,
  Home,
  Inbox,
  LifeBuoy,
  MoreHorizontal,
  Plus,
  Settings,
  Users,
} from 'lucide-react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../../components/ui/dropdown-menu'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '../../components/ui/collapsible'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
} from '../../components/ui/sidebar'
import {Button} from '../../components/ui/button'

type NavId =
  | 'dashboard'
  | 'inbox'
  | 'bookings'
  | 'calendar'
  | 'team'
  | 'settings'
  | 'help'

type SidebarStoryArgs = {
  side?: 'left' | 'right'
  variant?: 'sidebar' | 'floating' | 'inset'
  collapsible?: 'offcanvas' | 'icon' | 'none'

  open?: boolean
  defaultOpen?: boolean

  sidebarWidth?: string
  sidebarWidthMobile?: string
  sidebarWidthIcon?: string

  showRail?: boolean
  showSeparator?: boolean
  showSearch?: boolean

  showHeaderDropdown?: boolean
  showFooterDropdown?: boolean

  showMenuActions?: boolean
  showBadges?: boolean
  showSubmenu?: boolean
  showCollapsibleGroup?: boolean
  showSkeleton?: boolean

  menuButtonVariant?: React.ComponentProps<typeof SidebarMenuButton>['variant']
  menuButtonSize?: React.ComponentProps<typeof SidebarMenuButton>['size']
  activeItem?: NavId

  onOpenChange?: (open: boolean) => void
  onNavigate?: (id: NavId) => void
  onWorkspaceSelect?: (id: string) => void
  onProjectAction?: (projectId: string, action: string) => void
  onUserAction?: (action: string) => void
  onSearch?: (value: string) => void
}

function SidebarAppShell({args}: {args: SidebarStoryArgs}) {
  const menuButtonVariant = args.menuButtonVariant ?? 'default'
  const menuButtonSize = args.menuButtonSize ?? 'default'
  const activeItem = args.activeItem ?? 'dashboard'

  const isControlled = args.open !== undefined

  const wrapClassName =
    'h-[520px] w-full min-w-[900px] overflow-hidden rounded-lg border'

  return (
    <div className={wrapClassName}>
      <SidebarProvider
        {...(isControlled
          ? {open: args.open, onOpenChange: args.onOpenChange}
          : {defaultOpen: args.defaultOpen})}
        style={
          {
            ...(args.sidebarWidth
              ? {'--sidebar-width': args.sidebarWidth}
              : {}),
            ...(args.sidebarWidthMobile
              ? {'--sidebar-width-mobile': args.sidebarWidthMobile}
              : {}),
            ...(args.sidebarWidthIcon
              ? {'--sidebar-width-icon': args.sidebarWidthIcon}
              : {}),
          } as React.CSSProperties
        }
      >
        {(() => {
          const sidebarNode = (
            <Sidebar
              side={args.side}
              variant={args.variant}
              collapsible={args.collapsible}
            >
              <SidebarHeader>
                <div className="flex min-w-0 items-center justify-between gap-2 overflow-hidden">
                  <div className="min-w-0 text-sm font-medium truncate">
                    <span className="group-data-[collapsible=icon]:hidden">
                      hmlet-ui
                    </span>
                    <span className="hidden group-data-[collapsible=icon]:inline">
                      HUI
                    </span>
                  </div>
                  {args.showHeaderDropdown ? (
                    <div className="group-data-[collapsible=icon]:hidden">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" size="sm">
                            Workspace
                            <ChevronDown className="ml-2 size-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                          className="w-[240px]"
                          align="start"
                        >
                          <DropdownMenuItem
                            onSelect={() => {
                              args.onWorkspaceSelect?.('acme-inc')
                            }}
                          >
                            Acme Inc
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onSelect={() => {
                              args.onWorkspaceSelect?.('acme-corp')
                            }}
                          >
                            Acme Corp.
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  ) : null}
                </div>

                {args.showSearch ? (
                  <SidebarInput
                    placeholder="Search…"
                    className="group-data-[collapsible=icon]:hidden"
                    onChange={event => {
                      args.onSearch?.(event.currentTarget.value)
                    }}
                  />
                ) : null}
              </SidebarHeader>

              {args.showSeparator ? <SidebarSeparator /> : null}

              <SidebarContent>
                <SidebarGroup>
                  <SidebarGroupLabel>Application</SidebarGroupLabel>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      <SidebarMenuItem>
                        <SidebarMenuButton
                          asChild
                          isActive={activeItem === 'dashboard'}
                          variant={menuButtonVariant}
                          size={menuButtonSize}
                          tooltip="Dashboard"
                        >
                          <a
                            href="#"
                            onClick={event => {
                              event.preventDefault()
                              args.onNavigate?.('dashboard')
                            }}
                          >
                            <Home />
                            <span>Dashboard</span>
                          </a>
                        </SidebarMenuButton>
                        {args.showBadges ? (
                          <SidebarMenuBadge>3</SidebarMenuBadge>
                        ) : null}
                      </SidebarMenuItem>

                      <SidebarMenuItem>
                        <SidebarMenuButton
                          asChild
                          isActive={activeItem === 'inbox'}
                          variant={menuButtonVariant}
                          size={menuButtonSize}
                          tooltip="Inbox"
                        >
                          <a
                            href="#"
                            onClick={event => {
                              event.preventDefault()
                              args.onNavigate?.('inbox')
                            }}
                          >
                            <Inbox />
                            <span>Inbox</span>
                          </a>
                        </SidebarMenuButton>
                        {args.showBadges ? (
                          <SidebarMenuBadge>24</SidebarMenuBadge>
                        ) : null}
                      </SidebarMenuItem>

                      <SidebarMenuItem>
                        <SidebarMenuButton
                          asChild
                          isActive={activeItem === 'bookings'}
                          variant={menuButtonVariant}
                          size={menuButtonSize}
                          tooltip="Bookings"
                        >
                          <a
                            href="#"
                            onClick={event => {
                              event.preventDefault()
                              args.onNavigate?.('bookings')
                            }}
                          >
                            <Briefcase />
                            <span>Bookings</span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>

                      <SidebarMenuItem>
                        <SidebarMenuButton
                          asChild
                          isActive={activeItem === 'calendar'}
                          variant={menuButtonVariant}
                          size={menuButtonSize}
                          tooltip="Calendar"
                        >
                          <a
                            href="#"
                            onClick={event => {
                              event.preventDefault()
                              args.onNavigate?.('calendar')
                            }}
                          >
                            <Calendar />
                            <span>Calendar</span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>

                      <SidebarMenuItem>
                        <SidebarMenuButton
                          asChild
                          isActive={activeItem === 'team'}
                          variant={menuButtonVariant}
                          size={menuButtonSize}
                          tooltip="Team"
                        >
                          <a
                            href="#"
                            onClick={event => {
                              event.preventDefault()
                              args.onNavigate?.('team')
                            }}
                          >
                            <Users />
                            <span>Team</span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>

                      <SidebarMenuItem>
                        <SidebarMenuButton
                          asChild
                          isActive={activeItem === 'settings'}
                          variant={menuButtonVariant}
                          size={menuButtonSize}
                          tooltip="Settings"
                        >
                          <a
                            href="#"
                            onClick={event => {
                              event.preventDefault()
                              args.onNavigate?.('settings')
                            }}
                          >
                            <Settings />
                            <span>Settings</span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>

                {args.showSeparator ? <SidebarSeparator /> : null}

                {args.showCollapsibleGroup ? (
                  <Collapsible defaultOpen className="group/collapsible">
                    <SidebarGroup>
                      <SidebarGroupLabel asChild>
                        <CollapsibleTrigger>
                          Help
                          <ChevronDown className="ml-auto size-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
                        </CollapsibleTrigger>
                      </SidebarGroupLabel>
                      <CollapsibleContent>
                        <SidebarGroupContent>
                          <SidebarMenu>
                            <SidebarMenuItem>
                              <SidebarMenuButton
                                asChild
                                isActive={activeItem === 'help'}
                                variant={menuButtonVariant}
                                size={menuButtonSize}
                                tooltip="Support"
                              >
                                <a
                                  href="#"
                                  onClick={event => {
                                    event.preventDefault()
                                    args.onNavigate?.('help')
                                  }}
                                >
                                  <LifeBuoy />
                                  <span>Support</span>
                                </a>
                              </SidebarMenuButton>
                            </SidebarMenuItem>
                          </SidebarMenu>
                        </SidebarGroupContent>
                      </CollapsibleContent>
                    </SidebarGroup>
                  </Collapsible>
                ) : null}

                <SidebarGroup>
                  <SidebarGroupLabel>Projects</SidebarGroupLabel>
                  <SidebarGroupAction
                    title="Add project"
                    onClick={() => {
                      args.onProjectAction?.('projects', 'add')
                    }}
                  >
                    <Plus />
                    <span className="sr-only">Add project</span>
                  </SidebarGroupAction>
                  <SidebarGroupContent>
                    {args.showSkeleton ? (
                      <SidebarMenu>
                        {Array.from({length: 5}).map((_, index) => (
                          <SidebarMenuItem key={index}>
                            <SidebarMenuSkeleton showIcon />
                          </SidebarMenuItem>
                        ))}
                      </SidebarMenu>
                    ) : (
                      <SidebarMenu>
                        <SidebarMenuItem>
                          <SidebarMenuButton
                            asChild
                            variant={menuButtonVariant}
                            size={menuButtonSize}
                            tooltip="Project Alpha"
                          >
                            <a
                              href="#"
                              onClick={event => {
                                event.preventDefault()
                                args.onProjectAction?.('alpha', 'open')
                              }}
                            >
                              <Folder />
                              <span>Project Alpha</span>
                            </a>
                          </SidebarMenuButton>

                          {args.showMenuActions ? (
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <SidebarMenuAction
                                  showOnHover
                                  aria-label="Project actions"
                                >
                                  <MoreHorizontal />
                                </SidebarMenuAction>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent side="right" align="start">
                                <DropdownMenuItem
                                  onSelect={() => {
                                    args.onProjectAction?.('alpha', 'edit')
                                  }}
                                >
                                  Edit
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                  onSelect={() => {
                                    args.onProjectAction?.('alpha', 'delete')
                                  }}
                                >
                                  Delete
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          ) : null}

                          {args.showSubmenu ? (
                            <SidebarMenuSub>
                              <SidebarMenuSubItem>
                                <SidebarMenuSubButton
                                  href="#"
                                  isActive
                                  onClick={event => {
                                    event.preventDefault()
                                    args.onProjectAction?.('alpha', 'overview')
                                  }}
                                >
                                  Overview
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                              <SidebarMenuSubItem>
                                <SidebarMenuSubButton
                                  href="#"
                                  onClick={event => {
                                    event.preventDefault()
                                    args.onProjectAction?.('alpha', 'members')
                                  }}
                                >
                                  Members
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            </SidebarMenuSub>
                          ) : null}
                        </SidebarMenuItem>
                      </SidebarMenu>
                    )}
                  </SidebarGroupContent>
                </SidebarGroup>
              </SidebarContent>

              <SidebarFooter>
                {args.showFooterDropdown ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <SidebarMenuButton
                        variant={menuButtonVariant}
                        size={menuButtonSize}
                      >
                        Account
                        <ChevronUp className="ml-auto size-4" />
                      </SidebarMenuButton>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      side="top"
                      className="w-[240px]"
                      align="start"
                    >
                      <DropdownMenuItem
                        onSelect={() => {
                          args.onUserAction?.('account')
                        }}
                      >
                        Account
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onSelect={() => {
                          args.onUserAction?.('billing')
                        }}
                      >
                        Billing
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                        onSelect={() => {
                          args.onUserAction?.('sign-out')
                        }}
                      >
                        Sign out
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full"
                    onClick={() => {
                      args.onUserAction?.('sign-out')
                    }}
                  >
                    Sign out
                  </Button>
                )}
              </SidebarFooter>

              {args.showRail ? <SidebarRail /> : null}
            </Sidebar>
          )

          const mainNode =
            args.variant === 'inset' ? (
              <SidebarInset>
                <div className="flex items-center gap-3 border-b p-3">
                  <SidebarTrigger />
                  <div className="text-sm text-muted-foreground">
                    Main content
                  </div>
                </div>
                <div className="p-4 text-sm text-muted-foreground">
                  Page body
                </div>
              </SidebarInset>
            ) : (
              <main className="bg-background flex min-h-0 w-full flex-1 flex-col">
                <div className="flex items-center gap-3 border-b p-3">
                  <SidebarTrigger />
                  <div className="text-sm text-muted-foreground">
                    Main content
                  </div>
                </div>
                <div className="p-4 text-sm text-muted-foreground">
                  Page body
                </div>
              </main>
            )

          return args.side === 'right' ? (
            <>
              {mainNode}
              {sidebarNode}
            </>
          ) : (
            <>
              {sidebarNode}
              {mainNode}
            </>
          )
        })()}
      </SidebarProvider>
    </div>
  )
}

const meta: Meta<SidebarStoryArgs> = {
  title: 'UI/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  parameters: {
    controls: {
      include: [
        'side',
        'variant',
        'collapsible',
        'open',
        'defaultOpen',
        'sidebarWidth',
        'sidebarWidthMobile',
        'sidebarWidthIcon',
        'showRail',
        'showSeparator',
        'showSearch',
        'showHeaderDropdown',
        'showFooterDropdown',
        'showMenuActions',
        'showBadges',
        'showSubmenu',
        'showCollapsibleGroup',
        'showSkeleton',
        'menuButtonVariant',
        'menuButtonSize',
        'activeItem',
        'onOpenChange',
        'onNavigate',
        'onWorkspaceSelect',
        'onProjectAction',
        'onUserAction',
        'onSearch',
      ],
    },
    docs: {
      description: {
        component:
          'A composable, themeable and customizable sidebar component built using shadcn/ui patterns.',
      },
    },
  },
  argTypes: {
    side: {options: ['left', 'right'], control: {type: 'inline-radio'}},
    variant: {
      options: ['sidebar', 'floating', 'inset'],
      control: {type: 'inline-radio'},
    },
    collapsible: {
      options: ['offcanvas', 'icon', 'none'],
      control: {type: 'inline-radio'},
    },
    open: {control: 'boolean'},
    defaultOpen: {control: 'boolean'},

    sidebarWidth: {control: 'text'},
    sidebarWidthMobile: {control: 'text'},
    sidebarWidthIcon: {control: 'text'},

    showRail: {control: 'boolean'},
    showSeparator: {control: 'boolean'},
    showSearch: {control: 'boolean'},
    showHeaderDropdown: {control: 'boolean'},
    showFooterDropdown: {control: 'boolean'},
    showMenuActions: {control: 'boolean'},
    showBadges: {control: 'boolean'},
    showSubmenu: {control: 'boolean'},
    showCollapsibleGroup: {control: 'boolean'},
    showSkeleton: {control: 'boolean'},
    menuButtonVariant: {
      options: ['default', 'outline'],
      control: {type: 'inline-radio'},
    },
    menuButtonSize: {
      options: ['sm', 'default', 'lg'],
      control: {type: 'inline-radio'},
    },
    activeItem: {
      options: [
        'dashboard',
        'inbox',
        'bookings',
        'calendar',
        'team',
        'settings',
        'help',
      ],
      control: {type: 'select'},
    },
    onOpenChange: {action: 'onOpenChange'},
    onNavigate: {action: 'onNavigate'},
    onWorkspaceSelect: {action: 'onWorkspaceSelect'},
    onProjectAction: {action: 'onProjectAction'},
    onUserAction: {action: 'onUserAction'},
    onSearch: {action: 'onSearch'},
  },
  args: {
    side: 'left',
    variant: 'sidebar',
    collapsible: 'icon',
    defaultOpen: true,
    sidebarWidth: '16rem',
    sidebarWidthMobile: '18rem',
    sidebarWidthIcon: '3rem',
    showRail: true,
    showSeparator: true,
    showSearch: true,
    showHeaderDropdown: true,
    showFooterDropdown: true,
    showMenuActions: true,
    showBadges: true,
    showSubmenu: true,
    showCollapsibleGroup: true,
    showSkeleton: false,
    menuButtonVariant: 'default',
    menuButtonSize: 'default',
    activeItem: 'dashboard',
  },
}

export default meta

type Story = StoryObj<SidebarStoryArgs>

export const Playground: Story = {
  args: {
    open: true,
  },
  render: function Render(storyArgs) {
    const [{open}, updateArgs] = useArgs<{open?: boolean}>()

    return (
      <SidebarAppShell
        args={{
          ...storyArgs,
          ...(open !== undefined ? {open} : {}),
          onOpenChange: nextOpen => {
            updateArgs({open: nextOpen})
            storyArgs.onOpenChange?.(nextOpen)
          },
        }}
      />
    )
  },
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement)
    const toggle = canvas.getByRole('button', {name: /toggle sidebar/i})

    const sidebar = canvasElement.querySelector('[data-slot="sidebar"]')
    expect(sidebar).toBeTruthy()

    await userEvent.click(toggle)
    expect(sidebar).toHaveAttribute('data-state', 'collapsed')
    await userEvent.click(toggle)
    expect(sidebar).toHaveAttribute('data-state', 'expanded')
  },
}

export const SidebarVariant: Story = {
  args: {
    variant: 'sidebar',
  },
  render: args => <SidebarAppShell args={args} />,
}

export const FloatingVariant: Story = {
  args: {
    variant: 'floating',
  },
  render: args => <SidebarAppShell args={args} />,
}

export const InsetVariant: Story = {
  args: {
    variant: 'inset',
  },
  render: args => <SidebarAppShell args={args} />,
}

export const OffcanvasCollapsible: Story = {
  args: {
    collapsible: 'offcanvas',
  },
  render: args => <SidebarAppShell args={args} />,
}

export const IconCollapsible: Story = {
  args: {
    collapsible: 'icon',
  },
  render: args => <SidebarAppShell args={args} />,
}

export const NonCollapsible: Story = {
  args: {
    collapsible: 'none',
    showRail: false,
  },
  render: args => <SidebarAppShell args={args} />,
}

export const RightSide: Story = {
  args: {
    side: 'right',
  },
  render: args => <SidebarAppShell args={args} />,
}

export const LoadingSkeleton: Story = {
  args: {
    showSkeleton: true,
    showSubmenu: false,
    showBadges: false,
    showMenuActions: false,
  },
  render: args => <SidebarAppShell args={args} />,
}

export const IconCollapseTooltip: Story = {
  args: {
    collapsible: 'icon',
    defaultOpen: true,
  },
  render: args => <SidebarAppShell args={args} />,
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement)
    const toggle = canvas.getByRole('button', {name: /toggle sidebar/i})
    await userEvent.click(toggle)

    const dashboardLink = canvas.getByRole('link', {name: 'Dashboard'})
    await userEvent.hover(dashboardLink)

    const body = within(document.body)
    expect(body.getByText('Dashboard')).toBeTruthy()
  },
}

export const KeyboardShortcut: Story = {
  args: {
    collapsible: 'offcanvas',
    defaultOpen: true,
  },
  render: args => <SidebarAppShell args={args} />,
  play: async ({canvasElement}) => {
    const sidebar = canvasElement.querySelector('[data-slot="sidebar"]')
    expect(sidebar).toBeTruthy()

    window.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'b',
        metaKey: true,
      }),
    )

    expect(sidebar).toHaveAttribute('data-state', 'collapsed')
  },
}

export const RailToggle: Story = {
  args: {
    showRail: true,
    defaultOpen: true,
  },
  render: args => <SidebarAppShell args={args} />,
  play: async ({canvasElement}) => {
    const rail = canvasElement.querySelector('[data-slot="sidebar-rail"]')
    const sidebar = canvasElement.querySelector('[data-slot="sidebar"]')
    expect(rail).toBeTruthy()
    expect(sidebar).toBeTruthy()

    await userEvent.click(rail as HTMLElement)
    expect(sidebar).toHaveAttribute('data-state', 'collapsed')
  },
}

export const HeaderAndFooterDropdowns: Story = {
  args: {
    showHeaderDropdown: true,
    showFooterDropdown: true,
  },
  render: args => <SidebarAppShell args={args} />,
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement)

    await userEvent.click(canvas.getByRole('button', {name: /workspace/i}))
    const body = within(document.body)
    await userEvent.click(body.getByText('Acme Inc'))

    await userEvent.click(canvas.getByText('Account'))
    await userEvent.click(body.getByText('Sign out'))
  },
}
