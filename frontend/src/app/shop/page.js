"use client";

import React, { useState, useEffect } from "react";
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
  Avatar,
  Menu,
  MenuItem,
  Container,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import BookIcon from "@mui/icons-material/Book";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BuildIcon from "@mui/icons-material/Build"; // Example alternative for "Service"
import MapIcon from "@mui/icons-material/Map";

// Dummy function to determine if the screen size is mobile
const products = [
  { id: 1, name: "Engine Belt", price: 50, image: "/img/belt1.jpg" },
  { id: 2, name: "Oil Filter", price: 150, image: "/img/oilfilter.jpg" },
  { id: 3, name: "Oil Filter (New)", price: 50, image: "/img/oilfilter1.jpg" },
  { id: 4, name: "Engine Belt", price: 50, image: "/img/belt1.jpg" },
  { id: 5, name: "Oil Filter (New)", price: 50, image: "/img/oilfilter1.jpg" },
];

const recommendedProducts = [
  { id: 6, name: "Brake Pads", price: 75, image: "/img/belt1.jpg" },
  { id: 7, name: "Spark Plugs", price: 30, image: "/img/oilfilter.jpg" },
  { id: 8, name: "Battery", price: 120, image: "/img/oilfilter.jpg" },
  { id: 9, name: "Brake Pads", price: 75, image: "/img/belt1.jpg" },
];

const ProductPage = () => {
  const [scrolled, setScrolled] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600); // Initialize isMobile based on window size

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ minHeight: "100vh" }}>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: scrolled ? "#333" : "#0d47a1",
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
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Carcare
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
                  textTransform: "none",
                  color: "#FF6600",
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
                href="/service"
                startIcon={<BuildIcon />}
              >
                Service
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
            <MenuItem onClick={handleMenuClose}>
              <Button href="/profile" passHref>
                <a style={{ textDecoration: "none", color: "inherit" }}>
                  Profile
                </a>
              </Button>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Button href="/login" passHref>
                <a style={{ textDecoration: "none", color: "inherit" }}>
                  Logout
                </a>
              </Button>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      {/* Search Bar */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "70px",
          padding: 2,
        }}
      >
        <TextField
          placeholder="Search for products..."
          InputProps={{
            endAdornment: (
              <IconButton>
                <SearchIcon />
              </IconButton>
            ),
          }}
          sx={{
            width: "100%",
            maxWidth: 600,
            borderRadius: "25px",
            backgroundColor: "white",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                border: "none",
              },
              "&:hover fieldset": {
                border: "none",
              },
              "&.Mui-focused fieldset": {
                border: "none",
              },
            },
          }}
        />
      </Box>

      <Typography
        variant="h5"
        component="div"
        sx={{
          marginTop: 4,
          marginBottom: 2,
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        Recommended for You
      </Typography>
      <Grid container spacing={1} justifyContent="center">
        {recommendedProducts.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                transition:
                  "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                },
                maxWidth: 250,
                margin: "0 auto",
              }}
            >
              <CardMedia
                component="img"
                image={product.image}
                alt={product.name}
                sx={{
                  height: 150,
                  objectFit: "cover",
                  width: "100%",
                }}
              />
              <CardContent sx={{ textAlign: "center", padding: "8px" }}>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ marginBottom: 0.5, fontWeight: "bold" }}
                >
                  {product.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ marginBottom: 0.5 }}
                >
                  $ {product.price}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: 0.5,
                  }}
                >
                  {/* Star ratings */}
                  <Typography
                    variant="body2"
                    color="primary"
                    sx={{ marginRight: 0.5 }}
                  >
                    ★★★★☆
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    (100 reviews)
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Container
        sx={{
          marginTop: "25px",
          padding: 2,
          backgroundColor: "white",
          borderRadius: "10px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          marginBottom: "12px",
        }}
      >
        {/* Products Section */}
        <Grid container spacing={3} justifyContent="center">
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.2s ease-in-out",
                  "&:hover": { transform: "scale(1.02)" },
                }}
              >
                <CardMedia
                  component="img"
                  image={product.image}
                  alt={product.name}
                  sx={{
                    height: 200,
                    objectFit: "cover",
                    width: "100%",
                  }}
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ marginBottom: 1 }}
                  >
                    {product.name}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    sx={{ marginBottom: 2 }}
                  >
                    $ {product.price}
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        href="/placeorder"
                      >
                        Buy Now
                      </Button>
                    </Grid>
                    <Grid item xs={6}>
                      <Button
                        variant="outlined"
                        color="primary"
                        fullWidth
                        href="/cart"
                        sx={{ fontSize: "0.690rem" }}
                      >
                        Add to Cart
                      </Button>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ProductPage;
