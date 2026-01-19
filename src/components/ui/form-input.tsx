import * as React from 'react'
import {Input} from './input'
import {Textarea} from './textarea'
import {Typography} from './typography'
import type {LucideIcon} from 'lucide-react'
import {cn} from './utils'
import {VStack, HStack} from '../layout'
import {SelectNative} from './select-native'

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
  icon?: LucideIcon
  required?: boolean
}

export const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  (
    {label, error, helperText, icon: Icon, required, className, ...props},
    ref,
  ) => {
    return (
      <VStack gap="2">
        {label && (
          <Typography variant="body-sm" className="font-medium">
            {label}
            {required && <span className="text-destructive ml-1">*</span>}
          </Typography>
        )}
        {Icon ? (
          <HStack gap="2" className="relative">
            <Icon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none" />
            <Input
              ref={ref}
              className={cn('pl-10', error && 'border-destructive', className)}
              {...props}
            />
          </HStack>
        ) : (
          <Input
            ref={ref}
            className={cn(error && 'border-destructive', className)}
            {...props}
          />
        )}
        {error && (
          <Typography variant="body-sm" className="text-destructive">
            {error}
          </Typography>
        )}
        {helperText && !error && (
          <Typography variant="body-sm" className="text-muted-foreground">
            {helperText}
          </Typography>
        )}
      </VStack>
    )
  },
)

FormInput.displayName = 'FormInput'

interface FormTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  helperText?: string
  required?: boolean
}

export const FormTextarea = React.forwardRef<
  HTMLTextAreaElement,
  FormTextareaProps
>(({label, error, helperText, required, className, ...props}, ref) => {
  return (
    <VStack gap="2">
      {label && (
        <Typography variant="body-sm" className="font-medium">
          {label}
          {required && <span className="text-destructive ml-1">*</span>}
        </Typography>
      )}
      <Textarea
        ref={ref}
        className={cn(error && 'border-destructive', className)}
        {...props}
      />
      {error && (
        <Typography variant="body-sm" className="text-destructive">
          {error}
        </Typography>
      )}
      {helperText && !error && (
        <Typography variant="body-sm" className="text-muted-foreground">
          {helperText}
        </Typography>
      )}
    </VStack>
  )
})

FormTextarea.displayName = 'FormTextarea'

interface FormSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  error?: string
  helperText?: string
  options: Array<{value: string; label: string}>
  placeholder?: string
  required?: boolean
}

export const FormSelect = React.forwardRef<HTMLSelectElement, FormSelectProps>(
  (
    {
      label,
      error,
      helperText,
      options,
      placeholder,
      required,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <VStack gap="2">
        {label && (
          <Typography variant="body-sm" className="font-medium">
            {label}
            {required && <span className="text-destructive ml-1">*</span>}
          </Typography>
        )}
        <SelectNative
          ref={ref}
          options={options}
          placeholder={placeholder}
          className={cn(error && 'border-destructive', className)}
          {...props}
        />
        {error && (
          <Typography variant="body-sm" className="text-destructive">
            {error}
          </Typography>
        )}
        {helperText && !error && (
          <Typography variant="body-sm" className="text-muted-foreground">
            {helperText}
          </Typography>
        )}
      </VStack>
    )
  },
)

FormSelect.displayName = 'FormSelect'
