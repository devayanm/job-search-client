import React from 'react';
import { List, ListItem, ListItemText, Divider, Box } from '@mui/material';
import { Dashboard, Work, Person } from '@mui/icons-material';
import { useLocation, Link } from 'react-router-dom';

const Sidebar = () => {
  const links = [
    { text: 'Dashboard', icon: <Dashboard />, path: '/dashboard' },
    { text: 'Jobs', icon: <Work />, path: '/jobs' },
    { text: 'Profile', icon: <Person />, path: '/profile' },
  ];

  const location = useLocation();
  const activeLink = location.pathname;

  return (
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
            '&.Mui-selected': {
              backgroundColor: '#007bff',
              color: '#fff',
            },
          }}
        >
          <Box
            sx={{
              marginRight: '10px',
              color: activeLink === link.path ? '#fff' : '#000',
            }}
          >
            {link.icon}
          </Box>
          <ListItemText primary={link.text} />
        </ListItem>
      ))}
    </List>
  );
};

export default Sidebar;
