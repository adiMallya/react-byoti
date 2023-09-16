import { useState } from "react";
import { NavLink } from "react-router-dom";

import * as S from "./styles";
import brandLogo from "src/assets/logo.png";

export const Navbar = (): JSX.Element => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <S.NavContainer aria-label="navbar">
      <S.NavSection>
        <S.NavToggler
          aria-label="toggler"
          role="button"
          sidebar={show ? 'show' : 'hide'}
          onClick={() => setShow(!show)}
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </S.NavToggler>

        <S.NavLinks sidebar={show ? 'show' : 'hide'}>
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
      <S.NavSection>{/* GitHub link, theme toggler */}</S.NavSection>
    </S.NavContainer>
  );
};
