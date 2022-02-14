import { Button, Container, Divider, Paper, Typography } from '@mui/material';
import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'

function ServerError() {
  const history = useHistory();
  const {state} = useLocation<any>();
  return (
    <Container component={Paper} sx={{mt: '20px'}}>
      {state?.error ? (
        <div>
          <Typography variant='h3' color='error' gutterBottom>{state.error.title}</Typography>
          <Typography variant='h5' color='error' gutterBottom>status : {state.error.status || 'Internal Server Error'}</Typography>
          <Divider/>
          <Typography>{state.error.detail || 'Internal Server Error'}</Typography>
        </div>
      ) : (
         <Typography variant='h5' gutterBottom>Server Error</Typography>
      )}
      <Button onClick={() => history.push('/catalog')}> Go back to the store</Button>
    </Container>
  )
}

export default ServerError