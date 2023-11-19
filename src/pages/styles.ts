import styled, { css } from "styled-components";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  span[aria-label="component-props"] {
    color: ${({ theme }) => theme.primary};
    font-weight: 600;
  }
`;

const ComponentDisplay = styled.article<{ column?: boolean | 'true' | 'false' }>`
  display: flex;
  flex-direction: ${({ column }) => column && 'column'};
  gap: 1rem;
  border: 1px solid ${({ theme }) => theme.body};
  padding: 0.625rem 1rem;
  background-color: ${({ theme }) => theme.secondary};
  border-radius: 0.3rem;
  width: 100%;
`;

const Code = styled.code`
  width: 100%;
  border: 2px solid ${({ theme }) => theme.secondary};
  border-radius: 0.3rem;
  iframe {
    width: inherit;
    border: none;
    transform: scale(1);
    overflow: hidden;
  }
`;

// Home page
const HomeSection = styled.section<{ center?: string | boolean }>`
  display: grid;
  grid-template-columns: 1fr;

  ${({ center }) => center === 'true' && css`
    place-items: center;
    
    >*{
      text-align: center;
    }
  `}

  @media screen and (min-width: 768px){
    grid-template-columns: 50% 50%;
    padding: 0 1.75rem;

    ${({ center }) => center === 'true' && css`
      grid-template-columns: 1fr;
    `}
  }
`;

export { Section, ComponentDisplay, Code, HomeSection };
