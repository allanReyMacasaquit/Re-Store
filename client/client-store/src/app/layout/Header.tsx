import { AppBar, Box, Button, Switch, Toolbar, Typography } from '@mui/material';

interface Props {
  darkMode: boolean;
  handleThemeChange: ( ) => void;
}

 function Header({darkMode, handleThemeChange}: Props) { 
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Re-Store Shop
          </Typography>
          <span>Switch Mode:</span>
          <Switch checked={darkMode} onChange={handleThemeChange}></Switch>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
