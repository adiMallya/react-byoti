import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
}

html:focus-within {
    scroll-behavior: smooth;
}

body {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.3s ease-in-out;
    font-family: 'Montserrat',sans-serif;
    word-wrap: break-word;
}

main {
  grid-area: main;
  width: 100%;
  max-width: 100vw;
  padding: 1rem 3rem;
}

ul {
    list-style: none;
    padding-inline-start: none;
}
li {
    list-style-type: none;
    color: ${({ theme }) => theme.text};
}

a {
    text-decoration: none;
    color: ${({ theme }) => theme.text};
}
a:active,
a:focus,
button:focus {
  box-shadow: none !important;
}

.grid-pagelayout{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-areas: 
      'header header header header header'
      'sidebar main main main main'
      'sidebar main main main main'
      'sidebar main main main main';
  margin-bottom: 1.5rem;
}

h2 {
  padding-top: 1rem;
}

hr {
  margin: 3rem 0 2rem;
}

.spacer {
  height: 2rem;
  width: 100%;
}

@media screen and (max-width: 1024px){
  body{
    width: 100vw;
  }

  main{
    padding: 1rem 1.625rem;
  }

  .grid-pagelayout{
    width: 100%;
    grid-template-columns: 1fr;
    grid-template-areas: 
        'header'
        'sidebar'
        'main';
  }
}
`;