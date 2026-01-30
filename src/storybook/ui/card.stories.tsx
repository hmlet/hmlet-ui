// --- New stories for Card utility props ---

export const PaddingVariants: Story = {
  name: 'Padding (p, px, py)',
  render: () => (
    <div className="flex flex-wrap gap-6">
      <Card className="max-w-xs" p={4}>
        <CardContent>
          <div>p=4 (number)</div>
        </CardContent>
      </Card>
      <Card className="max-w-xs" px="8" py="2">
        <CardContent>
          <div>px="8" (string), py="2"</div>
        </CardContent>
      </Card>
      <Card className="max-w-xs" p="none">
        <CardContent>
          <div>p="none" (no padding)</div>
        </CardContent>
      </Card>
    </div>
  ),
}

export const MarginVariants: Story = {
  name: 'Margin (m, mx, my)',
  render: () => (
    <div className="flex flex-wrap gap-0 bg-muted p-4">
      <Card className="max-w-xs" m={6}>
        <CardContent>
          <div>m=6 (number)</div>
        </CardContent>
      </Card>
      <Card className="max-w-xs" mx="8" my="2">
        <CardContent>
          <div>mx="8" (string), my="2"</div>
        </CardContent>
      </Card>
      <Card className="max-w-xs" m="none">
        <CardContent>
          <div>m="none" (no margin)</div>
        </CardContent>
      </Card>
    </div>
  ),
}

export const ShadowVariants: Story = {
  name: 'Shadow',
  render: () => (
    <div className="flex flex-wrap gap-6 bg-muted p-4">
      <Card className="max-w-xs" shadow="sm">
        <CardContent>
          <div>shadow="sm"</div>
        </CardContent>
      </Card>
      <Card className="max-w-xs" shadow="lg">
        <CardContent>
          <div>shadow="lg"</div>
        </CardContent>
      </Card>
      <Card className="max-w-xs" shadow="2xl">
        <CardContent>
          <div>shadow="2xl"</div>
        </CardContent>
      </Card>
      <Card className="max-w-xs" shadow="none">
        <CardContent>
          <div>shadow="none"</div>
        </CardContent>
      </Card>
    </div>
  ),
}

export const WidthHeightDisplay: Story = {
  name: 'Width, Height, Display',
  render: () => (
    <div className="flex flex-col gap-6">
      <Card w="full" h="fit" display="block" className="bg-primary/10">
        <CardContent>
          <div>w="full" h="fit" display="block"</div>
        </CardContent>
      </Card>
      <Card w="auto" h="auto" display="flex" className="bg-secondary/10">
        <CardContent>
          <div>w="auto" h="auto" display="flex"</div>
        </CardContent>
      </Card>
      <Card w="fit" h="full" display="inline-block" className="bg-muted/10">
        <CardContent>
          <div>w="fit" h="full" display="inline-block"</div>
        </CardContent>
      </Card>
    </div>
  ),
}
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
