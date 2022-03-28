import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --red-one: #F3123C;
    --red-two: #8a5255;
    --gray500: #aeaeba;
    --gold: #d9bf8f;

    --text-title: #2e2d37;
    --text-body: #696977;
    --text-secondary: #b3b2ba;

    --background: #f4f4f4;
    --shape: #FFFFFF;
  }
  ::-webkit-scrollbar-track {
    background-color: var(--background);
}
::-webkit-scrollbar {
    width: 6px;
    background: var(--background);
}
::-webkit-scrollbar-thumb {
    background: #dad7d7;
}

  
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins';

  }

  html {
    @media(max-width: 1080px){
      font-size: 93.75%; //15px
    }

    @media(max-width: 728px){
      font-size: 87,5% //14px
    }
  }
  html, body{
    scroll-behavior: smooth;
  }
  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  button{
    cursor: pointer;
  }

  [disabled]: {
    opacity: 0.6;
    cursor: not-allowed;
  }

` 