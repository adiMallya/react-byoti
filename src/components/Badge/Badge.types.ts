import { HtmlHTMLAttributes } from "react";

type HexValue = string;

export interface BadgeProps extends HtmlHTMLAttributes<HTMLSpanElement> {
    color?: HexValue,
    fontSize?: number,
    variant?: 'solid' | 'outline'
}

export interface AvatarBadgeProps extends BadgeProps {
    status?: 'online' | 'offline' | 'busy' | 'away' | 'custom',
    color?: string,
    [key: string]: any
}