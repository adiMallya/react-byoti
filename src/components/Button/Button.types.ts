import { ButtonHTMLAttributes, HtmlHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string,
    color?: string,
    size?: 'lg' | 'md' | 'sm',
    variant?: 'solid' | 'outline' | 'link' | 'icon' | 'iconText',
    isDisabled?: boolean,
    children?: ReactNode
}

export interface ToggleProps extends HtmlHTMLAttributes<HTMLElement> {
    color?: string,
    isDisabled?: boolean,
    toggle?: () => void
}