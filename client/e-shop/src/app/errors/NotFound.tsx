import { LoadingButton } from '@mui/lab'
import { Container, Divider, Paper, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
     <Container component={Paper} sx={{height: 300, marginTop: '150px'}}>
            <Typography gutterBottom variant='h3' color='error'>Oops - we could not find what you are looking for</Typography>
            <Divider />
            <LoadingButton 
            sx={{
                      boxShadow: 5,
                      color: 'white',
                      ":hover": {background: "linear-gradient(#005F73 0%, #023E8A 34.48%, #567CC8 100%)"},
                      background: "linear-gradient(#005F73 0%, #3C66B9 34.48%, #567CC8 100%)"
                    }} 
            fullWidth component={Link} to='/catalog'>Go back to shop</LoadingButton>
        </Container>
  )
}

export default NotFound