import { LoadingButton } from "@mui/lab";
import { Button, Container, Grid, Paper, Typography } from "@mui/material";
import { Link, useHistory } from "react-router-dom";
import { useAppSelector } from "../../app/store/configureStore";
import BasketSummary from "./BasketSummary";
import BasketTable from "./BasketTable";

export default function BasketPage() {
    const history = useHistory();
    const { basket } = useAppSelector(state => state.basket);

    if (!basket) return (
        <Container component={Paper} sx={{mt: '100px', display: 'flex', justifyContent: 'space-between', textTransform: 'uppercase'}}>
          <Typography variant='h3' color='#003566'>Your basket is empty</Typography>
            <LoadingButton
            onClick={() => history.push('/catalog')}> <Typography color='#003166'>Go back to the store
                </Typography></LoadingButton>
        </Container>
    )
    
    return (
        <>
            <BasketTable items={basket.items} />
            <Grid container sx={{marginTop: '5px'}}>
                <Grid item xs={6} />
                <Grid item xs={6}>
                    <BasketSummary />
                    <Button
                        component={Link}
                        to='/checkout'
                        variant='contained'
                        size='large'
                        fullWidth
                    >
                        Checkout
                    </Button>
                </Grid>
            </Grid>
        </>

    )
}