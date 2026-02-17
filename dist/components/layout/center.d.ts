import React from 'react';
import { type VariantProps } from './cva';
/**
 * Center - Content centering utility
 *
 * Centers content both horizontally and vertically using flexbox.
 * Useful for empty states, modals, and full-screen layouts.
 *
 * @example
 * <Center height="full">
 *   <div>Centered content</div>
 * </Center>
 */
declare const centerVariants: (props?: {
    inline?: boolean;
    height?: "auto" | "full" | "screen";
    p?: 1 | 2 | 16 | "none" | 3 | 4 | 6 | 8 | 12 | 20;
    px?: 1 | 2 | 16 | "none" | 3 | 4 | 6 | 8 | 12 | 20;
    py?: 1 | 2 | 16 | "none" | 3 | 4 | 6 | 8 | 12 | 20;
    m?: 1 | 2 | 16 | "none" | 3 | 4 | 6 | 8 | 12 | 20;
    mx?: 1 | 2 | 16 | "none" | 3 | 4 | 6 | 8 | 12 | 20;
    my?: 1 | 2 | 16 | "none" | 3 | 4 | 6 | 8 | 12 | 20;
    width?: "auto" | "full" | "fit" | "screen";
    shadow?: "sm" | "md" | "lg" | "none" | "default" | "xl" | "2xl" | "inner" | "outline";
    display?: "grid" | "inline" | "block" | "inline-block" | "flex" | "inline-flex";
} & import("class-variance-authority/types").ClassProp) => string;
export interface CenterProps extends React.HTMLAttributes<HTMLDivElement>, Omit<VariantProps<typeof centerVariants>, 'padding' | 'margin'> {
    as?: React.ElementType;
    children?: React.ReactNode;
    p?: VariantProps<typeof centerVariants>['p'];
    px?: VariantProps<typeof centerVariants>['px'];
    py?: VariantProps<typeof centerVariants>['py'];
    m?: VariantProps<typeof centerVariants>['m'];
    mx?: VariantProps<typeof centerVariants>['mx'];
    my?: VariantProps<typeof centerVariants>['my'];
}
export declare const Center: React.ForwardRefExoticComponent<CenterProps & React.RefAttributes<HTMLDivElement>>;
export {};
