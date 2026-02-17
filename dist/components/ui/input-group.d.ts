import * as React from 'react';
interface InputGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}
declare const InputGroup: React.ForwardRefExoticComponent<InputGroupProps & React.RefAttributes<HTMLDivElement>>;
interface InputLeftAddonProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}
declare const InputLeftAddon: React.ForwardRefExoticComponent<InputLeftAddonProps & React.RefAttributes<HTMLDivElement>>;
interface InputRightAddonProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}
declare const InputRightAddon: React.ForwardRefExoticComponent<InputRightAddonProps & React.RefAttributes<HTMLDivElement>>;
interface InputLeftElementProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}
declare const InputLeftElement: React.ForwardRefExoticComponent<InputLeftElementProps & React.RefAttributes<HTMLDivElement>>;
interface InputRightElementProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}
declare const InputRightElement: React.ForwardRefExoticComponent<InputRightElementProps & React.RefAttributes<HTMLDivElement>>;
export { InputGroup, InputLeftAddon, InputRightAddon, InputLeftElement, InputRightElement, };
