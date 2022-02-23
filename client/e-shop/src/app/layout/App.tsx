import { Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AboutPage from '../../features/about/AboutPage';
import BasketPage from '../../features/basket/BasketPage';
import { setBasket } from '../../features/basket/basketSlice/basketSlice';
import Catalog from '../../features/catalog/Catalog';
import ProductDetails from '../../features/catalog/ProductDetails';
import CheckoutPage from '../../features/checkout/CheckoutPage';
import ContactPage from '../../features/contact/ContactPage';
import ErrorPage from '../../features/errorHandling/ErrorPage';
import HomePage from '../../features/home/HomePage';
import agent from '../api/agent';
// import { useStoreContext } from '../context/StoreContext';
import NotFound from '../errors/NotFound';
import ServerError from '../errors/ServerError';
import { useAppDispatch } from '../store/configureStore';
import { getCookie } from '../util/util';
import Header from './Header';
import LoadingComponent from './LoadingComponent';

function App() {
//replace useStoreContext() with useAppDispatch(); 
const dispatch = useAppDispatch();
// const {setBasket} = useStoreContext();

const [loading, setLoading] = useState(true);

  useEffect(() => {
    const buyerId = getCookie('buyerId');
    if (buyerId) {
      agent.Basket.get()
        .then(basket => dispatch(setBasket(basket)))
        .catch(error => console.log(error))
        .finally(() => setLoading(false))
    } 
    else {
      setLoading(false)
    }
  }, [dispatch])

const [darkMode, setDarkMode] = useState(false);
const paletteType = darkMode ? 'dark' : 'light'

const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === 'light' ? '#F0F3FA' : '#0A111F'
      },
    }
  })

  function handleThemeChange() {
    setDarkMode(!darkMode);
  }

  if (loading) return <LoadingComponent message='Initializing app..'/>

return (
   <ThemeProvider theme={theme}>
      <ToastContainer position='bottom-right' hideProgressBar theme='colored' />
      <CssBaseline />
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
      <Container>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/catalog' component={Catalog} />
          <Route path='/catalog/:id' component={ProductDetails} />
          <Route path='/about' component={AboutPage} />
          <Route path='/contact' component={ContactPage} />
          <Route path='/server-error' component={ServerError} />
          <Route path='/error' component={ErrorPage} />
          <Route path='/basket' component={BasketPage} />
          <Route path='/checkout' component={CheckoutPage} />
          <Route component={NotFound} />
        </Switch>
      </Container>
    </ThemeProvider>
  )
}

export default App