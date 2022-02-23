import { Container } from '@mui/material';
import { useEffect } from 'react'
import LoadingComponent from '../../app/layout/LoadingComponent';
import { useAppDispatch, useAppSelector } from '../../app/store/configureStore';
import { fetchProductsAsync, productSelectors } from './catalogSlice/catalogSlice';
import ProductList from './ProductList';

function Catalog() {
  const products = useAppSelector(productSelectors.selectAll);
    const {productsLoaded, status} = useAppSelector(state => state.catalog);
    const dispatch = useAppDispatch();

useEffect(() => {
   if (!productsLoaded) dispatch(fetchProductsAsync());
    }, [productsLoaded, dispatch])

if (status.includes('pending')) return <LoadingComponent message='Loading Products List...'/>

  return (
    <>
    <Container sx={{mt: 4}}>
      <ProductList products={products}/>
    </Container>
    </>
    
  )
}

export default Catalog