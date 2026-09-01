import React from 'react';
import { type VariantProps } from './cva';
/**
 * Box - The most basic layout primitive
 *
 * A generic container component that provides spacing, sizing,
 * and basic layout control. All layout components are built on Box.
 *
 * @example
 * <Box padding="4" width="full">
 *   Content
 * </Box>
 */
declare const boxVariants: (props?: {
    p?: 2 | 1 | "none" | 3 | 4 | 6 | 8 | 12 | 16 | 20;
    px?: 2 | 1 | "none" | 3 | 4 | 6 | 8 | 12 | 16 | 20;
    py?: 2 | 1 | "none" | 3 | 4 | 6 | 8 | 12 | 16 | 20;
    m?: 2 | 1 | "none" | 3 | 4 | 6 | 8 | 12 | 16 | 20;
    mx?: 2 | 1 | "none" | 3 | 4 | 6 | 8 | 12 | 16 | 20;
    my?: 2 | 1 | "none" | 3 | 4 | 6 | 8 | 12 | 16 | 20;
    shadow?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "inner" | "outline" | "default";
    width?: "auto" | "full" | "fit" | "screen";
    height?: "auto" | "full" | "fit" | "screen";
    display?: "block" | "inline" | "inline-block" | "flex" | "inline-flex" | "grid";
} & import("class-variance-authority/types").ClassProp) => string;
export interface BoxProps extends React.HTMLAttributes<HTMLDivElement>, Omit<VariantProps<typeof boxVariants>, 'padding' | 'paddingX' | 'paddingY' | 'margin' | 'marginX' | 'marginY'> {
    as?: React.ElementType;
    children?: React.ReactNode;
    p?: VariantProps<typeof boxVariants>['p'];
    px?: VariantProps<typeof boxVariants>['px'];
    py?: VariantProps<typeof boxVariants>['py'];
    m?: VariantProps<typeof boxVariants>['m'];
    mx?: VariantProps<typeof boxVariants>['mx'];
    my?: VariantProps<typeof boxVariants>['my'];
    /** Alias for `p` */
    padding?: VariantProps<typeof boxVariants>['p'];
    /** Alias for `px` */
    paddingX?: VariantProps<typeof boxVariants>['px'];
    /** Alias for `py` */
    paddingY?: VariantProps<typeof boxVariants>['py'];
    /** Alias for `m` */
    margin?: VariantProps<typeof boxVariants>['m'];
    /** Alias for `mx` */
    marginX?: VariantProps<typeof boxVariants>['mx'];
    /** Alias for `my` */
    marginY?: VariantProps<typeof boxVariants>['my'];
}
export declare const Box: React.ForwardRefExoticComponent<BoxProps & React.RefAttributes<HTMLDivElement>>;
export {};
