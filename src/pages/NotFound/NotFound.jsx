import { Box, Typography, Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Typography variant="h1" style={{ color: 'black' }}>
        404
      </Typography>
      <Typography variant="h6" style={{ color: 'black' }}>
        The page you’re looking for doesn’t exist.
      </Typography>
      <Link to="/">
        <Button variant="contained">Back Home</Button>
      </Link>
    </Box>
  );
}

export default NotFound;
