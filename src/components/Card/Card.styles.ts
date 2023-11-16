import styled, { css } from "styled-components";
import { CommonProps, CardProps, FlexDirectionByDevice } from "./Card.types";

const CardContainer = styled.div<CardProps>`
    display: flex;
    flex-direction: column;
    position: relative;
    
    border: 0;
    border-radius: 0.325rem;
    padding: 1.25rem;
    background-color: ${({ theme }) => theme.secondary || '#ffffff'};
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),0 1px 2px 0 rgba(0, 0, 0, 0.06);

    ${({ maxW }) => maxW && css`
        max-width: ${maxW}rem;
    `};

    ${({ bg }) => bg && css`
        background-color: ${isHexColor(bg) && bg} !important;
    `};

    ${({ direction }) => {
        if (typeof direction === 'object' && direction !== null) {
            const { lg, md, sm } = direction as FlexDirectionByDevice;

            return css`
                @media (min-width: 992px) {
                flex-direction: ${lg || 'column'} !important;
                }

                @media (min-width: 768px) {
                flex-direction: ${md || 'column'} !important;
                }

                @media (min-width: 480px) {
                flex-direction: ${sm || 'column'} !important;
                }
            `;
        } else if (direction === 'row' || direction === 'column') {
            return css`
                flex-direction: ${direction} !important;
            `;
        }
    }}
`;

const CardHeaderContainer = styled.div<CommonProps>`
    display: flex;
    padding: 1.25rem;

    ${({ bg }) => bg && css`
        background-color: ${isHexColor(bg) && bg} !important;
    `};
`;

const CardBodyContainer = styled.div<CommonProps>`
    display: flex;
    padding: 1.25rem;
    flex: 1 1;

    ${({ bg }) => bg && css`
        background-color: ${isHexColor(bg) && bg} !important;
    `};
`;

const CardFooterContainer = styled.div<CommonProps>`
    display: flex;
    padding: 1.25rem;

    ${({ bg }) => bg && css`
        background-color: ${isHexColor(bg) && bg} !important;
    `};
`;

function isHexColor(color: string): boolean {
    const hexColorRegex = /^#?([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;
    return hexColorRegex.test(color);
}

export { CardContainer, CardHeaderContainer, CardBodyContainer, CardFooterContainer };