import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card'

export function ColorPalette() {
  const colors = [
    {
      category: 'Background & Surface',
      swatches: [
        {
          name: 'Background',
          class: 'bg-background text-foreground border border-border',
          token: 'bg-background',
        },
        {
          name: 'Card',
          class: 'bg-card text-card-foreground border border-border',
          token: 'bg-card',
        },
        {
          name: 'Popover',
          class: 'bg-popover text-popover-foreground border border-border',
          token: 'bg-popover',
        },
        {
          name: 'Muted',
          class: 'bg-muted text-muted-foreground',
          token: 'bg-muted',
        },
      ],
    },
    {
      category: 'Primary',
      swatches: [
        {
          name: 'Primary',
          class: 'bg-primary text-primary-foreground',
          token: 'bg-primary',
        },
        {
          name: 'Primary Dark',
          class: 'bg-primary-dark text-primary-foreground',
          token: 'bg-primary-dark',
        },
        {
          name: 'Primary Light',
          class:
            'bg-primary-light text-primary-foreground dark:text-primary-dark',
          token: 'bg-primary-light',
        },
        {
          name: 'Primary Lighter',
          class: 'bg-primary-lighter text-foreground',
          token: 'bg-primary-lighter',
        },
        {
          name: 'Primary Lightest',
          class: 'bg-primary-lightest text-foreground border border-border',
          token: 'bg-primary-lightest',
        },
      ],
    },
    {
      category: 'Secondary (Accent)',
      swatches: [
        {
          name: 'Secondary',
          class: 'bg-secondary text-secondary-foreground',
          token: 'bg-secondary',
        },
        {
          name: 'Secondary Dark',
          class: 'bg-secondary-dark text-secondary-foreground',
          token: 'bg-secondary-dark',
        },
        {
          name: 'Secondary Light',
          class: 'bg-secondary-light text-secondary-dark',
          token: 'bg-secondary-light',
        },
        {
          name: 'Secondary Lighter',
          class: 'bg-secondary-lighter text-foreground',
          token: 'bg-secondary-lighter',
        },
        {
          name: 'Secondary Lightest',
          class: 'bg-secondary-lightest text-foreground border border-border',
          token: 'bg-secondary-lightest',
        },
      ],
    },
    {
      category: 'Accent & CTA',
      swatches: [
        {
          name: 'Accent',
          class: 'bg-accent text-accent-foreground',
          token: 'bg-accent',
        },
        {
          name: 'Accent Hover',
          class: 'bg-accent-hover text-accent-foreground',
          token: 'bg-accent-hover',
        },
      ],
    },
    {
      category: 'Semantic - Success',
      swatches: [
        {
          name: 'Success',
          class: 'bg-success text-success-foreground',
          token: 'bg-success',
        },
        {
          name: 'Success Dark',
          class: 'bg-success-dark text-white',
          token: 'bg-success-dark',
        },
        {
          name: 'Success Light',
          class: 'bg-success-light text-success-dark',
          token: 'bg-success-light',
        },
        {
          name: 'Success Lighter',
          class: 'bg-success-lighter text-foreground',
          token: 'bg-success-lighter',
        },
        {
          name: 'Success Lightest',
          class: 'bg-success-lightest text-foreground border border-border',
          token: 'bg-success-lightest',
        },
      ],
    },
    {
      category: 'Semantic - Destructive / Error',
      swatches: [
        {
          name: 'Destructive',
          class: 'bg-destructive text-destructive-foreground',
          token: 'bg-destructive',
        },
        {
          name: 'Destructive Dark',
          class: 'bg-destructive-dark text-white',
          token: 'bg-destructive-dark',
        },
        {
          name: 'Destructive Light',
          class: 'bg-destructive-light text-destructive-dark',
          token: 'bg-destructive-light',
        },
        {
          name: 'Destructive Lighter',
          class: 'bg-destructive-lighter text-foreground',
          token: 'bg-destructive-lighter',
        },
        {
          name: 'Destructive Lightest',
          class: 'bg-destructive-lightest text-foreground border border-border',
          token: 'bg-destructive-lightest',
        },
      ],
    },
    {
      category: 'Semantic - Warning & Info',
      swatches: [
        {
          name: 'Warning',
          class: 'bg-warning text-warning-foreground',
          token: 'bg-warning',
        },
        {
          name: 'Info',
          class: 'bg-info text-info-foreground',
          token: 'bg-info',
        },
        {
          name: 'Info Light',
          class: 'bg-info-light text-info-dark',
          token: 'bg-info-light',
        },
        {
          name: 'Info Dark',
          class: 'bg-info-dark text-white',
          token: 'bg-info-dark',
        },
      ],
    },
    {
      category: 'UI Elements',
      swatches: [
        {
          name: 'Border',
          class: 'bg-border text-foreground',
          token: 'bg-border',
        },
        {
          name: 'Input',
          class: 'bg-input text-foreground',
          token: 'bg-input',
        },
        {
          name: 'Input Background',
          class: 'bg-input-background text-foreground border border-border',
          token: 'bg-input-background',
        },
        {
          name: 'Ring',
          class: 'bg-ring text-white',
          token: 'bg-ring',
        },
      ],
    },
    {
      category: 'Text Colors',
      swatches: [
        {
          name: 'Foreground',
          class: 'bg-foreground text-background',
          token: 'text-foreground',
        },
        {
          name: 'Muted Foreground',
          class: 'bg-muted-foreground text-background',
          token: 'text-muted-foreground',
        },
      ],
    },
    {
      category: 'Sidebar',
      swatches: [
        {
          name: 'Sidebar',
          class:
            'bg-sidebar text-sidebar-foreground border border-sidebar-border',
          token: 'bg-sidebar',
        },
        {
          name: 'Sidebar Primary',
          class: 'bg-sidebar-primary text-sidebar-primary-foreground',
          token: 'bg-sidebar-primary',
        },
        {
          name: 'Sidebar Accent',
          class: 'bg-sidebar-accent text-sidebar-accent-foreground',
          token: 'bg-sidebar-accent',
        },
      ],
    },
    {
      category: 'Chart Colors',
      swatches: [
        {
          name: 'Chart 1',
          class: 'bg-chart-1 text-background',
          token: 'bg-chart-1',
        },
        {
          name: 'Chart 2',
          class: 'bg-chart-2 text-white',
          token: 'bg-chart-2',
        },
        {
          name: 'Chart 3',
          class: 'bg-chart-3 text-white',
          token: 'bg-chart-3',
        },
        {
          name: 'Chart 4',
          class: 'bg-chart-4 text-white',
          token: 'bg-chart-4',
        },
        {
          name: 'Chart 5',
          class: 'bg-chart-5 text-background',
          token: 'bg-chart-5',
        },
      ],
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Color Palette - Theme Tokens</CardTitle>
        <CardDescription>
          Semantic color tokens that automatically adapt to light and dark
          themes. Toggle the theme to see the colors change.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {colors.map(category => (
          <div key={category.category}>
            <h4 className="mb-3 text-sm font-medium text-muted-foreground">
              {category.category}
            </h4>
            <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
              {category.swatches.map(swatch => (
                <div key={swatch.name} className="space-y-2">
                  <div
                    className={`h-20 rounded-lg ${swatch.class} flex items-center justify-center text-xs font-medium transition-transform hover:scale-105 shadow-sm`}
                  >
                    {swatch.token}
                  </div>
                  <p className="text-xs text-muted-foreground">{swatch.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Color Usage Intent */}
        <div className="mt-8 rounded-lg border border-border bg-muted/30 p-6">
          <h4 className="mb-3 font-semibold">Color Usage Intent</h4>
          <div className="grid gap-3 text-sm">
            <div className="flex items-start gap-2">
              <span className="font-medium min-w-24">Primary:</span>
              <span className="text-muted-foreground">
                Headings, primary buttons, links, focus states
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-medium min-w-24">Secondary:</span>
              <span className="text-muted-foreground">
                Secondary buttons, accents, highlights, badges
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-medium min-w-24">Accent:</span>
              <span className="text-muted-foreground">
                Call-to-action buttons, important interactive elements
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-medium min-w-24">Muted:</span>
              <span className="text-muted-foreground">
                Subtle backgrounds, disabled states, secondary text
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-medium min-w-24">Success:</span>
              <span className="text-muted-foreground">
                Confirmations, success messages, available status
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-medium min-w-24">Destructive:</span>
              <span className="text-muted-foreground">
                Error messages, destructive actions, validation errors
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-medium min-w-24">Warning:</span>
              <span className="text-muted-foreground">
                Caution states, pending actions, alerts
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-medium min-w-24">Info:</span>
              <span className="text-muted-foreground">
                Informational messages, tips, help content
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
