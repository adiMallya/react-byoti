import { ReactNode } from "react";

export type Theme = "light" | "dark";

export interface ThemeContextType {
    theme: Theme,
    themeToggler: () => void
}

export interface ThemeContextProviderType {
    children: ReactNode
}