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
  TextField,
  IconButton,
  InputAdornment,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import BookIcon from "@mui/icons-material/Book";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MapIcon from "@mui/icons-material/Map";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

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

function Cart() {
  const [cart, setCart] = useState(cartItems);
  const [scrolled, setScrolled] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const open = Boolean(anchorEl);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleQuantityChange = (id, value) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: parseInt(value) || 1 } : item
    );
    setCart(updatedCart);
  };

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

  const handlePlaceOrder = () => {
    console.log("Place Order(s) clicked");
  };

  const handleCancelPurchase = () => {
    setCart([]); 
    console.log("Cart cleared");
  };

  const calculateTotal = () => {
    return cart
      .reduce((total, item) => total + item.price * (item.quantity || 1), 0)
      .toFixed(2);
  };

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <Box sx={{ minHeight: "100vh" }}>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: scrolled
            ? "rgba(0, 0, 0, 1)"
            : "rgba(13, 71, 161, 1)",
            boxShadow: "0 3px 5px rgba(0, 0, 0, 0.4)",
            height: "70px",
          display: "flex",
          justifyContent: "center",
          transition: "background-color 0.3s ease",
        }}
      >
        <Toolbar sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {isMobile && (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleDrawerOpen}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Carcare - My Cart
          </Typography>
          {!isMobile && (
            <Box sx={{ display: "flex", gap: 2, mr: 2 }}>
              <Button
                color="white"
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
                color="white"
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
                color="white"
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
                color="white"
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

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerClose}
        PaperProps={{ sx: { width: 240 } }}
      >
        <List>
          <ListItem button onClick={handleDrawerClose} component="a" href="/dashboard">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button onClick={handleDrawerClose} component="a" href="/booking">
            <ListItemIcon>
              <BookIcon />
            </ListItemIcon>
            <ListItemText primary="Booking" />
          </ListItem>
          <ListItem button onClick={handleDrawerClose} component="a" href="/cart">
            <ListItemIcon>
              <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="Cart" />
          </ListItem>
          <ListItem button onClick={handleDrawerClose} component="a" href="/map">
            <ListItemIcon>
              <MapIcon />
            </ListItemIcon>
            <ListItemText primary="Map" />
          </ListItem>
        </List>
      </Drawer>

      <Container sx={{ mt: "70px", padding: 2 }}>
        <Button
          variant="text"
          color="white"
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
          href="/pending"
        >
          Pending Order
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
          href="/topay"
        >
          To Pay
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
          href="/toship"
        >
          To Ship
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
                  <TextField
                    type="number"
                    label="Quantity"
                    value={item.quantity || 1}
                    onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                    size="small"
                    sx={{ width: "100px" }}
                    InputProps={{
                      inputProps: { min: 1 },
                    }}
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

        <Grid container justifyContent="flex-end" spacing={2} sx={{ mb: 3 }}>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              onClick={handlePlaceOrder}
              sx={{ marginRight: 2 }}
            >
              Place Order(s)
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              color="error"
              onClick={handleCancelPurchase}
            >
              Clear Cart
            </Button>
          </Grid>
        </Grid>

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

export default Cart;
