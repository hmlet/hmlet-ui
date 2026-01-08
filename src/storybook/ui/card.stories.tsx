import type {Meta, StoryObj} from '@storybook/react'

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../../components/ui/card'
import {Button} from '../../components/ui/button'

const meta = {
  title: 'UI/Card',
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Card className="max-w-md">
      <CardHeader className="border-b">
        <div>
          <CardTitle>Card title</CardTitle>
          <CardDescription>Card description goes here.</CardDescription>
        </div>
        <CardAction>
          <Button size="sm" variant="outline">
            Action
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          This is an example card using the library components.
        </p>
      </CardContent>
      <CardFooter className="border-t gap-2">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
      </CardFooter>
    </Card>
  ),
}

export const Simple: Story = {
  render: () => (
    <Card className="max-w-md">
      <CardHeader>
        <CardTitle>Simple card</CardTitle>
        <CardDescription>Header + content (no footer)</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Use this when you just need a titled container.
        </p>
      </CardContent>
    </Card>
  ),
}

export const FooterAlignedRight: Story = {
  name: 'Footer aligned right',
  render: () => (
    <Card className="max-w-md">
      <CardHeader className="border-b">
        <CardTitle>Confirm changes</CardTitle>
        <CardDescription>
          Footer actions aligned to the right with spacing.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          You can combine layout utilities on `CardFooter`.
        </p>
      </CardContent>
      <CardFooter className="border-t gap-2 justify-end">
        <Button variant="secondary">Cancel</Button>
        <Button>Confirm</Button>
      </CardFooter>
    </Card>
  ),
}
