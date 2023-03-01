import { Global, css } from '@emotion/react';
import 'normalize.css';
import './font.css';

const defaultStyle = css`
  * {
    padding: 0;
    box-sizing: border-box;
    font-family: 'Pretendard', Arial, Helvetica, sans-serif;
    font-display: fallback;
  }

  html,
  body {
    margin: 0;
    padding: 0;
  }

  body {
    overflow: hidden;
  }

  a {
    outline: none;
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  button {
    border: none;
    cursor: pointer;
  }
`;

const GlobalStyle = () => {
  return <Global styles={defaultStyle} />;
};

export default GlobalStyle;
