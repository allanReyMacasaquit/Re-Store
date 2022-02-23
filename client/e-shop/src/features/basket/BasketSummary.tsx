import { TableContainer, Table, TableBody, TableRow, TableCell, Typography } from "@mui/material";
// import { useStoreContext } from "../../app/context/StoreContext";
import { useAppSelector } from "../../app/store/configureStore";
import { currencyFormat } from "../../app/util/util";


export default function BasketSummary() {
  const {basket} = useAppSelector(state => state.basket)
  // const {basket} = useStoreContext();

    const subtotal = basket?.items.reduce((sum, item) => sum + (item.price * item.quantity), 0) ?? 0;
    const deliveryFee = subtotal > 10000 ? 0 : 1375;
    const HST = subtotal * 0.1300

    return (
        <>
            <TableContainer
            sx={{
              borderRadius: '10px',
              margin: '10px',
              background: "linear-gradient(#84A0D7 0%, #3C66B9 34.48%, #567CC8 100%)"}}>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell colSpan={2}>Subtotal</TableCell>
                            <TableCell align="right">
                              <Typography sx={{color: 'HighlightText'}}>
                                 {currencyFormat(subtotal)}
                              </Typography>
                             
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={2}>Delivery fee*</TableCell>
                            <TableCell align="right">
                              <Typography sx={{color: 'HighlightText'}}>
                                {currencyFormat(deliveryFee)}
                              </Typography>
                              </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={2}>HST*</TableCell>
                            <TableCell align="right">
                              <Typography sx={{color: 'HighlightText'}}>
                                {currencyFormat(HST)}
                              </Typography>
                              </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={2}>
                               <Typography variant="h6" sx={{color: 'HighlightText'}}>
                                  Total
                               </Typography>
                             </TableCell>
                            <TableCell align="right">
                              <Typography sx={{color: 'HighlightText', fontSize: "20px", textDecoration: 'underline', textUnderlinePosition: 'under'} }>
                                  {currencyFormat(subtotal + deliveryFee + HST)}
                              </Typography>
                            </TableCell>
                        </TableRow>
                        <TableRow >
                              <span style={{fontStyle: 'italic'}}>*Orders over $100 qualify for free delivery</span>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}