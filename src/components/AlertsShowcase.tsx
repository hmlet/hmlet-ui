import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card'
import {Alert, AlertDescription, AlertTitle} from './ui/alert'
import {Badge} from './ui/badge'
import {AlertCircle, CheckCircle2, Info, AlertTriangle} from 'lucide-react'

export function AlertsShowcase() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Alerts & Badges</CardTitle>
        <CardDescription>
          Status indicators and notification components
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Alerts */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-muted-foreground">Alerts</h4>

          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>Information</AlertTitle>
            <AlertDescription>
              Your booking confirmation will be sent to your email within 24
              hours.
            </AlertDescription>
          </Alert>

          <Alert className="border-success/50 text-success-foreground bg-success/10">
            <CheckCircle2 className="h-4 w-4 text-success" />
            <AlertTitle className="text-success">Success</AlertTitle>
            <AlertDescription className="text-success/90">
              Your payment has been processed successfully. Reservation
              confirmed!
            </AlertDescription>
          </Alert>

          <Alert className="border-warning/50 text-warning-foreground bg-warning/10">
            <AlertTriangle className="h-4 w-4 text-warning" />
            <AlertTitle className="text-warning">Warning</AlertTitle>
            <AlertDescription className="text-warning-foreground/90">
              Limited availability - only 2 rooms left for your selected dates.
            </AlertDescription>
          </Alert>

          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              Payment failed. Please check your card details and try again.
            </AlertDescription>
          </Alert>
        </div>

        {/* Badges */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-muted-foreground">Badges</h4>

          <div className="flex flex-wrap gap-2">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>

          <div className="space-y-2">
            <h5 className="text-xs font-medium text-muted-foreground">
              Usage Examples
            </h5>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-success text-success-foreground">
                Available
              </Badge>
              <Badge className="bg-warning text-warning-foreground">
                Limited
              </Badge>
              <Badge variant="destructive">Sold Out</Badge>
              <Badge variant="secondary">Premium</Badge>
              <Badge variant="outline">Featured</Badge>
              <Badge className="bg-accent text-accent-foreground">
                Hot Deal
              </Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
