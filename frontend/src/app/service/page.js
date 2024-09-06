import * as React from 'react';
import { Container, Typography, Card, CardContent, CardMedia, Button, Grid, AppBar, Toolbar, Box, IconButton, Link } from '@mui/material';

function App() {
  return (
    <Box sx={{
      backgroundColor: '#f0f0f0', 
      minHeight: '100vh', 
      padding: 3,
    }}>
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

      <Container maxWidth="md">
        <Typography variant="h4" align="center" gutterBottom marginTop={2}>
          Our Services
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          Get total care for your car. We offer a range of services provided by skilled and ASE-certified auto technicians.
        </Typography>

        <Grid container spacing={4} mt={2}>
          <Grid ite sx={{width: '1000px' }}>
              <CardMedia
                component="img"
                height="300"
                image="/img/1.jpg" 
                alt="Car Engine"
                sx={{ objectFit: 'cover', width: '100%' }} 
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Repair + Maintenance Services Offered:
                </Typography>
                
                <ul>
                  <li><Link href="link-to-air-conditioning-repair-page" sx={{ textDecoration: 'none', color: 'black', '&:hover': { color: 'blue', textDecoration: 'red' } }}>Air Conditioning Repair</Link></li>
                  <li><Link href="link-to-engine-repair-replacement-page" sx={{ textDecoration: 'none', color: 'black', '&:hover': { color: 'blue', textDecoration: '' } }}>Engine Repair/Replacement</Link></li>
                  <li><Link href="link-to-brake-repair-page" sx={{ textDecoration: 'none', color: 'black', '&:hover': { color: 'blue', textDecoration: '' } }}>Brake Repair</Link></li>
                  <li><Link href="link-to-suspension-steering-repair-page" sx={{ textDecoration: 'none', color: 'black', '&:hover': { color: 'blue', textDecoration: '' } }}>Suspension & Steering Repair</Link></li>
                  <li><Link href="link-to-oil-change-page" sx={{ textDecoration: 'none', color: 'black', '&:hover': { color: 'blue', textDecoration: '' } }}>Oil Change</Link></li>
                  <li><Link href="link-to-tire-rotation-page" sx={{ textDecoration: 'none', color: 'black', '&:hover': { color: 'blue', textDecoration: '' } }}>Tire Rotation</Link></li>
                  <li><Link href="link-to-belt-repair-page" sx={{ textDecoration: 'none', color: 'black', '&:hover': { color: 'blue', textDecoration: '' } }}>Belt Repair</Link></li>
                </ul>
                
              </CardContent>
            
          </Grid>
        </Grid>

        <Box mt={4} display="flex" justifyContent="center">
          <Button variant="contained" size="large" href="#book">
            Book a Service
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default App;
