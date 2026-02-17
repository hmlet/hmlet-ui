import * as React from 'react';
import { type MultiselectProps } from './multiselect';
interface FormMultiselectProps extends Omit<MultiselectProps, 'className'> {
    label?: string;
    error?: string;
    helperText?: string;
    required?: boolean;
    className?: string;
}
export declare const FormMultiselect: React.ForwardRefExoticComponent<FormMultiselectProps & React.RefAttributes<HTMLDivElement>>;
export {};
