import * as React from 'react';
import { type VariantProps } from './cva';
declare const textareaVariants: (props?: {
    variant?: "error" | "default" | "success";
} & import("class-variance-authority/types").ClassProp) => string;
interface TextareaProps extends React.ComponentProps<'textarea'>, VariantProps<typeof textareaVariants> {
}
declare const Textarea: React.ForwardRefExoticComponent<Omit<TextareaProps, "ref"> & React.RefAttributes<HTMLTextAreaElement>>;
export type TextareaVariants = VariantProps<typeof textareaVariants>;
export { Textarea, textareaVariants };
