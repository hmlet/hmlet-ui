import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card'
import {Tabs, TabsContent, TabsList, TabsTrigger} from './ui/tabs'
import {Progress} from './ui/progress'
import {Slider} from './ui/slider'
import {Separator} from './ui/separator'
import {Skeleton} from './ui/skeleton'
import {Avatar, AvatarFallback} from './ui/avatar'
import {Calendar} from './ui/calendar'
import {useState} from 'react'

export function InteractiveShowcase() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <Card>
      <CardHeader>
        <CardTitle>Interactive Components</CardTitle>
        <CardDescription>
          Advanced UI elements for rich user interactions
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        {/* Progress & Sliders */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-muted-foreground">
            Progress Indicators
          </h4>
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Booking Progress</span>
                <span className="text-muted-foreground">75%</span>
              </div>
              <Progress value={75} />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Profile Completion</span>
                <span className="text-muted-foreground">45%</span>
              </div>
              <Progress value={45} />
            </div>
          </div>
        </div>

        {/* Sliders */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-muted-foreground">Sliders</h4>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm">Price Range</label>
              <Slider defaultValue={[500]} max={2000} step={50} />
            </div>
            <div className="space-y-2">
              <label className="text-sm">Guest Count</label>
              <Slider defaultValue={[2]} max={10} step={1} />
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-muted-foreground">
            Separators
          </h4>
          <div className="space-y-4">
            <div>
              <p className="text-sm">Section One</p>
              <Separator className="my-4" />
              <p className="text-sm">Section Two</p>
            </div>
          </div>
        </div>

        {/* Avatars */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-muted-foreground">Avatars</h4>
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarFallback className="bg-primary text-primary-foreground text-xl">
                JD
              </AvatarFallback>
            </Avatar>
            <Avatar className="h-12 w-12">
              <AvatarFallback className="bg-secondary text-secondary-foreground">
                AB
              </AvatarFallback>
            </Avatar>
            <Avatar className="h-10 w-10">
              <AvatarFallback className="bg-accent text-accent-foreground">
                KL
              </AvatarFallback>
            </Avatar>
            <Avatar className="h-8 w-8">
              <AvatarFallback className="bg-muted text-muted-foreground text-xs">
                MN
              </AvatarFallback>
            </Avatar>
          </div>
        </div>

        {/* Skeletons */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-muted-foreground">
            Loading Skeletons
          </h4>
          <div className="space-y-2">
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-12 w-3/4" />
            <Skeleton className="h-12 w-1/2" />
          </div>
        </div>

        {/* Tabs Example */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-muted-foreground">Tabs</h4>
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="amenities">Amenities</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4 pt-4">
              <p className="text-sm">
                Discover luxury accommodations designed for your comfort. Modern
                amenities meet timeless elegance in our carefully curated
                spaces.
              </p>
            </TabsContent>
            <TabsContent value="amenities" className="space-y-2 pt-4">
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>High-speed WiFi</li>
                <li>24/7 Concierge</li>
                <li>Fitness Center</li>
                <li>Rooftop Terrace</li>
              </ul>
            </TabsContent>
            <TabsContent value="reviews" className="space-y-4 pt-4">
              <p className="text-sm text-muted-foreground">
                4.8/5.0 based on 234 reviews
              </p>
            </TabsContent>
          </Tabs>
        </div>

        {/* Calendar */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-muted-foreground">
            Calendar
          </h4>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-lg border border-border"
          />
        </div>
      </CardContent>
    </Card>
  )
}
