'use client';

import React, { useState } from 'react';
import { 
  Container, 
  Card, 
  CardContent, 
  Typography, 
  Grid, 
  Button, 
  TextField, 
  IconButton, 
  Box, 
  AppBar, 
  Toolbar, 
  Divider
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

// Dummy data
const cartItems = [
  { id: 1, name: 'Belt', price: 50, image: 'belt.png', shop: "Nelson's Automotive Shop" },
  { id: 2, name: 'Oil Filter', price: 15, image: 'oilfilter.png', shop: "Nelson's Automotive Shop" }
];

function ShoppingCart() {
  const [cart, setCart] = useState(cartItems);

  const handleQuantityChange = (id, value) => {
    const updatedCart = cart.map(item =>
      item.id === id ? { ...item, quantity: value } : item
    );
    setCart(updatedCart);
  };

  const handleRemoveItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const handlePlaceOrder = () => {
    console.log('Order placed');
    // Implement order placement logic here
  };

  const handleCancelPurchase = () => {
    setCart([]);
  };

  return (
    <Box sx={{
        backgroundColor: '#f0f0f0', // Background color for the entire page
        minHeight: '100vh', // Ensure it covers the full height of the viewport
        padding: 3,
      }}
    >
      {/* AppBar */}
      <AppBar position="static" sx={{ borderRadius: '15px', mb: 5 }}>
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

      {/* Main Content */}
      <Container>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
          Shopping Cart
        </Typography>
        <Divider/>

        {cart.map(item => (
          <Card key={item.id} sx={{ marginBottom: 2, marginTop: 4 }}>
            <CardContent>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={3}>
                  <Typography variant="h6">{item.shop}</Typography>
                </Grid>
                <Grid item xs={2}>
                  <img src={item.image} alt={item.name} width="50" />
                </Grid>
                <Grid item xs={3}>
                  <Typography>{item.name}</Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography>Total Order: ${item.price}</Typography>
                </Grid>
                <Grid item xs={1}>
                  <TextField
                    type="number"
                    defaultValue={1}
                    onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                    size="small"
                  />
                </Grid>
                <Grid item xs={1}>
                  <IconButton onClick={() => handleRemoveItem(item.id)}>
                    <DeleteIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        ))}

        <Grid container justifyContent="flex-end" spacing={2}>
          <Grid item>
            <Button variant="contained" color="primary" onClick={handlePlaceOrder}>
              Place Order(s)
            </Button>
          </Grid>
          <Grid item>

          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ShoppingCart;
