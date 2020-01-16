import React from 'react';

import {useRoutes} from 'hookrouter';
import routes from './routes';

import { theme, CSSReset } from "@chakra-ui/core";
import { ThemeProvider } from 'emotion-theming';

export default function App({ children }) {  

  const route = useRoutes(routes);

  const customTheme = {
    ...theme,
    colors: {
      ...theme.colors,
      brand: {
        900: "#1a365d",
        800: "#153e75",
        700: "#2a69ac",
      },
    },
  };

  return (
    <>
      <ThemeProvider theme={customTheme}>
        <CSSReset />
        {route}
      </ThemeProvider>
    </>
  );
}