"use client";
import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Grid,
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Avatar,
  TextField,
  InputAdornment,
  Menu,
  MenuItem,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Star from "@mui/icons-material/Star";
import StarBorder from "@mui/icons-material/StarBorder";

const repairShops = [
  {
    name: "My Repair Shop",
    description: "Simple Shop",
    imageUrl: "/img/1.jpg",
    rating: 4,
  },
  {
    name: "Our Repair Shop",
    description: "Simple Shop",
    imageUrl: "/img/2.jpg",
    rating: 5,
  },
  {
    name: "Wala Repair Shop",
    description: "Simple Shop",
    imageUrl: "/img/3.jpg",
    rating: 4,
  },
  {
    name: "Another Repair Shop",
    description: "Simple Shop",
    imageUrl: "/img/4.jpg",
    rating: 3,
  },
  {
    name: "Another Repair Shop",
    description: "Simple Shop",
    imageUrl: "/img/4.jpg",
    rating: 2,
  },
  {
    name: "My Repair Shop",
    description: "Simple Shop",
    imageUrl: "/img/1.jpg",
    rating: 4,
  },
  {
    name: "Our Repair Shop",
    description: "Simple Shop",
    imageUrl: "/img/2.jpg",
    rating: 1,
  },
  {
    name: "Wala Repair Shop",
    description: "Simple Shop",
    imageUrl: "/img/3.jpg",
    rating: 4,
  },
];

const RepairShopCard = ({ shop }) => {
  const renderStars = () => {
    return Array.from({ length: 5 }, (_, index) =>
      index < shop.rating ? (
        <Star key={index} sx={{ color: "gold" }} />
      ) : (
        <StarBorder key={index} sx={{ color: "gold" }} />
      )
    );
  };

  return (
    <Card
      sx={{
        height: "auto",
        display: "flex",
        flexDirection: "column",
        marginTop: 2,
        borderRadius: "10px",
      }}
    >
      <CardMedia
        component="img"
        sx={{ height: 140, objectFit: "cover" }}
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
        <Box sx={{ display: "flex", alignItems: "center", marginTop: 1 }}>
          {renderStars()}
        </Box>
      </CardContent>
      <Box
        sx={{
          padding: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          sx={{ margin: "auto" }}
          href="/service"
        >
          Visit Now
        </Button>
        <Button
          variant="outlined"
          color="error"
          sx={{
            margin: "auto",
            borderColor: "red",
            color: "red",
            "&:hover": {
              borderColor: "darkred",
              color: "darkred",
            },
          }}
          href="/product"
        >
          Shop
        </Button>
      </Box>
    </Card>
  );
};

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    console.log("Icon clicked");
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ backgroundColor: "#f0f0f0", minHeight: "100vh" }}>
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
          ></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Carcare
          </Typography>
          <Button
            color="inherit"
            sx={{
              fontSize: "14px",
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
              fontSize: "14px",
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
              fontSize: "14px",
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
          <Button
            color="inherit"
            sx={{
              fontSize: "14px",
              "&:hover": {
                color: "red",
              },
              fontWeight: "bold",
              fontFamily: "Arial, sans-serif",
            }}
            href="/map"
          >
            Map
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
                <InputAdornment position="start">
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

      <Container
        sx={{
          marginTop: "70px",
          padding: 2,
          border: "1px solid #ccc",
          backgroundColor: "white",
          borderRadius: "6px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ marginBottom: 2 }}
        >
          Available Repair Shops
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {repairShops.map((shop, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <Box
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
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
