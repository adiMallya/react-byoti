import { createContext, useContext, useState, useEffect } from "react";
import {
  Theme,
  ThemeContextType,
  ThemeContextProviderType,
} from "./context.types";

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeContextProvider: React.FC<ThemeContextProviderType> = ({
  children
}) => {
  const [theme, setTheme] = useState<Theme>("light");

  const setMode = (mode: Theme): void => {
    window.localStorage.setItem("userTheme", mode);
    setTheme(mode);
  };

  const themeToggler = () =>
    theme === "light" ? setMode("dark") : setMode("light");

  useEffect(() => {
    const localTheme = window.localStorage.getItem("userTheme") as Theme;
    localTheme && setTheme(localTheme);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, themeToggler }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeContextProvider");
  }
  return context;
};

export { ThemeContextProvider, useTheme };
