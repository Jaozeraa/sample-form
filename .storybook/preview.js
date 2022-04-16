import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import Global from '@/styles/GlobalStyle';
import theme from '@/styles/themes';
import loadFonts from './loadFonts';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

loadFonts();

addDecorator(s => (
  <ThemeProvider theme={theme}>
    <Global />
    {s()}
  </ThemeProvider>
));
