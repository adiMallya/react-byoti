import { useState } from "react";
import { Link } from "react-router-dom";
import menuList from "./menu.config.json";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import * as S from "./styles";

export const Menu = (): JSX.Element => {
  const [drop, setDrop] = useState<boolean>(false);

  return (
    <S.MenuContainer aria-label="menu" dropdown={drop ? 'drop' : 'collapse'}>
      <S.Dropdown aria-label="dropdown" onClick={() => setDrop(!drop)}>
        <h3 aria-label="menu-title">Components</h3>
        <span className="dropdown-arrow">
          <S.DropdownIcon icon={faChevronDown} role="button" dropdown={drop ? 'drop' : 'collapse'} />
        </span>
      </S.Dropdown>
      <S.MenuLinks aria-label="doc-navigation">
        {menuList.map(({ menuItem, route }) => (
          <li key={menuItem}>
            <Link to={`/docs/${route}`} onClick={() => setDrop(false)}>{menuItem}</Link>{" "}
          </li>
        ))}
      </S.MenuLinks>
    </S.MenuContainer>
  );
};
