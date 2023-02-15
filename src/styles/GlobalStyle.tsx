import { Global, css } from '@emotion/react';
import 'normalize.css';

const defaultStyle = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-family: 'Pretendard', Arial, Helvetica, sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
  }

  a {
    outline: none;
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }
`;

const GlobalStyle = () => {
  return <Global styles={defaultStyle} />;
};

export default GlobalStyle;
