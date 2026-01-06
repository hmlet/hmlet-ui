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
      category: 'Primary Colors',
      swatches: [
        {
          name: 'Primary (Warm Beige)',
          class: 'bg-primary text-primary-foreground',
          desc: '#E6D3B1',
        },
        {
          name: 'Primary Dark (Sand Brown)',
          class: 'bg-[#C7B08A] text-white',
          desc: '#C7B08A',
        },
        {
          name: 'Primary Light (Cream)',
          class: 'bg-[#F4ECE1] text-foreground',
          desc: '#F4ECE1',
        },
      ],
    },
    {
      category: 'Accent & CTA',
      swatches: [
        {
          name: 'Accent (Terracotta)',
          class: 'bg-accent text-accent-foreground',
          desc: '#C26A4A',
        },
        {
          name: 'Accent Hover (Burnt Clay)',
          class: 'bg-[#A8563B] text-white',
          desc: '#A8563B',
        },
      ],
    },
    {
      category: 'Secondary',
      swatches: [
        {
          name: 'Secondary (Taupe)',
          class: 'bg-secondary text-secondary-foreground',
          desc: '#8B7E6A',
        },
      ],
    },
    {
      category: 'Semantic Colors',
      swatches: [
        {
          name: 'Success (Olive Green)',
          class: 'bg-success text-success-foreground',
          desc: '#6B8E4E',
        },
        {
          name: 'Destructive (Muted Red)',
          class: 'bg-destructive text-destructive-foreground',
          desc: '#B4533C',
        },
        {
          name: 'Warning (Warm Amber)',
          class: 'bg-warning text-warning-foreground',
          desc: '#D4A574',
        },
      ],
    },
    {
      category: 'Neutrals',
      swatches: [
        {
          name: 'Background (Soft Ivory)',
          class: 'bg-background text-foreground border border-border',
          desc: '#FAF7F2',
        },
        {
          name: 'Card (White)',
          class: 'bg-card text-card-foreground border border-border',
          desc: '#FFFFFF',
        },
        {
          name: 'Muted (Light Sand)',
          class: 'bg-muted text-muted-foreground',
          desc: '#E5DED3',
        },
      ],
    },
    {
      category: 'Text Colors',
      swatches: [
        {
          name: 'Foreground (Espresso)',
          class: 'bg-foreground text-background',
          desc: '#2E2A25',
        },
        {
          name: 'Muted Foreground (Warm Gray)',
          class: 'bg-muted-foreground text-white',
          desc: '#6B6258',
        },
      ],
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Color Palette</CardTitle>
        <CardDescription>
          Warm beige hospitality theme with light and dark mode support
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {colors.map(category => (
          <div key={category.category}>
            <h4 className="mb-3 text-sm font-medium text-muted-foreground">
              {category.category}
            </h4>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {category.swatches.map(swatch => (
                <div key={swatch.name} className="space-y-2">
                  <div
                    className={`h-20 rounded-lg ${swatch.class} flex items-center justify-center text-sm font-medium`}
                  >
                    {swatch.desc}
                  </div>
                  <p className="text-xs text-muted-foreground">{swatch.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
