# Layout Component System

A comprehensive, production-ready layout component library for React
applications. Inspired by best practices from Chakra UI, Radix UI, Tailwind,
MUI, Carbon Design System, Shopify Polaris, and SwiftUI.

## 🎯 Philosophy

### Core Principles

1. **Layout is structural, not decorative** - Layout components handle spacing,
   sizing, and positioning—not colors or borders
2. **Composition over configuration** - Build complex layouts by nesting simple
   components
3. **Spacing is explicit and token-driven** - All spacing uses design tokens (4,
   8, 12, 16, 24, 32, 48, 64, 80px)
4. **Predictable and nestable** - Components behave consistently and can be
   nested without side effects

### Design Goals

- Cover 90% of layout use cases without over-abstraction
- Map directly to CSS concepts (flexbox, grid)
- Easy to learn and teach
- Type-safe with full TypeScript support
- Accessible by default

## 📦 Components

## 📘 Storybook

Layout stories are organized under their own folder:

- `src/storybook/layout` (one `.stories.tsx` per layout component)

Run Storybook with:

```bash
pnpm storybook
```

### Primitives

#### Box

The most basic layout building block. A generic container with padding, sizing,
and display control.

```tsx
<Box padding="4" width="full">
  Content
</Box>
```

**Props:**

- `padding`: none | 1 | 2 | 3 | 4 | 6 | 8 | 12 | 16 | 20
- `paddingX`, `paddingY`: Same as padding
- `width`: auto | full | fit | screen
- `height`: auto | full | fit | screen
- `display`: block | inline | inline-block | flex | inline-flex | grid

#### Stack

One-dimensional layout for managing spacing between children.

```tsx
<Stack direction="vertical" gap="4" align="start">
  <div>Item 1</div>
  <div>Item 2</div>
</Stack>
```

**Props:**

- `direction`: vertical | horizontal
- `gap`: 0 | 1 | 2 | 3 | 4 | 6 | 8 | 12 | 16 | 20
- `align`: start | center | end | stretch | baseline
- `justify`: start | center | end | space-between | space-around | space-evenly
- `wrap`: nowrap | wrap | wrap-reverse

#### HStack

Horizontal Stack abstraction for better ergonomics.

```tsx
<HStack gap="4" justify="space-between">
  <div>Left</div>
  <div>Right</div>
</HStack>
```

**Props:** Same as Stack (except `direction`)

#### VStack

Vertical Stack abstraction for vertical rhythm.

```tsx
<VStack gap="6" align="start">
  <h2>Title</h2>
  <p>Content</p>
</VStack>
```

**Props:** Same as Stack (except `direction`)

#### Inline

Horizontal layout optimized for text-adjacent content.

```tsx
<Inline gap="2" align="center">
  <Icon />
  <span>Label</span>
</Inline>
```

**Props:**

- `gap`: 0 | 1 | 2 | 3 | 4 | 6
- `align`: start | center | end | baseline

#### Spacer

Flexible space that expands to fill available space.

```tsx
<HStack>
  <div>Left</div>
  <Spacer />
  <div>Right (pushed to end)</div>
</HStack>
```

### Grid System

#### Grid

Two-dimensional layout based on CSS Grid.

```tsx
<Grid columns="3" gap="6">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Grid>
```

**Props:**

- `columns`: 1-12
- `gap`: 0 | 1 | 2 | 3 | 4 | 6 | 8 | 12 | 16 | 20
- `autoFlow`: row | column | dense
- `alignItems`: start | center | end | stretch
- `justifyItems`: start | center | end | stretch

#### GridItem

Child placement controller for Grid.

```tsx
<Grid columns="12">
  <GridItem colSpan="8">Main content</GridItem>
  <GridItem colSpan="4">Sidebar</GridItem>
</Grid>
```

**Props:**

- `colSpan`: 1-12 | full
- `rowSpan`: 1-6 | full
- `alignSelf`: auto | start | center | end | stretch
- `justifySelf`: auto | start | center | end | stretch

### Containers

#### Container

Centers and constrains content width.

```tsx
<Container maxWidth="lg" padding="4">
  <p>Centered, constrained content</p>
</Container>
```

**Props:**

- `maxWidth`: sm | md | lg | xl | 2xl | full
- `padding`: none | 4 | 6 | 8

#### Section

Page-level vertical grouping component.

```tsx
<Section paddingY="12" background="subtle">
  <Container>
    <h2>Section Title</h2>
  </Container>
</Section>
```

**Props:**

- `paddingY`: 6 | 8 | 12 | 16 | 20
- `background`: none | default | subtle | card | primary | secondary

### Utilities

#### Center

Centers content both horizontally and vertically.

```tsx
<Center height="full">
  <div>Centered content</div>
</Center>
```

**Props:**

- `inline`: boolean
- `height`: auto | full | screen

#### AspectRatio

Preserves fixed width-to-height ratios.

```tsx
<AspectRatio ratio="16/9">
  <img src="..." alt="..." className="object-cover w-full h-full" />
</AspectRatio>
```

**Props:**

- `ratio`: 1/1 | 4/3 | 16/9 | 21/9 | 3/4 | 9/16

#### Divider

Structural separator between content blocks.

```tsx
<VStack gap="0">
  <div>Section 1</div>
  <Divider spacing="4" />
  <div>Section 2</div>
</VStack>
```

**Props:**

- `orientation`: horizontal | vertical
- `thickness`: 1 | 2
- `spacing`: none | 2 | 4 | 6

#### Wrap

Wrapping horizontal layout.

```tsx
<Wrap gap="2">
  <Badge>Tag 1</Badge>
  <Badge>Tag 2</Badge>
  <Badge>Tag 3</Badge>
</Wrap>
```

**Props:**

- `gap`: 0 | 1 | 2 | 3 | 4 | 6
- `align`: start | center | end | stretch | baseline
- `justify`: start | center | end | space-between

#### Bleed

Allows content to escape parent padding.

```tsx
<Container padding="4">
  <p>Contained content</p>
  <Bleed horizontal>
    <img src="..." alt="Full-width image" />
  </Bleed>
</Container>
```

**Props:**

- `horizontal`: boolean
- `vertical`: boolean
- `all`: boolean

## 🚀 Quick Start

### Installation

Components are located in `/src/app/components/layout/`

### Import

```tsx
// Import all components
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
} from './components/layout'

// Or import individually
import {VStack} from './components/layout/vstack'
import {Grid} from './components/layout/grid'
```

## 📚 Common Patterns

### Header with Navigation

```tsx
<HStack gap="6" align="center">
  <Logo />
  <Spacer />
  <HStack gap="4">
    <NavLink />
    <NavLink />
    <Button />
  </HStack>
</HStack>
```

### Page Layout

```tsx
<Section paddingY="12">
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
</Section>
```

### Dashboard Layout

```tsx
<Grid columns="12" gap="6">
  <GridItem colSpan="8">
    <MainContent />
  </GridItem>
  <GridItem colSpan="4">
    <Sidebar />
  </GridItem>
</Grid>
```

### Property Card

```tsx
<VStack gap="4">
  <AspectRatio ratio="16/9">
    <img src="..." />
  </AspectRatio>
  <VStack gap="2">
    <h6>Title</h6>
    <Inline gap="2">
      <Icon />
      <span>Location</span>
    </Inline>
  </VStack>
</VStack>
```

## 📏 Spacing Scale

All spacing values are derived from a **4px base unit**:

| Token | Value |
| ----- | ----- |
| 1     | 4px   |
| 2     | 8px   |
| 3     | 12px  |
| 4     | 16px  |
| 6     | 24px  |
| 8     | 32px  |
| 12    | 48px  |
| 16    | 64px  |
| 20    | 80px  |

## ✅ Best Practices

### Do's ✓

- Use Stack/HStack/VStack for directional flow
- Use Grid for two-dimensional layouts
- Use spacing tokens (gap='4', padding='6')
- Use Container for readable content width
- Use Spacer to push elements apart
- Use AspectRatio for media content

### Don'ts ✗

- Don't use manual flexbox with custom gap values
- Don't nest multiple levels of flex containers (use Grid instead)
- Don't use arbitrary spacing values (gap='15px')
- Don't set max-width manually on every section
- Don't use empty divs or margin-left: auto
- Don't manually calculate padding-bottom hacks

## 🎨 Integration with Design System

This layout system integrates seamlessly with your existing design system:

- **Colors**: Primary navy (#251F42), Secondary coral (#FF7960)
- **Typography**: IBM Plex Serif (headings), Mulish (body)
- **Spacing**: Follows your design token system
- **Accessibility**: WCAG compliant, keyboard navigation
- **Dark Mode**: Full support with automatic theme switching

## 📖 Examples

See complete examples in:

- `/src/app/components/LayoutShowcase.tsx` - All components with examples
- `/src/app/components/LayoutExamples.tsx` - Real-world application layouts
- `/src/app/components/LayoutGuide.tsx` - Complete documentation

## 🏗️ Architecture

### Component Organization

```
/src/app/components/layout/
├── box.tsx              # Primitive
├── stack.tsx            # Primitive
├── hstack.tsx           # Primitive
├── vstack.tsx           # Primitive
├── inline.tsx           # Primitive
├── spacer.tsx           # Primitive
├── grid.tsx             # Grid System
├── grid-item.tsx        # Grid System
├── container.tsx        # Container
├── section.tsx          # Container
├── center.tsx           # Utility
├── aspect-ratio.tsx     # Utility
├── divider.tsx          # Utility
├── wrap.tsx             # Utility
├── bleed.tsx            # Utility
└── index.ts             # Exports
```

### Technology Stack

- **React 18.3+** - Component library
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling foundation
- **class-variance-authority** - Variant management
- **CSS Custom Properties** - Design tokens

## 🤝 Contributing

When adding new layout components:

1. Follow the existing pattern and naming conventions
2. Use `cva` for variant management
3. Export from `index.ts`
4. Add documentation and examples
5. Ensure accessibility (ARIA attributes, keyboard navigation)
6. Test in both light and dark modes

## 📄 License

Part of the Figma Design System UI Library for booking apps, boutique hotels,
and premium co-living spaces.

---

**Built with ❤️ for modern, scalable applications**
