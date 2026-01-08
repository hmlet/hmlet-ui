import type {Meta, StoryObj} from '@storybook/react'

import {Switch} from '../../components/ui/switch'
import {Label} from '../../components/ui/label'

const meta = {
  title: 'UI/Switch',
  component: Switch,
  tags: ['autodocs'],
} satisfies Meta<typeof Switch>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Switch id="airplane" />
      <Label htmlFor="airplane">Airplane mode</Label>
    </div>
  ),
}

export const Checked: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Switch id="notifications" defaultChecked />
      <Label htmlFor="notifications">Enable notifications</Label>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Switch id="disabled-off" disabled />
        <Label htmlFor="disabled-off">Disabled (off)</Label>
      </div>
      <div className="flex items-center gap-2">
        <Switch id="disabled-on" disabled defaultChecked />
        <Label htmlFor="disabled-on">Disabled (on)</Label>
      </div>
    </div>
  ),
}

export const WithoutLabel: Story = {
  render: () => <Switch />,
}

export const Examples: Story = {
  name: 'Usage Examples',
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="space-y-4">
        <h4 className="text-sm font-medium">Settings</h4>
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-0.5">
            <Label htmlFor="marketing">Marketing emails</Label>
            <p className="text-sm text-muted-foreground">
              Receive emails about new products and features
            </p>
          </div>
          <Switch id="marketing" />
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-0.5">
            <Label htmlFor="security">Security emails</Label>
            <p className="text-sm text-muted-foreground">
              Receive emails about account activity
            </p>
          </div>
          <Switch id="security" defaultChecked />
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-0.5">
            <Label htmlFor="updates">Product updates</Label>
            <p className="text-sm text-muted-foreground">
              Receive emails about new features
            </p>
          </div>
          <Switch id="updates" defaultChecked />
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="text-sm font-medium">Privacy</h4>
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-0.5">
            <Label htmlFor="analytics">Analytics</Label>
            <p className="text-sm text-muted-foreground">
              Help us improve by sharing usage data
            </p>
          </div>
          <Switch id="analytics" />
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-0.5">
            <Label htmlFor="cookies">Cookie preferences</Label>
            <p className="text-sm text-muted-foreground">
              Allow non-essential cookies
            </p>
          </div>
          <Switch id="cookies" />
        </div>
      </div>
    </div>
  ),
}
