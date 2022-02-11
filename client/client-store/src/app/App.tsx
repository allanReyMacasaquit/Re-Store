import { Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutPage from '../features/about/AboutPage';
import Catalog from '../features/catalog/Catalog';
import CatalogDetailPage from '../features/catalog/catalogPage/CatalogDetailPage';
import ContactPage from '../features/contact/ContactPage';
import HomePage from '../features/home/HomePage';
import Footer from './layout/Footer';
import Header from './layout/Header';

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const paletteType = darkMode ? 'dark' : 'light'
  
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === 'light' ? '#eaeaea' : '#383838'
      },
    },
    })

  function handleThemeChange() {
    setDarkMode(!darkMode);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
    <Header darkMode={darkMode} handleThemeChange={handleThemeChange}/>
    <Container>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/catalog' element={<Catalog/>}/>
        <Route path='/catalog/:id' element={<CatalogDetailPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
      </Routes>
      <Footer/>
    </Container>

    </ThemeProvider>
    
  );
}

export default App;
