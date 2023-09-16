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

const ComponentDisplay = styled.article<{ column?: boolean }>`
  display: flex;
  flex-direction: ${({ column }) => column && 'column'};
  gap: 1rem;
  border: 1px solid ${({ theme }) => theme.body};
  padding: 0.625rem 1rem;
  background-color: ${({ theme }) => theme.secondary};
  border-radius: 0.3rem;
  width: 100%;
`;

//can be removed
const CodeDisplay = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-height: 300px;
  overflow: auto;
  margin: 2rem 0;
  padding: 0.25rem 0;
  /* background-color: ${({ theme }) => theme.secondary}; */
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

export { Section, ComponentDisplay, CodeDisplay, Code };
