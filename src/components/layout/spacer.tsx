import React from 'react'
import {cn} from '../ui/utils'

/**
 * Spacer - Flexible space component
 *
 * Expands to fill available space within flex containers (Stack, HStack, VStack, Inline).
 * Used to push elements apart or create flexible spacing.
 *
 * @example
 * <HStack>
 *   <div>Left</div>
 *   <Spacer />
 *   <div>Right (pushed to end)</div>
 * </HStack>
 */

export interface SpacerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType
}

export const Spacer = React.forwardRef<HTMLDivElement, SpacerProps>(
  ({as: Component = 'div', className, ...props}, ref) => {
    return (
      <Component
        ref={ref}
        className={cn('flex-1', className)}
        aria-hidden="true"
        {...props}
      />
    )
  },
)

Spacer.displayName = 'Spacer'
