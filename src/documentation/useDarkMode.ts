import { useState, useEffect } from "react";

type Theme = "light" | "dark";

export const useDarkMode = () => {
    const [theme, setTheme] = useState<Theme>("light");

    const setMode = (mode: Theme): void => {
        window.localStorage.setItem('userTheme', mode);
        setTheme(mode);
    };

    const themeToggler = (): void => theme === 'light' ? setMode('dark') : setMode('light');

    useEffect(() => {
        const localTheme = window.localStorage.getItem('userTheme') as Theme;
        localTheme && setTheme(localTheme);
    }, []);

    return [theme, themeToggler];
}