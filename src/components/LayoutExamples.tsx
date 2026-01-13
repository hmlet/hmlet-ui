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
  LayoutAspectRatio as AspectRatio,
  Divider,
  Center,
} from './layout'
import {Button} from './ui/button'
import {Input} from './ui/input'
import {
  Home,
  Search,
  User,
  Menu,
  MapPin,
  Bed,
  Bath,
  Square,
  Star,
  Heart,
  Wifi,
  Coffee,
  Dumbbell,
  Car,
} from 'lucide-react'

/**
 * Real-World Layout Examples
 *
 * Production-ready layouts for booking/hospitality applications
 */

export function LayoutExamples() {
  return (
    <VStack gap="12" className="w-full">
      {/* Example 1: Property Listing Page */}
      <Example
        title="Property Listing Page"
        description="Complete page layout with header, filters, and property grid"
      >
        <PropertyListingPage />
      </Example>

      {/* Example 2: Property Detail Header */}
      <Example
        title="Property Detail Hero"
        description="Hero section with image gallery and key information"
      >
        <PropertyDetailHero />
      </Example>

      {/* Example 3: Search Bar */}
      <Example
        title="Search & Filters"
        description="Horizontal search interface with location, dates, and guests"
      >
        <SearchBar />
      </Example>

      {/* Example 4: Feature Grid */}
      <Example
        title="Amenities Grid"
        description="Grid layout for displaying property amenities"
      >
        <AmenitiesGrid />
      </Example>

      {/* Example 5: Booking Card */}
      <Example
        title="Booking Summary Card"
        description="Sticky booking card with pricing and CTA"
      >
        <BookingCard />
      </Example>

      {/* Example 6: Mobile App Header */}
      <Example
        title="Mobile Header"
        description="Responsive header for mobile applications"
      >
        <MobileHeader />
      </Example>
    </VStack>
  )
}

// Example Wrapper
function Example({
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
      <div className="border border-border rounded-lg overflow-hidden bg-background">
        {children}
      </div>
    </VStack>
  )
}

// Example 1: Property Listing Page
function PropertyListingPage() {
  return (
    <div className="w-full min-h-[600px] flex flex-col">
      {/* Header */}
      <Box paddingX="6" paddingY="4" className="bg-card border-b border-border">
        <Container maxWidth="xl" padding="none">
          <HStack gap="8" align="center">
            <Inline gap="2" align="center">
              <Home className="size-6 text-primary" />
              <span className="font-semibold text-body-lg">StayFinder</span>
            </Inline>
            <Spacer />
            <HStack gap="4" align="center">
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

      {/* Search Section */}
      <Section paddingY="8" background="subtle">
        <Container maxWidth="xl">
          <VStack gap="4" align="center">
            <h4>Find Your Perfect Stay</h4>
            <SearchBar />
          </VStack>
        </Container>
      </Section>

      {/* Results */}
      <Section paddingY="8">
        <Container maxWidth="xl">
          <VStack gap="6">
            <HStack gap="4" align="center">
              <p className="text-muted-foreground">234 properties found</p>
              <Spacer />
              <Button variant="outline" size="sm">
                Filters
              </Button>
            </HStack>

            <Grid columns="3" gap="6">
              <PropertyCard />
              <PropertyCard />
              <PropertyCard />
              <PropertyCard />
              <PropertyCard />
              <PropertyCard />
            </Grid>
          </VStack>
        </Container>
      </Section>
    </div>
  )
}

// Example 2: Property Detail Hero
function PropertyDetailHero() {
  return (
    <Section paddingY="8">
      <Container maxWidth="xl">
        <VStack gap="6">
          {/* Title and Actions */}
          <HStack gap="4" align="start">
            <VStack gap="2" className="flex-1">
              <h3>Luxury Downtown Loft</h3>
              <Inline gap="3" align="center">
                <Inline gap="1" align="center">
                  <Star className="size-4 text-warning fill-warning" />
                  <span className="font-medium">4.8</span>
                  <span className="text-muted-foreground">(127 reviews)</span>
                </Inline>
                <span className="text-muted-foreground">•</span>
                <Inline gap="1" align="center">
                  <MapPin className="size-4" />
                  <span>Downtown, Seattle</span>
                </Inline>
              </Inline>
            </VStack>
            <HStack gap="2">
              <Button variant="outline" size="sm">
                <Heart className="size-4 mr-2" />
                Save
              </Button>
              <Button variant="outline" size="sm">
                Share
              </Button>
            </HStack>
          </HStack>

          {/* Image Gallery */}
          <Grid columns="4" gap="2">
            <GridItem colSpan="2" rowSpan="2">
              <AspectRatio ratio="4/3" className="bg-muted rounded-lg">
                <Center height="full">
                  <Home className="size-16 text-muted-foreground" />
                </Center>
              </AspectRatio>
            </GridItem>
            <GridItem colSpan="1">
              <AspectRatio ratio="4/3" className="bg-muted rounded-lg">
                <Center height="full">
                  <Home className="size-8 text-muted-foreground" />
                </Center>
              </AspectRatio>
            </GridItem>
            <GridItem colSpan="1">
              <AspectRatio ratio="4/3" className="bg-muted rounded-lg">
                <Center height="full">
                  <Home className="size-8 text-muted-foreground" />
                </Center>
              </AspectRatio>
            </GridItem>
            <GridItem colSpan="1">
              <AspectRatio ratio="4/3" className="bg-muted rounded-lg">
                <Center height="full">
                  <Home className="size-8 text-muted-foreground" />
                </Center>
              </AspectRatio>
            </GridItem>
            <GridItem colSpan="1">
              <AspectRatio ratio="4/3" className="bg-muted rounded-lg">
                <Center height="full">
                  <Home className="size-8 text-muted-foreground" />
                </Center>
              </AspectRatio>
            </GridItem>
          </Grid>
        </VStack>
      </Container>
    </Section>
  )
}

// Example 3: Search Bar
function SearchBar() {
  return (
    <div className="w-full max-w-4xl">
      <HStack
        gap="0"
        className="bg-card border border-border rounded-lg overflow-hidden shadow-md"
      >
        <Box padding="4" className="flex-1 border-r border-border">
          <VStack gap="1">
            <label className="text-body-xs font-medium">Location</label>
            <Input
              placeholder="Where are you going?"
              className="border-0 p-0 h-auto text-body-sm focus-visible:ring-0"
            />
          </VStack>
        </Box>
        <Box padding="4" className="flex-1 border-r border-border">
          <VStack gap="1">
            <label className="text-body-xs font-medium">Check-in</label>
            <Input
              type="date"
              className="border-0 p-0 h-auto text-body-sm focus-visible:ring-0"
            />
          </VStack>
        </Box>
        <Box padding="4" className="flex-1 border-r border-border">
          <VStack gap="1">
            <label className="text-body-xs font-medium">Check-out</label>
            <Input
              type="date"
              className="border-0 p-0 h-auto text-body-sm focus-visible:ring-0"
            />
          </VStack>
        </Box>
        <Box padding="4" className="flex-1 border-r border-border">
          <VStack gap="1">
            <label className="text-body-xs font-medium">Guests</label>
            <Input
              type="number"
              placeholder="2 guests"
              className="border-0 p-0 h-auto text-body-sm focus-visible:ring-0"
            />
          </VStack>
        </Box>
        <Box padding="4">
          <Button variant="secondary" className="h-full">
            <Search className="size-4 mr-2" />
            Search
          </Button>
        </Box>
      </HStack>
    </div>
  )
}

// Example 4: Amenities Grid
function AmenitiesGrid() {
  const amenities = [
    {icon: Wifi, label: 'High-speed WiFi'},
    {icon: Coffee, label: 'Coffee maker'},
    {icon: Dumbbell, label: 'Fitness center'},
    {icon: Car, label: 'Free parking'},
    {icon: Bed, label: 'King-size bed'},
    {icon: Bath, label: 'Private bathroom'},
  ]

  return (
    <Box padding="6">
      <VStack gap="4">
        <h6>Amenities</h6>
        <Grid columns="2" gap="4">
          {amenities.map((amenity, index) => (
            <HStack key={index} gap="3" align="center">
              <div className="bg-primary/10 p-2 rounded-lg">
                <amenity.icon className="size-5 text-primary" />
              </div>
              <span className="text-body-sm">{amenity.label}</span>
            </HStack>
          ))}
        </Grid>
      </VStack>
    </Box>
  )
}

// Example 5: Booking Card
function BookingCard() {
  return (
    <Box
      padding="6"
      className="bg-card border border-border rounded-lg shadow-lg max-w-sm"
    >
      <VStack gap="6">
        {/* Price */}
        <HStack gap="2" align="baseline">
          <h4 className="text-secondary">$250</h4>
          <span className="text-muted-foreground text-body-sm">/ night</span>
        </HStack>

        <Divider />

        {/* Dates */}
        <VStack gap="3">
          <HStack gap="3">
            <VStack gap="1" className="flex-1">
              <label className="text-body-xs font-medium">CHECK-IN</label>
              <Input type="date" />
            </VStack>
            <VStack gap="1" className="flex-1">
              <label className="text-body-xs font-medium">CHECK-OUT</label>
              <Input type="date" />
            </VStack>
          </HStack>

          <VStack gap="1">
            <label className="text-body-xs font-medium">GUESTS</label>
            <Input type="number" placeholder="2 guests" />
          </VStack>
        </VStack>

        {/* Pricing Breakdown */}
        <VStack gap="2">
          <HStack gap="4">
            <span className="text-body-sm">$250 × 3 nights</span>
            <Spacer />
            <span className="text-body-sm font-medium">$750</span>
          </HStack>
          <HStack gap="4">
            <span className="text-body-sm">Service fee</span>
            <Spacer />
            <span className="text-body-sm font-medium">$75</span>
          </HStack>

          <Divider />

          <HStack gap="4">
            <span className="font-semibold">Total</span>
            <Spacer />
            <span className="font-semibold text-body-lg">$825</span>
          </HStack>
        </VStack>

        {/* CTA */}
        <Button variant="secondary" size="lg" className="w-full">
          Reserve Now
        </Button>

        <p className="text-center text-body-xs text-muted-foreground">
          You won't be charged yet
        </p>
      </VStack>
    </Box>
  )
}

// Example 6: Mobile Header
function MobileHeader() {
  return (
    <Box paddingX="4" paddingY="3" className="bg-card border-b border-border">
      <HStack gap="4" align="center">
        <Button variant="ghost" size="sm">
          <Menu className="size-5" />
        </Button>
        <Spacer />
        <Inline gap="2" align="center">
          <Home className="size-5 text-primary" />
          <span className="font-semibold">StayFinder</span>
        </Inline>
        <Spacer />
        <Button variant="ghost" size="sm">
          <User className="size-5" />
        </Button>
      </HStack>
    </Box>
  )
}

// Property Card Component
function PropertyCard() {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
      <AspectRatio ratio="4/3" className="bg-muted relative">
        <Center height="full">
          <Home className="size-12 text-muted-foreground" />
        </Center>
        <button className="absolute top-3 right-3 bg-white/90 hover:bg-white p-2 rounded-full">
          <Heart className="size-4" />
        </button>
      </AspectRatio>

      <Box padding="4">
        <VStack gap="2">
          <HStack gap="4" align="start">
            <VStack gap="1" className="flex-1">
              <h6 className="text-body-sm">Modern Apartment</h6>
              <Inline gap="1" align="center">
                <MapPin className="size-3 text-muted-foreground" />
                <span className="text-body-xs text-muted-foreground">
                  Downtown
                </span>
              </Inline>
            </VStack>
            <Inline gap="1" align="center">
              <Star className="size-3 text-warning fill-warning" />
              <span className="text-body-xs font-medium">4.9</span>
            </Inline>
          </HStack>

          <HStack gap="3" className="text-body-xs text-muted-foreground">
            <Inline gap="1" align="center">
              <Bed className="size-3" />
              <span>2</span>
            </Inline>
            <Inline gap="1" align="center">
              <Bath className="size-3" />
              <span>2</span>
            </Inline>
            <Inline gap="1" align="center">
              <Square className="size-3" />
              <span>900 sq ft</span>
            </Inline>
          </HStack>

          <Divider spacing="2" />

          <HStack gap="2" align="baseline">
            <span className="font-semibold text-secondary">$180</span>
            <span className="text-body-xs text-muted-foreground">/ night</span>
          </HStack>
        </VStack>
      </Box>
    </div>
  )
}
