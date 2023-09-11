import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.footer};
  color: #fff;
  min-height: 7rem;
  width: 100%;
  padding: 2.5rem;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const FooterHeader = styled.div`
  font-size: 1.1em;
  letter-spacing: 0.5px;

  span {
    color: ${({ theme }) => theme.primary};
  }
`;

const SocialLinks = styled.div`
  width: fit-content;
  margin: 1rem auto;
`;

export { FooterContainer, FooterHeader, SocialLinks };
