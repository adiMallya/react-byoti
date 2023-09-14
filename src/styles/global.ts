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

h1, h2, h3, h4{
  font-weight: 500;
} 

hr {
  margin: 3rem 0 2rem;
}

@media screen and (max-width: 1024px){
  body{
    width: 100vw;
  }

  main{
    padding: 1rem 1.625rem;
  }
}
`;