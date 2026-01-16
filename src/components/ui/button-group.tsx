import * as React from 'react'
import {Slot} from '@radix-ui/react-slot'
import * as SeparatorPrimitive from '@radix-ui/react-separator'
import {cn} from './utils'

interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'attached' | 'separated'
  orientation?: 'horizontal' | 'vertical'
  children: React.ReactNode
}

type ButtonGroupSeparatorProps = React.ComponentProps<
  typeof SeparatorPrimitive.Root
>

interface ButtonGroupTextProps extends React.ComponentProps<'span'> {
  asChild?: boolean
}

const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  (
    {
      className,
      variant = 'attached',
      orientation = 'horizontal',
      children,
      ...props
    },
    ref,
  ) => {
    const isAttached = variant === 'attached'
    const isVertical = orientation === 'vertical'

    return (
      <div
        ref={ref}
        role="group"
        data-slot="button-group"
        className={cn(
          'inline-flex items-stretch',
          isVertical ? 'flex-col' : 'flex-row',
          isAttached &&
            !isVertical &&
            '[&>:is(button,[data-slot=button],input,[data-slot=input],[data-slot=button-group-text],[data-slot=select-trigger],[data-slot=input-group],[data-slot=input-left-addon],[data-slot=input-right-addon]):not(:first-child)]:rounded-l-none [&>:is(button,[data-slot=button],input,[data-slot=input],[data-slot=button-group-text],[data-slot=select-trigger],[data-slot=input-group],[data-slot=input-left-addon],[data-slot=input-right-addon]):not(:last-child)]:rounded-r-none [&>:is(button,[data-slot=button],input,[data-slot=input],[data-slot=button-group-text],[data-slot=select-trigger],[data-slot=input-group],[data-slot=input-left-addon],[data-slot=input-right-addon]):not(:last-child)]:border-r-0',
          isAttached &&
            isVertical &&
            '[&>:is(button,[data-slot=button],input,[data-slot=input],[data-slot=button-group-text],[data-slot=select-trigger],[data-slot=input-group],[data-slot=input-left-addon],[data-slot=input-right-addon]):not(:first-child)]:rounded-t-none [&>:is(button,[data-slot=button],input,[data-slot=input],[data-slot=button-group-text],[data-slot=select-trigger],[data-slot=input-group],[data-slot=input-left-addon],[data-slot=input-right-addon]):not(:last-child)]:rounded-b-none [&>:is(button,[data-slot=button],input,[data-slot=input],[data-slot=button-group-text],[data-slot=select-trigger],[data-slot=input-group],[data-slot=input-left-addon],[data-slot=input-right-addon]):not(:last-child)]:border-b-0',
          !isAttached && !isVertical && 'gap-2',
          !isAttached && isVertical && 'gap-2',
          className,
        )}
        {...props}
      >
        {children}
      </div>
    )
  },
)

ButtonGroup.displayName = 'ButtonGroup'

function ButtonGroupSeparator({
  className,
  orientation = 'vertical',
  decorative = true,
  ...props
}: ButtonGroupSeparatorProps) {
  return (
    <SeparatorPrimitive.Root
      data-slot="button-group-separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        'bg-border shrink-0 self-stretch data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px',
        className,
      )}
      {...props}
    />
  )
}

function ButtonGroupText({
  className,
  asChild = false,
  ...props
}: ButtonGroupTextProps) {
  const Comp = asChild ? Slot : 'span'

  return (
    <Comp
      data-slot="button-group-text"
      className={cn(
        'inline-flex items-center justify-center whitespace-nowrap rounded-md border border-input bg-input-background px-3 text-sm font-medium text-muted-foreground',
        className,
      )}
      {...props}
    />
  )
}

export {ButtonGroup, ButtonGroupSeparator, ButtonGroupText}
