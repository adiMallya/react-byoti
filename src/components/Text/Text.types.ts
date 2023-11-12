import { HtmlHTMLAttributes } from "react";

type HexValue = string;

export interface TextProps extends HtmlHTMLAttributes<HTMLParagraphElement> {
    fontSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl',
    fontWeight?: number | 'bold';
    color?: HexValue
}