import React from 'react';
import {
  Button, Container, TextField, Typography, Paper, Grid, Box,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import registerUser from '../../api/authService';
import './Registration.css';

function Registration() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, username, password } = data;

    registerUser({ email, username, password })
      .then(() => {
        navigate('/');
        alert('You have successfully registered!');
      })
      .catch((error) => {
        console.error('Registration Error:', error);
      });
  };

  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
      >
        <Paper elevation={3} style={{ padding: '20px' }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Registration
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  {...register('username', {
                    required: 'Username is required',
                    minLength: {
                      value: 4,
                      message: 'Username should be at least 4 characters',
                    },
                  })}
                  label="Username"
                  fullWidth
                />
                {errors.username && <p className="error">{errors.username.message}</p>}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                  label="Email"
                  fullWidth
                />
                {errors.email && <p className="error">{errors.email.message}</p>}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  {...register('password', {
                    required: 'Password is required',
                    minLength: {
                      value: 8,
                      message: 'Password should be at least 8 characters',
                    },
                  })}
                  label="Password"
                  fullWidth
                  type="password"
                />
                {errors.password && <p className="error">{errors.password.message}</p>}
              </Grid>
            </Grid>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              type="submit"
              style={{ marginTop: '20px' }}
            >
              Sign up
            </Button>
          </form>
        </Paper>
      </Box>
    </Container>
  );
}

export default Registration;
