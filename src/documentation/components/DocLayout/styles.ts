import styled from "styled-components";

const PageLayout = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    "header"
    "sidebar"
    "main"
    "footer";

  @media screen and (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-areas:
      "header header header header"
      "sidebar main main main"
      "sidebar main main main"
      "footer footer footer footer";
  }
`;

const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export { PageLayout, MainContent };