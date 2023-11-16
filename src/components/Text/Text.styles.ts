import styled, { css } from "styled-components";
import { TextProps } from "./Text.types";

const sizeStyles = {
    xs: css`
      font-size: 0.75em;
    `,

    sm: css`
      font-size: 0.875em;
    `,

    md: css`
        font-size: 1em;
    `,

    lg: css`
      font-size: 1.125em;
    `,

    xl: css`
        font-size: 1.25em;
    `,

    ['2xl']: css`
        font-size: 1.5em;
    `
};

export const TextContainer = styled.p<TextProps>`
    word-break: normal;
    word-wrap: break-word;

    ${({ fontSize }) => sizeStyles[fontSize!] || sizeStyles['md']};

    ${({ fontSize }) => css`
        font-size: ${isValidUnit(fontSize) && fontSize} !important;
    `}

    ${({ fontWeight }) => css`
        font-weight: ${fontWeight || 500};
    `}
    
    ${({ color }) => isHexColor(color!) && css`
        color: ${color}
    `}
`;

function isValidUnit(fontSize: string): boolean {
    const hexColorRegex = /^\d+(\.\d+)?(em|px)$/;
    return hexColorRegex.test(fontSize);
}

function isHexColor(color: string): boolean {
    const hexColorRegex = /^#?([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;
    return hexColorRegex.test(color);
}
