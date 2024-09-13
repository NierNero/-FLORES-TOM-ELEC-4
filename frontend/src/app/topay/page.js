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
  useMediaQuery,
  useTheme,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import BookIcon from "@mui/icons-material/Book";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MapIcon from "@mui/icons-material/Map";

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

function ToPayPage() {
  const [cart, setCart] = useState(cartItems);
  const [scrolled, setScrolled] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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

  return (
    <Box sx={{ minHeight: "100vh" }}>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: scrolled ? "rgba(0, 0, 0, 1)" : "rgba(13, 71, 161, 1)",
          boxShadow: "0 3px 5px rgba(0, 0, 0, 0.4)",
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
            width: "100%",
          }}
        >
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            {/* Add Menu icon if needed */}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Carcare - To Pay
          </Typography>
          {!isMobile && (
            <Box sx={{ display: "flex", gap: 2, mr: 2 }}>
              <Button
                color="inherit"
                sx={{
                  mr: 2,
                  fontSize: "14px",
                  "&:hover": { color: "red" },
                  fontFamily: "Arial, sans-serif",
                }}
                href="/dashboard"
                startIcon={<HomeIcon />}
              >
                Home
              </Button>
              <Button
                color="inherit"
                sx={{
                  mr: 2,
                  fontSize: "14px",
                  "&:hover": { color: "red" },
                  fontFamily: "Arial, sans-serif",
                }}
                href="/booking"
                startIcon={<BookIcon />}
              >
                Booking
              </Button>
              <Button
                color="inherit"
                sx={{
                  mr: 2,
                  fontSize: "14px",
                  "&:hover": { color: "red" },
                  fontFamily: "Arial, sans-serif",
                }}
                href="/cart"
                startIcon={<ShoppingCartIcon />}
              >
                Cart
              </Button>
              <Button
                color="inherit"
                sx={{
                  mr: 2,
                  fontSize: "14px",
                  "&:hover": { color: "red" },
                  fontFamily: "Arial, sans-serif",
                }}
                href="/map"
                startIcon={<MapIcon />}
              >
                Map
              </Button>
            </Box>
          )}
          <TextField
            sx={{
              width: "200px",
              "& fieldset": { border: "none" },
              "& .MuiInputLabel-root": { color: "black" },
              "& .MuiInputBase-input": { color: "white" },
              "& .MuiInputAdornment-root": { color: "white" },
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
            PaperProps={{ sx: { width: "200px" } }}
          >
            <MenuItem onClick={handleMenuClose} href="/profile">Profile</MenuItem>
            <MenuItem onClick={handleMenuClose} href="/settings">Settings</MenuItem>
            <MenuItem onClick={handleMenuClose} href="/login">Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: "70px", padding: 2 }}>
        <Button
          variant="text"
          color="inherit"
          sx={{
            "&:hover": { color: "white" },
            "&:active": { color: "darkred" },
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
          color="inherit"
          sx={{
            "&:hover": { color: "white" },
            "&:active": { color: "darkred" },
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
          color="inherit"
          sx={{
            "&:hover": { color: "white" },
            "&:active": { color: "darkred" },
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
          color="inherit"
          sx={{
            "&:hover": { color: "white" },
            "&:active": { color: "darkred" },
            ml: 3,
            fontFamily: "Arial, sans-serif",
            textAlign: "left",
            fontSize: "1.1rem",
            textTransform: "none",
          }}
          href="/toshop"
        >
          To Ship
        </Button>
        <Button
          variant="text"
          color="inherit"
          sx={{
            "&:hover": { color: "white" },
            "&:active": { color: "darkred" },
            ml: 3,
            fontFamily: "Arial, sans-serif",
            textAlign: "left",
            fontSize: "1.1rem",
            textTransform: "none",
          }}
          href="/toreceive"
        >
          To Receive
        </Button>
        <Button
          variant="text"
          color="white"
          sx={{
            "&:hover": { color: "white" },
            "&:active": { color: "darkred" },
            ml: 3,
            fontFamily: "Arial, sans-serif",
            textAlign: "left",
            fontSize: "1.1rem",
            textTransform: "none",
          }}
          href="/cancelorder"
        >
          Canceled
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
                  <Typography variant="body1">Quantity: 1</Typography>
                </Grid>
                <Grid item xs={1}>
                 
                </Grid>
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
      </Container>
    </Box>
  );
}

export default ToPayPage;
