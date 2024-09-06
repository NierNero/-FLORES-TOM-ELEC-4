'use client'

import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Alert, Box, Link } from '@mui/material';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); 
  const [error, setError] = useState('');

 
  const handleSubmit = (event) => {
    event.preventDefault();

    
    if (!email || !password || !confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    
    setError('');


    console.log('Email:', email);
    console.log('Password:', password);

    
  };

  return (
    <Box sx={{
      display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#ffffff', 
            padding: 3,
            borderRadius: 2,
            boxShadow: 3,
            minHeight: '100vh',
    }}>
    <Container 
      maxWidth="xs" sx={{
        mt: 8, 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#ffffff', 
        padding: 3,
        borderRadius: 2, 
        boxShadow: 3,
        width: '100%',
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
          sx={{ mt: 3, mb: 2 }}
          >
          Register
        </Button>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Link href="/login" variant="body2">
                Already Have Account
              </Link>
              <Link href="#" variant="body2">
                Forgot Password?
              </Link>
            </Box>
      </form>
    </Container>
    </Box>
  );
}

export default App;
