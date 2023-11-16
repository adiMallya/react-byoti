import { styled, css } from "styled-components";
import { ImageProps } from "./Image.types";

export const ImageContainer = styled.img<ImageProps>`
    max-width: 100%;
    height: auto;

    ${({ boxSize }) => boxSize && css`
        width: ${boxSize}px;
        height: ${boxSize}px !important;
    `}

    ${({ fit }) => css`
        object-fit: ${fit || 'cover'};
    `}

    ${({ rounded }) => rounded && css`
        border-radius: 9999px;
    `}
`;