import {Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { Product } from '../../app/models/product'

interface Props {
  product: Product
}

function ProductCard({product}: Props) {
  return (
    <Box sx={{
                boxShadow: 3,  
                width: 'auto',
                height: 'auto',
                marginTop: '15px',
                borderRadius: '10px',
                }}>
                <Card sx={{
                borderRadius: '10px',
                }}>
                <CardHeader 
                    avatar={
                        <Avatar sx={{bgcolor: 'secondary.main'}}>
                        {product.name?.charAt(0).toUpperCase()}
                        </Avatar>
                    }
                    title={product.name}
                    titleTypographyProps={{
                        sx: {fontWeight: 'bold'}
                    }}
                />
                <Box
                    sx={{
                        boxShadow: 3,  
                        width: 'auto',
                        height: 'auto',
                        }}
                    >
                        <CardMedia
                        sx={{height: 180, backgroundSize: 'contain', backgroundColor: '#14223E'}}
                        image={product.pictureUrl}
                        title={product.name}
                    />
                </Box>
                
                <CardContent>
                    <Typography gutterBottom variant="h4">
                        ${(product.price / 100).toFixed(2)}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {product.brand} / {product.type}
                    </Typography>
                </CardContent>
                <CardActions sx={{display: 'flex', justifyContent: 'space-around', m: '10px'}}>
                    <Button 
                        sx={{mr: '5px',borderRadius: '25px', background: 'linear-gradient(#2C095D 0%, #AE7DF2 34.48%, #2C095D 100%)'}}
                        variant="contained" 
                        color="success">
                        Add to Cart
                    </Button>
                    <Button
                        component={Link}
                        to={`catalog/${product.id}`}
                        sx={{borderRadius: '25px', background: 'linear-gradient(#003566 0%, #A3B7E1 34.48%, #003566 100%)'}}
                        variant='contained' 
                        color='info'>
                        View details
                    </Button>
                </CardActions>
                
            </Card> 
           </Box>
            

  )
}

export default ProductCard

