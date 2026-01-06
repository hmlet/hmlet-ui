import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card'

export function ImplementationGuide() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>📋 Color System Structure</CardTitle>
          <CardDescription>
            Semantic color tokens for consistent theming
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="text-sm font-medium mb-2">Light Mode Colors</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>
                • <strong>Primary:</strong> Warm Beige (#E6D3B1) - Main brand
                color
              </li>
              <li>
                • <strong>Accent:</strong> Terracotta (#C26A4A) - CTA buttons
              </li>
              <li>
                • <strong>Background:</strong> Soft Ivory (#FAF7F2) - Page
                background
              </li>
              <li>
                • <strong>Card:</strong> White (#FFFFFF) - Content cards
              </li>
              <li>
                • <strong>Border:</strong> Light Sand (#E5DED3) - Dividers
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-medium mb-2">Dark Mode Colors</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>
                • <strong>Background:</strong> Deep Warm Brown (#1F1B16)
              </li>
              <li>
                • <strong>Card:</strong> Warm Dark Surface (#2A241D)
              </li>
              <li>
                • <strong>Primary:</strong> Warm Beige (#E6D3B1) - Maintains
                warmth
              </li>
              <li>
                • <strong>Border:</strong> Dark Border (#3A332A)
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>🎨 Using the Theme</CardTitle>
          <CardDescription>
            How to apply colors in your components
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="text-sm font-medium mb-2">Tailwind Classes</h4>
            <div className="space-y-2 text-sm font-mono bg-muted p-3 rounded-lg">
              <div>bg-background text-foreground</div>
              <div>bg-card text-card-foreground</div>
              <div>bg-primary text-primary-foreground</div>
              <div>bg-accent text-accent-foreground</div>
              <div>bg-success text-success-foreground</div>
              <div>border-border</div>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-medium mb-2">CSS Variables</h4>
            <div className="space-y-2 text-sm font-mono bg-muted p-3 rounded-lg">
              <div>background: var(--background);</div>
              <div>color: var(--foreground);</div>
              <div>border-color: var(--border);</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>🔧 Component Variants</CardTitle>
          <CardDescription>Available button and form variants</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="text-sm font-medium mb-2">Button Variants</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>
                • <strong>default:</strong> Terracotta accent for primary CTAs
              </li>
              <li>
                • <strong>secondary:</strong> Taupe for secondary actions
              </li>
              <li>
                • <strong>outline:</strong> Bordered style for subtle actions
              </li>
              <li>
                • <strong>ghost:</strong> Transparent for minimal UI
              </li>
              <li>
                • <strong>destructive:</strong> Muted red for delete actions
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-medium mb-2">Sizes</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• sm, default, lg, icon</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>✅ Best Practices</CardTitle>
          <CardDescription>
            Guidelines for optimal implementation
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="text-sm font-medium mb-2">Do's</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>✓ Use accent color sparingly for important CTAs</li>
              <li>✓ Maintain white cards on ivory background</li>
              <li>✓ Test both light and dark modes</li>
              <li>✓ Use semantic color names (success, warning)</li>
              <li>✓ Pair with natural imagery and textures</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-medium mb-2">Don'ts</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>✗ Don't overuse the terracotta accent</li>
              <li>✗ Avoid pure black or pure white text</li>
              <li>✗ Don't mix with bright neon colors</li>
              <li>✗ Avoid low contrast combinations</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle>🚀 Quick Start</CardTitle>
          <CardDescription>
            Get started with the UI library in minutes
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="text-sm font-medium mb-2">1. Import Components</h4>
            <div className="bg-muted p-3 rounded-lg text-sm font-mono">
              import &#123; Button &#125; from "./components/ui/button";
              <br />
              import &#123; Card &#125; from "./components/ui/card";
              <br />
              import &#123; Input &#125; from "./components/ui/input";
            </div>
          </div>
          <div>
            <h4 className="text-sm font-medium mb-2">2. Use the Components</h4>
            <div className="bg-muted p-3 rounded-lg text-sm font-mono">
              &lt;Card&gt;
              <br />
              &nbsp;&nbsp;&lt;CardHeader&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;CardTitle&gt;Book Your
              Stay&lt;/CardTitle&gt;
              <br />
              &nbsp;&nbsp;&lt;/CardHeader&gt;
              <br />
              &nbsp;&nbsp;&lt;CardContent&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;Button&gt;Reserve Now&lt;/Button&gt;
              <br />
              &nbsp;&nbsp;&lt;/CardContent&gt;
              <br />
              &lt;/Card&gt;
            </div>
          </div>
          <div>
            <h4 className="text-sm font-medium mb-2">3. Toggle Dark Mode</h4>
            <div className="bg-muted p-3 rounded-lg text-sm font-mono">
              document.documentElement.classList.toggle('dark');
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
