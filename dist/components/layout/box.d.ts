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
    p?: 1 | 2 | 16 | "none" | 3 | 4 | 6 | 8 | 12 | 20;
    px?: 1 | 2 | 16 | "none" | 3 | 4 | 6 | 8 | 12 | 20;
    py?: 1 | 2 | 16 | "none" | 3 | 4 | 6 | 8 | 12 | 20;
    m?: 1 | 2 | 16 | "none" | 3 | 4 | 6 | 8 | 12 | 20;
    mx?: 1 | 2 | 16 | "none" | 3 | 4 | 6 | 8 | 12 | 20;
    my?: 1 | 2 | 16 | "none" | 3 | 4 | 6 | 8 | 12 | 20;
    shadow?: "sm" | "md" | "lg" | "none" | "default" | "xl" | "2xl" | "inner" | "outline";
    width?: "auto" | "full" | "fit" | "screen";
    height?: "auto" | "full" | "fit" | "screen";
    display?: "grid" | "inline" | "block" | "inline-block" | "flex" | "inline-flex";
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
}
export declare const Box: React.ForwardRefExoticComponent<BoxProps & React.RefAttributes<HTMLDivElement>>;
export {};
