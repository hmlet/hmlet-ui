import React from 'react';
import { type StackProps } from './stack';
/**
 * VStack - Vertical Stack
 *
 * A vertical layout abstraction for better ergonomics and readability.
 * Simplified variant of Stack with direction fixed to vertical.
 *
 * @example
 * <VStack gap="6" align="start">
 *   <h2>Title</h2>
 *   <p>Content</p>
 *   <button>Action</button>
 * </VStack>
 */
export type VStackProps = Omit<StackProps, 'direction'>;
export declare const VStack: React.ForwardRefExoticComponent<VStackProps & React.RefAttributes<HTMLDivElement>>;
