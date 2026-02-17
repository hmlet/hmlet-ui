import * as React from 'react';
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';
import type { WithNumberish } from '../layout/types';
export interface CollapsibleProps extends React.ComponentProps<typeof CollapsiblePrimitive.Root> {
    p?: WithNumberish<1 | 2 | 3 | 4 | 6 | 8 | 12 | 16 | 20 | 'none'>;
    px?: WithNumberish<1 | 2 | 3 | 4 | 6 | 8 | 12 | 16 | 20 | 'none'>;
    py?: WithNumberish<1 | 2 | 3 | 4 | 6 | 8 | 12 | 16 | 20 | 'none'>;
    m?: WithNumberish<1 | 2 | 3 | 4 | 6 | 8 | 12 | 16 | 20 | 'none'>;
    mx?: WithNumberish<1 | 2 | 3 | 4 | 6 | 8 | 12 | 16 | 20 | 'none'>;
    my?: WithNumberish<1 | 2 | 3 | 4 | 6 | 8 | 12 | 16 | 20 | 'none'>;
    shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'inner' | 'outline' | 'default';
    w?: 'auto' | 'full' | 'fit' | 'screen';
    h?: 'auto' | 'full' | 'fit' | 'screen';
    display?: 'block' | 'inline' | 'inline-block' | 'flex' | 'inline-flex' | 'grid';
}
declare function Collapsible({ className, p, px, py, m, mx, my, shadow, w, h, display, ...props }: CollapsibleProps): import("react/jsx-runtime").JSX.Element;
declare function CollapsibleTrigger(props: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleTrigger>): import("react/jsx-runtime").JSX.Element;
declare function CollapsibleContent({ className, ...props }: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleContent>): import("react/jsx-runtime").JSX.Element;
export { Collapsible, CollapsibleTrigger, CollapsibleContent };
