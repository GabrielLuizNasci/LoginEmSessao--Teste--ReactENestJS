import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './css/main.css';
import { 
  ChakraProvider, 
  ColorModeScript, 
  extendTheme,
  type ThemeConfig,
} from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: false,
};

const theme = extendTheme(
  {
    colors: {
      cor: {
        P1: "#000000",
        P2: "#214cce",
        P3: "#FFFFFF",
        S1: "#4169E1",
        S2: "#c0c0c0",
      },
    },
  },
  { config }
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
