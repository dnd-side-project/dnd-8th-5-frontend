import React from 'react';
import { RecoilRoot } from 'recoil';
import GlobalStyle from '../src/styles/GlobalStyle';

export const decorators = [
  (Story) => (
    <RecoilRoot>
      <GlobalStyle />
      <Story />
    </RecoilRoot>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
