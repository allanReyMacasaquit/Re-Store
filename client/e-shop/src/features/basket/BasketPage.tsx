import { ThemeProvider } from '@emotion/react';
import { Add, Delete, Remove } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { Box, Button, Container, createTheme,  Grid,  Table,  TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { blueGrey, purple } from '@mui/material/colors';

import { useState } from 'react';
import { Link } from 'react-router-dom';
import agent from '../../app/api/agent';
import { useStoreContext } from '../../app/context/StoreContext';
import BasketSummary from './BasketSummary';

const theme = createTheme({
  palette: {
    background: {
      paper: '#eaeaea',
    },
     primary: {
      main: purple[50],
    },
    secondary: {
      main: blueGrey[900],
    },
  },
});

function BasketPage() {
  const {basket, setBasket, removeItem} = useStoreContext();
  const [status, setStatus] = useState({
    loading: false,
    name: ''
  });

  function handleAddItem(productId: number, name: string) {
    setStatus({loading: true, name});
    agent.Basket.addItem(productId)
    .then(basket => setBasket(basket))
    .catch(error => console.log(error))
    .finally(() => setStatus({loading: false, name: ''}))
  }

  function handleRemoveItem(productId: number, quantity = 1, name: string) {
    setStatus({loading: true, name});
    agent.Basket.removeItem(productId, quantity)
    .then(() => removeItem(productId, quantity))
    .catch(error => console.log(error))
    .finally(() => setStatus({loading: false, name: ''}))
  }

  //remove the code below by using useStoreContext hooks
  // const [loading, setLoading] = useState(true);
  // const [basket, setBasket] = useState<Basket | null>(null);

  // useEffect(() => {
  //   agent.Basket.get()
  //   .then(basket => setBasket(basket))
  //   .catch(error => console.log(error))
  //   .finally(() => setLoading(false))
  // }, [])

  // if (loading) return <LoadingComponent message='Loading basket...'/>
  
  if (!basket) {
   return <Container>
            <Typography sx={{mt: '20vh', display: 'flex', justifyContent: 'center' }} variant='h3'>Your basket is empty</Typography>
          </Container>
  }
  
  return (
    <ThemeProvider theme={theme}>
      <TableContainer sx={{mt: '20px', height: '54vh' ,
      borderTopLeftRadius: '10px',
      borderTopRightRadius: '10px',
      background: "linear-gradient(#005F73 0%, #3C66B9 34.48%, #567CC8 100%);",}}>
        <Table sx={{ minWidth: 400}}>
          <TableHead>
            <TableRow sx={{boxShadow: 5}}>
              <TableCell align='left'><Typography variant='h5' marginLeft={9}>Product</Typography></TableCell>
              <TableCell align="center"><Typography variant='h5'>Price</Typography></TableCell>
              <TableCell align="center"><Typography variant='h5'>Quantity</Typography></TableCell>
              <TableCell align="center"><Typography variant='h5'>Subtotal</Typography></TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {basket.items.map((item) => (
              <TableRow
                key={item.productId}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Box display='flex' alignItems='center'>
                    <img src={item.pictureUrl} alt={item.name} style={{height: 50, marginRight: 20}}/>
                    <span>
                      <Typography variant='h6' color='primary.main'>
                        {item.name}
                      </Typography>
                      </span>
                  </Box>
                </TableCell>

                <TableCell align="center">
                  <Typography variant='h6' color='primary.main'>
                    ${(item.price / 100).toFixed(2)}
                  </Typography>
                  
                </TableCell>

                <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <TableCell align="center">
                  <Box sx={{
                    boxShadow: 5,
                    borderRadius: 50,
                  }}>
                    <LoadingButton 
                      loading={status.loading && status.name === 'add' + item.productId}
                      onClick={() => handleAddItem(item.productId,  'add' + item.productId)}
                      color='primary'>
                        <Add/>
                    </LoadingButton>
                  </Box>
                    <Typography variant='h4' color='primary.main'>
                      {item.quantity}
                    </Typography>
                    
                  <Box sx={{
                    boxShadow: 5,
                    borderRadius: 50,
                  }}>
                    <LoadingButton
                      loading={status.loading && status.name === 'remove' + item.productId}
                      onClick={() => handleRemoveItem(item.productId, 1, 'remove' + item.productId)}
                      color='error'>
                        <Remove/>
                  </LoadingButton>
                  </Box>
                  
                </TableCell>
                </Box>

                <TableCell align="center">
                  <Typography variant='h6' color='primary.main'>
                    ${((item.price * item.quantity) / 100).toFixed(2)}
                  </Typography>
                  
                </TableCell>
                <TableCell align="center">
                  <LoadingButton 
                  loading={status.loading && status.name === 'delete' + item.productId}
                      onClick={() => handleRemoveItem(item.productId, item.quantity, 'delete' + item.productId)}
                  color='error' >
                    <Delete/>
                  </LoadingButton>
                </TableCell>
                
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      
      <Container
            sx={{
              borderBottomRightRadius: '10px',
              borderBottomLeftRadius: '10px', 
              margin: '0',
              background: "linear-gradient(#005F73 0%, #3C66B9 34.48%, #567CC8 100%)"}}>
        
        <Grid container padding='12px'>

          <Grid item xs={8}>
            <BasketSummary/>
          </Grid>

          <Grid item xs={1}></Grid>
      
          <Grid columns={3} sx={{marginTop: '12px', marginLeft: '10px'}}>
            <Button
              component={Link}
              to='/checkout'
              variant='contained' 
              color='success'
              size='large'
              fullWidth>
              CheckoutPage          
            </Button>  
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  )
}

export default BasketPage