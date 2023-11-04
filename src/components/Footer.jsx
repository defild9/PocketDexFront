import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function Footer() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="body2" color="inherit">
          &copy;
          {' '}
          {new Date().getFullYear()}
          {' '}
          PocketDex
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;
