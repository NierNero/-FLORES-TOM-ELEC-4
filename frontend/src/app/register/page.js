'use client'

import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Alert, Box } from '@mui/material';

function App() {
  // State to hold the input values and error message
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); // New state for confirm password
  const [error, setError] = useState('');

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Basic validation
    if (!email || !password || !confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // Clear previous error message
    setError('');

    // For demonstration, we're just logging the values
    console.log('Email:', email);
    console.log('Password:', password);

    // Normally you would send the credentials to your backend here
    // fetch('https://your-backend-api.com/register', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ email, password }),
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     if (data.success) {
    //       // Handle successful registration
    //       console.log('Registration successful!');
    //     } else {
    //       // Handle registration failure
    //       setError('Registration failed.');
    //     }
    //   })
    //   .catch(error => {
    //     // Handle network errors
    //     setError('An error occurred. Please try again.');
    //   });
  };

  return (
    <Box sx={{
      backgroundColor: '#f0f0f0', // Background color for the entire page
      minHeight: '100vh', // Ensure it covers the full height of the viewport
      padding: 3,
    }}>
    <Container 
      maxWidth="xs" 
      sx={{ 
        mt: 8,
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Register
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
        <TextField
          label="Confirm Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
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
          Register
        </Button>
      </form>
    </Container>
    </Box>
  );
}

export default App;
