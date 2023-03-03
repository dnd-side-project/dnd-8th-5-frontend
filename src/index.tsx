import { ThemeProvider } from '@emotion/react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import { RecoilRoot } from 'recoil';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <ThemeProvider theme={theme}>
    <RecoilRoot>
      <BrowserRouter>
        <GlobalStyle />
        <App />
      </BrowserRouter>
    </RecoilRoot>
  </ThemeProvider>
);
