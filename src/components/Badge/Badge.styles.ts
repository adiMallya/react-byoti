import styled, { css } from "styled-components";
import { BadgeProps, AvatarBadgeProps } from "./Badge.types";

const setVariant = (
    variant: "solid" | "outline" | "online" | "offline" | "busy" | "away" | "custom",
    color?: string
) => {
    switch (variant) {
        case 'solid':
            return css`
                background-color: ${color}3d;
            `;
        case 'outline':
            return css`
                background-color: transparent;
                border: 1px solid ${color};
            `;
        case 'online':
            return css`
                background-color: #16a34a;
            `;
        case 'offline':
            return css`
                background-color: #94a3b8;
            `;
        case 'busy':
            return css`
                background-color: #dc2626;
            `;
        case 'away':
            return css`
                background-color: #f59e0b;
            `;
        case 'custom':
            return css`
                background-color: ${color};
            `;
        default:
            return css`
          background-color: ${color};
        `;
    }
};

const BadgeContainer = styled.span<BadgeProps>`
    padding: 0.125rem 0.3rem;
    border-radius: 0.125rem;

    text-align: center;
    text-transform: uppercase;
    font-weight: 800;

    ${({ fontSize }) => css`
        font-size: ${fontSize || 0.825}em ;
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
    
    ${({ variant, color }) => setVariant(variant || 'solid', isHexColor(color!) ? color : "#94a3b8")}
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
    color: #ffffff;

    ${({ fontSize }) => css`
        font-size: ${fontSize || 0.75}em ;
    `}

    ${({ status, color }) => setVariant(status || 'offline', isHexColor(color!) ? color : "#94a3b8")}

    ${(props) =>
        props.size === 'lg' && css`
            right: 0.4em;
            top: 0.3em;
            height: 1.565rem;
            min-width: 1.565rem;
        `
    }

    ${(props) =>
        (props.size === 'md' || !props.size) && css`
            right: 0.3em;
            top: 0.3em;
        `
    }

    ${(props) =>
        props.size === 'sm' && css`
            right: 0.1em;
            top: 0.1em;
            height: 0.9375rem;
            min-width: 0.9375rem;
        `
    }

    ${(props) =>
        props.size === 'xs' && css`
            right: 0em;
            top: 0em;
            height: 0.625rem;
            min-width: 0.625rem;
        `
    }
`;

function isHexColor(color: string): boolean {
    const hexColorRegex = /^#?([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;
    return hexColorRegex.test(color);
}

export { BadgeContainer, StatusBadge };