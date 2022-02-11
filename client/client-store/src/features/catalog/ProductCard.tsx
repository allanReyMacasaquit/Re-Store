import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';
import { Product } from '../../models/product';

interface Props {
    product: Product; 
}

export default function ProductCard({product}: Props) {
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
                        sx={{height: 180, backgroundSize: 'contain', backgroundColor: '#eaeaea'}}
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
                <CardActions>
                    <Button variant="contained" color="success">
                        Add to Cart
                    </Button>
                    <Button variant='contained' color='info'>View details</Button>
                </CardActions>
                
            </Card> 
           </Box>
            
      
        
       
    )
}
