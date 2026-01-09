import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card'
import {Typography} from './ui/typography'

export function TypographyShowcase() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Typography System</CardTitle>
        <CardDescription>
          IBM Plex Serif for headings • Mulish for body text • Japanese support
          with Noto fonts
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        {/* Headings - IBM Plex Serif */}
        <div>
          <h4 className="mb-4 text-sm font-medium text-muted-foreground">
            Headings - IBM Plex Serif
          </h4>
          <div className="space-y-4">
            <div className="flex items-baseline gap-4 border-b border-border pb-3">
              <span className="text-xs text-muted-foreground min-w-16">
                70px
              </span>
              <Typography variant="h1">Display Heading</Typography>
            </div>
            <div className="flex items-baseline gap-4 border-b border-border pb-3">
              <span className="text-xs text-muted-foreground min-w-16">
                56px
              </span>
              <Typography variant="h2">H2 Heading</Typography>
            </div>
            <div className="flex items-baseline gap-4 border-b border-border pb-3">
              <span className="text-xs text-muted-foreground min-w-16">
                40px
              </span>
              <Typography variant="h3">H3 Heading</Typography>
            </div>
            <div className="flex items-baseline gap-4 border-b border-border pb-3">
              <span className="text-xs text-muted-foreground min-w-16">
                28px
              </span>
              <Typography variant="h4">H4 Heading</Typography>
            </div>
            <div className="flex items-baseline gap-4 border-b border-border pb-3">
              <span className="text-xs text-muted-foreground min-w-16">
                24px
              </span>
              <Typography variant="h5">H5 Heading</Typography>
            </div>
          </div>
        </div>

        {/* Body Text - Mulish */}
        <div>
          <h4 className="mb-4 text-sm font-medium text-muted-foreground">
            Body Text - Mulish
          </h4>
          <div className="space-y-3">
            <div className="flex items-start gap-4">
              <span className="text-xs text-muted-foreground min-w-16 mt-1">
                52px
              </span>
              <Typography variant="display-xl">
                Display XL - Premium property listing title
              </Typography>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-xs text-muted-foreground min-w-16 mt-1">
                32px
              </span>
              <Typography variant="display-lg">
                Display Large - Section headings and hero text
              </Typography>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-xs text-muted-foreground min-w-16 mt-1">
                28px
              </span>
              <Typography variant="display-md">
                Display Medium - Sub-section titles
              </Typography>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-xs text-muted-foreground min-w-16 mt-1">
                24px
              </span>
              <Typography variant="body-xl">
                Body XL - Emphasis text and callouts
              </Typography>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-xs text-muted-foreground min-w-16 mt-1">
                20px
              </span>
              <Typography variant="body-lg">
                Body Large - Feature descriptions and highlights
              </Typography>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-xs text-muted-foreground min-w-16 mt-1">
                18px
              </span>
              <Typography variant="body-md">
                Body Medium - Secondary content and descriptions
              </Typography>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-xs text-muted-foreground min-w-16 mt-1">
                16px
              </span>
              <Typography variant="body-base">
                Body Base - Default body text for paragraphs and content
              </Typography>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-xs text-muted-foreground min-w-16 mt-1">
                14px
              </span>
              <Typography variant="body-sm">
                Body Small - Labels, captions, and helper text (140% line
                height)
              </Typography>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-xs text-muted-foreground min-w-16 mt-1">
                12px
              </span>
              <Typography variant="body-xs">
                Body XSmall - Fine print and metadata (140% line height)
              </Typography>
            </div>
          </div>
        </div>

        {/* Font Weights */}
        <div>
          <h4 className="mb-4 text-sm font-medium text-muted-foreground">
            Font Weights - Mulish
          </h4>
          <div className="space-y-2">
            <p className="font-[400] font-sans">
              Regular (400) - Default body text weight
            </p>
            <p className="font-[500] font-sans">
              Medium (500) - Labels and emphasis
            </p>
            <p className="font-[600] font-sans">
              SemiBold (600) - Buttons and strong emphasis
            </p>
            <p className="font-[700] font-sans">
              Bold (700) - Headings and strong callouts
            </p>
          </div>
        </div>

        {/* Japanese Typography */}
        <div>
          <h4 className="mb-4 text-sm font-medium text-muted-foreground">
            Japanese Typography
          </h4>
          <div className="space-y-3">
            <div className="border-b border-border pb-3">
              <p className="text-xs text-muted-foreground mb-2">
                Heading - Noto Serif JP (5% letter spacing, 160% line height)
              </p>
              <h3
                className="text-[28px] tracking-[0.05em] leading-[1.6]"
                style={{fontFamily: "'Noto Serif JP', serif"}}
              >
                プレミアム物件のタイトル
              </h3>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-2">
                Body - Noto Sans JP (160% line height)
              </p>
              <p
                className="text-body-base leading-[1.6]"
                style={{fontFamily: "'Noto Sans JP', sans-serif"}}
              >
                高級マンションとサービスアパートメントのための完全なデザインシステム。モダンで洗練された体験を提供します。
              </p>
            </div>
          </div>
        </div>

        {/* Typography Usage Guide */}
        <div className="mt-8 rounded-lg border border-border bg-muted/30 p-6">
          <h4 className="mb-3 font-semibold">Typography Usage Guidelines</h4>
          <div className="grid gap-3 text-sm">
            <div className="flex items-start gap-2">
              <span className="font-medium min-w-32">Headings:</span>
              <span className="text-muted-foreground">
                Use IBM Plex Serif for all headings (H1-H6). 160% line height, 0
                letter spacing.
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-medium min-w-32">Body Text:</span>
              <span className="text-muted-foreground">
                Use Mulish for all body text, labels, and UI elements. 160% line
                height (140% for 14px and 12px).
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-medium min-w-32">Buttons:</span>
              <span className="text-muted-foreground">
                16px Mulish SemiBold (600)
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-medium min-w-32">Labels:</span>
              <span className="text-muted-foreground">
                16px Mulish Medium (500)
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-medium min-w-32">Japanese:</span>
              <span className="text-muted-foreground">
                Noto Serif JP for headings (5% letter spacing), Noto Sans JP for
                body.
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
