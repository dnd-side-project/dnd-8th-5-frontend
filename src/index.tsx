import ReactDOM from 'react-dom/client';
import App from './App';

import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from '@emotion/react';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';

import { RecoilRoot } from 'recoil';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(rootElement);

const queryClient = new QueryClient();

root.render(
  <ThemeProvider theme={theme}>
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <GlobalStyle />
          <App />
        </BrowserRouter>
      </QueryClientProvider>
    </RecoilRoot>
  </ThemeProvider>
);
