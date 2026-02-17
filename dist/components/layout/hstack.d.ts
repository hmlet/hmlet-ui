import React from 'react';
import { type StackProps } from './stack';
/**
 * HStack - Horizontal Stack
 *
 * A horizontal layout abstraction for better ergonomics and readability.
 * Simplified variant of Stack with direction fixed to horizontal.
 *
 * @example
 * <HStack gap="4" align="center" justify="space-between">
 *   <div>Left</div>
 *   <div>Right</div>
 * </HStack>
 */
export type HStackProps = Omit<StackProps, 'direction'>;
export declare const HStack: React.ForwardRefExoticComponent<HStackProps & React.RefAttributes<HTMLDivElement>>;
