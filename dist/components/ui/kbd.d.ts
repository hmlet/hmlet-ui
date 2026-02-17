import * as React from 'react';
interface KbdProps extends React.ComponentProps<'kbd'> {
    children: React.ReactNode;
}
declare const Kbd: React.ForwardRefExoticComponent<Omit<KbdProps, "ref"> & React.RefAttributes<HTMLElement>>;
interface KbdGroupProps extends React.ComponentProps<'span'> {
    children: React.ReactNode;
}
declare const KbdGroup: React.ForwardRefExoticComponent<Omit<KbdGroupProps, "ref"> & React.RefAttributes<HTMLSpanElement>>;
export { Kbd, KbdGroup };
