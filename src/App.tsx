import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { Home, AlertDoc, AvatarDoc, BadgeDoc, ButtonDoc, HeadingDoc } from "src/pages";
import { useTheme } from "src/context/ThemeContext";
import { GlobalStyles, lightTheme, darkTheme } from "./styles";

function App(): JSX.Element {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/docs/alert" element={<AlertDoc />} />
        <Route path="/docs/avatar" element={<AvatarDoc/>}/>
        <Route path="/docs/badge" element={<BadgeDoc/>} />
        <Route path="/docs/button" element={<ButtonDoc />} />
        <Route path="/docs/heading" element={<HeadingDoc/>} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
