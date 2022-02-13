import { Container, Grid} from '@mui/material'
import { Product } from '../../app/models/product'
import ProductCard from './ProductCard'

interface Props {
  products: Product[]
}

function ProductList({products}: Props) {
  return (
    <Container >
      <Grid container spacing={4} sx={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
        {products.map((product) => 
          <Grid item key={product.id} >
              <ProductCard product={product}/>
          </Grid>
          
        )}
      </Grid>
    </Container>
  )
}

export default ProductList

