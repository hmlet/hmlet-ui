import * as React from 'react'
import {cn} from './utils'

interface KbdProps extends React.ComponentProps<'kbd'> {
  children: React.ReactNode
}

const Kbd = React.forwardRef<HTMLElement, KbdProps>(
  ({className, children, ...props}, ref) => {
    return (
      <kbd
        ref={ref}
        data-slot="kbd"
        className={cn(
          'inline-flex items-center justify-center rounded border border-border bg-muted px-1.5 font-mono text-xs font-medium text-foreground shadow-sm select-none',
          'min-w-6 h-6',
          'dark:bg-card dark:border-border',
          className,
        )}
        {...props}
      >
        {children}
      </kbd>
    )
  },
)

Kbd.displayName = 'Kbd'

interface KbdGroupProps extends React.ComponentProps<'span'> {
  children: React.ReactNode
}

const KbdGroup = React.forwardRef<HTMLSpanElement, KbdGroupProps>(
  ({className, children, ...props}, ref) => {
    return (
      <span
        ref={ref}
        data-slot="kbd-group"
        className={cn('inline-flex items-center gap-1', className)}
        {...props}
      >
        {children}
      </span>
    )
  },
)

KbdGroup.displayName = 'KbdGroup'

export {Kbd, KbdGroup}
