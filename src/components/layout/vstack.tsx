import React from 'react'
import {Stack, type StackProps} from './stack'

/**
 * VStack - Vertical Stack
 *
 * A vertical layout abstraction for better ergonomics and readability.
 * Simplified variant of Stack with direction fixed to vertical.
 *
 * @example
 * <VStack gap="6" align="start">
 *   <h2>Title</h2>
 *   <p>Content</p>
 *   <button>Action</button>
 * </VStack>
 */

export type VStackProps = Omit<StackProps, 'direction'>

export const VStack = React.forwardRef<HTMLDivElement, VStackProps>(
  ({...props}, ref) => {
    return <Stack ref={ref} direction="vertical" {...props} />
  },
)

VStack.displayName = 'VStack'
