import * as React from 'react';
import { type VariantProps } from './cva';
declare const buttonVariants: (props?: {
    variant?: "outline" | "default" | "link" | "primary" | "secondary" | "destructive" | "success" | "primary-outline" | "primary-ghost" | "secondary-outline" | "secondary-ghost" | "ghost";
    size?: "sm" | "md" | "lg" | "xs" | "icon" | "xxs" | "icon-sm" | "icon-lg";
} & import("class-variance-authority/types").ClassProp) => string;
declare function Button({ className, variant, size, asChild, loading, loadingText, ...props }: React.ComponentProps<'button'> & VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    loading?: boolean;
    loadingText?: React.ReactNode;
}): import("react/jsx-runtime").JSX.Element;
export type ButtonVariants = VariantProps<typeof buttonVariants>;
export { Button, buttonVariants };
