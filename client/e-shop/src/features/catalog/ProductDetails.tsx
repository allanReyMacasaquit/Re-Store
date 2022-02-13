import { LoadingButton } from '@mui/lab';
import { Divider, Grid, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Product } from '../../app/models/product';

function ProductDetails() {
  const {id} = useParams<{id: string}>();
  const [product, setProduct] = useState<Product | null>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://localhost:7162/api/products/${id}`)
    .then(response => setProduct(response.data))
    .catch(error => console.log(error))
    .finally(() => setLoading(false));
  }, [id])
  
  if (loading) return <h3>Loading...</h3>

  if(!product) return <h3>Product not Found</h3>

  return (
  <Grid container spacing={6} sx={{mt: '10px'}}>
            <Grid item xs={6}>
                <img src={product.pictureUrl} alt={product.name} style={{width: '100%'}} />
            </Grid>
            <Grid item xs={6}>
                <Typography variant='h3'>{product.name}</Typography>
                <Divider sx={{mb: 2}} />
                <Typography variant='h4' color='secondary'>${(product.price / 100).toFixed(2)}</Typography>
                <TableContainer>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>{product.name}</TableCell>
                            </TableRow>    
                            <TableRow>
                                <TableCell>Description</TableCell>
                                <TableCell>{product.description}</TableCell>
                            </TableRow>  
                            <TableRow>
                                <TableCell>Type</TableCell>
                                <TableCell>{product.type}</TableCell>
                            </TableRow>  
                            <TableRow>
                                <TableCell>Brand</TableCell>
                                <TableCell>{product.brand}</TableCell>
                            </TableRow>  
                            <TableRow>
                                <TableCell>Quantity in stock</TableCell>
                                <TableCell>{product.quantityInStock}</TableCell>
                            </TableRow>  
                        </TableBody>
                    </Table>
                </TableContainer>
                <Grid container spacing={4} sx={{mt: 4}}>
                    <Grid item xs={6}>
                        <TextField 
                            variant='outlined'
                            type='number'
                            label='Quantity in Cart'
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <LoadingButton
                            sx={{height: '55px', borderRadius: '25px', background: 'linear-gradient(#003566 0%, #A3B7E1 34.48%, #003566 100%)'}}
                            color='primary'
                            size='large'
                            variant='contained'
                            fullWidth
                        >
                          Loading...
                        </LoadingButton>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
  )
}

export default ProductDetails