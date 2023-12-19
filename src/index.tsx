import React from 'react';
import ReactDOM from 'react-dom/client';
import "@mantine/core/styles.css"
import { createTheme, MantineProvider } from '@mantine/core';

import { resolver, theme } from './theme';
import App from './App';





const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <MantineProvider theme={theme} defaultColorScheme="dark" cssVariablesResolver={resolver}>
      <React.StrictMode>

        <App />

      </React.StrictMode>
    </MantineProvider>
  );
}

export * from './components'
export * from './theme'

