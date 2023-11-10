import {
  Avatar, Card, CardContent, Typography, Container, Grid, Box,
} from '@mui/material';
import React, { useState, useEffect } from 'react';
import getMe from '../../api/userServive';
import UserCard from '../../components/UserCard';
import SavedPokemons from '../../components/SavedPokemons';

function Account() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await getMe();
        setUser(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchUserData();
  }, [user._id]);

  return (
    <Container>
      <Box
        display="flex"
        flexDirection="column"
        minHeight="100vh"
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <UserCard username={user.username} email={user.email} />
          </Grid>
          <Grid item xs={12} sm={12}>
            <SavedPokemons pokemonCollection={user.pokemonCollection} />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Account;
