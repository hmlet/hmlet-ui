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

export function FormShowcase() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Form Elements</CardTitle>
        <CardDescription>
          Input fields, textareas, and form controls styled for the beige theme
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Text Inputs */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Enter your name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="email@example.com" />
          </div>
        </div>

        {/* Textarea */}
        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            placeholder="Tell us about your stay preferences..."
            rows={4}
          />
        </div>

        {/* Select */}
        <div className="space-y-2">
          <Label htmlFor="room-type">Room Type</Label>
          <Select>
            <SelectTrigger id="room-type">
              <SelectValue placeholder="Select room type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="standard">Standard Room</SelectItem>
              <SelectItem value="deluxe">Deluxe Suite</SelectItem>
              <SelectItem value="penthouse">Penthouse</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Radio Group */}
        <div className="space-y-2">
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

        {/* Checkboxes */}
        <div className="space-y-2">
          <Label>Amenities</Label>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="breakfast" />
              <Label htmlFor="breakfast" className="font-normal cursor-pointer">
                Include Breakfast
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="parking" />
              <Label htmlFor="parking" className="font-normal cursor-pointer">
                Parking Space
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="wifi" defaultChecked />
              <Label htmlFor="wifi" className="font-normal cursor-pointer">
                High-Speed WiFi
              </Label>
            </div>
          </div>
        </div>

        {/* Switch */}
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="newsletter">Newsletter</Label>
            <p className="text-sm text-muted-foreground">
              Receive updates about special offers
            </p>
          </div>
          <Switch id="newsletter" />
        </div>

        {/* Submit */}
        <Button className="w-full">Submit Booking Request</Button>
      </CardContent>
    </Card>
  )
}
