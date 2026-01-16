import * as React from 'react'
import {Slot} from '@radix-ui/react-slot'
import {cn} from './utils'

type FieldOrientation = 'vertical' | 'horizontal' | 'responsive'

interface FieldSetProps extends React.ComponentProps<'fieldset'> {
  children: React.ReactNode
}

const FieldSet = React.forwardRef<HTMLFieldSetElement, FieldSetProps>(
  ({className, children, ...props}, ref) => {
    return (
      <fieldset
        ref={ref}
        data-slot="field-set"
        className={cn('flex flex-col gap-4', className)}
        {...props}
      >
        {children}
      </fieldset>
    )
  },
)

FieldSet.displayName = 'FieldSet'

interface FieldLegendProps extends React.ComponentProps<'legend'> {
  children: React.ReactNode
  variant?: 'legend' | 'label'
}

const FieldLegend = React.forwardRef<HTMLLegendElement, FieldLegendProps>(
  ({className, children, variant = 'legend', ...props}, ref) => {
    return (
      <legend
        ref={ref}
        data-slot="field-legend"
        data-variant={variant}
        className={cn(
          variant === 'label'
            ? 'text-body-base font-medium text-foreground'
            : 'text-body-lg font-semibold text-foreground',
          className,
        )}
        {...props}
      >
        {children}
      </legend>
    )
  },
)

FieldLegend.displayName = 'FieldLegend'

interface FieldGroupProps extends React.ComponentProps<'div'> {
  children: React.ReactNode
}

const FieldGroup = React.forwardRef<HTMLDivElement, FieldGroupProps>(
  ({className, children, ...props}, ref) => {
    return (
      <div
        ref={ref}
        data-slot="field-group"
        className={cn('flex flex-col gap-6', className)}
        {...props}
      >
        {children}
      </div>
    )
  },
)

FieldGroup.displayName = 'FieldGroup'

interface FieldProps extends React.ComponentProps<'div'> {
  children: React.ReactNode
  orientation?: FieldOrientation
  disabled?: boolean
  invalid?: boolean
  readOnly?: boolean
  required?: boolean
}

const Field = React.forwardRef<HTMLDivElement, FieldProps>(
  (
    {
      className,
      children,
      orientation = 'vertical',
      role,
      disabled,
      invalid,
      readOnly,
      required,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        data-slot="field"
        data-disabled={disabled}
        data-invalid={invalid}
        data-readonly={readOnly}
        data-required={required}
        data-orientation={orientation}
        role={role ?? 'group'}
        className={cn(
          'w-full',
          'data-[disabled=true]:opacity-50 data-[disabled=true]:cursor-not-allowed',
          'data-[invalid=true]:[&_[data-slot=field-label]]:text-destructive',
          'data-[orientation=horizontal]:[&_[data-slot=field-description]]:text-balance',
          'data-[orientation=vertical]:flex data-[orientation=vertical]:flex-col data-[orientation=vertical]:gap-2',
          'data-[orientation=horizontal]:flex data-[orientation=horizontal]:flex-row data-[orientation=horizontal]:items-start data-[orientation=horizontal]:gap-4',
          'data-[orientation=responsive]:flex data-[orientation=responsive]:flex-col data-[orientation=responsive]:gap-2 @md/field-group:flex-row @md/field-group:items-start @md/field-group:gap-4',
          className,
        )}
        {...props}
      >
        {children}
      </div>
    )
  },
)

Field.displayName = 'Field'

interface FieldLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode
  required?: boolean
  asChild?: boolean
}

const FieldLabel = React.forwardRef<HTMLLabelElement, FieldLabelProps>(
  ({className, children, required, asChild = false, ...props}, ref) => {
    if (asChild) {
      const child = React.Children.toArray(children).find(
        React.isValidElement,
      ) as React.ReactElement<unknown> | undefined

      if (!child) return null

      const childChildren = (child.props as {children?: React.ReactNode})
        .children

      const composedChild = required
        ? React.cloneElement(
            child,
            undefined,
            <>
              {childChildren}
              <span className="text-destructive ml-1">*</span>
            </>,
          )
        : child

      return (
        <Slot
          ref={ref as never}
          data-slot="field-label"
          className={cn(
            'text-body-base font-medium text-foreground',
            'peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
            className,
          )}
          {...props}
        >
          {composedChild}
        </Slot>
      )
    }

    return (
      <label
        ref={ref}
        data-slot="field-label"
        className={cn(
          'text-body-base font-medium text-foreground',
          'peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
          className,
        )}
        {...props}
      >
        {children}
        {required && <span className="text-destructive ml-1">*</span>}
      </label>
    )
  },
)

FieldLabel.displayName = 'FieldLabel'

interface FieldContentProps extends React.ComponentProps<'div'> {
  children: React.ReactNode
}

const FieldContent = React.forwardRef<HTMLDivElement, FieldContentProps>(
  ({className, children, ...props}, ref) => {
    return (
      <div
        ref={ref}
        data-slot="field-content"
        className={cn('flex min-w-0 flex-1 flex-col gap-1', className)}
        {...props}
      >
        {children}
      </div>
    )
  },
)

FieldContent.displayName = 'FieldContent'

interface FieldTitleProps extends React.ComponentProps<'div'> {
  children: React.ReactNode
}

const FieldTitle = React.forwardRef<HTMLDivElement, FieldTitleProps>(
  ({className, children, ...props}, ref) => {
    return (
      <div
        ref={ref}
        data-slot="field-title"
        className={cn('text-body-base font-medium text-foreground', className)}
        {...props}
      >
        {children}
      </div>
    )
  },
)

FieldTitle.displayName = 'FieldTitle'

interface FieldDescriptionProps extends React.ComponentProps<'p'> {
  children: React.ReactNode
}

const FieldDescription = React.forwardRef<
  HTMLParagraphElement,
  FieldDescriptionProps
>(({className, children, ...props}, ref) => {
  return (
    <p
      ref={ref}
      data-slot="field-description"
      className={cn('text-body-sm text-muted-foreground', className)}
      {...props}
    >
      {children}
    </p>
  )
})

FieldDescription.displayName = 'FieldDescription'

type FieldErrorLike = {message?: string} | undefined
type FieldIssueLike =
  | {
      message?: string
    }
  | undefined

interface FieldErrorProps extends React.ComponentProps<'div'> {
  children?: React.ReactNode
  errors?: Array<FieldErrorLike>
  issues?: Array<FieldIssueLike>
}

const FieldError = React.forwardRef<HTMLDivElement, FieldErrorProps>(
  ({className, children, errors, issues, ...props}, ref) => {
    const items = (errors ?? issues)
      ?.map(e => (typeof e?.message === 'string' ? e.message : undefined))
      .filter(Boolean) as string[] | undefined

    const body = children ?? (items?.length ? items : null)
    if (!body) return null

    return (
      <div
        ref={ref}
        data-slot="field-error"
        role="alert"
        className={cn('text-body-sm text-destructive font-medium', className)}
        {...props}
      >
        {Array.isArray(body) ? (
          body.length === 1 ? (
            <p>{body[0]}</p>
          ) : (
            <ul className="list-disc pl-5">
              {body.map((message, index) => (
                <li key={`${message}-${index}`}>{message}</li>
              ))}
            </ul>
          )
        ) : (
          body
        )}
      </div>
    )
  },
)

FieldError.displayName = 'FieldError'

interface FieldSeparatorProps extends React.ComponentProps<'div'> {
  children?: React.ReactNode
}

const FieldSeparator = React.forwardRef<HTMLDivElement, FieldSeparatorProps>(
  ({className, children, ...props}, ref) => {
    if (!children) {
      return (
        <div
          ref={ref}
          data-slot="field-separator"
          className={cn('bg-border h-px w-full', className)}
          {...props}
        />
      )
    }

    return (
      <div
        ref={ref}
        data-slot="field-separator"
        className={cn(
          'flex items-center gap-3 text-body-xs text-muted-foreground',
          className,
        )}
        {...props}
      >
        <span className="bg-border h-px flex-1" />
        <span>{children}</span>
        <span className="bg-border h-px flex-1" />
      </div>
    )
  },
)

FieldSeparator.displayName = 'FieldSeparator'

// Backward-compatible aliases
const FieldHelpText = FieldDescription
FieldHelpText.displayName = 'FieldHelpText'

const FieldErrorText = React.forwardRef<
  HTMLParagraphElement,
  React.ComponentProps<'p'>
>(({className, ...props}, ref) => {
  return (
    <p
      ref={ref}
      data-slot="field-error-text"
      role="alert"
      className={cn('text-body-sm text-destructive font-medium', className)}
      {...props}
    />
  )
})

FieldErrorText.displayName = 'FieldErrorText'

export {
  FieldSet,
  FieldLegend,
  FieldGroup,
  Field,
  FieldContent,
  FieldLabel,
  FieldTitle,
  FieldDescription,
  FieldSeparator,
  FieldError,
  // aliases
  FieldHelpText,
  FieldErrorText,
}
