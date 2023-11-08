import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Container, Box, Paper, Typography, Grid, TextField, Button, Alert,
} from '@mui/material';
import { loginUser } from '../../api/authService';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loginError, setLoginError] = useState(null);

  const onSubmit = async (data) => {
    try {
      const { email, password } = data;
      const response = await loginUser({ email, password });

      if (response) {
        localStorage.setItem('token', response.token);
      }
    } catch (error) {
      setLoginError(error.message);
    }
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
            Login
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
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
                  })}
                  label="Password"
                  fullWidth
                  type="password"
                />
                {errors.password && <p className="error">{errors.password.message}</p>}
              </Grid>
            </Grid>
            {loginError
              && (
              <Box mt={1}>
                <Alert severity="error">{loginError}</Alert>
              </Box>
              )}
            <Button
              variant="contained"
              color="primary"
              fullWidth
              type="submit"
              style={{ marginTop: '20px' }}
            >
              Login
            </Button>
          </form>
        </Paper>
      </Box>
    </Container>
  );
}

export default Login;
