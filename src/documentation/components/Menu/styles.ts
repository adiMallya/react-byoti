import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MenuContainer = styled.div<{ drop?: boolean }>`
  grid-area: sidebar;

  position: sticky;
  top: 0;
  height: 3.5rem;
  overflow-y: hidden;
  z-index: 4;
  background-color: ${({ theme }) => theme.secondary};
  box-shadow: 0px 0px 10px 4px rgb(0 0 0 / 5%);

  ${({ drop }) =>
    drop &&
    css`
      height: 100vh;
    `}

  @media screen and (min-width: 1024px) {
    max-width: 250px;
    height: 70vh;
    padding: 1rem;
    overflow-y: auto;
  }
`;

const Dropdown = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 1.5rem;
  cursor: pointer;

  .dropdown-arrow {
    display: block;
    padding: 1rem;
  }

  @media screen and (min-width: 1024px) {
    margin: 1rem 0;

    .dropdown-arrow {
      display: none;
    }
  }
`;

const DropdownIcon = styled(FontAwesomeIcon) <{ drop?: boolean }>`
  color: ${({ theme }) => theme.text};
  transition: 0.2s ease;

  ${({ drop }) =>
    drop &&
    css`
      transform: rotate(180deg);
    `}
`;

const MenuLinks = styled.ul<{ drop?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0 1rem;

  li {
    padding: 0.625rem 0 0 0.625rem;
  }

  ${({ drop }) =>
    drop &&
    css`
      display: block;
      overflow-y: auto;
      width: 100%;
    `}

  @media screen and (min-width: 1024px) {
    display: block;
  }
`;

export { MenuContainer, Dropdown, DropdownIcon, MenuLinks };
