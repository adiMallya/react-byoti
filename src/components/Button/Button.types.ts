import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    color?: string,
    size?: 'lg' | 'md' | 'sm',
    variant?: 'solid' | 'outline' | 'link' | 'icon' | 'iconText',
    isDisabled?: boolean,
    children: ReactNode
}