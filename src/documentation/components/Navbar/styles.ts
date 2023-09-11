import styled, { css } from "styled-components";

const NavContainer = styled.nav`
  grid-area: header;
  min-height: 10vh;
  width: 100%;
  top: 0;
  z-index: 5;

  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 0.625rem 1rem;

  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  box-shadow: 0px 0px 10px 4px rgb(0 0 0 / 5%);

  font-weight: 500;
`;

const NavSection = styled.div`
  display: flex;
  align-items: center;
`;

const NavToggler = styled.div<{ collapse?: boolean }>`
  padding: 0 0.625rem;

  position: fixed;
  z-index: 5;
  cursor: pointer;

  .line {
    height: 0.125rem;
    width: 1.5rem;
    background-color: ${({ theme }) => theme.text};
    margin: 0.313rem 0;
  }

  ${({ collapse }) =>
    collapse &&
    css`
      position: absolute;
      left: calc(50% - 2.5rem - 24px);
      top: 1.5rem;
      z-index: 5;

      .line:nth-child(1) {
        position: relative;
        transform: rotate(-45deg);
        bottom: -4px;
        transition: transform 0.2s ease-in-out;
      }

      .line:nth-child(2) {
        display: none;
      }

      .line:nth-child(3) {
        position: relative;
        transform: rotate(45deg);
        top: -3px;
        transition: transform 0.2s ease-in-out;
      }
    `}

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

const NavBrand = styled.div`
  display: inline-flex;
  align-items: center;
  max-width: max-content;
  font-size: 2em;
  color: ${({ theme }) => theme.text};

  img {
    width: 2rem;
  }
`;

const NavLinks = styled.ul<{ collapse?: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  background-color: ${({ theme }) => theme.secondary};
  display: none;

  li {
    padding: 1rem;
  }

  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: fit-content;
    background-color: ${({ theme }) => theme.body};
  }

  ${({ collapse }) =>
    collapse &&
    css`
      display: block;
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      width: 50%;
      height: 100vh;
      box-shadow: 0px 0px 10px 4px rgb(0 0 0 / 5%);

      transition: 0.2s ease;
    `}
`;

export { NavContainer, NavSection, NavBrand, NavLinks, NavToggler };
