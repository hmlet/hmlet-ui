'use client'

import * as React from 'react'
import {Slot} from '@radix-ui/react-slot'
import {cva, type VariantProps} from 'class-variance-authority'

import {cn} from './utils'

const typographyVariants = cva('', {
  variants: {
    variant: {
      h1: 'font-serif text-[70px] leading-[1.6] font-medium',
      h2: 'font-serif text-[56px] leading-[1.6] font-medium',
      h3: 'font-serif text-[40px] leading-[1.6] font-medium',
      h4: 'font-serif text-[28px] leading-[1.6] font-medium',
      h5: 'font-serif text-[24px] leading-[1.6] font-medium',
      h6: 'font-serif text-[20px] leading-[1.6] font-medium',

      'display-xl': 'font-sans text-display-xl',
      'display-lg': 'font-sans text-display-lg',
      'display-md': 'font-sans text-display-md',

      'body-xl': 'font-sans text-body-xl',
      'body-lg': 'font-sans text-body-lg',
      'body-md': 'font-sans text-body-md',
      'body-base': 'font-sans text-body-base',
      'body-sm': 'font-sans text-body-sm',
      'body-xs': 'font-sans text-body-xs',
    },
  },
  defaultVariants: {
    variant: 'body-base',
  },
})

type TypographyVariant = NonNullable<
  VariantProps<typeof typographyVariants>['variant']
>

type TypographyOwnProps = VariantProps<typeof typographyVariants> & {
  as?: keyof HTMLElementTagNameMap
  asChild?: boolean
}

type TypographyProps = Omit<React.HTMLAttributes<HTMLElement>, 'color'> &
  TypographyOwnProps

const defaultTagByVariant: Record<
  TypographyVariant,
  keyof HTMLElementTagNameMap
> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',

  'display-xl': 'p',
  'display-lg': 'p',
  'display-md': 'p',

  'body-xl': 'p',
  'body-lg': 'p',
  'body-md': 'p',
  'body-base': 'p',
  'body-sm': 'p',
  'body-xs': 'p',
}

function Typography({
  className,
  variant,
  as,
  asChild = false,
  ...props
}: TypographyProps) {
  const Comp = asChild
    ? Slot
    : (as ?? defaultTagByVariant[variant ?? 'body-base'])

  return (
    <Comp
      data-slot="typography"
      className={cn(typographyVariants({variant}), className)}
      {...props}
    />
  )
}

export type TypographyVariants = VariantProps<typeof typographyVariants>

export {Typography, typographyVariants}
export type {TypographyProps, TypographyVariant}
