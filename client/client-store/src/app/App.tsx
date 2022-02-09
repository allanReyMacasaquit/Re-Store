import { Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import React, { useState } from 'react';
import Footer from './layout/Footer';
import Header from './layout/Header';
import Home from './layout/Home';

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const paletteType = darkMode ? 'dark' : 'light'

  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === 'light' ? '#eaeaea' : '#120010'
      }
    }
  })

  function handleThemeChange() {
    setDarkMode(!darkMode);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
    <Header darkMode={darkMode} handleThemeChange={handleThemeChange}/>
    <Container>
      <Home/>
      <Footer/>
    </Container>

    </ThemeProvider>
    
  );
}

export default App;
