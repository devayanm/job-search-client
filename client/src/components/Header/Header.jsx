import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, useMediaQuery, Drawer, IconButton } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Header = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        {isMobile && (
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        )}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Job Search Platform
        </Typography>
        {!isMobile && (
          <Box sx={{ display: 'flex' }}>
            <Button color="inherit" component={Link} to="/home">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/jobs">
              Jobs
            </Button>
            <Button color="inherit" component={Link} to="/profile">
              Profile
            </Button>
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
          </Box>
        )}
      </Toolbar>

      {/* Drawer for Mobile Devices */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <Box
          sx={{
            width: 250,
            padding: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Button color="inherit" fullWidth component={Link} to="/home" onClick={toggleDrawer}>
            Home
          </Button>
          <Button color="inherit" fullWidth component={Link} to="/jobs" onClick={toggleDrawer}>
            Jobs
          </Button>
          <Button color="inherit" fullWidth component={Link} to="/profile" onClick={toggleDrawer}>
            Profile
          </Button>
          <Button color="inherit" fullWidth component={Link} to="/login" onClick={toggleDrawer}>
            Login
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;
