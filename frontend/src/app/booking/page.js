'use client';

import React from 'react';
import { Box, Card, CardContent, Typography, Button, Grid, Avatar, Divider, AppBar, Toolbar, IconButton } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

function App() {
  return (
    <Box 
      sx={{
        backgroundColor: '#f0f0f0', // Background color for the entire page
        minHeight: '100vh', // Ensure it covers the full height of the viewport
        padding: { xs: 2, sm: 3 }, // Responsive padding
      }}
    >
      {/* AppBar */}
      <AppBar position="static" sx={{ borderRadius: '15px', mb: 5 }}>
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu">
            {/* You can add a menu icon or any other icon here */}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            CARCARE
          </Typography>
          <Button
            href="/"
            color="inherit"
            sx={{
              marginRight: 2,
              textDecoration: 'none',
              '&:hover': {
                backgroundColor: 'primary.main',
                color: 'black',
              },
            }}
          >
            Home
          </Button>
          <Button
            href="/cart"
            color="inherit"
            sx={{
              marginRight: 2,
              textDecoration: 'none',
              '&:hover': {
                backgroundColor: 'primary.main',
                color: 'black',
              },
            }}
          >
            Cart
          </Button>
          <Button
            href="/book"
            color="inherit"
            sx={{
              marginRight: 2,
              textDecoration: 'none',
              '&:hover': {
                backgroundColor: 'primary.main',
                color: 'black',
              },
            }}
          >
            Book
          </Button>
          <Button
            href="/login"
            color="inherit"
            sx={{
              textDecoration: 'none',
              '&:hover': {
                backgroundColor: 'primary.main',
                color: 'black',
              },
            }}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            BOOKING
        </Typography>
        
        <Divider/>

      {/* Main Content */}
      <Card sx={{ maxWidth: '100%', margin: 'auto', mt: 5, padding: { xs: 2, sm: 3 }, boxShadow: 3 }}>
        <CardContent>
          <Grid container spacing={2} alignItems="center" flexDirection={{ xs: 'column', sm: 'row' }}>
            {/* Shop Logo */}
            <Grid item xs={12} sm="auto">
              <Avatar
                alt="Nelson's Automotive Shop"
                src="/logo.png" // Replace with actual logo source
                sx={{ width: { xs: 40, sm: 50 }, height: { xs: 40, sm: 50 } }}
              />
            </Grid>
            
            {/* Shop Details */}
            <Grid item xs>
              <Typography variant="h6" component="div">
                Nelson's Automotive Shop
              </Typography>
              <Typography color="text.secondary">
                John Doe
              </Typography>
            </Grid>
          </Grid>

          <Divider sx={{ my: 2 }} />

          {/* Service Details */}
          <Grid container spacing={2} alignItems="center">
  {/* Service Details */}
  <Grid item xs={12} sm={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
    <Typography variant="body1" component="div">
      Service:
    </Typography>
    <Typography variant="h6" component="div">
      Belts Repair
    </Typography>
  </Grid>

  {/* Date Details */}
  <Grid item xs={10} sm={4} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
    <CalendarTodayIcon fontSize="small" sx={{ verticalAlign: 'middle', mr: 1 }} />
    <Typography variant="body1" component="span">
      Fri, December 29
    </Typography>
  </Grid>
</Grid>


          {/* Cancel Booking Button */}
          <Box textAlign="right" mt={-5}>
            <Button variant="contained" color="error">
              Cancel Booking
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default App;
