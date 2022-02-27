import { LoadingButton } from "@mui/lab";
import {
    Avatar,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Grid,
    Skeleton,
    Typography
} from "@mui/material";

export default function ProductCardSkeleton() {
    return (
        <Grid xs container spacing={2} sx={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
                <Box sx={{ 
                marginTop: '1.2rem', 
                marginLeft: '1.8rem',   
                boxShadow: 5,  
                marginBottom: '10px',
                borderRadius: '10px',
                }}>
                <Card sx={{
                borderRadius: '10px',
                height: '37.5vh',
                width: '330px'
                
                }}>
                <CardHeader 
                    avatar={
                        <Avatar sx={{bgcolor: 'secondary.main'}}>
                        <Skeleton animation="wave" variant="circular" width={100} height={40} />
                        </Avatar>
                    }
                    title={<Skeleton
                        animation="wave"
                        height={10}
                        width="80%"
                        style={{ marginBottom: 6 }}
                    />}
                    titleTypographyProps={{
                        sx: {fontWeight: 'bold'}
                    }}
                />
                <Box
                    sx={{
                        boxShadow: 3,  
                        width: 'auto',
                        height: 'auto',
                        background: "linear-gradient(#567CC8 0%, #3C66B9 34.48%, #023E8A 100%)"
                        }}
                    >
                        <CardMedia sx={{height: 100, backgroundSize: 'contain'}}>
                            <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                            <Skeleton animation="wave" height={10} width="80%" />
                        </CardMedia>
                     
                      
          
                </Box>
                
                <CardContent>
                    <Typography gutterBottom variant="h4">
                       <Skeleton animation="wave" height={10} width='40%' />
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <Skeleton animation="wave" height={10} width='40%' />
                    </Typography>
                </CardContent>
                
                <CardActions sx={{display: 'flex', justifyContent: 'space-between', margin: '10px'}}>
                    <LoadingButton>
                      <Skeleton animation="wave" height={50} width='100%' />
                    </LoadingButton>
                    <Button >
                       <Skeleton animation="wave" height={50} width='100%' />
                    </Button>
                </CardActions>
            </Card> 
           </Box>
        </Grid>
         
    )
}