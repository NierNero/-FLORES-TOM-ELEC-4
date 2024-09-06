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
  Box,
  Avatar
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const products = [
  { id: 1, name: 'Engine Belt', price: 50, image: '/img/belt1.jpg' },
  { id: 2, name: 'Oil Filter', price: 150, image: '/img/oilfilter.jpg' },
  { id: 3, name: 'Oil Filter (New)', price: 50, image: '/img/oilfilter1.jpg' },
];

const styles = {
  appBar: {
    backgroundColor: 'light blue',
    borderRadius: '0 0 20px 20px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    height: '40px',
    borderRadius: '50%',
  },
  
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  cardContent: {
    flexGrow: 1,
    padding: 2,
  },
  cardMedia: {
    height: '200px',
    borderTopLeftRadius: '15px',
    borderTopRightRadius: '15px',
  },
  button: {
    margin: 2,
  },
  container: {
    paddingTop: 4,
    paddingBottom: 4,
  },
  paper: {
    padding: 2,
    margin: 'auto',
    maxWidth: '100%',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  footer: {
    marginTop: 4,
    padding: 2,
    backgroundColor: '#f5f5f5',
  },
  imageMapContainer: {
    position: 'relative',
    width: '100%',
    height: 'auto',
  },
  imageMap: {
    width: '100%',
    height: 'auto',
    maxWidth: '1200px', 
  },
};


const ProductPage = () => {
  return (
    <Box sx={{
      backgroundColor: '#f0f0f0', 
      minHeight: '100vh', 
    }}>
      <AppBar position="static" sx={styles.appBar}>
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
      Carcare
    </Typography>
    <Button
      color="inherit"
      sx={{
        '&:hover': {
          backgroundColor: 'black', 
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
          backgroundColor: 'black', 
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
          backgroundColor: 'black', 
          color: '#fff',
        },
      }}
    >
      Cart
    </Button>
    
    
    <Avatar src="profile.png" sx={{ ml: 1 }} />
    <Button
      color="inherit"
      sx={{
        '&:hover': {
          backgroundColor: 'black rgba(0, 0, 0, 0.5)', 
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
