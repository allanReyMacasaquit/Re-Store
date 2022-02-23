import { Box, Container, Grid} from '@mui/material'
import { Product } from '../../app/models/product'
import ProductCard from './ProductCard'

interface Props {
  products: Product[]
}

function ProductList({products}: Props) {
  return (
    <Container >
      <Box sx={{
        boxShadow: 10, 
        paddingRight: '20px',
        paddingLeft: '20px',
        marginTop: '50px',
        borderRadius: '20px',
        background: "linear-gradient(#90E0EF 0%, #3C66B9 34.48%, #90E0EF 100%)"
      }}  
      >
        <Grid container spacing={4} sx={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
        {products.map((product) => 
          <Grid item key={product.id} >
              <ProductCard product={product}/>
          </Grid>
        )}
      </Grid>
      </Box>
    </Container>
  )
}

export default ProductList

