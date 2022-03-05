import { Button, Menu, Fade, MenuItem } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import { signOut } from '../../features/account/AccountSlice';
import { clearBasket } from '../../features/basket/basketSlice/basketSlice';
import { useAppDispatch, useAppSelector } from '../store/configureStore';

function SignedInMenu() {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(state => state.account);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

  return (
     <>
            <Button
                color='inherit'
                onClick={handleClick}
                sx={{
                  marginTop: '5px',
                  color: 'inherit',
                  Typography: '4',
                  textDecoration: 'none',
                  '&:hover': {
                    color: '#24B2F9',
                },
              }}
            >
                {user?.email}
            </Button>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem component={Link} to='/basket'>My orders</MenuItem>
                <MenuItem onClick={() => {
                    dispatch(signOut());
                    dispatch(clearBasket());
                }}>Logout</MenuItem>
            </Menu>
        </>
  )
}

export default SignedInMenu