import { useState } from "react";
import { NavLink } from "react-router-dom";

import * as S from "./styles";
import brandLogo from "src/assets/logo.png";

export const Navbar = (): JSX.Element => {
  const [sidebar, setSidebar] = useState<boolean>(false);

  return (
    <S.NavContainer aria-label="navbar">
      <S.NavSection>
        <S.NavToggler
          aria-label="toggler"
          role="button"
          sidebar={sidebar}
          onClick={() => setSidebar(!sidebar)}
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </S.NavToggler>

        <S.NavLinks sidebar={sidebar}>
          <li>
            <S.NavBrand aria-label="brand">
              <img src={brandLogo} alt="brand-byoti" />
              <span>byoti</span>
            </S.NavBrand>
          </li>
          <li aria-label="navlink">
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li aria-label="navlink">
            <NavLink to={"/docs"}>Documentation</NavLink>
          </li>
        </S.NavLinks>
      </S.NavSection>
      <S.NavSection>{/* GitHub link, theme toggler */}</S.NavSection>
    </S.NavContainer>
  );
};