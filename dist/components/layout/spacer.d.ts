import React from 'react';
import { type VariantProps } from './cva';
/**
 * Spacer - Flexible space component
 *
 * Expands to fill available space within flex containers (Stack, HStack, VStack, Inline).
 * Used to push elements apart or create flexible spacing.
 *
 * @example
 * <HStack>
 *   <div>Left</div>
 *   <Spacer />
 *   <div>Right (pushed to end)</div>
 * </HStack>
 */
declare const spacerVariants: (props?: {
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
export interface SpacerProps extends React.HTMLAttributes<HTMLDivElement>, Omit<VariantProps<typeof spacerVariants>, 'margin'> {
    as?: React.ElementType;
    p?: VariantProps<typeof spacerVariants>['p'];
    px?: VariantProps<typeof spacerVariants>['px'];
    py?: VariantProps<typeof spacerVariants>['py'];
    m?: VariantProps<typeof spacerVariants>['m'];
    mx?: VariantProps<typeof spacerVariants>['mx'];
    my?: VariantProps<typeof spacerVariants>['my'];
}
export declare const Spacer: React.ForwardRefExoticComponent<SpacerProps & React.RefAttributes<HTMLDivElement>>;
export type SpacerVariants = VariantProps<typeof spacerVariants>;
export { spacerVariants };
