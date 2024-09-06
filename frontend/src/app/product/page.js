'use client';

import React from 'react';
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
  Box
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const products = [
  { id: 1, name: 'Engine Belt', price: 50, image: '/img/belt1.jpg' },
  { id: 2, name: 'Oil Filter', price: 150, image: '/img/oilfilter.jpg' },
  { id: 3, name: 'Oil Filter (New)', price: 50, image: '/img/oilfilter1.jpg' },
];

const ProductPage = () => {
  return (
    <Box 
      sx={{
        backgroundColor: '#fafafa', 
        minHeight: '100vh',
        padding: 3,
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

      {/* Search Bar */}
      <Box sx={{ display: 'flex', justifyContent: 'center', marginY: 3 }}>
        <TextField 
          placeholder="Search for products..." 
          variant="outlined" 
          InputProps={{
            endAdornment: (
              <IconButton>
                <SearchIcon />
              </IconButton>
            ),
          }}
          sx={{ width: '100%', maxWidth: 600 }}
        />
      </Box>

      {/* Products Section */}
      <Grid container spacing={3} sx={{ paddingX: 5, marginTop: 3 }}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card sx={{ 
              borderRadius: '15px', 
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
              transition: 'transform 0.3s', 
              '&:hover': { transform: 'scale(1.03)' },
              display: 'flex', 
              flexDirection: 'column' 
            }}>
              <CardMedia
                component="img"
                height="200" 
                image={product.image}
                alt={product.name}
                sx={{ 
                  borderRadius: '15px 15px 0 0', 
                  objectFit: 'cover', 
                  width: '100%', 
                  maxHeight: '200px' 
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
                    <Button variant="outlined" color="primary" fullWidth>
                      Add to Cart
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductPage;
