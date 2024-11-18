import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  useMediaQuery,
  Drawer,
  IconButton,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store/slices/authSlice';

const Header = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const renderMenuItems = () => {
    if (isAuthenticated) {
      return (
        <>
          <Button color="inherit" component={Link} to="/home">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/profile">
            Profile
          </Button>
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        </>
      );
    }
    return (
      <>
        <Button color="inherit" component={Link} to="/home">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/login">
          Login
        </Button>
        <Button color="inherit" component={Link} to="/signup">
          Signup
        </Button>
      </>
    );
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
        {!isMobile && <Box sx={{ display: 'flex' }}>{renderMenuItems()}</Box>}
      </Toolbar>

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
          {React.Children.map(renderMenuItems().props.children, (child) => (
            <Button
              color="inherit"
              fullWidth
              component={child.props.component}
              to={child.props.to}
              onClick={toggleDrawer}
            >
              {child.props.children}
            </Button>
          ))}
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;
