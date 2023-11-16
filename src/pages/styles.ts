import styled from "styled-components";

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

export { Section, ComponentDisplay, Code };
