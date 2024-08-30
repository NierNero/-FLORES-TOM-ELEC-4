'use client'

import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Alert } from '@mui/material';

function App() {
  // State to hold the input values and error message
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Basic validation
    if (!email || !password) {
      setError('Please fill in both fields.');
      return;
    }

    // For demonstration, we're just logging the values
    console.log('Email:', email);
    console.log('Password:', password);

    // Normally you would send the credentials to your backend here
    // fetch('https://your-backend-api.com/login', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ email, password }),
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     if (data.success) {
    //       // Handle successful login
    //       console.log('Login successful!');
    //     } else {
    //       // Handle login failure
    //       setError('Invalid email or password.');
    //     }
    //   })
    //   .catch(error => {
    //     // Handle network errors
    //     setError('An error occurred. Please try again.');
    //   });
  };

  return (
    <Container 
      maxWidth="xs" 
      sx={{ 
        mt: 6,
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        minHeight: '93vh'
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Login
      </Typography>
      <form 
        onSubmit={handleSubmit} 
        style={{ width: '100%' }}
      >
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}
        <Button 
          type="submit" 
          variant="contained" 
          color="primary" 
          fullWidth 
          sx={{ mt: 3 }}
        >
          Login
        </Button>
      </form>
    </Container>
  );
}

export default App;

