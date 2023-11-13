import { ImgHTMLAttributes } from "react";

export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    boxSize?: number,
    rounded?: boolean,
    fit?: 'cover' | 'fill'
}