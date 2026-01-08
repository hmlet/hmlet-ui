import type {Meta, StoryObj} from '@storybook/react'

import * as React from 'react'
import {expect, userEvent, within} from '@storybook/test'

import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from '../../components/ui/menubar'

type MenubarStoryArgs = React.ComponentProps<typeof Menubar> & {
  onItemSelect?: (item: string) => void
  onCheckboxChange?: (payload: {item: string; checked: boolean}) => void
  onRadioChange?: (payload: {group: string; value: string}) => void
}

const meta: Meta<MenubarStoryArgs> = {
  title: 'UI/Menubar',
  component: Menubar,
  tags: ['autodocs'],
  parameters: {
    controls: {
      include: [
        'loop',
        'dir',
        'className',
        'onValueChange',
        'onItemSelect',
        'onCheckboxChange',
        'onRadioChange',
      ],
    },
    docs: {
      description: {
        component:
          'A visually persistent menu common in desktop applications. Content is portaled; in tests, query `document.body` for menu items.',
      },
    },
  },
  argTypes: {
    dir: {
      options: ['ltr', 'rtl'],
      control: {type: 'inline-radio'},
    },
    loop: {control: 'boolean'},
    onValueChange: {action: 'onValueChange'},
    onItemSelect: {action: 'onItemSelect'},
    onCheckboxChange: {action: 'onCheckboxChange'},
    onRadioChange: {action: 'onRadioChange'},
  },
  args: {
    dir: 'ltr',
    loop: true,
  },
}

export default meta

type Story = StoryObj<typeof meta>

function DemoMenubar(args: MenubarStoryArgs) {
  return (
    <Menubar {...args}>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem
            onSelect={() => {
              args.onItemSelect?.('New Tab')
            }}
          >
            New Tab <MenubarShortcut>⌘T</MenubarShortcut>
          </MenubarItem>
          <MenubarItem
            onSelect={() => {
              args.onItemSelect?.('New Window')
            }}
          >
            New Window
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem
            onSelect={() => {
              args.onItemSelect?.('Share')
            }}
          >
            Share
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem
            onSelect={() => {
              args.onItemSelect?.('Print')
            }}
          >
            Print <MenubarShortcut>⌘P</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem onSelect={() => args.onItemSelect?.('Undo')}>
            Undo <MenubarShortcut>⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarItem onSelect={() => args.onItemSelect?.('Redo')}>
            Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem onSelect={() => args.onItemSelect?.('Cut')}>
            Cut <MenubarShortcut>⌘X</MenubarShortcut>
          </MenubarItem>
          <MenubarItem onSelect={() => args.onItemSelect?.('Copy')}>
            Copy <MenubarShortcut>⌘C</MenubarShortcut>
          </MenubarItem>
          <MenubarItem onSelect={() => args.onItemSelect?.('Paste')}>
            Paste <MenubarShortcut>⌘V</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}

export const Default: Story = {
  name: 'Demo',
  render: args => <DemoMenubar {...args} />,
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement)
    const body = within(document.body)

    await userEvent.click(canvas.getByRole('menuitem', {name: 'File'}))
    await expect(body.getByText('Print')).toBeInTheDocument()

    await userEvent.click(body.getByText('Print'))
    await expect(body.queryByText('Print')).not.toBeInTheDocument()
  },
}

export const Submenus: Story = {
  render: args => (
    <Menubar {...args}>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem onSelect={() => args.onItemSelect?.('New Tab')}>
            New Tab
          </MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Share</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem onSelect={() => args.onItemSelect?.('Email link')}>
                Email link
              </MenubarItem>
              <MenubarItem onSelect={() => args.onItemSelect?.('Messages')}>
                Messages
              </MenubarItem>
              <MenubarItem onSelect={() => args.onItemSelect?.('Notes')}>
                Notes
              </MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem onSelect={() => args.onItemSelect?.('Print')}>
            Print
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement)
    const body = within(document.body)

    await userEvent.click(canvas.getByRole('menuitem', {name: 'File'}))
    await expect(body.getByText('Share')).toBeInTheDocument()

    await userEvent.hover(body.getByText('Share'))
    await expect(body.getByText('Email link')).toBeInTheDocument()

    await userEvent.click(body.getByText('Email link'))
    await expect(body.queryByText('Email link')).not.toBeInTheDocument()
  },
}

export const CheckboxAndRadioItems: Story = {
  render: function CheckboxAndRadioItemsRender(args) {
    const [showLineNumbers, setShowLineNumbers] = React.useState(true)
    const [wrapLines, setWrapLines] = React.useState(false)
    const [theme, setTheme] = React.useState<'system' | 'light' | 'dark'>(
      'system',
    )

    return (
      <Menubar {...args}>
        <MenubarMenu>
          <MenubarTrigger>View</MenubarTrigger>
          <MenubarContent>
            <MenubarLabel inset>Editor</MenubarLabel>
            <MenubarSeparator />
            <MenubarCheckboxItem
              checked={showLineNumbers}
              onCheckedChange={checked => {
                const next = Boolean(checked)
                setShowLineNumbers(next)
                args.onCheckboxChange?.({
                  item: 'Show Line Numbers',
                  checked: next,
                })
              }}
            >
              Show Line Numbers
            </MenubarCheckboxItem>
            <MenubarCheckboxItem
              checked={wrapLines}
              onCheckedChange={checked => {
                const next = Boolean(checked)
                setWrapLines(next)
                args.onCheckboxChange?.({item: 'Wrap Lines', checked: next})
              }}
            >
              Wrap Lines
            </MenubarCheckboxItem>

            <MenubarSeparator />
            <MenubarLabel inset>Theme</MenubarLabel>
            <MenubarRadioGroup
              value={theme}
              onValueChange={value => {
                const next = value as typeof theme
                setTheme(next)
                args.onRadioChange?.({group: 'Theme', value: next})
              }}
            >
              <MenubarRadioItem value="system">System</MenubarRadioItem>
              <MenubarRadioItem value="light">Light</MenubarRadioItem>
              <MenubarRadioItem value="dark">Dark</MenubarRadioItem>
            </MenubarRadioGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    )
  },
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement)
    const body = within(document.body)

    await userEvent.click(canvas.getByRole('menuitem', {name: 'View'}))

    const showLineNumbers = body.getByRole('menuitemcheckbox', {
      name: 'Show Line Numbers',
    })
    await expect(showLineNumbers).toHaveAttribute('aria-checked', 'true')

    await userEvent.click(showLineNumbers)
    await expect(showLineNumbers).toHaveAttribute('aria-checked', 'false')

    const dark = body.getByRole('menuitemradio', {name: 'Dark'})
    await userEvent.click(dark)
    await expect(dark).toHaveAttribute('aria-checked', 'true')
  },
}

export const GroupsDisabledAndDestructive: Story = {
  render: args => (
    <Menubar {...args}>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarGroup>
            <MenubarLabel inset>Actions</MenubarLabel>
            <MenubarItem onSelect={() => args.onItemSelect?.('New')}>
              New
            </MenubarItem>
            <MenubarItem disabled onSelect={() => args.onItemSelect?.('Open')}>
              Open…
            </MenubarItem>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarGroup>
            <MenubarLabel inset>Danger Zone</MenubarLabel>
            <MenubarItem
              variant="destructive"
              onSelect={() => {
                args.onItemSelect?.('Delete')
              }}
            >
              Delete
            </MenubarItem>
          </MenubarGroup>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
}
