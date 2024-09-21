// FacebookRedirectPage.js

"use client";

import React from "react";
import {
  Box,
  Typography,
  Container,
  Button,
  Link,
} from "@mui/material";
import { blue, grey } from "@mui/material/colors";

function FacebookRedirectPage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: grey[200],
        padding: 4,
        borderRadius: 3,
        boxShadow: 5,
        minHeight: "100vh",
        backgroundImage: `url('https://source.unsplash.com/random/1600x900?sig=2')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Container
        maxWidth="xs"
        sx={{
          mt: 6,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "white",
          padding: 4,
          borderRadius: 3,
          boxShadow: 4,
          width: "100%",
          backdropFilter: "blur(10px)",
        }}
      >
        <Typography component="h1" variant="h5" textAlign="center" sx={{ mb: 2, color: blue[700] }}>
          Facebook Login Successful
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 3 }}>
          You have successfully logged in with Facebook.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          href="/dashboard"
          sx={{ mb: 2, bgcolor: blue[600], '&:hover': { bgcolor: blue[800] } }}
        >
          Go to Dashboard
        </Button>
      </Container>
    </Box>
  );
}

export default FacebookRedirectPage;
