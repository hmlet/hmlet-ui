import * as React from 'react'
import {cn} from './utils'

type EmptyProps = React.HTMLAttributes<HTMLDivElement>

const Empty = React.forwardRef<HTMLDivElement, EmptyProps>(
  ({className, children, ...props}, ref) => {
    return (
      <div
        ref={ref}
        data-slot="empty"
        className={cn(
          'flex flex-col items-center justify-center p-12 text-center',
          className,
        )}
        {...props}
      >
        {children}
      </div>
    )
  },
)

Empty.displayName = 'Empty'

type EmptyHeaderProps = React.HTMLAttributes<HTMLDivElement>

const EmptyHeader = React.forwardRef<HTMLDivElement, EmptyHeaderProps>(
  ({className, children, ...props}, ref) => {
    return (
      <div
        ref={ref}
        data-slot="empty-header"
        className={cn('flex flex-col items-center justify-center', className)}
        {...props}
      >
        {children}
      </div>
    )
  },
)

EmptyHeader.displayName = 'EmptyHeader'

type EmptyMediaVariant = 'default' | 'icon'

interface EmptyMediaProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: EmptyMediaVariant
}

const EmptyMedia = React.forwardRef<HTMLDivElement, EmptyMediaProps>(
  ({className, children, variant = 'default', ...props}, ref) => {
    return (
      <div
        ref={ref}
        data-slot="empty-media"
        className={cn(
          'mb-4 flex items-center justify-center',
          variant === 'icon' &&
            'h-16 w-16 rounded-full bg-muted text-muted-foreground [&>svg]:size-8',
          className,
        )}
        {...props}
      >
        {children}
      </div>
    )
  },
)

EmptyMedia.displayName = 'EmptyMedia'

interface EmptyTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode
}

const EmptyTitle = React.forwardRef<HTMLHeadingElement, EmptyTitleProps>(
  ({className, children, ...props}, ref) => {
    return (
      <h3
        ref={ref}
        data-slot="empty-title"
        className={cn(
          'text-body-lg font-semibold text-foreground mb-2',
          className,
        )}
        {...props}
      >
        {children}
      </h3>
    )
  },
)

EmptyTitle.displayName = 'EmptyTitle'

interface EmptyDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode
}

const EmptyDescription = React.forwardRef<
  HTMLParagraphElement,
  EmptyDescriptionProps
>(({className, children, ...props}, ref) => {
  return (
    <p
      ref={ref}
      data-slot="empty-description"
      className={cn(
        'text-body-base text-muted-foreground max-w-md mb-4',
        className,
      )}
      {...props}
    >
      {children}
    </p>
  )
})

EmptyDescription.displayName = 'EmptyDescription'

type EmptyContentProps = React.HTMLAttributes<HTMLDivElement>

const EmptyContent = React.forwardRef<HTMLDivElement, EmptyContentProps>(
  ({className, children, ...props}, ref) => {
    return (
      <div
        ref={ref}
        data-slot="empty-content"
        className={cn('flex items-center justify-center gap-3', className)}
        {...props}
      >
        {children}
      </div>
    )
  },
)

EmptyContent.displayName = 'EmptyContent'

// Backwards-compatible aliases
const EmptyIcon = React.forwardRef<HTMLDivElement, EmptyMediaProps>(
  ({className, ...props}, ref) => (
    <EmptyMedia
      ref={ref}
      data-slot="empty-icon"
      variant="icon"
      className={className}
      {...props}
    />
  ),
)

EmptyIcon.displayName = 'EmptyIcon'

const EmptyActions = React.forwardRef<HTMLDivElement, EmptyContentProps>(
  ({className, ...props}, ref) => (
    <EmptyContent
      ref={ref}
      data-slot="empty-actions"
      className={className}
      {...props}
    />
  ),
)

EmptyActions.displayName = 'EmptyActions'

export {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
  // aliases
  EmptyIcon,
  EmptyActions,
}
