import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Product } from '../../app/models/product';
import ProductList from './ProductList';

function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);

useEffect(() => {
  fetch('https://localhost:7162/api/products')
    .then(response => response.json())
    .then(data => setProducts(data))
},[])

  return (
    <Container sx={{mt: 4}}>
      <ProductList products={products}/>
    </Container>
  )
}

export default Catalog