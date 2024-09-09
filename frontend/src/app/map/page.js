'use client';
import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  TextField,
  IconButton,
  Avatar,
  Container,
  Box,
  Paper,
  Divider,
  Menu,
  MenuItem
} from '@mui/material';

const App = () => {
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
    <div>
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
          justifyContent: 'space-between',}}>
            
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Carcare
          </Typography>
          <Button
            color="inherit"
            sx={{
              '&:hover': {
                color: 'red',
              },fontWeight: 'bold', fontFamily: 'Arial, sans-serif'
            }}
            href="/dashboard">
            Home
          </Button>
          <Button
            color="inherit"
            sx={{
              '&:hover': {
                color: 'red',
              },fontWeight: 'bold', fontFamily: 'Arial, sans-serif'
            }}
            href="/booking">
            Booking
          </Button>
          <Button
            color="inherit"
            sx={{
              '&:hover': {
                color: 'red',
              },fontWeight: 'bold', fontFamily: 'Arial, sans-serif'
            }}
            href="/cart">
            Cart
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
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ paddingTop: 4, paddingBottom: 4 }}>
        <Grid container spacing={4} marginTop={1}>
          <Grid item xs={12}>
            <Paper 
              sx={{
                padding: 2,
                margin: 'auto',
                maxWidth: '100%',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                mb: 4, 
              }}
            >
              <Box sx={{ position: 'relative', width: '100%', height: 'auto' }}>
                <img
                  src="/img/map.png"
                  useMap="#image-map"
                  alt="Interactive Map"
                  style={{ width: '100%', height: 'auto', maxWidth: '1200px' }}
                />
                <map name="image-map">
                  <area
                    shape="rect"
                    coords="34,44,270,350"
                    href="/location1"
                    alt="Location 1"
                  />
                  <area
                    shape="rect"
                    coords="290,172,333,250"
                    href="/location2"
                    alt="Location 2"
                  />
                  <area
                    shape="rect"
                    coords="340,350,500,450"
                    href="/location3"
                    alt="Location 3"
                  />
                </map>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h4" align="center" gutterBottom>
              Nearby Repair Shop(s)
            </Typography>
            <Divider />
            <Grid container spacing={4} marginTop={1}>
              <Grid item xs={12} sm={6} md={4}>
                <Card 
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: '15px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <CardMedia
                    sx={{
                      height: '200px',
                      borderTopLeftRadius: '15px',
                      borderTopRightRadius: '15px',
                    }}
                    image="https://www.nelsonautomotive.com/wp-content/uploads/2020/06/Nelson-Automotive-Logo-2-1-scaled.jpg"
                    title="Nelson Automotive Shop"
                  />
                  <CardContent sx={{ flexGrow: 1, padding: 2 }}>
                    <Typography gutterBottom variant="h5" component="div">
                      Nelson Automotive Shop
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Location: Pajo, Lapu-Lapu City
                    </Typography>
                  </CardContent>
                  <Box sx={{ padding: 2, display: 'flex', justifyContent: 'center' }}>
                    <Button variant="contained" color="primary" sx={{ margin: 2 }}>
                      View Shop
                    </Button>
                  </Box>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card 
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: '15px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <CardMedia
                    sx={{
                      height: '200px',
                      borderTopLeftRadius: '15px',
                      borderTopRightRadius: '15px',
                    }}
                    image="https://www.goodwheelmotorservices.com/wp-content/uploads/2019/12/goodwheel-motorservices-logo.png"
                    title="Goodwheel Motor Services"
                  />
                  <CardContent sx={{ flexGrow: 1, padding: 2 }}>
                    <Typography gutterBottom variant="h5" component="div">
                      Goodwheel Motor Services
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Location: Pajo, Lapu-Lapu City
                    </Typography>
                  </CardContent>
                  <Box sx={{ padding: 2, display: 'flex', justifyContent: 'center' }}>
                    <Button variant="contained" color="primary" sx={{ margin: 2 }}>
                      View Shop
                    </Button>
                  </Box>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default App;
