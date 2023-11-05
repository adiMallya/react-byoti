import styled, { css } from "styled-components";
import { AvatarProps } from "./Avatar.types";

const sizes = {
  xs: css`
      width: 1.75rem;
      height: 1.75rem;
      font-size: 0.8em;
    `,

  sm: css`
      width: 3rem;
      height: 3rem;
      font-size: 1em;
    `,

  lg: css`
      width: 10rem;
      height: 10rem;
      font-size: 3em;
    `,

  md: css`
      width: 6.25rem;
      height: 6.25rem;
      font-size: 2em;
    `,
};

export const AvatarContainer = styled.img<AvatarProps>`
    border-radius: 50%;
    width: 100%;
    height: auto;

    ${({ bg }) => {
    if (isHexColor(bg!)) {
      return css`
          background-color: ${bg};
          color: #ffffff;
        `;
    } else {
      return css`
          background-color: #ffffff;
          color: #000000;
        `;
    }
  }}

    ${({ size }) => sizes[size!] || sizes['md']};
`;

function isHexColor(color: string): boolean {
  const hexColorRegex = /^#?([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;
  return hexColorRegex.test(color);
}