import { ThemeProvider } from '@emotion/react';
import { Add, Delete, Remove } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { Box, Container, createTheme, Grid,  Table,  TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { purple } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/store/configureStore';
import { addBasketItemAsync, removeBasketItemAsync } from './basketSlice/basketSlice';
import BasketSummary from './BasketSummary';

const theme = createTheme({
  palette: {
     primary: {
      main: purple[50],
    },
    
  },
});

function BasketPage() {
  const dispatch = useAppDispatch();
  const {basket, status} = useAppSelector(state => state.basket);
  
  if (!basket) {
   return <Container>
            <Typography sx={{mt: '20vh', display: 'flex', justifyContent: 'center' }} variant='h3'>Your basket is empty</Typography>
          </Container>
  }
  
  return (
    <>
   
    <ThemeProvider theme={theme}>
        
        <TableContainer sx={{mt: '20px', height: '64vh', boxShadow: 5,
          borderTopLeftRadius: '10px',
          borderTopRightRadius: '10px',
          background: "linear-gradient(#005F73 0%, #3C66B9 34.48%, #567CC8 100%)"}}>
        <Table sx={{ minWidth: 650 }} stickyHeader aria-label="sticky table">
          <TableHead sx={{color: 'purple'}} >
            <TableRow sx={{boxShadow: 5, }}>
              <TableCell align='left'><Typography sx={{fontSize: "20px", textDecoration: 'underline', textUnderlinePosition: 'under',  borderRadius: '5px'}} variant='h5' marginLeft={9}>Product</Typography></TableCell>
              <TableCell align="center"><Typography sx={{fontSize: "20px", textDecoration: 'underline', textUnderlinePosition: 'under',  borderRadius: '5px'}}  variant='h5'>Price</Typography></TableCell>
              <TableCell align="center"><Typography sx={{fontSize: "20px", textDecoration: 'underline', textUnderlinePosition: 'under',  borderRadius: '5px'}}  variant='h5'>Quantity</Typography></TableCell>
              <TableCell align="center"><Typography sx={{fontSize: "20px", textDecoration: 'underline', textUnderlinePosition: 'under',  borderRadius: '5px'}}  variant='h5'>Subtotal</Typography></TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
      
            <TableBody>
              {basket.items.map((item) => (
                <TableRow
                  key={item.productId}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell  component="th" scope="row">
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

                  
                  <TableCell align="center">
                    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                      <Box sx={{
                        boxShadow: 5,
                        borderRadius: 50,
                        ":hover": {borderRadius: '20%'}
                      }}>
                        <LoadingButton
                         loading={status === 'pendingRemoveItem' + item.productId + 'rem'}
                         onClick={() => dispatch(removeBasketItemAsync({productId: item.productId, quantity: 1, name: 'rem'}))}
                         color='error'>
                         <Remove/>
                      </LoadingButton>
                      </Box>

                        <Typography variant='h4' color='primary.main' margin={2}>
                          {item.quantity}
                        </Typography>
                        
                      <Box sx={{
                        boxShadow: 5,
                        borderRadius: 50,
                        ":hover": {borderRadius: '20%'}
                      }}>
                        <LoadingButton 
                           loading={status === 'pendingAddItem' + item.productId}
                           onClick={() => dispatch(addBasketItemAsync({productId: item.productId}))}>
                            <Add/>
                        </LoadingButton>
                      </Box>
                    </Box>
                  </TableCell>
                 
                  <TableCell align="center">
                    <Typography variant='h6' color='primary.main'>
                      ${((item.price * item.quantity) / 100).toFixed(2)}
                    </Typography>
                    
                  </TableCell>
                  <TableCell align="center">
                    <LoadingButton
                    sx={{
                      boxShadow: 5,
                      borderRadius: 50,
                      ":hover": {borderRadius: '20%'}
                    }} 
                    loading={status === 'pendingRemoveItem' + item.productId + 'del'}
                    onClick={() => dispatch(removeBasketItemAsync({productId: item.productId, quantity: item.quantity, name: 'del'}))}
                    color='error' >
                      <Delete/>
                    </LoadingButton>
                  </TableCell>
                  
                </TableRow>
              ))}
            </TableBody>
        
          
        </Table>
      </TableContainer>
      
      <TableContainer
            sx={{
              height: 'auto',
              boxShadow: 5,
              borderBottomRightRadius: '10px',
              borderBottomLeftRadius: '10px', 
              margin: '0',
              background: "linear-gradient(#005F73 0%, #3C66B9 34.48%, #567CC8 100%)"}}>
        
        <Grid margin={2}>
          <Box sx={{marginRight: '20px'}}>
            <BasketSummary/>
          </Box>

          <Grid columns={12} sx={{margin: '10px'}}>
            <LoadingButton
              sx={{
              boxShadow: 5,
              borderRadius: 50,
              }}
              component={Link}
              to='/checkout'
              variant='contained' 
              color='success'
              size='large'
              fullWidth>
              Checkout         
            </LoadingButton>  
          </Grid>
        </Grid>
      </TableContainer> 
    </ThemeProvider>
  </>
  )
}

export default BasketPage