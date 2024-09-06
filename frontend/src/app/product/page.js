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
  IconButton 
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { Box } from '@mui/system';

const products = [
  { id: 1, name: 'Engine Belt', price: 50, image: 'belt.png' },
  { id: 2, name: 'Oil Filter', price: 150, image: 'oilfilter.png' }
];

const ProductPage = () => {
  return (
    <Box 
      sx={{
        backgroundColor: '#f0f0f0', // Background color for the entire page
        minHeight: '100vh', // Ensure it covers the full height of the viewport
        padding: 3,
      }}
    >
      {/* AppBar Section */}
      <AppBar position="static" sx={{ borderRadius: '15px'}}>
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

      {/* Search Bar */}
      <Box sx={{ display: 'flex', justifyContent: 'center', marginY: 3 }}>
        <TextField 
          placeholder="Search" 
          variant="outlined" 
          InputProps={{
            endAdornment: (
              <IconButton>
                <SearchIcon />
              </IconButton>
            ),
          }}
        />
      </Box>

      {/* Products Section */}
      <Grid container spacing={3} sx={{ paddingX: 5, marginTop: 3 }}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={product.image}
                alt={product.name}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {product.name}
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  $ {product.price}
                </Typography>
                <Grid container spacing={2} sx={{ marginTop: 2 }}>
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
