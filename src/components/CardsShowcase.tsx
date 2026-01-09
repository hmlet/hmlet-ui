import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card'
import {Button} from './ui/button'
import {Badge} from './ui/badge'
import {Bed, MapPin, Star, Users, Wifi} from 'lucide-react'

export function CardsShowcase() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Cards & Layouts</CardTitle>
        <CardDescription>
          Card components with Primary (Navy) and Secondary (Coral) color
          schemes
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Basic Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Simple Card</CardTitle>
              <CardDescription>Basic card with header</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Card content goes here with white background against ivory.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>With Footer</CardTitle>
              <CardDescription>Card with action buttons</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Content area for information.</p>
            </CardContent>
            <CardFooter>
              <Button size="sm" className="w-full">
                Action
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle>With Badge</CardTitle>
                  <CardDescription>Featured listing</CardDescription>
                </div>
                <Badge className="bg-success text-success-foreground">
                  New
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Premium content highlighted.</p>
            </CardContent>
          </Card>
        </div>

        {/* Primary Color Cards */}
        <div>
          <h4 className="mb-3 text-sm font-medium text-muted-foreground">
            Property Cards - Primary (Navy) Theme
          </h4>
          <div className="grid gap-6 md:grid-cols-2">
            {/* Property Card 1 - Primary */}
            <Card className="overflow-hidden">
              <div className="h-48 bg-muted flex items-center justify-center">
                <p className="text-muted-foreground">Property Image</p>
              </div>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <CardTitle>Deluxe Suite</CardTitle>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      Downtown, City Center
                    </div>
                  </div>
                  <Badge className="bg-primary text-primary-foreground">
                    Featured
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Bed className="h-4 w-4 text-muted-foreground" />
                    <span>2 Beds</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>4 Guests</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Wifi className="h-4 w-4 text-muted-foreground" />
                    <span>WiFi</span>
                  </div>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-semibold text-primary">
                    $159
                  </span>
                  <span className="text-sm text-muted-foreground">/ night</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map(star => (
                      <Star
                        key={star}
                        className="h-4 w-4 fill-warning text-warning"
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    (124 reviews)
                  </span>
                </div>
              </CardContent>
              <CardFooter className="gap-2">
                <Button variant="outline-primary" className="flex-1">
                  View Details
                </Button>
                <Button className="flex-1">Book Now</Button>
              </CardFooter>
            </Card>

            {/* Property Card 2 - Primary */}
            <Card className="overflow-hidden">
              <div className="h-48 bg-primary/10 flex items-center justify-center">
                <p className="text-primary">Property Image</p>
              </div>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <CardTitle>Penthouse</CardTitle>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      Waterfront District
                    </div>
                  </div>
                  <Badge className="bg-primary text-primary-foreground">
                    Premium
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Bed className="h-4 w-4 text-muted-foreground" />
                    <span>3 Beds</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>6 Guests</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Wifi className="h-4 w-4 text-muted-foreground" />
                    <span>WiFi</span>
                  </div>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-semibold text-primary">
                    $299
                  </span>
                  <span className="text-sm text-muted-foreground">/ night</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map(star => (
                      <Star
                        key={star}
                        className="h-4 w-4 fill-warning text-warning"
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    (89 reviews)
                  </span>
                </div>
              </CardContent>
              <CardFooter className="gap-2">
                <Button variant="outline-primary" className="flex-1">
                  View Details
                </Button>
                <Button className="flex-1">Book Now</Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        {/* Secondary Color Cards */}
        <div>
          <h4 className="mb-3 text-sm font-medium text-muted-foreground">
            Property Cards - Secondary (Coral) Theme
          </h4>
          <div className="grid gap-6 md:grid-cols-2">
            {/* Property Card 1 - Secondary */}
            <Card className="overflow-hidden">
              <div className="h-48 bg-muted flex items-center justify-center">
                <p className="text-muted-foreground">Property Image</p>
              </div>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <CardTitle>Studio Apartment</CardTitle>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      Arts District
                    </div>
                  </div>
                  <Badge className="bg-secondary text-secondary-foreground">
                    Hot Deal
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Bed className="h-4 w-4 text-muted-foreground" />
                    <span>1 Bed</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>2 Guests</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Wifi className="h-4 w-4 text-muted-foreground" />
                    <span>WiFi</span>
                  </div>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-semibold text-secondary">
                    $99
                  </span>
                  <span className="text-sm text-muted-foreground">/ night</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="flex">
                    {[1, 2, 3, 4].map(star => (
                      <Star
                        key={star}
                        className="h-4 w-4 fill-warning text-warning"
                      />
                    ))}
                    <Star className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <span className="text-sm text-muted-foreground">
                    (56 reviews)
                  </span>
                </div>
              </CardContent>
              <CardFooter className="gap-2">
                <Button variant="outline-secondary" className="flex-1">
                  View Details
                </Button>
                <Button variant="secondary" className="flex-1">
                  Book Now
                </Button>
              </CardFooter>
            </Card>

            {/* Property Card 2 - Secondary */}
            <Card className="overflow-hidden">
              <div className="h-48 bg-secondary/10 flex items-center justify-center">
                <p className="text-secondary">Property Image</p>
              </div>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <CardTitle>Luxury Loft</CardTitle>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      Historic Quarter
                    </div>
                  </div>
                  <Badge className="bg-secondary text-secondary-foreground">
                    Trending
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Bed className="h-4 w-4 text-muted-foreground" />
                    <span>2 Beds</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>4 Guests</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Wifi className="h-4 w-4 text-muted-foreground" />
                    <span>WiFi</span>
                  </div>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-semibold text-secondary">
                    $189
                  </span>
                  <span className="text-sm text-muted-foreground">/ night</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map(star => (
                      <Star
                        key={star}
                        className="h-4 w-4 fill-warning text-warning"
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    (203 reviews)
                  </span>
                </div>
              </CardContent>
              <CardFooter className="gap-2">
                <Button variant="outline-secondary" className="flex-1">
                  View Details
                </Button>
                <Button variant="secondary" className="flex-1">
                  Book Now
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
