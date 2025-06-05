import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { UserProvider } from './contexts/userContext.jsx'
import { ThemeProvider } from './contexts/ThemeContext.jsx'
import { DailyLogProvider } from './contexts/DailyLogContext.jsx'
import {GlobalStyles} from '../src/styled/GlobalStyled.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
        <GlobalStyles/>
          <BrowserRouter>
           <UserProvider>
            <DailyLogProvider>
               <App />
            </DailyLogProvider>
           </UserProvider>
          </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)
