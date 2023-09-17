import { useState } from "react";
import { NavLink } from "react-router-dom";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { ToggleSwitch } from "src/components";
import { useTheme } from "src/context/ThemeContext";

import * as S from "./styles";
import brandLogo from "src/assets/logo.png";

export const Navbar = (): JSX.Element => {
  const [show, setShow] = useState<boolean>(false);
  const { theme, themeToggler } = useTheme();

  return (
    <S.NavContainer aria-label="navbar">
      <S.NavSection>
        <S.NavToggler
          aria-label="toggler"
          role="button"
          sidebar={show ? "show" : "hide"}
          onClick={() => setShow(!show)}
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </S.NavToggler>

        <S.NavLinks sidebar={show ? "show" : "hide"}>
          <li>
            <S.NavBrand aria-label="brand">
              <img src={brandLogo} alt="brand-byoti" />
              <span>byoti</span>
            </S.NavBrand>
          </li>
          <li aria-label="navlink" onClick={() => setShow(false)}>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li aria-label="navlink" onClick={() => setShow(false)}>
            <NavLink to={"/docs/alert"}>Documentation</NavLink>
          </li>
        </S.NavLinks>
      </S.NavSection>
      <S.NavSection>
        <a
          href="https://github.com/adiMallya/react-byoti"
          target="_blank"
          rel="noreferrer"
        >
          <S.NavIcon icon={faGithub} />
        </a>
        <ToggleSwitch
          toggle={themeToggler as () => void}
          color="#e3307a"
          state={theme === "dark" ? "on" : "off"}
        />
      </S.NavSection>
    </S.NavContainer>
  );
};
