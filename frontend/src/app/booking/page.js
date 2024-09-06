'use client';

import React from 'react';
import { Box, Card, CardContent, Typography, Button, Grid, Avatar, Divider, AppBar, Toolbar, IconButton } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

function App() {
  return (
    <Box 
      sx={{
        backgroundColor: '#f0f0f0', 
        minHeight: '100vh', 
        padding: { xs: 2, sm: 3 },
      }}
    >
      <AppBar position="static" sx={{
        borderRadius: '0 0 15px 15px', 
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
        backgroundColor: '#333', 
      }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Nelson's Automotive
          </Typography>
          <Button
            color="inherit"
            sx={{
              '&:hover': {
                backgroundColor: '#555', 
                color: '#fff',
              },
            }}
          >
            Home
          </Button>
          <Button
            color="inherit"
            sx={{
              '&:hover': {
                backgroundColor: '#555', 
                color: '#fff',
              },
            }}
          >
            Booking
          </Button>
          <Button
            color="inherit"
            sx={{
              '&:hover': {
                backgroundColor: '#555', 
                color: '#fff',
              },
            }}
          >
            Cart
          </Button>
          <Button
            color="inherit"
            sx={{
              '&:hover': {
                backgroundColor: '#555', 
                color: '#fff',
              },
            }}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      <Typography variant="h5" component="div" sx={{ flexGrow: 1, marginTop:3 }}>
            BOOKING
        </Typography>
        
        <Divider/>

     
      <Card sx={{ maxWidth: '100%', margin: 'auto', mt: 5, padding: { xs: 2, sm: 3 }, boxShadow: 3 }}>
        <CardContent>
          <Grid container spacing={2} alignItems="center" flexDirection={{ xs: 'column', sm: 'row' }}>
            
            <Grid item xs={12} sm="auto">
              <Avatar
                alt="Nelson's Automotive Shop"
                src="/logo.png" 
                sx={{ width: { xs: 40, sm: 50 }, height: { xs: 40, sm: 50 } }}
              />
            </Grid>
            
            
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

          <Grid container spacing={2} alignItems="center">
  <Grid item xs={12} sm={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
    <Typography variant="body1" component="div">
      Service:
    </Typography>
    <Typography variant="h6" component="div">
      Belts Repair
    </Typography>
  </Grid>

  <Grid item xs={10} sm={4} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
    <CalendarTodayIcon fontSize="small" sx={{ verticalAlign: 'middle', mr: 1 }} />
    <Typography variant="body1" component="span">
      Fri, December 29
    </Typography>
  </Grid>
</Grid>


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
