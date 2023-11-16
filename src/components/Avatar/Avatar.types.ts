import { ImgHTMLAttributes, ReactNode } from "react";

type HexValue = string;

export type AvatarSizeType = 'lg' | 'md' | 'sm' | 'xs';

export interface AvatarProps extends ImgHTMLAttributes<HTMLElement> {
    size?: AvatarSizeType,
    name?: string,
    bg?: HexValue,
    children?: ReactNode
}