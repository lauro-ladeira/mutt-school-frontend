import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  /* Variáveis globais */
  :root {
    --brown: #6c4a2e;
    --brown-dark: #52351e;
    --text-light: #ffffff;
    --background-default: #d0d0d0;
    --orange: #e7aa4a;
    --text-dark: #413227
  }

  /* Reset CSS */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    font-family: 'Akatab', sans-serif;
    background: var(--background-default);
  }

  button, input, textarea, select {
    font: inherit;
    border: none;
    outline: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul, ol {
    list-style: none;
  }
`
