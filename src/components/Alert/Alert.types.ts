import { HtmlHTMLAttributes } from "react";

export interface AlertProps extends HtmlHTMLAttributes<HTMLElement> {
    type?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning'
    message?: string,
    onCollapse?: () => void
}