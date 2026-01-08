import type {Meta, StoryObj} from '@storybook/react'

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '../../components/ui/tabs'
import {Button} from '../../components/ui/button'
import {Input} from '../../components/ui/input'
import {Label} from '../../components/ui/label'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../../components/ui/card'

const meta = {
  title: 'UI/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  parameters: {
    controls: {
      include: [
        'value',
        'defaultValue',
        'onValueChange',
        'orientation',
        'dir',
        'className',
      ],
    },
    docs: {
      description: {
        component:
          'Key props: `value`, `defaultValue`, `onValueChange`, `orientation`, `dir`, `className`.',
      },
    },
  },
} satisfies Meta<typeof Tabs>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="account" className="w-full max-w-md">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account" className="rounded-md border p-4 text-sm">
        Account settings
      </TabsContent>
      <TabsContent value="password" className="rounded-md border p-4 text-sm">
        Password settings
      </TabsContent>
    </Tabs>
  ),
}

export const WithForm: Story = {
  name: 'With Form',
  render: () => (
    <Tabs defaultValue="account" className="w-full max-w-md">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="@peduarte" />
            </div>
            <Button className="w-full">Save changes</Button>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
            <Button className="w-full">Change password</Button>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  ),
}

export const MultipleTabs: Story = {
  name: 'Multiple Tabs',
  render: () => (
    <Tabs defaultValue="overview" className="w-full max-w-2xl">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="reports">Reports</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="rounded-md border p-6">
        <h3 className="text-lg font-semibold mb-2">Overview</h3>
        <p className="text-sm text-muted-foreground">
          View your property performance at a glance. Track bookings, revenue,
          and guest satisfaction.
        </p>
      </TabsContent>
      <TabsContent value="analytics" className="rounded-md border p-6">
        <h3 className="text-lg font-semibold mb-2">Analytics</h3>
        <p className="text-sm text-muted-foreground">
          Deep dive into your data with comprehensive analytics and insights.
        </p>
      </TabsContent>
      <TabsContent value="reports" className="rounded-md border p-6">
        <h3 className="text-lg font-semibold mb-2">Reports</h3>
        <p className="text-sm text-muted-foreground">
          Generate and download detailed reports for your properties.
        </p>
      </TabsContent>
      <TabsContent value="notifications" className="rounded-md border p-6">
        <h3 className="text-lg font-semibold mb-2">Notifications</h3>
        <p className="text-sm text-muted-foreground">
          Manage your notification preferences and stay updated.
        </p>
      </TabsContent>
    </Tabs>
  ),
}

export const Vertical: Story = {
  render: () => (
    <Tabs
      defaultValue="profile"
      orientation="vertical"
      className="flex gap-4 max-w-2xl"
    >
      <TabsList className="flex-col h-auto">
        <TabsTrigger value="profile" className="w-full justify-start">
          Profile
        </TabsTrigger>
        <TabsTrigger value="account" className="w-full justify-start">
          Account
        </TabsTrigger>
        <TabsTrigger value="security" className="w-full justify-start">
          Security
        </TabsTrigger>
        <TabsTrigger value="notifications" className="w-full justify-start">
          Notifications
        </TabsTrigger>
      </TabsList>
      <div className="flex-1">
        <TabsContent value="profile" className="rounded-md border p-6 mt-0">
          <h3 className="text-lg font-semibold mb-2">Profile Settings</h3>
          <p className="text-sm text-muted-foreground">
            Update your profile information and preferences.
          </p>
        </TabsContent>
        <TabsContent value="account" className="rounded-md border p-6 mt-0">
          <h3 className="text-lg font-semibold mb-2">Account Settings</h3>
          <p className="text-sm text-muted-foreground">
            Manage your account details and billing information.
          </p>
        </TabsContent>
        <TabsContent value="security" className="rounded-md border p-6 mt-0">
          <h3 className="text-lg font-semibold mb-2">Security Settings</h3>
          <p className="text-sm text-muted-foreground">
            Configure two-factor authentication and security preferences.
          </p>
        </TabsContent>
        <TabsContent
          value="notifications"
          className="rounded-md border p-6 mt-0"
        >
          <h3 className="text-lg font-semibold mb-2">Notification Settings</h3>
          <p className="text-sm text-muted-foreground">
            Choose how you want to be notified about updates.
          </p>
        </TabsContent>
      </div>
    </Tabs>
  ),
}

export const DisabledTab: Story = {
  name: 'With Disabled Tab',
  render: () => (
    <Tabs defaultValue="available" className="w-full max-w-md">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="available">Available</TabsTrigger>
        <TabsTrigger value="pending">Pending</TabsTrigger>
        <TabsTrigger value="archived" disabled>
          Archived
        </TabsTrigger>
      </TabsList>
      <TabsContent value="available" className="rounded-md border p-4">
        <p className="text-sm">View all available properties.</p>
      </TabsContent>
      <TabsContent value="pending" className="rounded-md border p-4">
        <p className="text-sm">Properties pending approval.</p>
      </TabsContent>
      <TabsContent value="archived" className="rounded-md border p-4">
        <p className="text-sm">Archived properties (disabled).</p>
      </TabsContent>
    </Tabs>
  ),
}

export const PropertyManagement: Story = {
  name: 'Property Management Example',
  render: () => (
    <Tabs defaultValue="details" className="w-full max-w-3xl">
      <TabsList>
        <TabsTrigger value="details">Details</TabsTrigger>
        <TabsTrigger value="amenities">Amenities</TabsTrigger>
        <TabsTrigger value="pricing">Pricing</TabsTrigger>
        <TabsTrigger value="availability">Availability</TabsTrigger>
      </TabsList>
      <TabsContent value="details">
        <Card>
          <CardHeader>
            <CardTitle>Property Details</CardTitle>
            <CardDescription>
              Basic information about your property
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="property-name">Property Name</Label>
                <Input
                  id="property-name"
                  placeholder="Cozy Downtown Apartment"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="property-type">Type</Label>
                <Input id="property-type" placeholder="Apartment" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Input
                id="description"
                placeholder="A beautiful space in the heart of the city..."
              />
            </div>
            <Button>Save Details</Button>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="amenities">
        <Card>
          <CardHeader>
            <CardTitle>Amenities</CardTitle>
            <CardDescription>
              Select the amenities available at your property
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <Input type="checkbox" id="wifi" className="h-4 w-4" />
                <Label htmlFor="wifi">WiFi</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input type="checkbox" id="parking" className="h-4 w-4" />
                <Label htmlFor="parking">Parking</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input type="checkbox" id="pool" className="h-4 w-4" />
                <Label htmlFor="pool">Swimming Pool</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input type="checkbox" id="gym" className="h-4 w-4" />
                <Label htmlFor="gym">Gym</Label>
              </div>
            </div>
            <Button className="mt-4">Save Amenities</Button>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="pricing">
        <Card>
          <CardHeader>
            <CardTitle>Pricing</CardTitle>
            <CardDescription>
              Set your nightly rates and pricing rules
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="base-price">Base Price (per night)</Label>
                <Input id="base-price" type="number" placeholder="150" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="weekend-price">Weekend Price</Label>
                <Input id="weekend-price" type="number" placeholder="200" />
              </div>
            </div>
            <Button>Save Pricing</Button>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="availability">
        <Card>
          <CardHeader>
            <CardTitle>Availability</CardTitle>
            <CardDescription>
              Manage your property's availability calendar
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Set blocked dates and manage your booking calendar.
            </p>
            <Button>Open Calendar</Button>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  ),
}
