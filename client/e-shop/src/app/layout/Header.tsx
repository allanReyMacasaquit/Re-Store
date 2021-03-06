import { ShoppingCart } from '@mui/icons-material';
import { AppBar, Badge, BadgeProps, Box,FormControlLabel,IconButton,List, ListItem, styled, Switch, Toolbar, Typography } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
import { useAppSelector } from '../store/configureStore';
import SignedInMenu from './SignedInMenu';

interface Props {
  darkMode: boolean;
  handleThemeChange: ( ) => void;
}

const midLinks = [
  {title: 'about', path: '/about'},
  {title: 'catalog', path: '/catalog'},
  {title: 'contact', path: '/contact'},
]

const errorLink = [
  {title: 'error', path: '/error'}
]

const rightLinks = [
  {title: 'login', path: '/login'},
  {title: 'register', path: '/register'}
]

export const navStyles = [{
                padding: '10px',
                color: 'inherit',
                Typography: '6',
                textDecoration: 'none',
                '&:hover': {
                  color: '#74CEFB',
              },
                '&.active': {
                  color: '#24B2F9',
              }
            }]

function Header({darkMode, handleThemeChange}: Props) { 
const {user} = useAppSelector(state => state.account)
const {basket} = useAppSelector(state => state.basket)
const itemCount = basket?.items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <Box sx={{
      boxShadow: 3,
      height: 97,
    }}>
      <Wrapper position="static" >
        <Toolbar sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}} >
            <img style={{width: '150px'}} src='/images/logo.png' alt='Re-Store logo'/>
          <Typography 
            component={NavLink}
            exact to='/'
            variant="h5" 
            style={{padding: '7px'}}
            sx={navStyles}
          >
            ReStore
          </Typography>
          </Box>
          
          <List sx={{
            display: 'flex' , 
            m:2, 
            textTransform: 'uppercase', 
            typography: 'h6'
            }}>
            {midLinks.map(({title, path}) => (
            <ListItem
              component={NavLink}
              to={path}
              key={path}
              sx={navStyles}
            >
              {title}
            </ListItem>
            ))}
          </List>

          <List sx={{
            display: 'flex' , 
            m:2, 
            textTransform: 'uppercase', 
            typography: 'h6'
            }}>
            {errorLink.map(({title, path}) => (
            <ListItem
              component={NavLink}
              to={path}
              key={path}
              sx={{color: 'red'}}
            >
            </ListItem>
            ))}
          </List>

          {user ? (
            <SignedInMenu/>
          ) : (
            <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <List sx={{display: 'flex' , m:2, textTransform: 'Capitalize', typography: 'h8'}}>
              {rightLinks.map(({title, path}) => (
              <ListItem
                component={NavLink}
                to={path}
                key={path}
                sx={navStyles}
              >
              {title}
              </ListItem>
              ))}
            </List>
          </Box>
          )}

          <Box>
             <IconButton component={Link} to='/basket' size='large' sx={{color: 'inherit', '&:hover': {
                    background: "#5493DC",
                    borderRadius: '25px',
              }}}>
              <StyledBadge badgeContent={itemCount} color='secondary'>
                <Typography 
                >Cart
                </Typography>
                <ShoppingCart/> 
              </StyledBadge>
            </IconButton>
          </Box>

          <FormControlLabel
            control={<MaterialUISwitch/>}
            label="Switch Mode" 
            sx={navStyles} style={{paddingRight: '5px'}}
            checked={darkMode} onChange={handleThemeChange}
          ></FormControlLabel>
            
        </Toolbar>
      </Wrapper>
    </Box>
  );
}

export default Header;

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -6,
    top: -4,
    border: `1px solid ${theme.palette.background.paper}`,
    padding: '0 6px',
  },
}));

const Wrapper = styled(AppBar)`
background: linear-gradient(#14223E 0%, #233B6C 34.48%, #567CC8 100%);
`;

const MaterialUISwitch = styled(Switch)(({ theme}) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
    width: 32,
    height: 32,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}));

