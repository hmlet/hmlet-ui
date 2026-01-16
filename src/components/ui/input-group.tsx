import * as React from 'react'
import {cn} from './utils'

interface InputGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const InputGroup = React.forwardRef<HTMLDivElement, InputGroupProps>(
  ({className, children, ...props}, ref) => {
    return (
      <div
        ref={ref}
        data-slot="input-group"
        className={cn('relative flex w-full', className)}
        {...props}
      >
        {children}
      </div>
    )
  },
)

InputGroup.displayName = 'InputGroup'

interface InputLeftAddonProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const InputLeftAddon = React.forwardRef<HTMLDivElement, InputLeftAddonProps>(
  ({className, children, ...props}, ref) => {
    return (
      <div
        ref={ref}
        data-slot="input-left-addon"
        className={cn(
          'inline-flex items-center px-4 border border-r-0 border-input bg-muted rounded-l-md text-muted-foreground text-body-base',
          'dark:bg-card dark:border-border',
          className,
        )}
        {...props}
      >
        {children}
      </div>
    )
  },
)

InputLeftAddon.displayName = 'InputLeftAddon'

interface InputRightAddonProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const InputRightAddon = React.forwardRef<HTMLDivElement, InputRightAddonProps>(
  ({className, children, ...props}, ref) => {
    return (
      <div
        ref={ref}
        data-slot="input-right-addon"
        className={cn(
          'inline-flex items-center px-4 border border-l-0 border-input bg-muted rounded-r-md text-muted-foreground text-body-base',
          'dark:bg-card dark:border-border',
          className,
        )}
        {...props}
      >
        {children}
      </div>
    )
  },
)

InputRightAddon.displayName = 'InputRightAddon'

interface InputLeftElementProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const InputLeftElement = React.forwardRef<
  HTMLDivElement,
  InputLeftElementProps
>(({className, children, ...props}, ref) => {
  return (
    <div
      ref={ref}
      data-slot="input-left-element"
      className={cn(
        'absolute left-0 top-0 bottom-0 flex items-center pl-3 pointer-events-none text-muted-foreground',
        '[&>svg]:size-5',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
})

InputLeftElement.displayName = 'InputLeftElement'

interface InputRightElementProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const InputRightElement = React.forwardRef<
  HTMLDivElement,
  InputRightElementProps
>(({className, children, ...props}, ref) => {
  return (
    <div
      ref={ref}
      data-slot="input-right-element"
      className={cn(
        'absolute right-0 top-0 bottom-0 flex items-center pr-3 text-muted-foreground',
        '[&>svg]:size-5',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
})

InputRightElement.displayName = 'InputRightElement'

export {
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  InputLeftElement,
  InputRightElement,
}
