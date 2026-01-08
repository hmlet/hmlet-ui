import type {Meta, StoryObj} from '@storybook/react'

import {ThemeToggle} from '../../components/ThemeToggle'
import {ColorPalette} from '../../components/ColorPalette'
import {ButtonShowcase} from '../../components/ButtonShowcase'
import {FormShowcase} from '../../components/FormShowcase'
import {AlertsShowcase} from '../../components/AlertsShowcase'
import {CardsShowcase} from '../../components/CardsShowcase'
import {TypographyShowcase} from '../../components/TypographyShowcase'
import {InteractiveShowcase} from '../../components/InteractiveShowcase'
import {ImplementationGuide} from '../../components/ImplementationGuide'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '../../components/ui/tabs'

function AppShowcase() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div>
            <h1 className="text-xl font-semibold">
              Warm Hospitality UI Library
            </h1>
            <p className="text-sm text-muted-foreground">
              Beige-based design system
            </p>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <main className="container mx-auto py-8 px-4">
        <div className="mb-8">
          <h2 className="mb-2">Complete UI Component Library</h2>
          <p className="text-muted-foreground">
            A comprehensive design system for boutique hotels, serviced
            apartments, and premium co-living spaces. Built with warm beige
            tones for comfort and trust.
          </p>
        </div>

        <Tabs defaultValue="colors" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8">
            <TabsTrigger value="colors">Colors</TabsTrigger>
            <TabsTrigger value="typography">Typography</TabsTrigger>
            <TabsTrigger value="buttons">Buttons</TabsTrigger>
            <TabsTrigger value="forms">Forms</TabsTrigger>
            <TabsTrigger value="cards">Cards</TabsTrigger>
            <TabsTrigger value="alerts">Alerts</TabsTrigger>
            <TabsTrigger value="interactive">Interactive</TabsTrigger>
            <TabsTrigger value="all">All</TabsTrigger>
          </TabsList>

          <TabsContent value="colors" className="space-y-6">
            <ColorPalette />
          </TabsContent>

          <TabsContent value="typography" className="space-y-6">
            <TypographyShowcase />
          </TabsContent>

          <TabsContent value="buttons" className="space-y-6">
            <ButtonShowcase />
          </TabsContent>

          <TabsContent value="forms" className="space-y-6">
            <FormShowcase />
          </TabsContent>

          <TabsContent value="cards" className="space-y-6">
            <CardsShowcase />
          </TabsContent>

          <TabsContent value="alerts" className="space-y-6">
            <AlertsShowcase />
          </TabsContent>

          <TabsContent value="interactive" className="space-y-6">
            <InteractiveShowcase />
          </TabsContent>

          <TabsContent value="all" className="space-y-6">
            <ColorPalette />
            <TypographyShowcase />
            <ButtonShowcase />
            <FormShowcase />
            <CardsShowcase />
            <AlertsShowcase />
            <InteractiveShowcase />
          </TabsContent>
        </Tabs>

        <div className="mt-12 rounded-lg border border-border bg-card p-6">
          <h3 className="mb-4">Implementation Guide</h3>
          <p className="mb-6 text-sm text-muted-foreground">
            Follow these steps to integrate the Warm Hospitality UI Library into
            your project:
          </p>
          <ImplementationGuide />
        </div>
      </main>

      <footer className="mt-16 border-t border-border bg-card">
        <div className="container mx-auto py-8 px-4 text-center text-sm text-muted-foreground">
          <p>
            Warm Hospitality UI Library • Perfect for boutique accommodations
          </p>
        </div>
      </footer>
    </div>
  )
}

const meta = {
  title: 'Showcase/App',
  component: AppShowcase,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof AppShowcase>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
