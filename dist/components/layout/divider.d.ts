import React from 'react';
import { type VariantProps } from './cva';
import type { WithNumberish } from './types';
/**
 * Divider - Structural separator
 *
 * Visual separator between content blocks.
 * Can be horizontal or vertical, with configurable thickness.
 *
 * @example
 * <VStack gap="4">
 *   <div>Section 1</div>
 *   <Divider />
 *   <div>Section 2</div>
 * </VStack>
 */
declare const dividerVariants: (props?: {
    orientation?: "horizontal" | "vertical";
    thickness?: 1 | 2;
    spacing?: 2 | "none" | 4 | 6;
} & import("class-variance-authority/types").ClassProp) => string;
type DividerVariantProps = VariantProps<typeof dividerVariants>;
export interface DividerProps extends React.HTMLAttributes<HTMLDivElement>, Omit<DividerVariantProps, 'thickness' | 'spacing'> {
    as?: React.ElementType;
    thickness?: WithNumberish<DividerVariantProps['thickness']>;
    spacing?: WithNumberish<DividerVariantProps['spacing']>;
}
export declare const Divider: React.ForwardRefExoticComponent<DividerProps & React.RefAttributes<HTMLDivElement>>;
export {};
