import React from 'react';
import {
  Card, Avatar, CardContent, Typography,
} from '@mui/material';

function UserCard({ username, email }) {
  return (
    <Card sx={{ margin: 'auto', marginTop: 5 }}>
      <Avatar
        sx={{
          width: 100, height: 100, margin: 'auto', marginTop: 2,
        }}
        alt={username}
      />
      <CardContent>
        <Typography variant="h5" align="center" gutterBottom>
          {username}
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary">
          {email}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default UserCard;
