import styled, { css } from "styled-components";
import { BadgeProps, AvatarBadgeProps } from "./Badge.types";

const setVariant = (
    variant: "solid" | "outline" | "online" | "offline" | "busy" | "away" | "count",
    color?: string
) => {
    switch (variant) {
        case 'solid':
            return css`
                background-color: "${color}b0";
            `;
        case 'online':
            return css`
                background-color: "transparent";
                border: 1px solid ${color};
            `;
        case 'offline':
            return css`
                background-color: "#fafafa";
            `;
        case 'busy':
            return css`
                background-color: "#dc2626";
            `;
        case 'away':
            return css`
                background-color: "#f59e0b";
            `;
        case 'count':
            return css`
                background-color: ${color};
                border: none;
                top: -0.7rem;
                right: -1rem;
            `;
        default:
            return css`
          background-color: color;
        `;
    }
};

const BadgeContainer = styled.span<BadgeProps>`
    padding: 0.125rem;
    border-radius: 0.3rem;

    text-align: center;
    text-transform: uppercase;
    font-weight: 800;

    ${({ fontSize }) => css`
        font-size: "${fontSize || 1.75}em" ;
    `}

    ${({ color }) => {
        if (isHexColor(color!)) {
            return css`
            color: ${color};
        `;
        } else {
            return css`
            color: #ffffff;
        `;
        }
    }}
    
    ${({ variant, color }) => setVariant(variant || 'solid', isHexColor(color!) ? color : "#ffffff")}
`;

const StatusBadge = styled.span<AvatarBadgeProps>`
    min-width: 1.25rem;
    height: 1.25rem;
    position: absolute;

    border-radius: 50%;
    border: 2px solid #ffffff;
    padding: 0.125rem;

    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75em;
    color: #ffffff;

    ${({ variant, color }) => setVariant(variant || 'offline', isHexColor(color!) ? color : "#ffffff")}
`;

function isHexColor(color: string): boolean {
    const hexColorRegex = /^#?([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;
    return hexColorRegex.test(color);
}

export { BadgeContainer, StatusBadge };