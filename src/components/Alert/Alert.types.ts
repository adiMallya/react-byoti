import { HtmlHTMLAttributes } from "react";

export type AlertVariantType = 'primary' | 'secondary' | 'success' | 'danger' | 'warning';

export interface AlertProps extends HtmlHTMLAttributes<HTMLElement> {
    type?: AlertVariantType,
    message?: string,
    onCollapse?: () => void
}