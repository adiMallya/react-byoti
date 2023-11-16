import { HtmlHTMLAttributes } from "react";

type HexValue = string;

export type BadgeVariantType = 'solid' | 'outline';

export type BadgeStatusType = 'online' | 'offline' | 'busy' | 'away' | 'custom';

export interface BadgeProps extends HtmlHTMLAttributes<HTMLSpanElement> {
    color?: HexValue,
    fontSize?: number,
    variant?: BadgeVariantType
}

export interface AvatarBadgeProps extends BadgeProps {
    status?: BadgeStatusType,
    color?: string,
    [key: string]: any
}