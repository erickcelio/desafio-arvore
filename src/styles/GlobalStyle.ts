import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    height: 100%;
  }

  body {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${props => props.theme.fontFamily.normal};
  }
`;

export default GlobalStyle;
