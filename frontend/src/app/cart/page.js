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
  { id: 1, name: 'Belt', price: 50, image: '/img/belt1.jpg', shop: "Nelson's Automotive Shop" },
  { id: 2, name: 'Oil Filter', price: 15, image: '/img/oilfilter.jpg', shop: "Nelson's Automotive Shop" }
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
  };

  const handleCancelPurchase = () => {
    setCart([]);
  };

  return (
    <Box sx={{
        backgroundColor: '#f5f5f5', 
        minHeight: '100vh', 
        padding: 3,
      }}
    >
      <AppBar position="static" sx={{
        borderRadius: '0 0 20px 20px', 
        boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)', 
        backgroundColor: '#444', 
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
                backgroundColor: '#666', 
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
                backgroundColor: '#666', 
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
                backgroundColor: '#666', 
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
                backgroundColor: '#666', 
                color: '#fff',
              },
            }}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 5 }}>
        <Typography variant="h4" component="div" sx={{ mb: 4 }}>
          Shopping Cart
        </Typography>
        <Divider sx={{ mb: 4 }}/>

        {cart.map(item => (
          <Card key={item.id} sx={{
            mb: 2,
            borderRadius: '15px',
            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s',
            '&:hover': { transform: 'scale(1.02)' },
          }}>
            <CardContent>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={2}>
                  <img src={item.image} alt={item.name} width="80" style={{ borderRadius: '8px' }} />
                </Grid>
                <Grid item xs={5}>
                  <Typography variant="h6">{item.name}</Typography>
                  <Typography variant="body2" color="textSecondary">{item.shop}</Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography variant="body1" color="primary">${item.price.toFixed(2)}</Typography>
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    type="number"
                    defaultValue={1}
                    onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                    size="small"
                    sx={{ width: '100px' }}
                  />
                </Grid>
                <Grid item xs={1}>
                  <IconButton onClick={() => handleRemoveItem(item.id)}>
                    <DeleteIcon color="error" />
                  </IconButton>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        ))}

        <Grid container justifyContent="flex-end" spacing={2}>
          <Grid item>
            <Button variant="contained" color="primary" onClick={handlePlaceOrder} sx={{ marginRight: 2 }}>
              Place Order(s)
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="error" onClick={handleCancelPurchase}>
              Clear Cart
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ShoppingCart;
