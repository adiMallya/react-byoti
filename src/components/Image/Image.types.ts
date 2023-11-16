import { ImgHTMLAttributes } from "react";

export type ImageFitType = 'cover' | 'fill';

export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    boxSize?: number,
    rounded?: boolean,
    fit?: ImageFitType
}