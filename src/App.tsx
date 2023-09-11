import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { Home } from "src/pages";
import { GlobalStyles, lightTheme, darkTheme } from "./styles";

function App(): JSX.Element {
  const [theme, setTheme] = useState<string>("light");

  const themeToggler = (): void =>
    theme === "light" ? setTheme("dark") : setTheme("light");

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
