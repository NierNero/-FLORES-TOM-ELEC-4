"use client";

import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Alert,
  Box,
  Link,
} from "@mui/material";
import { blue, grey } from "@mui/material/colors";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [shop, setShop] = useState("");
  const [error, setError] = useState("");
  const [image, setImage] = useState(null); // State for the uploaded image

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError("");

    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Shop:", shop);


    if (image) {
      console.log("Uploaded Image:", URL.createObjectURL(image));
    }
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: grey[100],
        padding: 4,
        borderRadius: 2,
        boxShadow: 5,
        minHeight: "100vh",
        backgroundImage: `url('https://source.unsplash.com/random?shop')`, // Shop-related background
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Container
        maxWidth="xs"
        sx={{
          mt: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "white",
          padding: 4,
          borderRadius: 2,
          boxShadow: 4,
          width: "100%",
          backdropFilter: "blur(10px)", // Adding a blur effect to the background
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom sx={{ color: blue[700] }}>
          Register
        </Typography>
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <TextField
            label="Email or Username"
            type="email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            sx={{ bgcolor: grey[50] }}
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
            sx={{ bgcolor: grey[50] }}
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
            sx={{ bgcolor: grey[50] }}
          />
          <TextField
            label="Shop Name"
            type="Shop Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={shop}
            onChange={(e) => setShop(e.target.value)}
            required
            sx={{ bgcolor: grey[50] }}
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            style={{ margin: '16px 0', width: '100%' }}
          />
          {image && (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                mb: 2,
              }}
            >
              <img
                src={URL.createObjectURL(image)}
                alt="Uploaded Shop"
                style={{
                  maxWidth: '100%',
                  maxHeight: '200px',
                  borderRadius: '8px',
                  objectFit: 'cover',
                }}
              />
            </Box>
          )}
          {error && (
            <Alert severity="error" sx={{ mt: 2 }}>
              {error}
            </Alert>
          )}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 3, mb: 2, bgcolor: blue[500], '&:hover': { bgcolor: blue[700] } }}
          >
            Register
          </Button>
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
            <Link href="/login" variant="body2" color={blue[500]}>
              Already Have Account
            </Link>
            <Link href="#" variant="body2" color={blue[500]}>
              Forgot Password?
            </Link>
          </Box>
        </form>
      </Container>
    </Box>
  );
}

export default App;
