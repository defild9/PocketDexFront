import React, { useState, useEffect } from 'react';
import {
  Button, Typography, Toolbar, AppBar,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { checkIfUserIsAuthenticated } from '../utils/authentication';

function Header() {
  const [isAuthenticated, setIsAuthenticated] = useState(checkIfUserIsAuthenticated());

  useEffect(() => {
    const isAuthenticatedNow = checkIfUserIsAuthenticated();
    setIsAuthenticated(isAuthenticatedNow);
  }, []);
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            PocketDex
          </Link>
        </Typography>
        {isAuthenticated ? (
          <Button color="inherit">
            <Link to="/account" style={{ textDecoration: 'none', color: 'inherit' }}>
              Account
            </Link>
          </Button>
        ) : (
          <>
            <Button color="inherit">
              <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
                Login
              </Link>
            </Button>
            <Button color="inherit">
              <Link to="/registration" style={{ textDecoration: 'none', color: 'inherit' }}>
                Sign up
              </Link>
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
