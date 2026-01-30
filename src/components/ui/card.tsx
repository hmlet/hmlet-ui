import * as React from 'react'
import {cn} from './utils'
import {normalizeNumberish} from '../layout/types'
import type {WithNumberish} from '../layout/types'

export interface CardProps extends React.ComponentProps<'div'> {
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
  // Width/Height
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

function getCardUtilityClasses({
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
  CardProps,
  'p' | 'px' | 'py' | 'm' | 'mx' | 'my' | 'shadow' | 'w' | 'h' | 'display'
>) {
  // Padding
  const padding = normalizeNumberish(p ?? '2')
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
  // Width/Height
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

function Card({
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
}: CardProps) {
  return (
    <div
      data-slot="card"
      className={cn(
        'bg-card text-card-foreground flex flex-col gap-6 rounded-xl border',
        getCardUtilityClasses({p, px, py, m, mx, my, shadow, w, h, display}),
        className,
      )}
      {...props}
    />
  )
}

function CardHeader({className, ...props}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        '@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6',
        className,
      )}
      {...props}
    />
  )
}

function CardTitle({className, ...props}: React.ComponentProps<'div'>) {
  return (
    <h4
      data-slot="card-title"
      className={cn('leading-none', className)}
      {...props}
    />
  )
}

function CardDescription({className, ...props}: React.ComponentProps<'div'>) {
  return (
    <p
      data-slot="card-description"
      className={cn('text-muted-foreground', className)}
      {...props}
    />
  )
}

function CardAction({className, ...props}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        'col-start-2 row-span-2 row-start-1 self-start justify-self-end',
        className,
      )}
      {...props}
    />
  )
}

function CardContent({className, ...props}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-content"
      className={cn('px-6 [&:last-child]:pb-6', className)}
      {...props}
    />
  )
}

function CardFooter({className, ...props}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-footer"
      className={cn('flex items-center px-6 pb-6 [.border-t]:pt-6', className)}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
