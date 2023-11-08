import { ImgHTMLAttributes, ReactNode } from "react";

type HexValue = string;

export interface AvatarProps extends ImgHTMLAttributes<HTMLElement> {
    size?: 'lg' | 'md' | 'sm' | 'xs',
    name?: string,
    bg?: HexValue,
    children?: ReactNode
}