import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react'
import agent from '../../app/api/agent';
import LoadingComponent from '../../app/layout/LoadingComponent';
import { Product } from '../../app/models/product';
import ProductList from './ProductList';

function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  agent.Catalog.list().then(products => setProducts(products))
  .catch(error => console.log(error))
  .finally(() => setLoading(false));
},[])

if (loading) return <LoadingComponent message='Loading Products List...'/>

  return (
    <Container sx={{mt: 4}}>
      <ProductList products={products}/>
    </Container>
  )
}

export default Catalog