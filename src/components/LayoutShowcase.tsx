import React from 'react'
import {
  Box,
  HStack,
  VStack,
  Inline,
  Spacer,
  Grid,
  GridItem,
  Container,
  Section,
  Center,
  LayoutAspectRatio as AspectRatio,
  Divider,
  Wrap,
  Bleed,
} from './layout'
import {Button} from './ui/button'
import {Tabs, TabsContent, TabsList, TabsTrigger} from './ui/tabs'
import {LayoutGuide} from './LayoutGuide'
import {LayoutExamples} from './LayoutExamples'
import {Home, Settings, Mail, MapPin, Star} from 'lucide-react'

/**
 * Layout Component System Showcase
 *
 * Demonstrates all layout primitives with real-world examples
 */

export function LayoutShowcase() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <Section paddingY="8" background="primary">
        <Container maxWidth="xl">
          <VStack gap="4" align="center">
            <h2 className="text-white">Layout Component System</h2>
            <p className="text-white/90 text-center max-w-2xl">
              Production-ready layout primitives for building modern, scalable
              applications. Inspired by Chakra UI, Radix, Tailwind, MUI, and
              SwiftUI.
            </p>
          </VStack>
        </Container>
      </Section>

      {/* Tabs for different views */}
      <Section paddingY="8">
        <Container maxWidth="xl">
          <Tabs defaultValue="components">
            <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-8">
              <TabsTrigger value="components">Components</TabsTrigger>
              <TabsTrigger value="examples">Examples</TabsTrigger>
              <TabsTrigger value="guide">Guide</TabsTrigger>
            </TabsList>

            <TabsContent value="components">
              <AllComponentsShowcase />
            </TabsContent>

            <TabsContent value="examples">
              <LayoutExamples />
            </TabsContent>

            <TabsContent value="guide">
              <LayoutGuide />
            </TabsContent>
          </Tabs>
        </Container>
      </Section>
    </div>
  )
}

// All Components Showcase (moved from original)
function AllComponentsShowcase() {
  return (
    <VStack gap="16" className="py-12">
      {/* Box Primitive */}
      <ExampleSection
        title="Box - The Foundation"
        description="Basic building block with padding, sizing, and display control"
      >
        <HStack gap="4">
          <Box padding="4" className="bg-card border border-border rounded-lg">
            <p>Padded Box</p>
          </Box>
          <Box
            paddingX="6"
            paddingY="3"
            className="bg-primary text-primary-foreground rounded-lg"
          >
            <p>Custom Padding</p>
          </Box>
          <Box
            width="full"
            padding="4"
            className="bg-secondary/10 border border-secondary rounded-lg"
          >
            <p>Full Width Box</p>
          </Box>
        </HStack>
      </ExampleSection>

      {/* Stack Layouts */}
      <ExampleSection
        title="Stack - Directional Flow"
        description="Manages spacing and alignment in one direction"
      >
        <Grid columns="2" gap="6">
          <div className="border border-border rounded-lg p-4">
            <p className="text-body-sm font-medium mb-4">Vertical Stack</p>
            <VStack gap="3">
              <ItemCard>Item 1</ItemCard>
              <ItemCard>Item 2</ItemCard>
              <ItemCard>Item 3</ItemCard>
            </VStack>
          </div>

          <div className="border border-border rounded-lg p-4">
            <p className="text-body-sm font-medium mb-4">Horizontal Stack</p>
            <HStack gap="3">
              <ItemCard>Item A</ItemCard>
              <ItemCard>Item B</ItemCard>
              <ItemCard>Item C</ItemCard>
            </HStack>
          </div>
        </Grid>
      </ExampleSection>

      {/* Spacer Component */}
      <ExampleSection
        title="Spacer - Flexible Space"
        description="Pushes elements apart within flex containers"
      >
        <div className="border border-border rounded-lg p-4">
          <HStack gap="4">
            <Button variant="outline" size="sm">
              Left
            </Button>
            <Spacer />
            <Button variant="outline" size="sm">
              Right
            </Button>
          </HStack>
        </div>
      </ExampleSection>

      {/* Inline Layout */}
      <ExampleSection
        title="Inline - Text-Adjacent Content"
        description="For icons, badges, and inline metadata"
      >
        <VStack gap="4">
          <Inline gap="2" align="center">
            <Home className="size-4" />
            <span>Home Address</span>
          </Inline>
          <Inline gap="2" align="center">
            <Mail className="size-4" />
            <span>email@example.com</span>
          </Inline>
          <Inline gap="2" align="baseline">
            <Star className="size-4 text-warning" />
            <span className="text-body-sm">4.8 Rating</span>
            <span className="text-body-xs text-muted-foreground">
              (234 reviews)
            </span>
          </Inline>
        </VStack>
      </ExampleSection>

      {/* Grid Layout */}
      <ExampleSection
        title="Grid - Two-Dimensional Layout"
        description="Complex layouts with precise control"
      >
        <VStack gap="6">
          {/* Responsive Cards Grid */}
          <div className="border border-border rounded-lg p-4">
            <p className="text-body-sm font-medium mb-4">
              Card Grid (3 columns)
            </p>
            <Grid columns="3" gap="4">
              <PropertyCard />
              <PropertyCard />
              <PropertyCard />
            </Grid>
          </div>

          {/* Dashboard Layout */}
          <div className="border border-border rounded-lg p-4">
            <p className="text-body-sm font-medium mb-4">
              Dashboard Layout (12 col grid)
            </p>
            <Grid columns="12" gap="4">
              <GridItem colSpan="8">
                <DashboardCard title="Main Content" height="200px" />
              </GridItem>
              <GridItem colSpan="4">
                <DashboardCard title="Sidebar" height="200px" />
              </GridItem>
              <GridItem colSpan="4">
                <DashboardCard title="Widget 1" height="150px" />
              </GridItem>
              <GridItem colSpan="4">
                <DashboardCard title="Widget 2" height="150px" />
              </GridItem>
              <GridItem colSpan="4">
                <DashboardCard title="Widget 3" height="150px" />
              </GridItem>
            </Grid>
          </div>
        </VStack>
      </ExampleSection>

      {/* Container & Section */}
      <ExampleSection
        title="Container & Section - Page Structure"
        description="Width constraints and vertical rhythm"
      >
        <VStack
          gap="0"
          className="border border-border rounded-lg overflow-hidden"
        >
          <Section paddingY="8" background="subtle">
            <Container maxWidth="md" padding="4">
              <VStack gap="2" align="center">
                <h6>Centered Section</h6>
                <p className="text-center text-muted-foreground">
                  Container provides max-width constraints
                </p>
              </VStack>
            </Container>
          </Section>
          <Section paddingY="6" background="default">
            <Container maxWidth="lg" padding="4">
              <p className="text-center text-body-sm">
                Section with different background
              </p>
            </Container>
          </Section>
        </VStack>
      </ExampleSection>

      {/* Center Utility */}
      <ExampleSection
        title="Center - Centering Utility"
        description="Horizontal and vertical centering"
      >
        <div className="border border-border rounded-lg overflow-hidden">
          <Center height="auto" className="bg-muted/30 p-12">
            <VStack gap="3" align="center">
              <div className="bg-primary text-primary-foreground rounded-full p-4">
                <Settings className="size-6" />
              </div>
              <p className="font-medium">Centered Content</p>
            </VStack>
          </Center>
        </div>
      </ExampleSection>

      {/* AspectRatio */}
      <ExampleSection
        title="AspectRatio - Fixed Ratios"
        description="Maintain aspect ratios for media content"
      >
        <Grid columns="3" gap="4">
          <div>
            <p className="text-body-sm mb-2">1:1 (Square)</p>
            <AspectRatio
              ratio="1/1"
              className="bg-muted/30 border border-border rounded-lg"
            >
              <Center height="full">
                <p className="text-muted-foreground">1:1</p>
              </Center>
            </AspectRatio>
          </div>
          <div>
            <p className="text-body-sm mb-2">4:3</p>
            <AspectRatio
              ratio="4/3"
              className="bg-muted/30 border border-border rounded-lg"
            >
              <Center height="full">
                <p className="text-muted-foreground">4:3</p>
              </Center>
            </AspectRatio>
          </div>
          <div>
            <p className="text-body-sm mb-2">16:9 (Video)</p>
            <AspectRatio
              ratio="16/9"
              className="bg-muted/30 border border-border rounded-lg"
            >
              <Center height="full">
                <p className="text-muted-foreground">16:9</p>
              </Center>
            </AspectRatio>
          </div>
        </Grid>
      </ExampleSection>

      {/* Divider */}
      <ExampleSection
        title="Divider - Content Separation"
        description="Visual separators between sections"
      >
        <VStack gap="6">
          <div className="border border-border rounded-lg p-4">
            <VStack gap="0">
              <p>Section 1</p>
              <Divider spacing="4" />
              <p>Section 2</p>
              <Divider spacing="4" />
              <p>Section 3</p>
            </VStack>
          </div>

          <div className="border border-border rounded-lg p-4">
            <HStack gap="0">
              <Box padding="4">Left</Box>
              <Divider orientation="vertical" spacing="4" />
              <Box padding="4">Center</Box>
              <Divider orientation="vertical" spacing="4" />
              <Box padding="4">Right</Box>
            </HStack>
          </div>
        </VStack>
      </ExampleSection>

      {/* Wrap */}
      <ExampleSection
        title="Wrap - Wrapping Layout"
        description="Auto-wrapping for tags and filters"
      >
        <div className="border border-border rounded-lg p-4">
          <Wrap gap="2">
            {[
              'Luxury',
              'Modern',
              'Downtown',
              'Pet Friendly',
              'Pool',
              'Gym',
              'Parking',
              'WiFi',
              '24/7 Security',
              'Furnished',
              'Balcony',
              'City View',
            ].map(tag => (
              <span
                key={tag}
                className="px-3 py-1 bg-muted rounded-full text-body-sm"
              >
                {tag}
              </span>
            ))}
          </Wrap>
        </div>
      </ExampleSection>

      {/* Bleed */}
      <ExampleSection
        title="Bleed - Escape Padding"
        description="Full-width content within containers"
      >
        <div className="border border-border rounded-lg p-6 bg-muted/20">
          <VStack gap="4">
            <p>Content with padding</p>
            <Bleed horizontal>
              <div className="bg-primary text-primary-foreground p-4">
                <p className="text-center">Full-width bleed content</p>
              </div>
            </Bleed>
            <p>More content with padding</p>
          </VStack>
        </div>
      </ExampleSection>

      {/* Real-World Example: Header */}
      <ExampleSection
        title="Real-World: Header Component"
        description="Combining HStack + Spacer + Inline"
      >
        <div className="border border-border rounded-lg overflow-hidden">
          <Box
            paddingX="6"
            paddingY="4"
            className="bg-card border-b border-border"
          >
            <Container maxWidth="xl" padding="none">
              <HStack gap="6" align="center">
                <Inline gap="2" align="center">
                  <Home className="size-6 text-primary" />
                  <span className="font-semibold">BookingApp</span>
                </Inline>
                <Spacer />
                <HStack gap="6" align="center">
                  <Button variant="ghost" size="sm">
                    Explore
                  </Button>
                  <Button variant="ghost" size="sm">
                    About
                  </Button>
                  <Button variant="default" size="sm">
                    Sign In
                  </Button>
                </HStack>
              </HStack>
            </Container>
          </Box>
        </div>
      </ExampleSection>

      {/* Real-World Example: Property Card */}
      <ExampleSection
        title="Real-World: Property Listing Card"
        description="Complete composition example"
      >
        <Grid columns="2" gap="6">
          <PropertyListingCard />
          <PropertyListingCard />
        </Grid>
      </ExampleSection>
    </VStack>
  )
}

// Helper Components
function ExampleSection({
  title,
  description,
  children,
}: {
  title: string
  description: string
  children: React.ReactNode
}) {
  return (
    <VStack gap="4">
      <VStack gap="1">
        <h5>{title}</h5>
        <p className="text-muted-foreground text-body-sm">{description}</p>
      </VStack>
      {children}
    </VStack>
  )
}

function ItemCard({children}: {children: React.ReactNode}) {
  return (
    <div className="bg-card border border-border rounded-md px-4 py-2">
      <p className="text-body-sm">{children}</p>
    </div>
  )
}

function PropertyCard() {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      <AspectRatio ratio="4/3" className="bg-muted/30">
        <Center height="full">
          <Home className="size-8 text-muted-foreground" />
        </Center>
      </AspectRatio>
      <Box padding="3">
        <p className="font-medium text-body-sm">Property Name</p>
        <p className="text-body-xs text-muted-foreground">Location</p>
      </Box>
    </div>
  )
}

function DashboardCard({title, height}: {title: string; height: string}) {
  return (
    <div
      className="bg-card border border-border rounded-lg flex items-center justify-center"
      style={{height}}
    >
      <p className="text-body-sm text-muted-foreground">{title}</p>
    </div>
  )
}

function PropertyListingCard() {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
      {/* Image */}
      <AspectRatio ratio="16/9" className="bg-muted/30">
        <Center height="full">
          <Home className="size-12 text-muted-foreground" />
        </Center>
      </AspectRatio>

      {/* Content */}
      <Box padding="4">
        <VStack gap="3">
          {/* Title & Price */}
          <HStack gap="4" align="start">
            <VStack gap="1" className="flex-1">
              <h6>Luxury Downtown Apartment</h6>
              <Inline gap="1" align="baseline">
                <MapPin className="size-3 text-muted-foreground" />
                <span className="text-body-sm text-muted-foreground">
                  Downtown, City Center
                </span>
              </Inline>
            </VStack>
            <VStack gap="0" align="end">
              <p className="font-semibold text-secondary">$2,500</p>
              <span className="text-body-xs text-muted-foreground">/month</span>
            </VStack>
          </HStack>

          <Divider />

          {/* Features */}
          <HStack gap="4">
            <Inline gap="1" align="center">
              <span className="text-body-sm font-medium">3</span>
              <span className="text-body-sm text-muted-foreground">Beds</span>
            </Inline>
            <Inline gap="1" align="center">
              <span className="text-body-sm font-medium">2</span>
              <span className="text-body-sm text-muted-foreground">Baths</span>
            </Inline>
            <Inline gap="1" align="center">
              <span className="text-body-sm font-medium">1,200</span>
              <span className="text-body-sm text-muted-foreground">sq ft</span>
            </Inline>
          </HStack>

          {/* Tags */}
          <Wrap gap="2">
            <span className="px-2 py-1 bg-primary/10 text-primary rounded text-body-xs">
              Luxury
            </span>
            <span className="px-2 py-1 bg-primary/10 text-primary rounded text-body-xs">
              Modern
            </span>
            <span className="px-2 py-1 bg-primary/10 text-primary rounded text-body-xs">
              Pool
            </span>
          </Wrap>

          {/* Action */}
          <Button variant="secondary" size="sm" className="w-full">
            View Details
          </Button>
        </VStack>
      </Box>
    </div>
  )
}
