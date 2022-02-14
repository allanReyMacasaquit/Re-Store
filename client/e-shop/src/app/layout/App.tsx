import { Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AboutPage from '../../features/about/AboutPage';
import Catalog from '../../features/catalog/Catalog';
import ProductDetails from '../../features/catalog/ProductDetails';
import ContactPage from '../../features/contact/ContactPage';
import ErrorPage from '../../features/errorHandling/ErrorPage';
import HomePage from '../../features/home/HomePage';
import NotFound from '../errors/NotFound';
import ServerError from '../errors/ServerError';
import Header from './Header';

function App() {
const [darkMode, setDarkMode] = useState(false);
const paletteType = darkMode ? 'dark' : 'light'

const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === 'light' ? '#F0F3FA' : '#0A111F'
      }
    }
  })

  function handleThemeChange() {
    setDarkMode(!darkMode);
  }
return (
  <ThemeProvider theme={theme}>
    <ToastContainer position='bottom-right' hideProgressBar theme='colored'/>
  <CssBaseline/>
    <Header darkMode={darkMode} handleThemeChange={handleThemeChange}/>
    <Container>
      <Switch>
        <Route exact path='/homepage' component={HomePage}/>
        <Route exact path='/catalog' component={Catalog}/>
        <Route exact path='/catalog/:id' component={ProductDetails}/>
        <Route exact path='/about' component={AboutPage}/>
        <Route exact path='/contact' component={ContactPage}/>
        <Route exact path='/error' component={ErrorPage}/>
        <Route exact path='/server-error' component={ServerError}/>
        <Route component={NotFound}/> 
      </Switch>
      
    </Container>
  </ThemeProvider>
  )
}

export default App