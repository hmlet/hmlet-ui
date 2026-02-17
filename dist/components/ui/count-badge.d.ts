import * as React from 'react';
import { type VariantProps } from './cva';
declare const countBadgeVariants: (props?: {
    variant?: "primary" | "secondary" | "destructive" | "success" | "muted";
    size?: "sm" | "md" | "lg";
} & import("class-variance-authority/types").ClassProp) => string;
interface CountBadgeProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof countBadgeVariants> {
    count: number;
}
export declare const CountBadge: React.ForwardRefExoticComponent<CountBadgeProps & React.RefAttributes<HTMLSpanElement>>;
export type CountBadgeVariants = VariantProps<typeof countBadgeVariants>;
export { countBadgeVariants };
