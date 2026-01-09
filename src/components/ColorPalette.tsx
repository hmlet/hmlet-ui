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
      category: 'Neutral Scale',
      swatches: [
        {
          name: 'Neutral 100',
          class: 'bg-[#FFFFFF] text-foreground border border-border',
          desc: '#FFFFFF',
        },
        {
          name: 'Neutral 200',
          class: 'bg-[#F2F2F2] text-foreground',
          desc: '#F2F2F2',
        },
        {
          name: 'Neutral 300',
          class: 'bg-[#CCCCCC] text-foreground',
          desc: '#CCCCCC',
        },
        {
          name: 'Neutral 400',
          class: 'bg-[#B3B3B3] text-foreground',
          desc: '#B3B3B3',
        },
        {
          name: 'Neutral 500',
          class: 'bg-[#999999] text-white',
          desc: '#999999',
        },
        {
          name: 'Neutral 600',
          class: 'bg-[#7F7F7F] text-white',
          desc: '#7F7F7F',
        },
        {
          name: 'Neutral 700',
          class: 'bg-[#505050] text-white',
          desc: '#505050',
        },
        {
          name: 'Neutral 800',
          class: 'bg-[#262626] text-white',
          desc: '#262626',
        },
        {
          name: 'Neutral 900',
          class: 'bg-[#1A1A1A] text-white',
          desc: '#1A1A1A',
        },
        {
          name: 'Neutral 1000',
          class: 'bg-[#000000] text-white',
          desc: '#000000',
        },
      ],
    },
    {
      category: 'Primary (Navy/Purple)',
      swatches: [
        {
          name: 'Primary 100',
          class: 'bg-[#F1F0F5] text-foreground',
          desc: '#F1F0F5',
        },
        {
          name: 'Primary 200',
          class: 'bg-[#CECAE0] text-foreground',
          desc: '#CECAE0',
        },
        {
          name: 'Primary 300',
          class: 'bg-[#767091] text-white',
          desc: '#767091',
        },
        {
          name: 'Primary 400',
          class: 'bg-primary text-primary-foreground',
          desc: '#251F42',
        },
        {
          name: 'Primary 500',
          class: 'bg-[#1F1C32] text-white',
          desc: '#1F1C32',
        },
      ],
    },
    {
      category: 'Secondary (Coral/Peach)',
      swatches: [
        {
          name: 'Secondary 100',
          class: 'bg-[#FFF0ED] text-foreground',
          desc: '#FFF0ED',
        },
        {
          name: 'Secondary 200',
          class: 'bg-[#FFE1DB] text-foreground',
          desc: '#FFE1DB',
        },
        {
          name: 'Secondary 300',
          class: 'bg-[#FFB2A3] text-white',
          desc: '#FFB2A3',
        },
        {
          name: 'Secondary 400 (Accent)',
          class: 'bg-secondary text-secondary-foreground',
          desc: '#FF7960',
        },
        {
          name: 'Secondary 500',
          class: 'bg-[#8A4D58] text-white',
          desc: '#8A4D58',
        },
      ],
    },
    {
      category: 'Success (Green)',
      swatches: [
        {
          name: 'Success 100',
          class: 'bg-[#E6F7F0] text-foreground',
          desc: '#E6F7F0',
        },
        {
          name: 'Success 200',
          class: 'bg-[#BEE8D7] text-foreground',
          desc: '#BEE8D7',
        },
        {
          name: 'Success 300',
          class: 'bg-[#70D4AC] text-white',
          desc: '#70D4AC',
        },
        {
          name: 'Success 400',
          class: 'bg-success text-success-foreground',
          desc: '#02B16B',
        },
        {
          name: 'Success 500',
          class: 'bg-[#1E6942] text-white',
          desc: '#1E6942',
        },
      ],
    },
    {
      category: 'Error (Red)',
      swatches: [
        {
          name: 'Error 100',
          class: 'bg-[#F7F0F0] text-foreground',
          desc: '#F7F0F0',
        },
        {
          name: 'Error 200',
          class: 'bg-[#E3CCCC] text-foreground',
          desc: '#E3CCCC',
        },
        {
          name: 'Error 300',
          class: 'bg-[#D99898] text-foreground',
          desc: '#D99898',
        },
        {
          name: 'Error 400',
          class: 'bg-destructive text-destructive-foreground',
          desc: '#D17171',
        },
        {name: 'Error 500', class: 'bg-[#C24F4F] text-white', desc: '#C24F4F'},
      ],
    },
    {
      category: 'Red Accent',
      swatches: [
        {
          name: 'Red 100',
          class: 'bg-[#F0D8CC] text-foreground',
          desc: '#F0D8CC',
        },
        {name: 'Red 500', class: 'bg-[#8A4D58] text-white', desc: '#8A4D58'},
      ],
    },
    {
      category: 'Ivory Background',
      swatches: [
        {
          name: 'Ivory 100',
          class: 'bg-[#FCFBF9] text-foreground border border-border',
          desc: '#FCFBF9',
        },
        {
          name: 'Ivory 200',
          class: 'bg-[#FAF5F0] text-foreground',
          desc: '#FAF5F0',
        },
      ],
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Color Palette - Production Design System</CardTitle>
        <CardDescription>
          Navy primary with coral secondary - exact color scales for
          real-estate/hospitality platform
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
                    className={`h-20 rounded-lg ${swatch.class} flex items-center justify-center text-xs font-medium transition-transform hover:scale-105`}
                  >
                    {swatch.desc}
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
                Headings, primary CTAs, links, focus states
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-medium min-w-24">Secondary:</span>
              <span className="text-muted-foreground">
                Secondary CTAs, accents, highlights, badges
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-medium min-w-24">Neutral:</span>
              <span className="text-muted-foreground">
                Text, backgrounds, dividers, borders, disabled states
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-medium min-w-24">Success:</span>
              <span className="text-muted-foreground">
                Confirmations, success messages, available status
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-medium min-w-24">Error:</span>
              <span className="text-muted-foreground">
                Error messages, destructive actions, validation errors
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-medium min-w-24">Ivory:</span>
              <span className="text-muted-foreground">
                Page backgrounds, content areas, subtle surfaces
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
