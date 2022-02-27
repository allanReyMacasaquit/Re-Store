import { Box, Container, Grid} from '@mui/material'
import { Product } from '../../app/models/product'
import { useAppSelector } from '../../app/store/configureStore';
import ProductCard from './ProductCard'
import ProductCardSkeleton from './ProductCardSkeleton';

interface Props {
  products: Product[]
}

function ProductList({products}: Props) {
    const { productsLoaded } = useAppSelector(state => state.catalog);
  return (
    <Container >
      <Box sx={{
       marginTop: '3rem'
      }}  
      >
        <Grid container spacing={2} sx={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
        {products.map((product) => 
          <Grid xs={5} item key={product.id} >
            {!productsLoaded ? (
              <ProductCardSkeleton/>
            ) : 
              <ProductCard product={product}/>
            }
          </Grid>
        )}
      </Grid>
      </Box>
      
    </Container>
  )
}

export default ProductList

