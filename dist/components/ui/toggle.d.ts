import * as React from 'react';
import * as TogglePrimitive from '@radix-ui/react-toggle';
import { type VariantProps } from './cva';
declare const toggleVariants: (props?: {
    variant?: "default" | "outline";
    size?: "sm" | "md" | "lg" | "default";
} & import("class-variance-authority/types").ClassProp) => string;
declare function Toggle({ className, variant, size, ...props }: React.ComponentProps<typeof TogglePrimitive.Root> & VariantProps<typeof toggleVariants>): import("react/jsx-runtime").JSX.Element;
export type ToggleVariants = VariantProps<typeof toggleVariants>;
export { Toggle, toggleVariants };
