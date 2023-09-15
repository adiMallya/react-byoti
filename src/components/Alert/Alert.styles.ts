import styled, { css } from "styled-components";
import { AlertProps } from "./Alert.types";

const variants = {
  primary: css`
    background-color: #7fd2e6;
    color: #29438b;
  `,

  secondary: css`
    background-color: #eaeaec;
    color: #696b79;
  `,

  success: css`
    background-color: #84f1c9;
    color: #1b7052;
  `,

  danger: css`
    color: #dc3545;
    background-color: #fcc5c5;
  `,

  warning: css`
    color: #ff9204;
    background-color: #ffe7c5;
  `,
};

export const AlertContainer = styled.div<AlertProps>`
  position: relative;
  box-sizing: border-box;
  max-width: 100%;
  border-radius: 0.3rem;
  padding: 1rem;
  margin: 1rem 0;

  display: flex;
  justify-content: space-between;

  font-size: 1em;
  font-weight: 500;

  ${({ type }) => variants[type!] || variants.primary}
`

export const CloseBtn = styled.button`
  background: center/1.1em auto no-repeat;
  width: 1rem;
  height: 1.5rem;
  position: absolute;
  top:0;
  right:0;
  z-index: 1;

  border: 1px solid transparent;
  margin: 0.75rem;
  opacity: 0.6;
  cursor: pointer;
  outline: none;
`;