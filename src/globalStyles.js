import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    /* font-family: 'Roboto', sans-serif; */
    font-family: 'Lexend Deca', sans-serif;
  }

  :root {
    /* --dark-grey: #1B2330; // rgba(27, 35, 48, 0.8)
    --grey: #252F3E; // rgba(37, 47, 62, 0.8)
    --light-grey: #d1d3d5; // rgba(209, 211, 213, 0.8) */
  }
`

export default GlobalStyle;