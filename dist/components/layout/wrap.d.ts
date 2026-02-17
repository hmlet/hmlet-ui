import React from 'react';
import { type VariantProps } from './cva';
import { type WithNumberish } from './types';
/**
 * Wrap - Wrapping horizontal layout
 *
 * A horizontal layout that automatically wraps children onto multiple lines.
 * Ideal for tags, filters, and dynamic content collections.
 *
 * @example
 * <Wrap gap="2">
 *   <Badge>Tag 1</Badge>
 *   <Badge>Tag 2</Badge>
 *   <Badge>Tag 3</Badge>
 * </Wrap>
 */
declare const wrapVariants: (props?: {
    gap?: 0 | 1 | 2 | 3 | 4 | 6;
    align?: "center" | "end" | "baseline" | "start" | "stretch";
    justify?: "center" | "end" | "start" | "space-between";
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
type WrapVariantProps = VariantProps<typeof wrapVariants>;
export interface WrapProps extends React.HTMLAttributes<HTMLDivElement>, Omit<WrapVariantProps, 'gap' | 'padding' | 'margin'> {
    as?: React.ElementType;
    children?: React.ReactNode;
    gap?: WithNumberish<WrapVariantProps['gap']>;
    p?: VariantProps<typeof wrapVariants>['p'];
    px?: VariantProps<typeof wrapVariants>['px'];
    py?: VariantProps<typeof wrapVariants>['py'];
    m?: VariantProps<typeof wrapVariants>['m'];
    mx?: VariantProps<typeof wrapVariants>['mx'];
    my?: VariantProps<typeof wrapVariants>['my'];
    width?: VariantProps<typeof wrapVariants>['width'];
    height?: VariantProps<typeof wrapVariants>['height'];
    shadow?: VariantProps<typeof wrapVariants>['shadow'];
    display?: VariantProps<typeof wrapVariants>['display'];
}
export declare const Wrap: React.ForwardRefExoticComponent<WrapProps & React.RefAttributes<HTMLDivElement>>;
export type WrapVariants = VariantProps<typeof wrapVariants>;
export { wrapVariants };
