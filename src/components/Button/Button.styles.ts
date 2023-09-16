import styled, { css } from "styled-components";
import { ButtonProps } from "./Button.types";

const sizes = {
    sm: css`
        padding: 0.3rem 0.7rem;
        font-size: 0.9em;
    `,

    lg: css`
        padding: 0.75rem 1.5rem;
        font-size: 1.1em;
        min-width: 80px;
    `,

    md: css`
        padding: 0.5rem 1rem;
        font-size: 1em;
    `
}

const setVariant = (variant: 'solid' | 'outline' | 'link' | 'icon' | 'iconText', color?: string) => {
    switch (variant) {
        case 'solid':
            return css`
                color: #fff;
            `;
        case 'outline':
            return css`
                background-color: transparent;
                border: 1px solid ${color};
                color: ${color};

                &:hover{
                    background-color: ${color};
                    color: #fff;
                }
            `;
        case 'link':
            return css`
                text-decoration: underline;
                text-underline-position: below;
                text-decoration-color: ${color};
                padding: 0;

                &:hover{
                    color: ${color};
                    text-decoration-thickness: 2px;
                }
            `;
        case 'icon':
            return css`
                color: ${color};
            `;
        case 'iconText':
            return css`
                background-color: ${color};
                color: #fff;
                
                span{
                    display: flex;
                    gap: 1rem;
                }
            `;
        default:
            return css`
            color: #fff;
            `;
    }
}

export const ButtonContainer = styled.button<ButtonProps>`
  display: inline-block;
  background-color: ${({ color }) => color || 'black'};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
  text-decoration: none;
  text-align: center;
  font-size: 1em;
  font-weight: 600;
  outline: none;
  opacity: 0.9;
  cursor: pointer;

  &:focus{
    box-shadow: 0 0 0 1px #000;
  }

  &:hover{
    opacity: 1;
  }

  ${({ size }) => sizes[size!] || sizes['md']}

  ${({ variant, color }) => setVariant(variant! || 'solid', color)} 

  ${({ isDisabled }) => isDisabled && css`
        opacity: 0.6;
        pointer-events: none;
  `}  
`;