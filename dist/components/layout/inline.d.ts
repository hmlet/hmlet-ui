import React from 'react';
import { type VariantProps } from './cva';
import { type WithNumberish } from './types';
/**
 * Inline - Horizontal layout for inline content
 *
 * Optimized for text-adjacent content like icons, badges, and metadata.
 * Always wraps and supports baseline alignment for text.
 *
 * @example
 * <Inline gap="2" align="center">
 *   <Icon />
 *   <span>Label</span>
 * </Inline>
 */
declare const inlineVariants: (props?: {
    gap?: 0 | 2 | 1 | 3 | 4 | 6;
    align?: "center" | "start" | "baseline" | "end";
    p?: 2 | 1 | "none" | 3 | 4 | 6 | 8 | 12 | 16 | 20;
    px?: 2 | 1 | "none" | 3 | 4 | 6 | 8 | 12 | 16 | 20;
    py?: 2 | 1 | "none" | 3 | 4 | 6 | 8 | 12 | 16 | 20;
    m?: 2 | 1 | "none" | 3 | 4 | 6 | 8 | 12 | 16 | 20;
    mx?: 2 | 1 | "none" | 3 | 4 | 6 | 8 | 12 | 16 | 20;
    my?: 2 | 1 | "none" | 3 | 4 | 6 | 8 | 12 | 16 | 20;
    width?: "auto" | "full" | "fit" | "screen";
    height?: "auto" | "full" | "fit" | "screen";
    shadow?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "inner" | "outline" | "default";
    display?: "block" | "inline" | "inline-block" | "flex" | "inline-flex" | "grid";
} & import("class-variance-authority/types").ClassProp) => string;
type InlineVariantProps = VariantProps<typeof inlineVariants>;
export interface InlineProps extends React.HTMLAttributes<HTMLDivElement>, Omit<InlineVariantProps, 'gap' | 'padding' | 'margin'> {
    as?: React.ElementType;
    children?: React.ReactNode;
    gap?: WithNumberish<InlineVariantProps['gap']>;
    p?: VariantProps<typeof inlineVariants>['p'];
    px?: VariantProps<typeof inlineVariants>['px'];
    py?: VariantProps<typeof inlineVariants>['py'];
    m?: VariantProps<typeof inlineVariants>['m'];
    mx?: VariantProps<typeof inlineVariants>['mx'];
    my?: VariantProps<typeof inlineVariants>['my'];
    width?: VariantProps<typeof inlineVariants>['width'];
    height?: VariantProps<typeof inlineVariants>['height'];
    shadow?: VariantProps<typeof inlineVariants>['shadow'];
    display?: VariantProps<typeof inlineVariants>['display'];
}
export declare const Inline: React.ForwardRefExoticComponent<InlineProps & React.RefAttributes<HTMLDivElement>>;
export {};
