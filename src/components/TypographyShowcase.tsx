import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card'

export function TypographyShowcase() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Typography</CardTitle>
        <CardDescription>
          Text styles and hierarchy using Espresso and Warm Gray colors
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        {/* Headings */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-muted-foreground">
            Headings
          </h4>
          <div className="space-y-2">
            <h1>Heading 1 - Welcome to Your Stay</h1>
            <h2>Heading 2 - Discover Premium Comfort</h2>
            <h3>Heading 3 - Luxury Accommodations</h3>
            <h4>Heading 4 - Modern Amenities</h4>
          </div>
        </div>

        {/* Body Text */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-muted-foreground">
            Body Text
          </h4>
          <div className="space-y-4">
            <p className="text-base">
              Experience the warmth of boutique hospitality in our carefully
              designed spaces. Each room tells a story of comfort and elegance,
              blending modern luxury with timeless design.
            </p>
            <p className="text-sm text-muted-foreground">
              Secondary text in Warm Gray provides excellent readability while
              maintaining the warm, inviting atmosphere of our beige color
              palette.
            </p>
            <p className="text-xs text-muted-foreground">
              Small text for captions, footnotes, and additional information
              that supports the main content without overwhelming the visual
              hierarchy.
            </p>
          </div>
        </div>

        {/* Text Variants */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-muted-foreground">
            Text Variants
          </h4>
          <div className="space-y-2">
            <p className="text-foreground">
              Primary foreground text (Espresso)
            </p>
            <p className="text-muted-foreground">Muted text (Warm Gray)</p>
            <p className="text-accent">Accent text (Terracotta)</p>
            <p className="text-destructive">
              Destructive/error text (Muted Red)
            </p>
            <p className="text-success">Success text (Olive Green)</p>
          </div>
        </div>

        {/* Font Weights */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-muted-foreground">
            Font Weights
          </h4>
          <div className="space-y-2">
            <p className="font-normal">Normal weight text for body content</p>
            <p className="font-medium">Medium weight for emphasis and labels</p>
            <p className="font-semibold">Semibold for strong emphasis</p>
            <p className="font-bold">Bold for maximum impact</p>
          </div>
        </div>

        {/* Lists */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-muted-foreground">Lists</h4>
          <div className="space-y-4">
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Complimentary breakfast buffet</li>
              <li>24/7 concierge service</li>
              <li>High-speed WiFi throughout</li>
              <li>Access to wellness facilities</li>
            </ul>
            <ol className="list-decimal list-inside space-y-1 text-sm">
              <li>Select your dates and room type</li>
              <li>Review your booking details</li>
              <li>Complete secure payment</li>
              <li>Receive instant confirmation</li>
            </ol>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
