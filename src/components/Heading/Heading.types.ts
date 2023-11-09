import { HtmlHTMLAttributes } from "react";

export type sizeType = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

type HexValue = string;

export interface HeadingProps extends HtmlHTMLAttributes<HTMLHeadingElement> {
    size?: sizeType,
    color?: HexValue
}