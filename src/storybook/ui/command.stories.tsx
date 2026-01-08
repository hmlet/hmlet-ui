import type {Meta, StoryObj} from '@storybook/react'

import * as React from 'react'
import {useArgs} from '@storybook/preview-api'
import {Check, ChevronsUpDown} from 'lucide-react'

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '../../components/ui/command'

import {Button} from '../../components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '../../components/ui/popover'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '../../components/ui/dropdown-menu'
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '../../components/ui/drawer'
import {cn} from '../../components/ui/utils'

const frameworks = [
  {value: 'next.js', label: 'Next.js'},
  {value: 'sveltekit', label: 'SvelteKit'},
  {value: 'nuxt.js', label: 'Nuxt.js'},
  {value: 'remix', label: 'Remix'},
  {value: 'astro', label: 'Astro'},
]

type FrameworkValue = string

type CommandStoryArgs = React.ComponentProps<typeof Command> & {
  dialogOpen?: boolean

  comboboxOpen?: boolean
  dropdownOpen?: boolean
  responsiveMode?: 'desktop' | 'mobile'

  selectedFramework?: FrameworkValue
  search?: string

  triggerLabel?: string
  placeholder?: string
  emptyText?: string

  onDialogOpenChange?: (open: boolean) => void
  onComboboxOpenChange?: (open: boolean) => void
  onDropdownOpenChange?: (open: boolean) => void
  onFrameworkChange?: (value: FrameworkValue) => void
  onSearchChange?: (search: string) => void
  onItemSelect?: (value: FrameworkValue) => void
}

function getFrameworkLabel(value: FrameworkValue | undefined) {
  if (!value) return ''
  return frameworks.find(f => f.value === value)?.label ?? value
}

function ComboboxList({
  value,
  emptyText,
  onSelect,
}: {
  value?: FrameworkValue
  emptyText: string
  onSelect: (next: FrameworkValue) => void
}) {
  return (
    <CommandList>
      <CommandEmpty>{emptyText}</CommandEmpty>
      <CommandGroup>
        {frameworks.map(framework => (
          <CommandItem
            key={framework.value}
            value={framework.value}
            onSelect={(currentValue: string) => {
              onSelect(currentValue)
            }}
          >
            <Check
              className={cn(
                'mr-2 size-4',
                value === framework.value ? 'opacity-100' : 'opacity-0',
              )}
            />
            {framework.label}
          </CommandItem>
        ))}
      </CommandGroup>
    </CommandList>
  )
}

const meta: Meta<CommandStoryArgs> = {
  title: 'UI/Command',
  component: Command,
  tags: ['autodocs'],
  parameters: {
    controls: {
      include: [
        'loop',
        'shouldFilter',
        'className',

        'dialogOpen',
        'comboboxOpen',
        'dropdownOpen',
        'responsiveMode',
        'selectedFramework',
        'search',
        'triggerLabel',
        'placeholder',
        'emptyText',

        'onDialogOpenChange',
        'onComboboxOpenChange',
        'onDropdownOpenChange',
        'onFrameworkChange',
        'onSearchChange',
        'onItemSelect',
      ],
    },
    docs: {
      description: {
        component:
          'Fast, composable, unstyled command menu for React. Built on cmdk (https://cmdk.paco.me). The Combobox is composed from `Popover` + `Command`.',
      },
    },
  },
  argTypes: {
    loop: {control: 'boolean'},
    shouldFilter: {control: 'boolean'},
    className: {control: 'text'},

    dialogOpen: {control: 'boolean'},
    comboboxOpen: {control: 'boolean'},
    dropdownOpen: {control: 'boolean'},
    responsiveMode: {
      options: ['desktop', 'mobile'],
      control: {type: 'inline-radio'},
    },
    selectedFramework: {control: 'text'},
    search: {control: 'text'},
    triggerLabel: {control: 'text'},
    placeholder: {control: 'text'},
    emptyText: {control: 'text'},

    onDialogOpenChange: {action: 'onDialogOpenChange'},
    onComboboxOpenChange: {action: 'onComboboxOpenChange'},
    onDropdownOpenChange: {action: 'onDropdownOpenChange'},
    onFrameworkChange: {action: 'onFrameworkChange'},
    onSearchChange: {action: 'onSearchChange'},
    onItemSelect: {action: 'onItemSelect'},
  },
  args: {
    loop: true,
    shouldFilter: true,
    className: '',

    dialogOpen: false,
    comboboxOpen: false,
    dropdownOpen: false,
    responsiveMode: 'desktop',
    selectedFramework: '',
    search: '',
    triggerLabel: 'Select framework...',
    placeholder: 'Search framework...',
    emptyText: 'No framework found.',
  },
}

export default meta

type Story = StoryObj<CommandStoryArgs>

export const Default: Story = {
  render: () => (
    <Command className="w-full max-w-md rounded-lg border">
      <CommandInput placeholder="Search…" />
      <CommandList>
        <CommandEmpty>No results.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>Calendar</CommandItem>
          <CommandItem>Search</CommandItem>
          <CommandItem>Settings</CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Other">
          <CommandItem>Profile</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
}

export const Demo: Story = {
  name: 'Command demo',
  render: args => (
    <Command
      loop={args.loop}
      shouldFilter={args.shouldFilter}
      className={cn('w-full max-w-[450px] rounded-lg border', args.className)}
    >
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            Calendar
            <CommandShortcut>⌘C</CommandShortcut>
          </CommandItem>
          <CommandItem>
            Search Emoji
            <CommandShortcut>⌘E</CommandShortcut>
          </CommandItem>
          <CommandItem>
            Calculator
            <CommandShortcut>⌘K</CommandShortcut>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>Profile</CommandItem>
          <CommandItem>Billing</CommandItem>
          <CommandItem>Settings</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
}

export const Dialog: Story = {
  args: {
    dialogOpen: false,
  },
  render: function DialogRender(storyArgs) {
    const args = storyArgs
    const [{dialogOpen}, updateArgs] = useArgs<{dialogOpen?: boolean}>()

    React.useEffect(() => {
      const onKeyDown = (event: KeyboardEvent) => {
        if (
          event.key.toLowerCase() === 'k' &&
          (event.metaKey || event.ctrlKey)
        ) {
          event.preventDefault()
          updateArgs({dialogOpen: !dialogOpen})
          args.onDialogOpenChange?.(!dialogOpen)
        }
      }

      document.addEventListener('keydown', onKeyDown)
      return () => document.removeEventListener('keydown', onKeyDown)
    }, [args, dialogOpen, updateArgs])

    const open = !!dialogOpen

    return (
      <div className="grid gap-4">
        <div className="text-sm text-muted-foreground">
          Press <kbd className="rounded border px-1">⌘</kbd>+
          <kbd className="rounded border px-1">K</kbd> (or Ctrl+K)
        </div>
        <Button
          variant="outline"
          className="w-fit"
          onClick={() => {
            updateArgs({dialogOpen: true})
            args.onDialogOpenChange?.(true)
          }}
        >
          Open command menu
        </Button>

        <CommandDialog
          open={open}
          onOpenChange={(nextOpen: boolean) => {
            updateArgs({dialogOpen: nextOpen})
            args.onDialogOpenChange?.(nextOpen)
          }}
        >
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>Calendar</CommandItem>
              <CommandItem>Search Emoji</CommandItem>
              <CommandItem>Calculator</CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      </div>
    )
  },
}

export const Combobox: Story = {
  args: {
    comboboxOpen: false,
    selectedFramework: '',
  },
  render: function ComboboxRender(storyArgs) {
    const args = storyArgs
    const [{comboboxOpen, selectedFramework, search}, updateArgs] = useArgs<{
      comboboxOpen?: boolean
      selectedFramework?: FrameworkValue
      search?: string
    }>()

    const open = comboboxOpen
    const value = selectedFramework ?? ''
    const label = getFrameworkLabel(value)

    return (
      <div className="w-full max-w-md">
        <Popover
          {...(open !== undefined ? {open} : {})}
          onOpenChange={(nextOpen: boolean) => {
            updateArgs({comboboxOpen: nextOpen})
            args.onComboboxOpenChange?.(nextOpen)
          }}
        >
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-[200px] justify-between"
            >
              {label || args.triggerLabel || 'Select framework...'}
              <ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command loop={args.loop} shouldFilter={args.shouldFilter}>
              <CommandInput
                placeholder={args.placeholder}
                value={search}
                onValueChange={(next: string) => {
                  updateArgs({search: next})
                  args.onSearchChange?.(next)
                }}
              />
              <ComboboxList
                value={value}
                emptyText={args.emptyText ?? 'No framework found.'}
                onSelect={nextValue => {
                  const next = nextValue === value ? '' : nextValue
                  updateArgs({selectedFramework: next, comboboxOpen: false})
                  args.onItemSelect?.(next)
                  args.onFrameworkChange?.(next)
                  args.onComboboxOpenChange?.(false)
                }}
              />
            </Command>
          </PopoverContent>
        </Popover>
      </div>
    )
  },
}

export const ComboboxPopover: Story = {
  name: 'Combobox / Popover',
  args: {
    comboboxOpen: true,
  },
  render: function ComboboxPopoverRender(storyArgs) {
    const args = storyArgs
    const [{comboboxOpen, selectedFramework, search}, updateArgs] = useArgs<{
      comboboxOpen?: boolean
      selectedFramework?: FrameworkValue
      search?: string
    }>()

    const open = comboboxOpen
    const value = selectedFramework ?? ''

    return (
      <div className="w-full max-w-md">
        <Popover
          {...(open !== undefined ? {open} : {})}
          onOpenChange={(nextOpen: boolean) => {
            updateArgs({comboboxOpen: nextOpen})
            args.onComboboxOpenChange?.(nextOpen)
          }}
        >
          <PopoverTrigger asChild>
            <Button variant="outline">Open popover</Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command loop={args.loop} shouldFilter={args.shouldFilter}>
              <CommandInput
                placeholder={args.placeholder}
                value={search}
                onValueChange={(next: string) => {
                  updateArgs({search: next})
                  args.onSearchChange?.(next)
                }}
              />
              <ComboboxList
                value={value}
                emptyText={args.emptyText ?? 'No framework found.'}
                onSelect={nextValue => {
                  const next = nextValue === value ? '' : nextValue
                  updateArgs({selectedFramework: next, comboboxOpen: false})
                  args.onItemSelect?.(next)
                  args.onFrameworkChange?.(next)
                  args.onComboboxOpenChange?.(false)
                }}
              />
            </Command>
          </PopoverContent>
        </Popover>
      </div>
    )
  },
}

export const ComboboxDropdownMenu: Story = {
  name: 'Combobox / Dropdown menu',
  args: {
    dropdownOpen: false,
  },
  render: function ComboboxDropdownMenuRender(storyArgs) {
    const args = storyArgs
    const [{dropdownOpen, selectedFramework, search}, updateArgs] = useArgs<{
      dropdownOpen?: boolean
      selectedFramework?: FrameworkValue
      search?: string
    }>()

    const open = dropdownOpen
    const value = selectedFramework ?? ''
    const label = getFrameworkLabel(value)

    return (
      <div className="w-full max-w-md">
        <DropdownMenu
          {...(open !== undefined ? {open} : {})}
          onOpenChange={(nextOpen: boolean) => {
            updateArgs({dropdownOpen: nextOpen})
            args.onDropdownOpenChange?.(nextOpen)
          }}
        >
          <DropdownMenuTrigger asChild>
            <Button variant="outline">{label || 'Open menu'}</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="p-0">
            <Command
              className="w-[260px]"
              loop={args.loop}
              shouldFilter={args.shouldFilter}
            >
              <CommandInput
                placeholder={args.placeholder}
                value={search}
                onValueChange={(next: string) => {
                  updateArgs({search: next})
                  args.onSearchChange?.(next)
                }}
              />
              <ComboboxList
                value={value}
                emptyText={args.emptyText ?? 'No framework found.'}
                onSelect={nextValue => {
                  const next = nextValue === value ? '' : nextValue
                  updateArgs({selectedFramework: next, dropdownOpen: false})
                  args.onItemSelect?.(next)
                  args.onFrameworkChange?.(next)
                  args.onDropdownOpenChange?.(false)
                }}
              />
            </Command>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    )
  },
}

export const ComboboxResponsive: Story = {
  name: 'Combobox / Responsive',
  args: {
    responsiveMode: 'desktop',
    comboboxOpen: false,
  },
  render: function ComboboxResponsiveRender(storyArgs) {
    const args = storyArgs
    const [
      {responsiveMode, comboboxOpen, selectedFramework, search},
      updateArgs,
    ] = useArgs<{
      responsiveMode?: 'desktop' | 'mobile'
      comboboxOpen?: boolean
      selectedFramework?: FrameworkValue
      search?: string
    }>()

    const mode = responsiveMode ?? 'desktop'
    const open = comboboxOpen
    const value = selectedFramework ?? ''
    const label = getFrameworkLabel(value)

    if (mode === 'mobile') {
      return (
        <div className="w-full max-w-md">
          <Drawer
            {...(open !== undefined ? {open} : {})}
            onOpenChange={(nextOpen: boolean) => {
              updateArgs({comboboxOpen: nextOpen})
              args.onComboboxOpenChange?.(nextOpen)
            }}
          >
            <DrawerTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="w-[200px] justify-between"
              >
                {label || args.triggerLabel || 'Select framework...'}
                <ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Select framework</DrawerTitle>
              </DrawerHeader>
              <div className="p-4 pt-0">
                <Command
                  className="rounded-lg border"
                  loop={args.loop}
                  shouldFilter={args.shouldFilter}
                >
                  <CommandInput
                    placeholder={args.placeholder}
                    value={search}
                    onValueChange={(next: string) => {
                      updateArgs({search: next})
                      args.onSearchChange?.(next)
                    }}
                  />
                  <ComboboxList
                    value={value}
                    emptyText={args.emptyText ?? 'No framework found.'}
                    onSelect={nextValue => {
                      const next = nextValue === value ? '' : nextValue
                      updateArgs({selectedFramework: next, comboboxOpen: false})
                      args.onItemSelect?.(next)
                      args.onFrameworkChange?.(next)
                      args.onComboboxOpenChange?.(false)
                    }}
                  />
                </Command>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      )
    }

    return (
      <div className="w-full max-w-md">
        <Popover
          {...(open !== undefined ? {open} : {})}
          onOpenChange={(nextOpen: boolean) => {
            updateArgs({comboboxOpen: nextOpen})
            args.onComboboxOpenChange?.(nextOpen)
          }}
        >
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-[200px] justify-between"
            >
              {label || args.triggerLabel || 'Select framework...'}
              <ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command loop={args.loop} shouldFilter={args.shouldFilter}>
              <CommandInput
                placeholder={args.placeholder}
                value={search}
                onValueChange={(next: string) => {
                  updateArgs({search: next})
                  args.onSearchChange?.(next)
                }}
              />
              <ComboboxList
                value={value}
                emptyText={args.emptyText ?? 'No framework found.'}
                onSelect={nextValue => {
                  const next = nextValue === value ? '' : nextValue
                  updateArgs({selectedFramework: next, comboboxOpen: false})
                  args.onItemSelect?.(next)
                  args.onFrameworkChange?.(next)
                  args.onComboboxOpenChange?.(false)
                }}
              />
            </Command>
          </PopoverContent>
        </Popover>
      </div>
    )
  },
}
