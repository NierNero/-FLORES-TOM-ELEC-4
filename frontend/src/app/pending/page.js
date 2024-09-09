"use client";

import React, { useState, useEffect } from "react";
import {
  Container,
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  AppBar,
  Toolbar,
  Divider,
  Menu,
  MenuItem,
  Avatar,
  IconButton,
  Button,
  TextField,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";

// Dummy data
const cartItems = [
  {
    id: 1,
    name: "Belt",
    price: 50,
    image: "/img/belt1.jpg",
    shop: "Nelson's Automotive Shop",
  },
  {
    id: 2,
    name: "Oil Filter",
    price: 15,
    image: "/img/oilfilter.jpg",
    shop: "Nelson's Automotive Shop",
  },
];

function pending() {
  const [cart, setCart] = useState(cartItems);
  const [scrolled, setScrolled] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleRemoveItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const handleClick = () => {
    console.log("Search icon clicked");
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * 1, 0).toFixed(2); 
  };

  const handleCancel = () => {
    console.log("Cancel button clicked");
  };

  return (
    <Box
      sx={{
        backgroundColor: "#f0f0f0",
        minHeight: "100vh",
      }}
    >
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: scrolled
            ? "rgba(0, 0, 0, 1)"
            : "rgba(13, 71, 161, 1)",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          height: "70px",
          display: "flex",
          justifyContent: "center",
          transition: "background-color 0.3s ease",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
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
            Carcare - To Pay
          </Typography>
          <Button
            color="inherit"
            sx={{
              "&:hover": {
                color: "red",
              },
              fontWeight: "bold",
              fontFamily: "Arial, sans-serif",
            }}
            href="/dashboard"
          >
            Home
          </Button>
          <Button
            color="inherit"
            sx={{
              "&:hover": {
                color: "red",
              },
              fontWeight: "bold",
              fontFamily: "Arial, sans-serif",
            }}
            href="/booking"
          >
            Booking
          </Button>
          <Button
            color="inherit"
            sx={{
              "&:hover": {
                color: "red",
              },
              fontWeight: "bold",
              fontFamily: "Arial, sans-serif",
            }}
            href="/cart"
          >
            Cart
          </Button>
          <TextField
            sx={{
              width: "200px",
              "& fieldset": {
                border: "none",
              },
              "& .MuiInputLabel-root": {
                color: "black",
              },
              "& .MuiInputBase-input": {
                color: "white",
              },
              "& .MuiInputAdornment-root": {
                color: "white",
              },
            }}
            size="small"
            placeholder="Search here..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleClick}>
                    <SearchIcon sx={{ color: "white" }} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Avatar
            src="/profile.png"
            sx={{ ml: 1, cursor: "pointer" }}
            onClick={handleMenuOpen}
          />
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleMenuClose}
            PaperProps={{
              sx: {
                width: "200px",
              },
            }}
          >
            <MenuItem onClick={handleMenuClose} href="/profile">
              Profile
            </MenuItem>
            <MenuItem onClick={handleMenuClose} href="/settings">
              Settings
            </MenuItem>
            <MenuItem onClick={handleMenuClose} href="/login">
              Logout
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: "70px", padding: 2 }}>
        <Button
          variant="text"
          color="white"
          sx={{
            "&:hover": {
              color: "red",
            },
            "&:active": {
              color: "darkred", 
            },
            fontFamily: "Arial, sans-serif",
            textAlign: "left",
            fontSize: "1.1rem",
            textTransform: "none",
          }}
          href="/cart"
        >
          My Cart
        </Button>

        <Button
          variant="text"
          color="white"
          sx={{
            "&:hover": {
              color: "red",
            },
            "&:active": {
              color: "darkred", 
            },
            ml: 3,
            fontFamily: "Arial, sans-serif",
            textAlign: "left",
            fontSize: "1.1rem",
            textTransform: "none",
          }}
          href="/pending"
        >
          Pending Order
        </Button>
        <Button
          variant="text"
          color="white"
          sx={{
            "&:hover": {
              color: "red",
            },
            "&:active": {
              color: "darkred", 
            },
            ml: 3,
            fontFamily: "Arial, sans-serif",
            textAlign: "left",
            fontSize: "1.1rem",
            textTransform: "none",
          }}
          href="/topay"
        >
          To Pay
        </Button>
        <Button
          variant="text"
          color="white"
          sx={{
            "&:hover": {
              color: "red",
            },
            "&:active": {
              color: "darkred", 
            },
            ml: 3,
            fontFamily: "Arial, sans-serif",
            textAlign: "left",
            fontSize: "1.1rem",
            textTransform: "none",
          }}
          href="/cart"
        >
          To Ship
        </Button>
        <Button
          variant="text"
          color="white"
          sx={{
            "&:hover": {
              color: "red",
            },
            "&:active": {
              color: "darkred", 
            },
            ml: 3,
            fontFamily: "Arial, sans-serif",
            textAlign: "left",
            fontSize: "1.1rem",
            textTransform: "none",
          }}
          href="/cart"
        >
          To Receive
        </Button>

        <Divider sx={{ mb: 2 }} />

        {cart.map((item) => (
          <Card
            key={item.id}
            sx={{
              mb: 2,
              borderRadius: "15px",
              boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s",
              "&:hover": { transform: "scale(1.02)" },
            }}
          >
            <CardContent>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={2}>
                  <img
                    src={item.image}
                    alt={item.name}
                    width="80"
                    style={{ borderRadius: "8px" }}
                  />
                </Grid>
                <Grid item xs={5}>
                  <Typography variant="h6">{item.name}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {item.shop}
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography variant="body1" color="primary">
                    ${item.price.toFixed(2)}
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography variant="body1">
                    Quantity: <span style={{ color: "red" }}>1</span>
                  </Typography>{" "}
                </Grid>
                <Grid item xs={1}></Grid>
              </Grid>
            </CardContent>
          </Card>
        ))}

        <Box
          sx={{
            mt: 3,
            p: 2,
            border: "1px solid #ddd",
            borderRadius: "8px",
            backgroundColor: "#fff",
          }}
        >
          <Typography variant="h6" component="div" gutterBottom>
            Total Amount
          </Typography>
          <Typography variant="h4" color="primary">
            ${calculateTotal()}
          </Typography>
        </Box>

        <Box sx={{ mt: 3, display: "flex", justifyContent: "flex-end" }}>
          <Button
            variant="contained"
            color="error"
            sx={{
              "&:hover": {
                backgroundColor: "darkred",
              },
              fontFamily: "Arial, sans-serif",
            }}
            onClick={handleCancel}
          >
            Cancel Order
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default pending;
