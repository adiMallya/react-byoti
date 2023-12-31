import { HtmlHTMLAttributes, ReactNode } from "react";

type HexValue = string;

export type FlexDirection = 'row' | 'column';

export interface FlexDirectionByDevice {
    lg?: FlexDirection,
    md?: FlexDirection,
    sm?: FlexDirection
};

type FlexType = FlexDirection | FlexDirectionByDevice;

export interface CommonProps extends HtmlHTMLAttributes<HTMLDivElement> {
    bg?: HexValue,
    children?: ReactNode,
    spacing?: number,
    justify?: 'between' | 'evenly' | 'around'
}

export interface CardProps extends CommonProps {
    direction?: FlexType,
    maxw?: number
};
