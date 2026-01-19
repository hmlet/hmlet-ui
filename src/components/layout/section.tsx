import React from 'react'
import {cva, type VariantProps} from 'class-variance-authority'
import {cn} from '../ui/utils'

/**
 * Section - Page-level vertical grouping
 *
 * Provides consistent vertical spacing between major page sections.
 * Optionally includes subtle background for visual separation.
 *
 * @example
 * <Section paddingY="12" background="subtle">
 *   <Container>
 *     <h2>Section Title</h2>
 *     <p>Section content</p>
 *   </Container>
 * </Section>
 */

const sectionVariants = cva('w-full', {
  variants: {
    paddingY: {
      6: 'py-[var(--spacing-6)]',
      8: 'py-[var(--spacing-8)]',
      12: 'py-[var(--spacing-12)]',
      16: 'py-[var(--spacing-16)]',
      20: 'py-[var(--spacing-20)]',
    },
    background: {
      none: '',
      default: 'bg-background',
      subtle: 'bg-muted/30',
      card: 'bg-card',
      primary: 'bg-primary text-primary-foreground',
      secondary: 'bg-secondary text-secondary-foreground',
    },
  },
  defaultVariants: {
    paddingY: 12,
    background: 'none',
  },
})

type SectionVariantProps = VariantProps<typeof sectionVariants>

export interface SectionProps
  extends
    React.HTMLAttributes<HTMLElement>,
    Omit<SectionVariantProps, 'paddingY'> {
  as?: React.ElementType
  children?: React.ReactNode
  paddingY?: 6 | 8 | 12 | 16 | 20
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  (
    {
      as: Component = 'section',
      className,
      paddingY,
      background,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <Component
        ref={ref}
        className={cn(sectionVariants({paddingY, background}), className)}
        {...props}
      >
        {children}
      </Component>
    )
  },
)

Section.displayName = 'Section'
