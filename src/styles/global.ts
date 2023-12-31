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
    transition: 0.3s ease;
    font-family: 'Montserrat',sans-serif;
    line-height: 1.5;
    word-wrap: break-word;
    user-select: none;
}

main {
  grid-area: main;
  width: 100%;
  max-width: 100vw;
  margin: 1rem auto;
  padding: 1rem;
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