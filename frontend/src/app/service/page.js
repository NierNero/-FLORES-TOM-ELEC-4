'use client'
import React, { useState, useEffect } from 'react';
import { Menu,
  MenuItem,Container, Avatar, Typography, Card, CardContent, CardMedia, Button, Grid, AppBar, Toolbar, Box, IconButton, Link } from '@mui/material';

function App() {
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const [scrolled, setScrolled] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    console.log('Icon clicked');
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{
      backgroundColor: '#f0f0f0', 
      minHeight: '100vh', 
    }}>
      <AppBar 
        position="fixed" 
        sx={{
          backgroundColor: scrolled ? 'rgba(0, 0, 0, 1)' : 'rgba(13, 71, 161, 1)', 
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          height: '70px',
          display: 'flex',
          justifyContent: 'center',
          transition: 'background-color 0.3s ease', 
        }}
      >
        <Toolbar 
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',

          }}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }} 
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            CARCARE
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              color="inherit"
              sx={{
                fontSize: '14px', 
                '&:hover': {
                  color: 'red',
                },fontWeight: 'bold', fontFamily: 'Arial, sans-serif'
              }}
              href="/dashboard"
            >
              Home
            </Button>
            <Button
              color="inherit"
              sx={{
                fontSize: '14px', 
                '&:hover': {
                  color: 'red',
                },fontWeight: 'bold', fontFamily: 'Arial, sans-serif'
              }}
              href="/booking"
            >
              Booking
            </Button>
            <Button
              color="inherit"
              sx={{
                fontSize: '14px', 
                '&:hover': {
                  color: 'red',
                },fontWeight: 'bold', fontFamily: 'Arial, sans-serif'
              }}
              href="/cart"
            >
              Cart
            </Button>
            <Button
              color="inherit"
              sx={{
                fontSize: '14px',
                '&:hover': {
                  color: 'red',
                },fontWeight: 'bold', fontFamily: 'Arial, sans-serif'
              }}
              href="/map"
            >
              Map
            </Button>
            <Avatar 
            src="/profile.png" 
            sx={{ ml: 1, cursor: 'pointer' }} 
            onClick={handleMenuOpen} 
          />
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleMenuClose}
            PaperProps={{
              sx: {
                width: '200px',
              },
            }}
          >
            <MenuItem onClick={handleMenuClose} href="/profile">Profile</MenuItem>
            <MenuItem onClick={handleMenuClose} href="/settings">Settings</MenuItem>
            <MenuItem onClick={handleMenuClose} href="/login">Logout</MenuItem>
          </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      <Box position="relative">
        <CardMedia
          component="img"
          image="/img/2.jpg" 
          alt="Car Engine"
          sx={{ objectFit: 'cover', width: '100%', height: { xs: '50vh', sm: '60vh', md: '100vh' }, opacity: 0.7 }} 
        />
         <Box
          position="absolute"
          bottom={0} 
          left={0} 
          bgcolor="rgba(0, 0, 0, 0.0)" 
          color="white"
          p={2}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start', 
            textAlign: 'left',
            maxWidth: '80%', 

          }}
        >
          <Typography variant="h2" fontWeight="bold" marginBottom={2} marginLeft={3} >
            OUR SERVICE
          </Typography>
          <Typography variant="h6" marginTop={2} marginLeft={3} sx={{ fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' } }}>
            Get total care for your car. We offer a range of services provided
          </Typography>
          <Typography variant="h6" marginBottom={2} marginLeft={3} sx={{ fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' } }}>
             by skilled and ASE-certified auto technicians.
          </Typography>
        </Box>
      </Box>
      
      <Container maxWidth="md">
        <Grid container spacing={2} mt={2}>
          <Grid item xs={12}>
            <CardContent>
              <Typography variant="h4" gutterBottom mb={5} fontWeight="bold">
                Repair + Maintenance Services Offered:
              </Typography>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                <li><Link href="link-to-air-conditioning-repair-page" sx={{ textDecoration: 'none', color: 'black', '&:hover': { color: 'blue', textDecoration: 'none' } }}>Air Conditioning Repair</Link></li>
                <li style={{ marginTop: '10px' }}><Link href="link-to-engine-repair-replacement-page" sx={{ textDecoration: 'none', color: 'black', '&:hover': { color: 'blue', textDecoration: 'none' } }}>Engine Repair/Replacement</Link></li>
                <li style={{ marginTop: '10px' }}><Link href="link-to-brake-repair-page" sx={{ textDecoration: 'none', color: 'black', '&:hover': { color: 'blue', textDecoration: 'none' } }}>Brake Repair</Link></li>
                <li style={{ marginTop: '10px' }}><Link href="link-to-suspension-steering-repair-page" sx={{ textDecoration: 'none', color: 'black', '&:hover': { color: 'blue', textDecoration: 'none' } }}>Suspension & Steering Repair</Link></li>
                <li style={{ marginTop: '10px' }}><Link href="link-to-oil-change-page" sx={{ textDecoration: 'none', color: 'black', '&:hover': { color: 'blue', textDecoration: 'none' } }}>Oil Change</Link></li>
                <li style={{ marginTop: '10px' }}><Link href="link-to-tire-rotation-page" sx={{ textDecoration: 'none', color: 'black', '&:hover': { color: 'blue', textDecoration: 'none' } }}>Tire Rotation</Link></li>
                <li style={{ marginTop: '10px' }}><Link href="link-to-belt-repair-page" sx={{ textDecoration: 'none', color: 'black', '&:hover': { color: 'blue', textDecoration: 'none' } }}>Belt Repair</Link></li>
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
