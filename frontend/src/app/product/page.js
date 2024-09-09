'use client';

import React, { useState, useEffect } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  TextField, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Button, 
  IconButton,
  Box,
  Avatar,
  Menu,
  MenuItem,
  Container
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const products = [
  { id: 1, name: 'Engine Belt', price: 50, image: '/img/belt1.jpg' },
  { id: 2, name: 'Oil Filter', price: 150, image: '/img/oilfilter.jpg' },
  { id: 3, name: 'Oil Filter (New)', price: 50, image: '/img/oilfilter1.jpg' },
  { id: 4, name: 'Engine Belt', price: 50, image: '/img/belt1.jpg' },
  { id: 5, name: 'Oil Filter (New)', price: 50, image: '/img/oilfilter1.jpg' },


];

const ProductPage = () => {
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

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{  minHeight: '100vh' }}>
      <AppBar 
        position="fixed" 
        sx={{
          backgroundColor: scrolled ? '#333' : '#0d47a1', 
          boxShadow: "0 3px 5px rgba(0, 0, 0, 0.4)",
          height: '70px',
          display: 'flex',
          justifyContent: 'center',
          transition: 'background-color 0.3s ease',
          borderBottomLeftRadius: "35px",
          borderBottomRightRadius: "35px",
        }}
      >
        <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          <IconButton
            size="large"
            edge="start"
            color="white"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Carcare
          </Typography>
          <Button color="white" sx={{ '&:hover': { color: 'white' }, fontWeight: 'bold' }} href="/dashboard">Home</Button>
          <Button color="white" sx={{ '&:hover': { color: 'white' }, fontWeight: 'bold' }} href="/booking">Booking</Button>
          <Button color="white" sx={{ '&:hover': { color: 'white' }, fontWeight: 'bold' }} href="/cart">Cart</Button>
          <Avatar src="/profile.png" sx={{ ml: 1, cursor: 'pointer' }} onClick={handleMenuOpen} />
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleMenuClose}
            PaperProps={{ sx: { width: '200px' } }}
          >
            <MenuItem onClick={handleMenuClose} href="/profile">Profile</MenuItem>
            <MenuItem onClick={handleMenuClose} href="/settings">Settings</MenuItem>
            <MenuItem onClick={handleMenuClose} href="/login">Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      {/* Search Bar */}
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '70px', padding: 2 }}>
        <TextField 
          placeholder="Search for products..." 
          InputProps={{
            endAdornment: (
              <IconButton>
                <SearchIcon />
              </IconButton>
            ),
          }}
          sx={{ 
            width: '100%', 
            maxWidth: 600, 
            borderRadius: '25px', 
            backgroundColor: 'white', 
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                border: 'none',
              },
              '&:hover fieldset': {
                border: 'none', 
              },
              '&.Mui-focused fieldset': {
                border: 'none', 
              },
            },
          }}        />
      </Box>

      <Container
        sx={{
          marginTop: '15px',
          padding: 2,
          border: '1px solid #ccc',
          backgroundColor: 'white',
          borderRadius: '10px',
          boxShadow: "0 3px 5px rgba(0, 0, 0, 0.4)",
          marginBottom: '12px'
        }}
      >
        {/* Products Section */}
        <Grid container spacing={3} justifyContent="center"> 
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.2s ease-in-out',
                  '&:hover': { transform: 'scale(1.02)' },
                }}
              >
                <CardMedia
                  component="img"
                  image={product.image}
                  alt={product.name}
                  sx={{ 
                    height: 200, 
                    objectFit: 'cover', 
                    width: '100%', 
                  }}
                />
                <CardContent>
                  <Typography variant="h6" component="div" sx={{ marginBottom: 1 }}>
                    {product.name}
                  </Typography>
                  <Typography variant="body1" color="textSecondary" sx={{ marginBottom: 2 }}>
                    $ {product.price}
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Button variant="contained" color="primary" fullWidth>
                        Buy Now
                      </Button>
                    </Grid>
                    <Grid item xs={6}>
                      <Button variant="outlined" color="primary" fullWidth href="/cart"   sx={{ fontSize: '0.690rem', height: '100%' }} // Adjust font size here
                      >
                        Add to Cart
                      </Button>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ProductPage;
