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
          Status indicators with Primary (Navy) and Secondary (Coral) variants
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Default Alerts */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-muted-foreground">
            Standard Alerts
          </h4>

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

        {/* Primary Color Alerts */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-muted-foreground">
            Primary (Navy) Theme Alerts
          </h4>

          <Alert className="border-primary/50 bg-primary/10">
            <Info className="h-4 w-4 text-primary" />
            <AlertTitle className="text-primary">
              Primary Information
            </AlertTitle>
            <AlertDescription className="text-primary/80">
              Check out our premium membership benefits for exclusive rates.
            </AlertDescription>
          </Alert>

          <Alert className="border-primary bg-primary text-primary-foreground">
            <CheckCircle2 className="h-4 w-4" />
            <AlertTitle>Premium Verified</AlertTitle>
            <AlertDescription>
              This property is verified and recommended by our premium partners.
            </AlertDescription>
          </Alert>
        </div>

        {/* Secondary Color Alerts */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-muted-foreground">
            Secondary (Coral) Theme Alerts
          </h4>

          <Alert className="border-secondary/50 bg-secondary/10">
            <AlertTriangle className="h-4 w-4 text-secondary" />
            <AlertTitle className="text-secondary">Hot Deal Alert</AlertTitle>
            <AlertDescription className="text-secondary/80">
              Limited time offer - Save 30% on bookings made within the next 24
              hours!
            </AlertDescription>
          </Alert>

          <Alert className="border-secondary bg-secondary text-secondary-foreground">
            <Info className="h-4 w-4" />
            <AlertTitle>Featured Promotion</AlertTitle>
            <AlertDescription>
              Early bird special - Book 30 days in advance for guaranteed best
              rates.
            </AlertDescription>
          </Alert>
        </div>

        {/* Badges */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-muted-foreground">
            Badges - Default Variants
          </h4>

          <div className="flex flex-wrap gap-2">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>
        </div>

        {/* Primary Badges */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-muted-foreground">
            Badges - Primary (Navy) Theme
          </h4>

          <div className="flex flex-wrap gap-2">
            <Badge className="bg-primary text-primary-foreground">
              Premium
            </Badge>
            <Badge className="bg-primary/90 text-primary-foreground">
              Verified
            </Badge>
            <Badge className="bg-primary/80 text-primary-foreground">
              Featured
            </Badge>
            <Badge className="border-primary text-primary" variant="outline">
              Top Rated
            </Badge>
          </div>
        </div>

        {/* Secondary Badges */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-muted-foreground">
            Badges - Secondary (Coral) Theme
          </h4>

          <div className="flex flex-wrap gap-2">
            <Badge className="bg-secondary text-secondary-foreground">
              Hot Deal
            </Badge>
            <Badge className="bg-secondary/90 text-secondary-foreground">
              Trending
            </Badge>
            <Badge className="bg-secondary/80 text-white">New</Badge>
            <Badge
              className="border-secondary text-secondary"
              variant="outline"
            >
              Special Offer
            </Badge>
          </div>
        </div>

        {/* Usage Examples */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-muted-foreground">
            Semantic Badges (All Colors)
          </h4>

          <div className="flex flex-wrap gap-2">
            <Badge className="bg-success text-success-foreground">
              Available
            </Badge>
            <Badge className="bg-warning text-warning-foreground">
              Limited
            </Badge>
            <Badge variant="destructive">Sold Out</Badge>
            <Badge className="bg-primary text-primary-foreground">
              Premium
            </Badge>
            <Badge className="bg-secondary text-secondary-foreground">
              Hot Deal
            </Badge>
            <Badge variant="outline">Featured</Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
