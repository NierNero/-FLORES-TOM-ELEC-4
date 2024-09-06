import React from 'react';
import { Container, Typography, Card, CardContent, CardMedia, Button, Grid, AppBar, Toolbar, Box, IconButton, Divider, Menu, MenuItem, Avatar } from '@mui/material';

const repairShops = [
  {
    name: 'My Repair Shop',
    description: 'Simple Shop',
    imageUrl: '/img/1.jpg',
  },
  {
    name: 'Our Repair Shop',
    description: 'Simple Shop',
    imageUrl: '/img/2.jpg',
  },
  {
    name: 'Wala Repair Shop',
    description: 'Simple Shop',
    imageUrl: '/img/3.jpg',
  },
  {
    name: 'Another Repair Shop',
    description: 'Simple Shop',
    imageUrl: '/img/4.jpg',
  },
];

const RepairShopCard = ({ shop }) => (
  <Card sx={{ height: 'auto', display: 'flex', flexDirection: 'column', marginTop: 2, borderRadius: '10px' }}>
    <CardMedia
      component="img"
      sx={{ height: 140, objectFit: 'cover' }} 
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

      <Container>
        <Typography variant="h4" align="center" gutterBottom sx={{ marginTop: 4, marginBottom: 4 }}>
          Available Repair Shops
        </Typography>
        <Divider sx={{ marginY: 1 }} />
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
