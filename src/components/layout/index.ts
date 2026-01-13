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
export type {BoxProps} from './box'

export {Stack} from './stack'
export type {StackProps} from './stack'

export {HStack} from './hstack'
export type {HStackProps} from './hstack'

export {VStack} from './vstack'
export type {VStackProps} from './vstack'

export {Inline} from './inline'
export type {InlineProps} from './inline'

export {Spacer} from './spacer'
export type {SpacerProps} from './spacer'

// Grid
export {Grid} from './grid'
export type {GridProps} from './grid'

export {GridItem} from './grid-item'
export type {GridItemProps} from './grid-item'

// Containers
export {Container} from './container'
export type {ContainerProps} from './container'

export {Section} from './section'
export type {SectionProps} from './section'

// Utilities
export {Center} from './center'
export type {CenterProps} from './center'

export {AspectRatio as LayoutAspectRatio} from './aspect-ratio'
export type {AspectRatioProps as LayoutAspectRatioProps} from './aspect-ratio'

export {Divider} from './divider'
export type {DividerProps} from './divider'

export {Wrap} from './wrap'
export type {WrapProps} from './wrap'

export {Bleed} from './bleed'
export type {BleedProps} from './bleed'
