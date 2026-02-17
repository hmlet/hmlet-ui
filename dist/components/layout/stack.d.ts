import React from 'react';
import { type VariantProps } from './cva';
import { type WithNumberish } from './types';
/**
 * Stack - One-dimensional layout component
 *
 * Manages spacing between children in a single direction (vertical or horizontal).
 * Stack owns spacing - children should never define margins.
 *
 * @example
 * <Stack direction="vertical" gap="4" align="start">
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 * </Stack>
 */
declare const stackVariants: (props?: {
    direction?: "horizontal" | "vertical";
    gap?: 0 | 1 | 2 | 16 | 3 | 4 | 6 | 8 | 12 | 20;
    align?: "center" | "end" | "baseline" | "start" | "stretch";
    justify?: "center" | "end" | "start" | "space-between" | "space-around" | "space-evenly";
    wrap?: "nowrap" | "wrap" | "wrap-reverse";
    p?: 1 | 2 | 16 | "none" | 3 | 4 | 6 | 8 | 12 | 20;
    px?: 1 | 2 | 16 | "none" | 3 | 4 | 6 | 8 | 12 | 20;
    py?: 1 | 2 | 16 | "none" | 3 | 4 | 6 | 8 | 12 | 20;
    m?: 1 | 2 | 16 | "none" | 3 | 4 | 6 | 8 | 12 | 20;
    mx?: 1 | 2 | 16 | "none" | 3 | 4 | 6 | 8 | 12 | 20;
    my?: 1 | 2 | 16 | "none" | 3 | 4 | 6 | 8 | 12 | 20;
    width?: "auto" | "full" | "fit" | "screen";
    height?: "auto" | "full" | "fit" | "screen";
    shadow?: "sm" | "md" | "lg" | "none" | "default" | "xl" | "2xl" | "inner" | "outline";
    display?: "grid" | "inline" | "block" | "inline-block" | "flex" | "inline-flex";
} & import("class-variance-authority/types").ClassProp) => string;
type StackVariantProps = VariantProps<typeof stackVariants>;
export interface StackProps extends React.HTMLAttributes<HTMLDivElement>, Omit<StackVariantProps, 'gap'> {
    as?: React.ElementType;
    children?: React.ReactNode;
    gap?: WithNumberish<StackVariantProps['gap']>;
    p?: VariantProps<typeof stackVariants>['p'];
    px?: VariantProps<typeof stackVariants>['px'];
    py?: VariantProps<typeof stackVariants>['py'];
    m?: VariantProps<typeof stackVariants>['m'];
    mx?: VariantProps<typeof stackVariants>['mx'];
    my?: VariantProps<typeof stackVariants>['my'];
    width?: VariantProps<typeof stackVariants>['width'];
    height?: VariantProps<typeof stackVariants>['height'];
    shadow?: VariantProps<typeof stackVariants>['shadow'];
    display?: VariantProps<typeof stackVariants>['display'];
}
export declare const Stack: React.ForwardRefExoticComponent<StackProps & React.RefAttributes<HTMLDivElement>>;
export {};
