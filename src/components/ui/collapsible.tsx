'use client'

import * as React from 'react'
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible'

import {cn} from './utils'
import {normalizeNumberish} from '../layout/types'
import type {WithNumberish} from '../layout/types'

export interface CollapsibleProps extends React.ComponentProps<
  typeof CollapsiblePrimitive.Root
> {
  // Padding
  p?: WithNumberish<1 | 2 | 3 | 4 | 6 | 8 | 12 | 16 | 20 | 'none'>
  px?: WithNumberish<1 | 2 | 3 | 4 | 6 | 8 | 12 | 16 | 20 | 'none'>
  py?: WithNumberish<1 | 2 | 3 | 4 | 6 | 8 | 12 | 16 | 20 | 'none'>
  // Margin
  m?: WithNumberish<1 | 2 | 3 | 4 | 6 | 8 | 12 | 16 | 20 | 'none'>
  mx?: WithNumberish<1 | 2 | 3 | 4 | 6 | 8 | 12 | 16 | 20 | 'none'>
  my?: WithNumberish<1 | 2 | 3 | 4 | 6 | 8 | 12 | 16 | 20 | 'none'>
  // Shadow
  shadow?:
    | 'none'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | 'inner'
    | 'outline'
    | 'default'
  // Width / Height
  w?: 'auto' | 'full' | 'fit' | 'screen'
  h?: 'auto' | 'full' | 'fit' | 'screen'
  // Display
  display?:
    | 'block'
    | 'inline'
    | 'inline-block'
    | 'flex'
    | 'inline-flex'
    | 'grid'
}

/* --------------------------------------------------
 * Utility class generator
 * -------------------------------------------------- */
function getCollapsibleUtilityClasses({
  p,
  px,
  py,
  m,
  mx,
  my,
  shadow,
  w,
  h,
  display,
}: Pick<
  CollapsibleProps,
  'p' | 'px' | 'py' | 'm' | 'mx' | 'my' | 'shadow' | 'w' | 'h' | 'display'
>) {
  // Padding
  const padding = normalizeNumberish(p)
  const paddingX = px !== undefined ? normalizeNumberish(px) : undefined
  const paddingY = py !== undefined ? normalizeNumberish(py) : undefined

  const pxClass =
    paddingX !== undefined && paddingX !== 'none'
      ? `px-[var(--spacing-${paddingX})]`
      : ''
  const pyClass =
    paddingY !== undefined && paddingY !== 'none'
      ? `py-[var(--spacing-${paddingY})]`
      : ''
  const pClass =
    padding !== undefined &&
    padding !== 'none' &&
    paddingX === undefined &&
    paddingY === undefined
      ? `p-[var(--spacing-${padding})]`
      : ''

  // Margin
  const margin = m !== undefined ? normalizeNumberish(m) : undefined
  const marginX = mx !== undefined ? normalizeNumberish(mx) : undefined
  const marginY = my !== undefined ? normalizeNumberish(my) : undefined

  const mxClass =
    marginX !== undefined && marginX !== 'none'
      ? `mx-[var(--spacing-${marginX})]`
      : ''
  const myClass =
    marginY !== undefined && marginY !== 'none'
      ? `my-[var(--spacing-${marginY})]`
      : ''
  const mClass =
    margin !== undefined &&
    margin !== 'none' &&
    marginX === undefined &&
    marginY === undefined
      ? `m-[var(--spacing-${margin})]`
      : ''

  // Shadow
  const shadowMap: Record<string, string> = {
    none: 'shadow-none',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
    '2xl': 'shadow-2xl',
    inner: 'shadow-inner',
    outline: 'shadow-outline',
    default: 'shadow',
  }
  const shadowClass = shadow ? shadowMap[shadow] : ''

  // Width / Height
  const wMap: Record<string, string> = {
    auto: 'w-auto',
    full: 'w-full',
    fit: 'w-fit',
    screen: 'w-screen',
  }
  const hMap: Record<string, string> = {
    auto: 'h-auto',
    full: 'h-full',
    fit: 'h-fit',
    screen: 'h-screen',
  }

  const wClass = w ? wMap[w] : ''
  const hClass = h ? hMap[h] : ''

  // Display
  const displayClass = display ? display : ''

  return [
    pClass,
    pxClass,
    pyClass,
    mClass,
    mxClass,
    myClass,
    shadowClass,
    wClass,
    hClass,
    displayClass,
  ]
    .filter(Boolean)
    .join(' ')
}

/* --------------------------------------------------
 * Collapsible Root
 * -------------------------------------------------- */
function Collapsible({
  className,
  p,
  px,
  py,
  m,
  mx,
  my,
  shadow,
  w,
  h,
  display,
  ...props
}: CollapsibleProps) {
  return (
    <CollapsiblePrimitive.Root
      data-slot="collapsible"
      className={cn(
        getCollapsibleUtilityClasses({
          p,
          px,
          py,
          m,
          mx,
          my,
          shadow,
          w,
          h,
          display,
        }),
        className,
      )}
      {...props}
    />
  )
}

/* --------------------------------------------------
 * Trigger
 * -------------------------------------------------- */
function CollapsibleTrigger(
  props: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleTrigger>,
) {
  return (
    <CollapsiblePrimitive.CollapsibleTrigger
      data-slot="collapsible-trigger"
      className={cn('cursor-pointer', props.className)}
      {...props}
    />
  )
}

/* --------------------------------------------------
 * Animated Content
 * -------------------------------------------------- */
function CollapsibleContent({
  className,
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleContent>) {
  return (
    <CollapsiblePrimitive.CollapsibleContent
      data-slot="collapsible-content"
      className={cn(
        `
        overflow-hidden
        will-change-[height,opacity]
        data-[state=open]:animate-collapsible-down
        data-[state=closed]:animate-collapsible-up
        `,
        className,
      )}
      {...props}
    />
  )
}

export {Collapsible, CollapsibleTrigger, CollapsibleContent}
