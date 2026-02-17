import * as React from 'react';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'attached' | 'separated';
    orientation?: 'horizontal' | 'vertical';
    children: React.ReactNode;
}
type ButtonGroupSeparatorProps = React.ComponentProps<typeof SeparatorPrimitive.Root>;
interface ButtonGroupTextProps extends React.ComponentProps<'span'> {
    asChild?: boolean;
}
declare const ButtonGroup: React.ForwardRefExoticComponent<ButtonGroupProps & React.RefAttributes<HTMLDivElement>>;
declare function ButtonGroupSeparator({ className, orientation, decorative, ...props }: ButtonGroupSeparatorProps): import("react/jsx-runtime").JSX.Element;
declare function ButtonGroupText({ className, asChild, ...props }: ButtonGroupTextProps): import("react/jsx-runtime").JSX.Element;
export { ButtonGroup, ButtonGroupSeparator, ButtonGroupText };
