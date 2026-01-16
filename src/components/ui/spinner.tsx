import * as React from 'react'
import {cva, type VariantProps} from 'class-variance-authority'
import {Loader2} from 'lucide-react'
import {cn} from './utils'

const spinnerVariants = cva('inline-block shrink-0 animate-spin', {
  variants: {
    variant: {
      primary: 'text-primary',
      secondary: 'text-secondary',
      destructive: 'text-destructive',
      success: 'text-success',
      muted: 'text-muted-foreground',
      current: 'text-current',
    },
    size: {
      sm: 'size-4',
      md: 'size-6',
      lg: 'size-8',
      xl: 'size-12',
    },
  },
  defaultVariants: {
    variant: 'muted',
    size: 'sm',
  },
})

interface SpinnerProps
  extends React.ComponentProps<'svg'>, VariantProps<typeof spinnerVariants> {
  label?: string
}

const Spinner = React.forwardRef<SVGSVGElement, SpinnerProps>(
  ({className, variant, size, label = 'Loading...', ...props}, ref) => {
    return (
      <Loader2
        ref={ref}
        role="status"
        data-slot="spinner"
        aria-label={label}
        className={cn(spinnerVariants({variant, size}), className)}
        {...props}
      />
    )
  },
)

Spinner.displayName = 'Spinner'

interface SpinnerContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  text?: string
}

const SpinnerContainer = React.forwardRef<
  HTMLDivElement,
  SpinnerContainerProps
>(({className, children, text, ...props}, ref) => {
  return (
    <div
      ref={ref}
      data-slot="spinner-container"
      className={cn(
        'flex flex-col items-center justify-center gap-3 p-8',
        className,
      )}
      {...props}
    >
      {children}
      {text && <p className="text-body-base text-muted-foreground">{text}</p>}
    </div>
  )
})

SpinnerContainer.displayName = 'SpinnerContainer'

interface SpinnerOverlayProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  visible?: boolean
}

const SpinnerOverlay = React.forwardRef<HTMLDivElement, SpinnerOverlayProps>(
  ({className, children, visible = true, ...props}, ref) => {
    if (!visible) return null

    return (
      <div
        ref={ref}
        data-slot="spinner-overlay"
        className={cn(
          'fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm',
          className,
        )}
        {...props}
      >
        {children}
      </div>
    )
  },
)

SpinnerOverlay.displayName = 'SpinnerOverlay'

export {Spinner, SpinnerContainer, SpinnerOverlay, spinnerVariants}
