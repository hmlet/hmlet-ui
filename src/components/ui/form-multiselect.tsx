import * as React from 'react'
import {Multiselect, type MultiselectProps} from './multiselect'
import {Typography} from './typography'
import {Label} from './label'
import {VStack} from '../layout'
import {cn} from './utils'

interface FormMultiselectProps extends Omit<MultiselectProps, 'className'> {
  label?: string
  error?: string
  helperText?: string
  required?: boolean
  className?: string
}

export const FormMultiselect = React.forwardRef<
  HTMLDivElement,
  FormMultiselectProps
>(({label, error, helperText, required, className, disabled, ...props}) => {
  return (
    <VStack gap="2" className="group" data-disabled={disabled}>
      {label && (
        <Label>
          {label}
          {required && <span className="text-destructive ml-1">*</span>}
        </Label>
      )}

      <Multiselect
        {...props}
        disabled={disabled}
        className={cn(error && 'border-destructive', className)}
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

FormMultiselect.displayName = 'FormMultiselect'
