import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card'
import {Button} from './ui/button'
import {Mail, Download, Loader2, Plus} from 'lucide-react'

export function ButtonShowcase() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Buttons</CardTitle>
        <CardDescription>
          Primary CTAs use Terracotta accent, with various styles and states
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Primary Variants */}
        <div>
          <h4 className="mb-3 text-sm font-medium text-muted-foreground">
            Variants
          </h4>
          <div className="flex flex-wrap gap-3">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
        </div>

        {/* Sizes */}
        <div>
          <h4 className="mb-3 text-sm font-medium text-muted-foreground">
            Sizes
          </h4>
          <div className="flex flex-wrap items-center gap-3">
            <Button size="sm">Small</Button>
            <Button>Default</Button>
            <Button size="lg">Large</Button>
            <Button size="icon">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* With Icons */}
        <div>
          <h4 className="mb-3 text-sm font-medium text-muted-foreground">
            With Icons
          </h4>
          <div className="flex flex-wrap gap-3">
            <Button>
              <Mail className="mr-2 h-4 w-4" />
              Send Email
            </Button>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Download
            </Button>
          </div>
        </div>

        {/* States */}
        <div>
          <h4 className="mb-3 text-sm font-medium text-muted-foreground">
            States
          </h4>
          <div className="flex flex-wrap gap-3">
            <Button disabled>Disabled</Button>
            <Button>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Loading
            </Button>
          </div>
        </div>

        {/* CTA Examples */}
        <div>
          <h4 className="mb-3 text-sm font-medium text-muted-foreground">
            Booking CTAs
          </h4>
          <div className="flex flex-wrap gap-3">
            <Button size="lg">Book Now</Button>
            <Button size="lg" variant="secondary">
              View Details
            </Button>
            <Button size="lg" variant="outline">
              Save for Later
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
