import * as React from 'react';
import type { WithNumberish } from '../layout/types';
export interface CardProps extends React.ComponentProps<'div'> {
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
declare function Card({ className, p, px, py, m, mx, my, shadow, w, h, display, ...props }: CardProps): import("react/jsx-runtime").JSX.Element;
declare function CardHeader({ className, ...props }: React.ComponentProps<'div'>): import("react/jsx-runtime").JSX.Element;
declare function CardTitle({ className, ...props }: React.ComponentProps<'div'>): import("react/jsx-runtime").JSX.Element;
declare function CardDescription({ className, ...props }: React.ComponentProps<'div'>): import("react/jsx-runtime").JSX.Element;
declare function CardAction({ className, ...props }: React.ComponentProps<'div'>): import("react/jsx-runtime").JSX.Element;
declare function CardContent({ className, ...props }: React.ComponentProps<'div'>): import("react/jsx-runtime").JSX.Element;
declare function CardFooter({ className, ...props }: React.ComponentProps<'div'>): import("react/jsx-runtime").JSX.Element;
export { Card, CardHeader, CardFooter, CardTitle, CardAction, CardDescription, CardContent, };
