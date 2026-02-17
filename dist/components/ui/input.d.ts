import * as React from 'react';
import { type VariantProps } from './cva';
declare const inputVariants: (props?: {
    variant?: "error" | "default" | "success";
    size?: "sm" | "md" | "lg";
} & import("class-variance-authority/types").ClassProp) => string;
export interface InputProps extends Omit<React.ComponentProps<'input'>, 'size'>, Omit<VariantProps<typeof inputVariants>, 'inputSize'> {
    size?: 'sm' | 'md' | 'lg';
}
declare const Input: React.ForwardRefExoticComponent<Omit<InputProps, "ref"> & React.RefAttributes<HTMLInputElement>>;
export type InputVariants = VariantProps<typeof inputVariants>;
export { Input, inputVariants };
