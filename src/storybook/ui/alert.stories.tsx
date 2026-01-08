import type {Meta, StoryObj} from '@storybook/react'
import {AlertCircle, CheckCircle2, Info, AlertTriangle} from 'lucide-react'

import {Alert, AlertDescription, AlertTitle} from '../../components/ui/alert'

const meta = {
  title: 'UI/Alert',
  component: Alert,
  tags: ['autodocs'],
} satisfies Meta<typeof Alert>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Alert className="max-w-md">
      <AlertTitle>Heads up</AlertTitle>
      <AlertDescription>This is a default alert.</AlertDescription>
    </Alert>
  ),
}

export const InfoAlert: Story = {
  name: 'Info',
  render: () => (
    <Alert className="max-w-md">
      <Info className="h-4 w-4" />
      <AlertTitle>Information</AlertTitle>
      <AlertDescription>
        Your booking confirmation will be sent to your email within 24 hours.
      </AlertDescription>
    </Alert>
  ),
}

export const Success: Story = {
  render: () => (
    <Alert className="max-w-md border-success/50 bg-success/10 text-success-foreground">
      <CheckCircle2 className="h-4 w-4 text-success" />
      <AlertTitle className="text-success">Success</AlertTitle>
      <AlertDescription className="text-success/90">
        Your payment has been processed successfully. Reservation confirmed!
      </AlertDescription>
    </Alert>
  ),
}

export const Warning: Story = {
  render: () => (
    <Alert className="max-w-md border-warning/50 bg-warning/10 text-warning-foreground">
      <AlertTriangle className="h-4 w-4 text-warning" />
      <AlertTitle className="text-warning">Warning</AlertTitle>
      <AlertDescription className="text-warning-foreground/90">
        Limited availability — only 2 rooms left for your selected dates.
      </AlertDescription>
    </Alert>
  ),
}

export const Destructive: Story = {
  name: 'Error',
  render: () => (
    <Alert variant="destructive" className="max-w-md">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Payment failed. Please check your card details and try again.
      </AlertDescription>
    </Alert>
  ),
}
