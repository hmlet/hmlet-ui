import * as React from 'react';
type FieldOrientation = 'vertical' | 'horizontal' | 'responsive';
interface FieldSetProps extends React.ComponentProps<'fieldset'> {
    children: React.ReactNode;
}
declare const FieldSet: React.ForwardRefExoticComponent<Omit<FieldSetProps, "ref"> & React.RefAttributes<HTMLFieldSetElement>>;
interface FieldLegendProps extends React.ComponentProps<'legend'> {
    children: React.ReactNode;
    variant?: 'legend' | 'label';
}
declare const FieldLegend: React.ForwardRefExoticComponent<Omit<FieldLegendProps, "ref"> & React.RefAttributes<HTMLLegendElement>>;
interface FieldGroupProps extends React.ComponentProps<'div'> {
    children: React.ReactNode;
}
declare const FieldGroup: React.ForwardRefExoticComponent<Omit<FieldGroupProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
interface FieldProps extends React.ComponentProps<'div'> {
    children: React.ReactNode;
    orientation?: FieldOrientation;
    disabled?: boolean;
    invalid?: boolean;
    readOnly?: boolean;
    required?: boolean;
}
declare const Field: React.ForwardRefExoticComponent<Omit<FieldProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
interface FieldLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    children: React.ReactNode;
    required?: boolean;
    asChild?: boolean;
}
declare const FieldLabel: React.ForwardRefExoticComponent<FieldLabelProps & React.RefAttributes<HTMLLabelElement>>;
interface FieldContentProps extends React.ComponentProps<'div'> {
    children: React.ReactNode;
}
declare const FieldContent: React.ForwardRefExoticComponent<Omit<FieldContentProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
interface FieldTitleProps extends React.ComponentProps<'div'> {
    children: React.ReactNode;
}
declare const FieldTitle: React.ForwardRefExoticComponent<Omit<FieldTitleProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
interface FieldDescriptionProps extends React.ComponentProps<'p'> {
    children: React.ReactNode;
}
declare const FieldDescription: React.ForwardRefExoticComponent<Omit<FieldDescriptionProps, "ref"> & React.RefAttributes<HTMLParagraphElement>>;
type FieldErrorLike = {
    message?: string;
} | undefined;
type FieldIssueLike = {
    message?: string;
} | undefined;
interface FieldErrorProps extends React.ComponentProps<'div'> {
    children?: React.ReactNode;
    errors?: Array<FieldErrorLike>;
    issues?: Array<FieldIssueLike>;
}
declare const FieldError: React.ForwardRefExoticComponent<Omit<FieldErrorProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
interface FieldSeparatorProps extends React.ComponentProps<'div'> {
    children?: React.ReactNode;
}
declare const FieldSeparator: React.ForwardRefExoticComponent<Omit<FieldSeparatorProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const FieldHelpText: React.ForwardRefExoticComponent<Omit<FieldDescriptionProps, "ref"> & React.RefAttributes<HTMLParagraphElement>>;
declare const FieldErrorText: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, "ref"> & React.RefAttributes<HTMLParagraphElement>>;
export { FieldSet, FieldLegend, FieldGroup, Field, FieldContent, FieldLabel, FieldTitle, FieldDescription, FieldSeparator, FieldError, FieldHelpText, FieldErrorText, };
