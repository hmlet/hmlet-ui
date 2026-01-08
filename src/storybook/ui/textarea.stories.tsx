import type {Meta, StoryObj} from '@storybook/react'

import {Textarea} from '../../components/ui/textarea'
import {Label} from '../../components/ui/label'
import {Button} from '../../components/ui/button'

const meta = {
  title: 'UI/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  args: {
    placeholder: 'Write something…',
  },
} satisfies Meta<typeof Textarea>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => <Textarea placeholder="Type your message here." />,
}

export const Disabled: Story = {
  render: () => <Textarea placeholder="Type your message here." disabled />,
}

export const WithLabel: Story = {
  name: 'With Label',
  render: () => (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="message">Your message</Label>
      <Textarea placeholder="Type your message here." id="message" />
    </div>
  ),
}

export const WithText: Story = {
  name: 'With Text',
  render: () => (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="message-2">Your message</Label>
      <Textarea placeholder="Type your message here." id="message-2" />
      <p className="text-sm text-muted-foreground">
        Your message will be copied to the support team.
      </p>
    </div>
  ),
}

export const WithButton: Story = {
  name: 'With Button',
  render: () => (
    <div className="grid w-full gap-2">
      <Textarea placeholder="Type your message here." />
      <Button>Send message</Button>
    </div>
  ),
}

export const WithValue: Story = {
  name: 'With Default Value',
  render: () => (
    <Textarea
      placeholder="Type your message here."
      defaultValue="Hello! I'm interested in booking your property for the weekend. Could you please provide more details about availability?"
    />
  ),
}

export const LargerTextarea: Story = {
  name: 'Larger Size',
  render: () => (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="review">Write a review</Label>
      <Textarea
        placeholder="Share your experience with this property..."
        id="review"
        className="min-h-32"
      />
      <p className="text-sm text-muted-foreground">
        Your review helps other guests make informed decisions.
      </p>
    </div>
  ),
}

export const ContactForm: Story = {
  name: 'Contact Form Example',
  render: () => (
    <div className="grid w-full max-w-md gap-4">
      <div className="grid gap-1.5">
        <Label htmlFor="name">Name</Label>
        <input
          type="text"
          id="name"
          placeholder="Your name"
          className="flex h-9 w-full rounded-md border border-input bg-input-background px-3 py-1 text-sm transition-colors focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:border-ring disabled:cursor-not-allowed disabled:opacity-50"
        />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="email">Email</Label>
        <input
          type="email"
          id="email"
          placeholder="your@email.com"
          className="flex h-9 w-full rounded-md border border-input bg-input-background px-3 py-1 text-sm transition-colors focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:border-ring disabled:cursor-not-allowed disabled:opacity-50"
        />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="message-3">Message</Label>
        <Textarea
          placeholder="Tell us about your inquiry..."
          id="message-3"
          className="min-h-24"
        />
      </div>
      <Button className="w-full">Submit</Button>
    </div>
  ),
}
