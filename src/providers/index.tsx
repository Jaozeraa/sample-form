import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider as StoreProvider } from 'react-redux';
import theme from '@/styles/themes';
import store from '@/redux-store';

interface RootProviderProps {
  children?: React.ReactNode;
}

const RootProvider: React.FC<RootProviderProps> = ({ children }) => {
  return (
    <StoreProvider store={store}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StoreProvider>
  );
};

export default RootProvider;
