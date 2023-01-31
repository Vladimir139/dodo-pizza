import styled, { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

    box-sizing: border-box;
  }

  h1,h2,h3,h4,h5,h6 {
    margin: 0;
    padding: 0;
  }

  body {
    background: ${({ theme }) => theme.color.background.mainBg};
    font-family: 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }
  
  button {
    border: none;
  }

  li {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  min-width: 320px;
  max-width: 1280px;
`;
