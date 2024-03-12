import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { ThemeProvider } from '@material-tailwind/react'



ReactDOM.createRoot(document.getElementById('root')!).render(

    <ThemeProvider>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </ThemeProvider>

)
