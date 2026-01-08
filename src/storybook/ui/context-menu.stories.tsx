import type {Meta, StoryObj} from '@storybook/react'

import * as React from 'react'
import {useArgs} from '@storybook/preview-api'

import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from '../../components/ui/context-menu'

type CheckedState = boolean | 'indeterminate'

type ContextMenuStoryArgs = React.ComponentProps<typeof ContextMenu> & {
  triggerAsChild?: boolean
  triggerDisabled?: boolean
  triggerText?: string

  contentAlignOffset?: number
  contentAvoidCollisions?: boolean
  contentCollisionPadding?: number
  contentSticky?: 'partial' | 'always'
  contentHideWhenDetached?: boolean
  contentLoop?: boolean

  subSideOffset?: number
  subAlignOffset?: number
  subLoop?: boolean

  forwardDisabled?: boolean
  bookmarksChecked?: CheckedState
  urlsChecked?: CheckedState
  person?: 'pedro' | 'colm'

  onItemSelect?: (item: string) => void
  onBookmarksCheckedChange?: (checked: CheckedState) => void
  onUrlsCheckedChange?: (checked: CheckedState) => void
  onPersonChange?: (value: string) => void

  onEscapeKeyDown?: React.ComponentProps<
    typeof ContextMenuContent
  >['onEscapeKeyDown']
  onPointerDownOutside?: React.ComponentProps<
    typeof ContextMenuContent
  >['onPointerDownOutside']
  onFocusOutside?: React.ComponentProps<
    typeof ContextMenuContent
  >['onFocusOutside']
  onInteractOutside?: React.ComponentProps<
    typeof ContextMenuContent
  >['onInteractOutside']
}

function TriggerBox({text}: {text: string}) {
  return <div className="max-w-md rounded-md border p-6 text-sm">{text}</div>
}

function RadixLikeMenu({
  args,
  checked,
  onCheckedChange,
}: {
  args: ContextMenuStoryArgs
  checked: {
    bookmarksChecked: CheckedState
    urlsChecked: CheckedState
    person: 'pedro' | 'colm'
  }
  onCheckedChange: {
    setBookmarksChecked: (next: CheckedState) => void
    setUrlsChecked: (next: CheckedState) => void
    setPerson: (next: 'pedro' | 'colm') => void
  }
}) {
  return (
    <ContextMenuContent
      alignOffset={args.contentAlignOffset}
      avoidCollisions={args.contentAvoidCollisions}
      collisionPadding={args.contentCollisionPadding}
      sticky={args.contentSticky}
      hideWhenDetached={args.contentHideWhenDetached}
      loop={args.contentLoop}
      onEscapeKeyDown={args.onEscapeKeyDown}
      onPointerDownOutside={args.onPointerDownOutside}
      onFocusOutside={args.onFocusOutside}
      onInteractOutside={args.onInteractOutside}
    >
      <ContextMenuGroup>
        <ContextMenuItem
          onSelect={() => {
            args.onItemSelect?.('Back')
          }}
        >
          Back <ContextMenuShortcut>⌘+[</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem
          disabled={args.forwardDisabled}
          onSelect={() => {
            args.onItemSelect?.('Forward')
          }}
        >
          Forward <ContextMenuShortcut>⌘+]</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem
          onSelect={() => {
            args.onItemSelect?.('Reload')
          }}
        >
          Reload <ContextMenuShortcut>⌘+R</ContextMenuShortcut>
        </ContextMenuItem>
      </ContextMenuGroup>

      <ContextMenuSub>
        <ContextMenuSubTrigger>
          More Tools
          <ContextMenuShortcut />
        </ContextMenuSubTrigger>
        <ContextMenuSubContent
          sideOffset={args.subSideOffset}
          alignOffset={args.subAlignOffset}
          loop={args.subLoop}
        >
          <ContextMenuItem
            onSelect={() => {
              args.onItemSelect?.('Save Page As…')
            }}
          >
            Save Page As… <ContextMenuShortcut>⌘+S</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem
            onSelect={() => {
              args.onItemSelect?.('Create Shortcut…')
            }}
          >
            Create Shortcut…
          </ContextMenuItem>
          <ContextMenuItem
            onSelect={() => {
              args.onItemSelect?.('Name Window…')
            }}
          >
            Name Window…
          </ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem
            onSelect={() => {
              args.onItemSelect?.('Developer Tools')
            }}
          >
            Developer Tools
          </ContextMenuItem>
        </ContextMenuSubContent>
      </ContextMenuSub>

      <ContextMenuSeparator />

      <ContextMenuCheckboxItem
        checked={checked.bookmarksChecked}
        onCheckedChange={(next: CheckedState) => {
          onCheckedChange.setBookmarksChecked(next)
        }}
        onSelect={() => {
          args.onItemSelect?.('Show Bookmarks')
        }}
      >
        Show Bookmarks <ContextMenuShortcut>⌘+B</ContextMenuShortcut>
      </ContextMenuCheckboxItem>
      <ContextMenuCheckboxItem
        checked={checked.urlsChecked}
        onCheckedChange={(next: CheckedState) => {
          onCheckedChange.setUrlsChecked(next)
        }}
        onSelect={() => {
          args.onItemSelect?.('Show Full URLs')
        }}
      >
        Show Full URLs
      </ContextMenuCheckboxItem>

      <ContextMenuSeparator />

      <ContextMenuLabel>People</ContextMenuLabel>
      <ContextMenuRadioGroup
        value={checked.person}
        onValueChange={(next: string) => {
          onCheckedChange.setPerson(next as 'pedro' | 'colm')
        }}
      >
        <ContextMenuRadioItem value="pedro">Pedro Duarte</ContextMenuRadioItem>
        <ContextMenuRadioItem value="colm">Colm Tuite</ContextMenuRadioItem>
      </ContextMenuRadioGroup>
    </ContextMenuContent>
  )
}

const meta: Meta<ContextMenuStoryArgs> = {
  title: 'UI/ContextMenu',
  component: ContextMenu,
  tags: ['autodocs'],
  parameters: {
    controls: {
      include: [
        'modal',
        'dir',
        'onOpenChange',
        'triggerAsChild',
        'triggerDisabled',
        'triggerText',
        'contentAlignOffset',
        'contentAvoidCollisions',
        'contentCollisionPadding',
        'contentSticky',
        'contentHideWhenDetached',
        'contentLoop',
        'subSideOffset',
        'subAlignOffset',
        'subLoop',
        'forwardDisabled',
        'bookmarksChecked',
        'urlsChecked',
        'person',
        'onItemSelect',
        'onBookmarksCheckedChange',
        'onUrlsCheckedChange',
        'onPersonChange',
        'onEscapeKeyDown',
        'onPointerDownOutside',
        'onFocusOutside',
        'onInteractOutside',
      ],
    },
    docs: {
      description: {
        component:
          'Displays a menu located at the pointer, triggered by a right click or a long press. Docs: https://www.radix-ui.com/primitives/docs/components/context-menu',
      },
    },
  },
  argTypes: {
    modal: {control: 'boolean'},
    dir: {options: ['ltr', 'rtl'], control: {type: 'inline-radio'}},
    onOpenChange: {action: 'onOpenChange'},

    triggerAsChild: {control: 'boolean'},
    triggerDisabled: {control: 'boolean'},
    triggerText: {control: 'text'},

    contentAlignOffset: {control: {type: 'number', step: 1}},
    contentAvoidCollisions: {control: 'boolean'},
    contentCollisionPadding: {control: {type: 'number', min: 0, step: 1}},
    contentSticky: {
      options: ['partial', 'always'],
      control: {type: 'inline-radio'},
    },
    contentHideWhenDetached: {control: 'boolean'},
    contentLoop: {control: 'boolean'},

    subSideOffset: {control: {type: 'number', min: 0, step: 1}},
    subAlignOffset: {control: {type: 'number', step: 1}},
    subLoop: {control: 'boolean'},

    forwardDisabled: {control: 'boolean'},
    bookmarksChecked: {
      options: [true, false, 'indeterminate'],
      control: {type: 'inline-radio'},
    },
    urlsChecked: {
      options: [true, false, 'indeterminate'],
      control: {type: 'inline-radio'},
    },
    person: {
      options: ['pedro', 'colm'],
      control: {type: 'inline-radio'},
    },

    onItemSelect: {action: 'onItemSelect'},
    onBookmarksCheckedChange: {action: 'onBookmarksCheckedChange'},
    onUrlsCheckedChange: {action: 'onUrlsCheckedChange'},
    onPersonChange: {action: 'onPersonChange'},

    onEscapeKeyDown: {action: 'onEscapeKeyDown'},
    onPointerDownOutside: {action: 'onPointerDownOutside'},
    onFocusOutside: {action: 'onFocusOutside'},
    onInteractOutside: {action: 'onInteractOutside'},
  },
  args: {
    modal: true,
    dir: 'ltr',
    triggerAsChild: true,
    triggerDisabled: false,
    triggerText: 'Right click this area',

    contentAlignOffset: 0,
    contentAvoidCollisions: true,
    contentCollisionPadding: 0,
    contentSticky: 'partial',
    contentHideWhenDetached: false,
    contentLoop: false,

    subSideOffset: 2,
    subAlignOffset: -5,
    subLoop: false,

    forwardDisabled: true,
    bookmarksChecked: true,
    urlsChecked: false,
    person: 'pedro',
  },
}

export default meta

type Story = StoryObj<ContextMenuStoryArgs>

export const Default: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        <div className="max-w-md rounded-md border p-6 text-sm">
          Right click this area
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuLabel>Menu</ContextMenuLabel>
        <ContextMenuSeparator />
        <ContextMenuItem>Copy</ContextMenuItem>
        <ContextMenuItem>Share</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem variant="destructive">Delete</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
}

export const Demo: Story = {
  name: 'Radix demo',
  render: function DemoRender(args) {
    const [bookmarksChecked, setBookmarksChecked] =
      React.useState<CheckedState>(true)
    const [urlsChecked, setUrlsChecked] = React.useState<CheckedState>(false)
    const [person, setPerson] = React.useState<'pedro' | 'colm'>('pedro')

    return (
      <ContextMenu
        modal={args.modal}
        dir={args.dir}
        onOpenChange={args.onOpenChange}
      >
        <ContextMenuTrigger asChild>
          <TriggerBox text="Right-click here." />
        </ContextMenuTrigger>
        <RadixLikeMenu
          args={args}
          checked={{bookmarksChecked, urlsChecked, person}}
          onCheckedChange={{
            setBookmarksChecked: next => {
              setBookmarksChecked(next)
              args.onBookmarksCheckedChange?.(next)
            },
            setUrlsChecked: next => {
              setUrlsChecked(next)
              args.onUrlsCheckedChange?.(next)
            },
            setPerson: next => {
              setPerson(next)
              args.onPersonChange?.(next)
            },
          }}
        />
      </ContextMenu>
    )
  },
}

export const Playground: Story = {
  render: function PlaygroundRender(storyArgs) {
    const args = storyArgs
    const [{bookmarksChecked, urlsChecked, person}, updateArgs] = useArgs<{
      bookmarksChecked?: CheckedState
      urlsChecked?: CheckedState
      person?: 'pedro' | 'colm'
    }>()

    const trigger = args.triggerAsChild ? (
      <ContextMenuTrigger asChild disabled={args.triggerDisabled}>
        <TriggerBox text={args.triggerText || 'Right click this area'} />
      </ContextMenuTrigger>
    ) : (
      <ContextMenuTrigger
        disabled={args.triggerDisabled}
        className="max-w-md rounded-md border p-6 text-sm"
      >
        {args.triggerText || 'Right click this area'}
      </ContextMenuTrigger>
    )

    return (
      <ContextMenu
        modal={args.modal}
        dir={args.dir}
        onOpenChange={args.onOpenChange}
      >
        {trigger}
        <RadixLikeMenu
          args={args}
          checked={{
            bookmarksChecked: bookmarksChecked ?? true,
            urlsChecked: urlsChecked ?? false,
            person: person ?? 'pedro',
          }}
          onCheckedChange={{
            setBookmarksChecked: next => {
              updateArgs({bookmarksChecked: next})
              args.onBookmarksCheckedChange?.(next)
            },
            setUrlsChecked: next => {
              updateArgs({urlsChecked: next})
              args.onUrlsCheckedChange?.(next)
            },
            setPerson: next => {
              updateArgs({person: next})
              args.onPersonChange?.(next)
            },
          }}
        />
      </ContextMenu>
    )
  },
}

export const ConstrainedContent: Story = {
  name: 'Constrained content size',
  render: args => (
    <ContextMenu
      modal={args.modal}
      dir={args.dir}
      onOpenChange={args.onOpenChange}
    >
      <ContextMenuTrigger asChild>
        <TriggerBox text="Right click (content matches trigger width)" />
      </ContextMenuTrigger>
      <ContextMenuContent className="w-[var(--radix-context-menu-trigger-width)] max-h-[var(--radix-context-menu-content-available-height)]">
        <ContextMenuLabel>Long list</ContextMenuLabel>
        <ContextMenuSeparator />
        {Array.from({length: 30}).map((_, index) => (
          <ContextMenuItem
            key={index}
            onSelect={() => {
              args.onItemSelect?.(`Item ${index + 1}`)
            }}
          >
            Item {index + 1}
          </ContextMenuItem>
        ))}
      </ContextMenuContent>
    </ContextMenu>
  ),
}
