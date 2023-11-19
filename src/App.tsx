import { Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { Home, AlertDoc, AvatarDoc, BadgeDoc, ButtonDoc, CardDoc, HeadingDoc, ImageDoc, TextDoc, NotFoundPage } from "src/pages";
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
        <Route path="/docs/card" element={<CardDoc/>}/>
        <Route path="/docs/heading" element={<HeadingDoc />} />
        <Route path="/docs/image" element={<ImageDoc/>} />
        <Route path="/docs/text" element={<TextDoc />} />
        <Route path="/docs" element={<Navigate to={"/docs/alert"} />} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
