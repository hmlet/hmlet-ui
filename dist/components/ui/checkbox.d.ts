import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { type VariantProps } from './cva';
declare const checkboxVariants: (props?: {
    variant?: "primary" | "secondary" | "error";
    size?: "sm" | "md" | "lg";
} & import("class-variance-authority/types").ClassProp) => string;
interface CheckboxProps extends React.ComponentProps<typeof CheckboxPrimitive.Root>, VariantProps<typeof checkboxVariants> {
    label?: React.ReactNode;
}
declare const Checkbox: React.ForwardRefExoticComponent<Omit<CheckboxProps, "ref"> & React.RefAttributes<HTMLButtonElement>>;
export type CheckboxVariants = VariantProps<typeof checkboxVariants>;
export { Checkbox, checkboxVariants };
