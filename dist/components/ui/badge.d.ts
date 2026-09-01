import * as React from 'react';
import { type VariantProps } from './cva';
declare const badgeVariants: (props?: {
    variant?: "outline" | "default" | "secondary" | "destructive";
} & import("class-variance-authority/types").ClassProp) => string;
declare function Badge({ className, variant, asChild, ...props }: React.ComponentProps<'span'> & VariantProps<typeof badgeVariants> & {
    asChild?: boolean;
}): import("react/jsx-runtime").JSX.Element;
export type BadgeVariants = VariantProps<typeof badgeVariants>;
export { Badge, badgeVariants };
