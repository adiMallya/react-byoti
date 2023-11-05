import { ImgHTMLAttributes } from "react";

type HexValue = string;

export interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    size?: 'lg' | 'md' | 'sm' | 'xs',
    name: string,
    bg?: HexValue
}