/**
 * Layout Component System
 *
 * A comprehensive set of composable layout primitives for building
 * modern, scalable applications. Inspired by Chakra UI, Radix UI,
 * Tailwind, MUI, and SwiftUI.
 *
 * Organization:
 * - Primitives: Box, Stack, HStack, VStack, Inline, Spacer
 * - Grid: Grid, GridItem
 * - Containers: Container, Section
 * - Utilities: Center, AspectRatio, Divider, Wrap, Bleed
 */

// Primitives
export {Box} from './box'
export type * from './box'

export {Stack} from './stack'
export type * from './stack'

export {HStack} from './hstack'
export type * from './hstack'

export {VStack} from './vstack'
export type * from './vstack'

export {Inline} from './inline'
export type * from './inline'

export {Spacer} from './spacer'
export type * from './spacer'

// Grid
export {Grid} from './grid'
export type * from './grid'

export {GridItem} from './grid-item'
export type * from './grid-item'

// Containers
export {Container} from './container'
export type * from './container'

export {Section} from './section'
export type * from './section'

// Utilities
export {Center} from './center'
export type * from './center'

export {LayoutAspectRatio} from './aspect-ratio'
export type * from './aspect-ratio'

export {Divider} from './divider'
export type * from './divider'

export {Wrap} from './wrap'
export type * from './wrap'

export {Bleed} from './bleed'
export type {BleedProps} from './bleed'

// CVA re-export for consumers
export * from './cva'
