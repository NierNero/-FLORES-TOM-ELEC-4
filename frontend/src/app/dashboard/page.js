import React from 'react';
import { Container, Typography, Card, CardContent, CardMedia, Button, Grid, AppBar, Toolbar, Link, Box, IconButton } from '@mui/material';

// Mock data for the repair shops
const repairShops = [
  {
    name: 'My Repair Shop',
    description: 'Simple Shop',
    imageUrl: '/images/person1.jpg',
  },
  {
    name: 'Our Repair Shop',
    description: 'Simple Shop',
    imageUrl: 'url-to-ryan-image',
  },
  {
    name: 'Wala Repair Shop',
    description: 'Simple Shop',
    imageUrl: 'url-to-charles-image',
  },
  {
    name: 'Another Repair Shop',
    description: 'Simple Shop',
    imageUrl: 'url-to-james-image',
  },
];

const RepairShopCard = ({ shop }) => (
  <Card sx={{ height: '39vh', display: 'flex', flexDirection: 'column', marginTop: '6' }}>
    <CardMedia
      component="img"
      height="100"
      image={shop.imageUrl}
      alt={shop.name}
    />
    <CardContent sx={{ flexGrow: 1 }}>
      <Typography variant="h6" component="div">
        {shop.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {shop.description}
      </Typography>
    </CardContent>
    <Box sx={{ padding: 2 }}>
      <Button variant="contained" color="primary" fullWidth>
        Visit Now
      </Button>
    </Box>
  </Card>
);

const App = () => {
  return (
    <Box sx={{
      backgroundColor: '#f0f0f0', // Background color for the entire page
      minHeight: '100vh', // Ensure it covers the full height of the viewport
      padding: 3,

    }}>
      <AppBar position="static" sx= {{borderRadius: '15px',}}>
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu">
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
            underline="none"
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
            underline="none"
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
            underline="none"
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
            underline="none"
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      <Container>
        <Typography variant="h4" align="center" gutterBottom sx={{ marginTop: 6, marginBottom: 6 }}>
          Available Repair Shops
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          {repairShops.map((shop, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <RepairShopCard shop={shop} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default App;

