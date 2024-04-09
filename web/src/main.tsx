import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from "@/components/theme-provider"
import { VisibilityProvider } from './providers/VisiblityProvider.tsx'
import { HashRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <VisibilityProvider>
          <App />
        </VisibilityProvider>
      </ThemeProvider>
    </HashRouter>
  </React.StrictMode>,
)
