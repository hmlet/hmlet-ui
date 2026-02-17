import React from 'react';
import { type VariantProps } from './cva';
/**
 * Bleed - Escape parent padding
 *
 * Allows content to "bleed" outside of its parent's padding.
 * Useful for full-width images, hero sections, and breaking out of containers.
 *
 * @example
 * <Container padding="4">
 *   <p>Contained content</p>
 *   <Bleed horizontal>
 *     <img src="..." alt="Full-width image" />
 *   </Bleed>
 * </Container>
 */
declare const bleedVariants: (props?: {
    horizontal?: boolean;
    vertical?: boolean;
    all?: boolean;
} & import("class-variance-authority/types").ClassProp) => string;
export interface BleedProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof bleedVariants> {
    as?: React.ElementType;
    children?: React.ReactNode;
}
export declare const Bleed: React.ForwardRefExoticComponent<BleedProps & React.RefAttributes<HTMLDivElement>>;
export type BleedVariants = VariantProps<typeof bleedVariants>;
export { bleedVariants };
