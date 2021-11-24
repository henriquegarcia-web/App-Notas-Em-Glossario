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
    --darktheme-grey: #222A32;
    --darktheme-black: #1B1B1B;
    --darktheme-text: #FFFFFF;
  }
`

export const {GlobalStyle, Button};

const Button = styled.div`
  padding: 10px 14px;
  color: ${props => props.fontColor};
  font-size: ${props => props.fontSize};
  border-radius: 50px;
  background-color: ${props => props.bgColor};
  transition: .2s;
  cursor: pointer;
  font-weight: ${props => props.fontWeight};
  display: flex;
  align-items: center;
  margin: ${props => props.margin};

  &:hover {
    background-color: ${props => props.bgHover};

    div:nth-of-type(2) {
      opacity: 0.9;
    }
  }

  svg {
    color: ${props => props.fontColor};
  }

  svg:nth-of-type(1) {
    font-size: ${props => props.iconSize};
    margin-right: 12px;
  }

  div:nth-of-type(2) {
    display: flex;
    height: fit-content;
    margin-left: auto;
    opacity: 0;
    transition: .2s;

    svg {
      font-size: 22px;
      margin: 0;
    }
  }

  .category_identifier {
    width: ${props => props.iconSize};
    height: ${props => props.iconSize};
    margin-right: 12px;
    border-radius: 50%;
    background-color: ${props => props.bgCategory};
  }
`

export const 