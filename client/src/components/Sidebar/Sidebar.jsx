import React from 'react';
import { List, ListItem, ListItemText, Box } from '@mui/material';
import { Dashboard, Work, Person, Event, Settings } from '@mui/icons-material';
import { useLocation, Link } from 'react-router-dom';

const Sidebar = () => {
  const links = [
    { text: 'Dashboard', icon: <Dashboard />, path: '/dashboard' },
    { text: 'Jobs', icon: <Work />, path: '/jobs' },
    { text: 'Events', icon: <Event />, path: '/events' },
    { text: 'Profile', icon: <Person />, path: '/profile' },
    { text: 'Settings', icon: <Settings />, path: '/settings' },
  ];

  const location = useLocation();
  const activeLink = location.pathname;

  return (
    <Box
      sx={{
        width: 250,
        bgcolor: 'background.paper',
        height: '130vh',
        boxShadow: 3,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <List>
        {links.map((link, index) => (
          <ListItem
            key={index}
            component={Link}
            to={link.path}
            selected={activeLink === link.path}
            sx={{
              padding: '10px 20px',
              display: 'flex',
              alignItems: 'center',
              borderRadius: 2,
              mb: 1,
              transition: 'background-color 0.3s',
              '&:hover': {
                backgroundColor: '#e0e0e0',
              },
              '&.Mui-selected': {
                backgroundColor: '#007bff',
                color: '#fff',
                '& .MuiSvgIcon-root': {
                  color: '#fff',
                },
              },
            }}
          >
            <Box
              sx={{
                marginRight: '10px',
                color: activeLink === link.path ? '#fff' : 'text.secondary',
              }}
            >
              {link.icon}
            </Box>
            <ListItemText
              primary={link.text}
              primaryTypographyProps={{
                fontWeight: activeLink === link.path ? 'bold' : 'normal',
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
