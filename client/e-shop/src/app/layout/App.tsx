import { Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { useCallback, useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AboutPage from '../../features/about/AboutPage';
import { fetchCurrentUser } from '../../features/account/AccountSlice';
import Login from '../../features/account/Login';
import Register from '../../features/account/Register';
import BasketPage from '../../features/basket/BasketPage';
import { fetchBasketAsync } from '../../features/basket/basketSlice/basketSlice';
import Catalog from '../../features/catalog/Catalog';
import ProductDetails from '../../features/catalog/ProductDetails';
import CheckoutPage from '../../features/checkout/CheckoutPage';
import ContactPage from '../../features/contact/ContactPage';
import ErrorPage from '../../features/errorHandling/ErrorPage';
import HomePage from '../../features/home/HomePage';
import Orders from '../../features/orders/Orders';
import NotFound from '../errors/NotFound';
import ServerError from '../errors/ServerError';
import { useAppDispatch } from '../store/configureStore';
import Header from './Header';
import LoadingComponent from './LoadingComponent';
import PrivateRoute from './PrivateRoute';

function App() {
const dispatch = useAppDispatch();
const [loading, setLoading] = useState(true);

  const initApp = useCallback(async () => {
    try {
      await dispatch(fetchCurrentUser());
      await dispatch(fetchBasketAsync());
    } catch (error) {
      console.log(error);
    }
  }, [dispatch])

  useEffect(() => {
    initApp().then(() => setLoading(false));
  }, [initApp])

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
          <PrivateRoute path='/checkout' component={CheckoutPage} />
          <PrivateRoute path='/orders' component={Orders} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route component={NotFound} />
        </Switch>
      </Container>
    </ThemeProvider>
  )
}

export default App