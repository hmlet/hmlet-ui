import React from 'react'
import {VStack, HStack, Box, Divider} from './layout'

/**
 * Layout Component System - Complete Documentation
 */

export function LayoutGuide() {
  return (
    <VStack gap="6">
      <div>
        <h4 className="mb-2">Layout Component System</h4>
        <p className="text-muted-foreground text-body-sm">
          A comprehensive set of composable layout primitives for building
          modern applications.
        </p>
      </div>

      <Divider />

      {/* Core Philosophy */}
      <Section title="Core Philosophy">
        <VStack gap="3">
          <Principle
            title="Layout is structural, not decorative"
            description="Layout components handle spacing, sizing, and positioning—not colors or borders"
          />
          <Principle
            title="Composition over configuration"
            description="Build complex layouts by nesting simple components rather than complex props"
          />
          <Principle
            title="Spacing is explicit and token-driven"
            description="All spacing uses design tokens (4, 8, 12, 16, 24, 32, 48, 64, 80px)"
          />
          <Principle
            title="Predictable and nestable"
            description="Every component behaves consistently and can be nested without side effects"
          />
        </VStack>
      </Section>

      <Divider />

      {/* Component Categories */}
      <Section title="Component Categories">
        <VStack gap="4">
          <Category
            name="Primitives"
            components={[
              'Box',
              'Stack',
              'HStack',
              'VStack',
              'Inline',
              'Spacer',
            ]}
            description="Basic building blocks for all layouts"
          />
          <Category
            name="Grid System"
            components={['Grid', 'GridItem']}
            description="Two-dimensional layouts with precise control"
          />
          <Category
            name="Containers"
            components={['Container', 'Section']}
            description="Page-level structure and width constraints"
          />
          <Category
            name="Utilities"
            components={['Center', 'AspectRatio', 'Divider', 'Wrap', 'Bleed']}
            description="Specialized layout helpers"
          />
        </VStack>
      </Section>

      <Divider />

      {/* Quick Reference */}
      <Section title="Quick Reference">
        <div className="grid gap-4 md:grid-cols-2">
          <ComponentRef
            name="Box"
            usage="<Box padding='4' width='full'>Content</Box>"
            purpose="Generic container with padding and sizing"
          />
          <ComponentRef
            name="Stack"
            usage="<Stack direction='vertical' gap='4'>...</Stack>"
            purpose="One-dimensional flow layout"
          />
          <ComponentRef
            name="HStack"
            usage="<HStack gap='4' justify='space-between'>...</HStack>"
            purpose="Horizontal layout (Stack shorthand)"
          />
          <ComponentRef
            name="VStack"
            usage="<VStack gap='6' align='start'>...</VStack>"
            purpose="Vertical layout (Stack shorthand)"
          />
          <ComponentRef
            name="Inline"
            usage="<Inline gap='2' align='center'><Icon /><span>Text</span></Inline>"
            purpose="Text-adjacent content"
          />
          <ComponentRef
            name="Spacer"
            usage="<HStack><div>Left</div><Spacer /><div>Right</div></HStack>"
            purpose="Flexible space in flex containers"
          />
          <ComponentRef
            name="Grid"
            usage="<Grid columns='3' gap='6'>...</Grid>"
            purpose="Two-dimensional grid layout"
          />
          <ComponentRef
            name="GridItem"
            usage="<GridItem colSpan='8'>...</GridItem>"
            purpose="Grid child with spanning control"
          />
          <ComponentRef
            name="Container"
            usage="<Container maxWidth='lg'>...</Container>"
            purpose="Center and constrain content width"
          />
          <ComponentRef
            name="Section"
            usage="<Section paddingY='12'>...</Section>"
            purpose="Page section with vertical rhythm"
          />
          <ComponentRef
            name="Center"
            usage="<Center height='full'>Content</Center>"
            purpose="Horizontal and vertical centering"
          />
          <ComponentRef
            name="AspectRatio"
            usage="<AspectRatio ratio='16/9'><img /></AspectRatio>"
            purpose="Fixed width-to-height ratios"
          />
          <ComponentRef
            name="Divider"
            usage="<Divider spacing='4' />"
            purpose="Visual content separator"
          />
          <ComponentRef
            name="Wrap"
            usage="<Wrap gap='2'><Badge />...</Wrap>"
            purpose="Wrapping horizontal layout"
          />
          <ComponentRef
            name="Bleed"
            usage="<Bleed horizontal><img /></Bleed>"
            purpose="Escape parent padding"
          />
        </div>
      </Section>

      <Divider />

      {/* Common Patterns */}
      <Section title="Common Patterns">
        <VStack gap="4">
          <Pattern
            title="Header with Navigation"
            code={`<HStack gap="6" align="center">
  <Logo />
  <Spacer />
  <HStack gap="4">
    <NavLink />
    <NavLink />
    <Button />
  </HStack>
</HStack>`}
          />
          <Pattern
            title="Page Layout"
            code={`<Section paddingY="12">
  <Container maxWidth="xl">
    <VStack gap="8">
      <h2>Title</h2>
      <Grid columns="3" gap="6">
        <Card />
        <Card />
        <Card />
      </Grid>
    </VStack>
  </Container>
</Section>`}
          />
          <Pattern
            title="Dashboard Layout"
            code={`<Grid columns="12" gap="6">
  <GridItem colSpan="8">
    <MainContent />
  </GridItem>
  <GridItem colSpan="4">
    <Sidebar />
  </GridItem>
</Grid>`}
          />
          <Pattern
            title="Property Card"
            code={`<VStack gap="4">
  <AspectRatio ratio="16/9">
    <img />
  </AspectRatio>
  <VStack gap="2">
    <h6>Title</h6>
    <Inline gap="2">
      <Icon />
      <span>Location</span>
    </Inline>
  </VStack>
</VStack>`}
          />
        </VStack>
      </Section>

      <Divider />

      {/* Spacing Tokens */}
      <Section title="Spacing Scale">
        <p className="text-body-sm text-muted-foreground mb-4">
          All spacing values are derived from a 4px base unit
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {[
            {token: '1', px: '4px'},
            {token: '2', px: '8px'},
            {token: '3', px: '12px'},
            {token: '4', px: '16px'},
            {token: '6', px: '24px'},
            {token: '8', px: '32px'},
            {token: '12', px: '48px'},
            {token: '16', px: '64px'},
            {token: '20', px: '80px'},
          ].map(spacing => (
            <div
              key={spacing.token}
              className="border border-border rounded-lg p-3 text-center"
            >
              <div className="font-mono text-body-sm font-semibold mb-1">
                {spacing.token}
              </div>
              <div className="text-body-xs text-muted-foreground">
                {spacing.px}
              </div>
              <div
                className="mt-2 bg-primary/20 h-2 rounded"
                style={{width: spacing.px}}
              />
            </div>
          ))}
        </div>
      </Section>

      <Divider />

      {/* Best Practices */}
      <Section title="Best Practices">
        <VStack gap="3">
          <BestPractice
            do="Use Stack/HStack/VStack for directional flow"
            dont="Use manual flexbox with custom gap values"
          />
          <BestPractice
            do="Use Grid for two-dimensional layouts"
            dont="Nest multiple levels of flex containers"
          />
          <BestPractice
            do="Use spacing tokens (gap='4', padding='6')"
            dont="Use arbitrary spacing values (gap='15px')"
          />
          <BestPractice
            do="Use Container for readable content width"
            dont="Set max-width manually on every section"
          />
          <BestPractice
            do="Use Spacer to push elements apart"
            dont="Use empty divs or margin-left: auto"
          />
          <BestPractice
            do="Use AspectRatio for media content"
            dont="Manually calculate padding-bottom hacks"
          />
        </VStack>
      </Section>

      <Divider />

      {/* Import Guide */}
      <Section title="Import Guide">
        <div className="bg-card border border-border rounded-lg p-4">
          <pre className="text-body-sm font-mono overflow-x-auto">
            <code>{`// Import all layout components
import {
  Box,
  Stack,
  HStack,
  VStack,
  Inline,
  Spacer,
  Grid,
  GridItem,
  Container,
  Section,
  Center,
  AspectRatio,
  Divider,
  Wrap,
  Bleed,
} from './components/layout';

// Or import individually
import { VStack } from './components/layout/vstack';
import { Grid } from './components/layout/grid';`}</code>
          </pre>
        </div>
      </Section>
    </VStack>
  )
}

// Helper Components
function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <VStack gap="3">
      <h5>{title}</h5>
      {children}
    </VStack>
  )
}

function Principle({title, description}: {title: string; description: string}) {
  return (
    <Box padding="3" className="bg-muted/30 rounded-lg">
      <p className="font-medium text-body-sm mb-1">{title}</p>
      <p className="text-body-sm text-muted-foreground">{description}</p>
    </Box>
  )
}

function Category({
  name,
  components,
  description,
}: {
  name: string
  components: string[]
  description: string
}) {
  return (
    <div className="border border-border rounded-lg p-4">
      <HStack gap="4" align="start">
        <VStack gap="1" className="flex-1">
          <p className="font-semibold">{name}</p>
          <p className="text-body-sm text-muted-foreground">{description}</p>
        </VStack>
        <div className="flex flex-wrap gap-2">
          {components.map(comp => (
            <code
              key={comp}
              className="px-2 py-1 bg-primary/10 text-primary rounded text-body-xs font-mono"
            >
              {comp}
            </code>
          ))}
        </div>
      </HStack>
    </div>
  )
}

function ComponentRef({
  name,
  usage,
  purpose,
}: {
  name: string
  usage: string
  purpose: string
}) {
  return (
    <div className="border border-border rounded-lg p-4">
      <VStack gap="2">
        <code className="text-body-sm font-semibold text-primary">{name}</code>
        <p className="text-body-xs text-muted-foreground">{purpose}</p>
        <pre className="bg-muted/30 p-2 rounded text-body-xs overflow-x-auto">
          <code>{usage}</code>
        </pre>
      </VStack>
    </div>
  )
}

function Pattern({title, code}: {title: string; code: string}) {
  return (
    <div className="border border-border rounded-lg p-4">
      <VStack gap="3">
        <p className="font-medium text-body-sm">{title}</p>
        <pre className="bg-muted/30 p-3 rounded text-body-xs overflow-x-auto">
          <code>{code}</code>
        </pre>
      </VStack>
    </div>
  )
}

function BestPractice({do: doText, dont}: {do: string; dont: string}) {
  return (
    <HStack
      gap="4"
      align="start"
      className="border border-border rounded-lg p-3"
    >
      <div className="flex-1">
        <HStack gap="2" align="start">
          <span className="text-success font-semibold text-body-sm shrink-0">
            ✓ Do:
          </span>
          <p className="text-body-sm">{doText}</p>
        </HStack>
      </div>
      <div className="flex-1">
        <HStack gap="2" align="start">
          <span className="text-destructive font-semibold text-body-sm shrink-0">
            ✗ Don't:
          </span>
          <p className="text-body-sm">{dont}</p>
        </HStack>
      </div>
    </HStack>
  )
}
