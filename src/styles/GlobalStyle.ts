import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: none;
  }

textarea,
input,
  body {
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
  }
  button {
    cursor: pointer;
    outline: 0;
  }
  html,
  body,
  #__next {
    width: 100%;
    height: 100%;
    color: ${props => props.theme.g1};
  }

  body {
    background: ${props => props.theme.primary}1A;
  }
  @media (min-width: 1100px) {
    font-size: 16px;
  }

  .sr-only {
    display: none;
  }
`;
