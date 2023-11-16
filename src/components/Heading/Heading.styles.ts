import styled, { css } from "styled-components";
import { HeadingProps } from "./Heading.types";

const sizeStyles = {
    xs: css`
      font-size: 1.25em;
    `,

    sm: css`
      font-size: 1.5em;
    `,

    md: css`
        font-size: 1.75em;
    `,

    lg: css`
      font-size: 2em;
    `,

    xl: css`
        font-size: 2.5em;
    `,

    ['2xl']: css`
        font-size: 3em;
    `
};

export const HeadingContainer = styled.h2<HeadingProps>`
    margin: 0.625rem 0;
    line-height: 1.2;
    word-break: normal;
    font-weight: 600;

    ${({ size }) => sizeStyles[size!] || sizeStyles['xl']};

    ${({ color }) => isHexColor(color!) && css`
        color: ${color}
    `}
`;

function isHexColor(color: string): boolean {
    const hexColorRegex = /^#?([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;
    return hexColorRegex.test(color);
}