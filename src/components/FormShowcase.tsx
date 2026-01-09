import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card'
import {Input} from './ui/input'
import {Label} from './ui/label'
import {Textarea} from './ui/textarea'
import {Checkbox} from './ui/checkbox'
import {RadioGroup, RadioGroupItem} from './ui/radio-group'
import {Switch} from './ui/switch'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select'
import {Button} from './ui/button'
import {
  Search,
  Calendar,
  Mail,
  Lock,
  AlertCircle,
  CheckCircle2,
} from 'lucide-react'

export function FormShowcase() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Form Components</CardTitle>
        <CardDescription>
          Complete form system with text inputs, selections, and controls •
          Primary & Secondary variants
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        {/* TEXT INPUTS - SIZES */}
        <div>
          <h4 className="mb-4 text-sm font-medium text-muted-foreground">
            Text Input Sizes
          </h4>
          <div className="space-y-3 max-w-md">
            <div className="space-y-2">
              <Label htmlFor="input-sm">Small Input</Label>
              <Input
                id="input-sm"
                inputSize="sm"
                placeholder="Small input (h-9)"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="input-md">Medium Input (Default)</Label>
              <Input
                id="input-md"
                inputSize="md"
                placeholder="Medium input (h-11)"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="input-lg">Large Input</Label>
              <Input
                id="input-lg"
                inputSize="lg"
                placeholder="Large input (h-12)"
              />
            </div>
          </div>
        </div>

        {/* TEXT INPUTS - STATES */}
        <div>
          <h4 className="mb-4 text-sm font-medium text-muted-foreground">
            Input States
          </h4>
          <div className="space-y-3 max-w-md">
            <div className="space-y-2">
              <Label htmlFor="input-default">Default State</Label>
              <Input id="input-default" placeholder="Enter text..." />
            </div>
            <div className="space-y-2">
              <Label htmlFor="input-filled">Filled State</Label>
              <Input id="input-filled" defaultValue="John Smith" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="input-disabled">Disabled State</Label>
              <Input
                id="input-disabled"
                placeholder="Disabled input"
                disabled
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="input-error" className="text-destructive">
                Error State
              </Label>
              <Input
                id="input-error"
                variant="error"
                placeholder="Error input"
              />
              <p className="text-xs text-destructive flex items-center gap-1">
                <AlertCircle className="size-3" />
                This field is required
              </p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="input-success" className="text-success">
                Success State
              </Label>
              <Input
                id="input-success"
                variant="success"
                defaultValue="john@example.com"
              />
              <p className="text-xs text-success flex items-center gap-1">
                <CheckCircle2 className="size-3" />
                Email verified
              </p>
            </div>
          </div>
        </div>

        {/* TEXT INPUTS - WITH ICONS */}
        <div>
          <h4 className="mb-4 text-sm font-medium text-muted-foreground">
            Inputs with Icons
          </h4>
          <div className="space-y-3 max-w-md">
            <div className="space-y-2">
              <Label htmlFor="search">Search</Label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                <Input
                  id="search"
                  placeholder="Search properties..."
                  className="pl-10"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="email@example.com"
                  className="pl-10"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="pl-10"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="date">Check-in Date</Label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                <Input id="date" type="date" className="pl-10" />
              </div>
            </div>
          </div>
        </div>

        {/* TEXTAREA */}
        <div>
          <h4 className="mb-4 text-sm font-medium text-muted-foreground">
            Textarea
          </h4>
          <div className="space-y-3 max-w-md">
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Tell us about your stay preferences..."
                rows={4}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message-error" className="text-destructive">
                Textarea Error
              </Label>
              <Textarea
                id="message-error"
                variant="error"
                placeholder="Error state..."
                rows={3}
              />
            </div>
          </div>
        </div>

        {/* SELECT */}
        <div>
          <h4 className="mb-4 text-sm font-medium text-muted-foreground">
            Select Dropdown
          </h4>
          <div className="space-y-3 max-w-md">
            <div className="space-y-2">
              <Label htmlFor="room-type">Room Type</Label>
              <Select>
                <SelectTrigger id="room-type">
                  <SelectValue placeholder="Select room type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="studio">Studio Apartment</SelectItem>
                  <SelectItem value="one-bed">1 Bedroom</SelectItem>
                  <SelectItem value="two-bed">2 Bedroom</SelectItem>
                  <SelectItem value="penthouse">Penthouse Suite</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="guests">Number of Guests</Label>
              <Select>
                <SelectTrigger id="guests">
                  <SelectValue placeholder="Select guests" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 Guest</SelectItem>
                  <SelectItem value="2">2 Guests</SelectItem>
                  <SelectItem value="3">3 Guests</SelectItem>
                  <SelectItem value="4">4 Guests</SelectItem>
                  <SelectItem value="5">5+ Guests</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* CHECKBOXES - PRIMARY */}
        <div>
          <h4 className="mb-4 text-sm font-medium text-muted-foreground">
            Checkboxes - Primary Variant
          </h4>
          <div className="space-y-3 max-w-md">
            <div className="flex items-center space-x-2">
              <Checkbox id="amenity-1" variant="primary" />
              <Label htmlFor="amenity-1" className="font-normal cursor-pointer">
                High-Speed WiFi
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="amenity-2" variant="primary" defaultChecked />
              <Label htmlFor="amenity-2" className="font-normal cursor-pointer">
                Breakfast Included
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="amenity-3" variant="primary" />
              <Label htmlFor="amenity-3" className="font-normal cursor-pointer">
                Parking Space
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="amenity-4" variant="primary" disabled />
              <Label
                htmlFor="amenity-4"
                className="font-normal cursor-pointer opacity-50"
              >
                Gym Access (Disabled)
              </Label>
            </div>
          </div>
        </div>

        {/* CHECKBOXES - SECONDARY */}
        <div>
          <h4 className="mb-4 text-sm font-medium text-muted-foreground">
            Checkboxes - Secondary Variant
          </h4>
          <div className="space-y-3 max-w-md">
            <div className="flex items-center space-x-2">
              <Checkbox id="pref-1" variant="secondary" />
              <Label htmlFor="pref-1" className="font-normal cursor-pointer">
                Pet-Friendly
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="pref-2" variant="secondary" defaultChecked />
              <Label htmlFor="pref-2" className="font-normal cursor-pointer">
                Balcony/Terrace
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="pref-3" variant="secondary" />
              <Label htmlFor="pref-3" className="font-normal cursor-pointer">
                Washer & Dryer
              </Label>
            </div>
          </div>
        </div>

        {/* CHECKBOX SIZES */}
        <div>
          <h4 className="mb-4 text-sm font-medium text-muted-foreground">
            Checkbox Sizes
          </h4>
          <div className="flex items-center gap-6">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="check-sm"
                variant="primary"
                size="sm"
                defaultChecked
              />
              <Label
                htmlFor="check-sm"
                className="font-normal cursor-pointer text-sm"
              >
                Small
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="check-md"
                variant="primary"
                size="md"
                defaultChecked
              />
              <Label htmlFor="check-md" className="font-normal cursor-pointer">
                Medium
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="check-lg"
                variant="primary"
                size="lg"
                defaultChecked
              />
              <Label
                htmlFor="check-lg"
                className="font-normal cursor-pointer text-lg"
              >
                Large
              </Label>
            </div>
          </div>
        </div>

        {/* RADIO GROUP */}
        <div>
          <h4 className="mb-4 text-sm font-medium text-muted-foreground">
            Radio Buttons
          </h4>
          <div className="space-y-2 max-w-md">
            <Label>Bed Preference</Label>
            <RadioGroup defaultValue="queen">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="twin" id="twin" />
                <Label htmlFor="twin" className="font-normal cursor-pointer">
                  Twin Beds
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="queen" id="queen" />
                <Label htmlFor="queen" className="font-normal cursor-pointer">
                  Queen Bed
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="king" id="king" />
                <Label htmlFor="king" className="font-normal cursor-pointer">
                  King Bed
                </Label>
              </div>
            </RadioGroup>
          </div>
        </div>

        {/* SWITCH/TOGGLE */}
        <div>
          <h4 className="mb-4 text-sm font-medium text-muted-foreground">
            Switch/Toggle
          </h4>
          <div className="space-y-4 max-w-md">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="newsletter">Newsletter Subscription</Label>
                <p className="text-sm text-muted-foreground">
                  Receive updates about special offers
                </p>
              </div>
              <Switch id="newsletter" />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="notifications">Push Notifications</Label>
                <p className="text-sm text-muted-foreground">
                  Get notified about booking updates
                </p>
              </div>
              <Switch id="notifications" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="notifications-disabled" className="opacity-50">
                  Disabled Toggle
                </Label>
                <p className="text-sm text-muted-foreground opacity-50">
                  This option is not available
                </p>
              </div>
              <Switch id="notifications-disabled" disabled />
            </div>
          </div>
        </div>

        {/* FORM EXAMPLE - PRIMARY */}
        <div>
          <h4 className="mb-4 text-sm font-medium text-muted-foreground">
            Complete Form Example - Primary Theme
          </h4>
          <div className="rounded-lg border border-border bg-card p-6 max-w-md space-y-4">
            <div className="space-y-2">
              <Label htmlFor="form-name">Full Name</Label>
              <Input id="form-name" placeholder="John Smith" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="form-email">Email Address</Label>
              <Input
                id="form-email"
                type="email"
                placeholder="john@example.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="form-phone">Phone Number</Label>
              <Input
                id="form-phone"
                type="tel"
                placeholder="+1 (555) 000-0000"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="form-notes">Special Requests</Label>
              <Textarea
                id="form-notes"
                placeholder="Any special requirements..."
                rows={3}
              />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="form-terms" variant="primary" />
              <Label
                htmlFor="form-terms"
                className="font-normal cursor-pointer text-sm"
              >
                I agree to the terms and conditions
              </Label>
            </div>
            <Button variant="primary" className="w-full">
              Submit Booking
            </Button>
          </div>
        </div>

        {/* FORM EXAMPLE - SECONDARY */}
        <div>
          <h4 className="mb-4 text-sm font-medium text-muted-foreground">
            Complete Form Example - Secondary Theme
          </h4>
          <div className="rounded-lg border border-border bg-card p-6 max-w-md space-y-4">
            <div className="space-y-2">
              <Label htmlFor="form2-name">Full Name</Label>
              <Input id="form2-name" placeholder="Jane Doe" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="form2-email">Email Address</Label>
              <Input
                id="form2-email"
                type="email"
                placeholder="jane@example.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="form2-property">Property Type</Label>
              <Select>
                <SelectTrigger id="form2-property">
                  <SelectValue placeholder="Select property type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="apartment">Apartment</SelectItem>
                  <SelectItem value="hotel">Hotel Room</SelectItem>
                  <SelectItem value="villa">Villa</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="form2-updates" variant="secondary" />
              <Label
                htmlFor="form2-updates"
                className="font-normal cursor-pointer text-sm"
              >
                Send me promotional offers
              </Label>
            </div>
            <Button variant="secondary" className="w-full">
              Contact Agent
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
