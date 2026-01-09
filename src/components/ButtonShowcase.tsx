import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card'
import {Button} from './ui/button'
import {Mail, Download, Loader2, Plus, ArrowRight, Check} from 'lucide-react'

export function ButtonShowcase() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Button Components</CardTitle>
        <CardDescription>
          Complete button system with Primary, Secondary, and Semantic variants
          • All interaction states included
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        {/* PRIMARY VARIANTS */}
        <div>
          <h4 className="mb-4 text-sm font-medium text-muted-foreground">
            Primary Variants (Navy)
          </h4>
          <div className="space-y-4">
            <div>
              <p className="text-xs text-muted-foreground mb-2">Solid</p>
              <div className="flex flex-wrap gap-3">
                <Button variant="primary">Primary Button</Button>
                <Button variant="primary" disabled>
                  Disabled
                </Button>
                <Button variant="primary">
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Loading
                </Button>
              </div>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-2">Outline</p>
              <div className="flex flex-wrap gap-3">
                <Button variant="primary-outline">Primary Outline</Button>
                <Button variant="primary-outline" disabled>
                  Disabled
                </Button>
              </div>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-2">Ghost</p>
              <div className="flex flex-wrap gap-3">
                <Button variant="primary-ghost">Primary Ghost</Button>
                <Button variant="primary-ghost" disabled>
                  Disabled
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* SECONDARY VARIANTS */}
        <div>
          <h4 className="mb-4 text-sm font-medium text-muted-foreground">
            Secondary Variants (Coral)
          </h4>
          <div className="space-y-4">
            <div>
              <p className="text-xs text-muted-foreground mb-2">Solid</p>
              <div className="flex flex-wrap gap-3">
                <Button variant="secondary">Secondary Button</Button>
                <Button variant="secondary" disabled>
                  Disabled
                </Button>
                <Button variant="secondary">
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Loading
                </Button>
              </div>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-2">Outline</p>
              <div className="flex flex-wrap gap-3">
                <Button variant="secondary-outline">Secondary Outline</Button>
                <Button variant="secondary-outline" disabled>
                  Disabled
                </Button>
              </div>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-2">Ghost</p>
              <div className="flex flex-wrap gap-3">
                <Button variant="secondary-ghost">Secondary Ghost</Button>
                <Button variant="secondary-ghost" disabled>
                  Disabled
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* SEMANTIC VARIANTS */}
        <div>
          <h4 className="mb-4 text-sm font-medium text-muted-foreground">
            Semantic Variants
          </h4>
          <div className="flex flex-wrap gap-3">
            <Button variant="destructive">Destructive</Button>
            <Button variant="success">Success</Button>
            <Button variant="outline">Neutral Outline</Button>
            <Button variant="ghost">Neutral Ghost</Button>
            <Button variant="link">Link Button</Button>
          </div>
        </div>

        {/* SIZES - PRIMARY */}
        <div>
          <h4 className="mb-4 text-sm font-medium text-muted-foreground">
            Sizes (S, M, L) - Primary
          </h4>
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="primary" size="sm">
              Small (S)
            </Button>
            <Button variant="primary" size="md">
              Medium (M)
            </Button>
            <Button variant="primary" size="lg">
              Large (L)
            </Button>
          </div>
        </div>

        {/* SIZES - SECONDARY */}
        <div>
          <h4 className="mb-4 text-sm font-medium text-muted-foreground">
            Sizes (S, M, L) - Secondary
          </h4>
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="secondary" size="sm">
              Small (S)
            </Button>
            <Button variant="secondary" size="md">
              Medium (M)
            </Button>
            <Button variant="secondary" size="lg">
              Large (L)
            </Button>
          </div>
        </div>

        {/* ICON BUTTONS */}
        <div>
          <h4 className="mb-4 text-sm font-medium text-muted-foreground">
            Icon Buttons
          </h4>
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="primary" size="icon-sm">
              <Plus className="h-4 w-4" />
            </Button>
            <Button variant="primary" size="icon">
              <Plus className="h-5 w-5" />
            </Button>
            <Button variant="primary" size="icon-lg">
              <Plus className="h-6 w-6" />
            </Button>
            <Button variant="secondary" size="icon">
              <Check className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon">
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* WITH ICONS - PRIMARY */}
        <div>
          <h4 className="mb-4 text-sm font-medium text-muted-foreground">
            With Icons - Primary
          </h4>
          <div className="flex flex-wrap gap-3">
            <Button variant="primary">
              <Mail className="mr-2 h-4 w-4" />
              Send Email
            </Button>
            <Button variant="primary-outline">
              <Download className="mr-2 h-4 w-4" />
              Download
            </Button>
            <Button variant="primary">
              Book Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* WITH ICONS - SECONDARY */}
        <div>
          <h4 className="mb-4 text-sm font-medium text-muted-foreground">
            With Icons - Secondary
          </h4>
          <div className="flex flex-wrap gap-3">
            <Button variant="secondary">
              <Mail className="mr-2 h-4 w-4" />
              Contact Host
            </Button>
            <Button variant="secondary-outline">
              <Download className="mr-2 h-4 w-4" />
              Save Listing
            </Button>
            <Button variant="secondary">
              View Details
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* CTA EXAMPLES - REAL-ESTATE/HOSPITALITY */}
        <div>
          <h4 className="mb-4 text-sm font-medium text-muted-foreground">
            Real-Estate/Hospitality CTAs
          </h4>
          <div className="space-y-3">
            <div className="flex flex-wrap gap-3">
              <Button variant="primary" size="lg">
                Book This Property
              </Button>
              <Button variant="secondary" size="lg">
                Schedule Viewing
              </Button>
              <Button variant="outline" size="lg">
                Save for Later
              </Button>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button variant="primary" size="md">
                Reserve Now
              </Button>
              <Button variant="secondary" size="md">
                Contact Agent
              </Button>
              <Button variant="primary-outline" size="md">
                Request Info
              </Button>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button variant="secondary" size="sm">
                Quick View
              </Button>
              <Button variant="ghost" size="sm">
                Compare
              </Button>
              <Button variant="link" size="sm">
                Learn More →
              </Button>
            </div>
          </div>
        </div>

        {/* FULL WIDTH */}
        <div>
          <h4 className="mb-4 text-sm font-medium text-muted-foreground">
            Full Width Buttons
          </h4>
          <div className="space-y-3 max-w-md">
            <Button variant="primary" size="lg" className="w-full">
              Book Now - $299/night
            </Button>
            <Button variant="secondary" size="lg" className="w-full">
              Schedule a Tour
            </Button>
            <Button variant="outline" size="lg" className="w-full">
              Add to Wishlist
            </Button>
          </div>
        </div>

        {/* STATE GUIDE */}
        <div className="mt-8 rounded-lg border border-border bg-muted/30 p-6">
          <h4 className="mb-3 font-semibold">Button State Guide</h4>
          <div className="grid gap-3 text-sm">
            <div className="flex items-start gap-2">
              <span className="font-medium min-w-24">Default:</span>
              <span className="text-muted-foreground">
                Base state with shadow-sm
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-medium min-w-24">Hover:</span>
              <span className="text-muted-foreground">
                Darker background + shadow-md (200ms transition)
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-medium min-w-24">Active:</span>
              <span className="text-muted-foreground">
                Darkest background variant
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-medium min-w-24">Focus:</span>
              <span className="text-muted-foreground">
                2px ring with 2px offset in brand color
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-medium min-w-24">Disabled:</span>
              <span className="text-muted-foreground">
                50% opacity, pointer-events disabled
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
