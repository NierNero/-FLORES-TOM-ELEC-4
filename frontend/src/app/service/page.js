"use client";

import React, { useState, useEffect } from "react";
import {
  Menu,
  MenuItem,
  Container,
  Avatar,
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
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import BookingIcon from "@mui/icons-material/Assignment";
import CartIcon from "@mui/icons-material/ShoppingCart";
import MapIcon from "@mui/icons-material/Map";
import ShopIcon from "@mui/icons-material/Shop";
import Footer from '../../components/Footer'; // Adjust the path as needed

function App() {
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [scrolled, setScrolled] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const menuItems = [
    { text: "Profile", href: "/profile" },
    { text: "Settings", href: "/settings" },
    { text: "Logout", href: "/login" },
  ];

  const menuItem = [
    { text: "Home", icon: <HomeIcon />, href: "/dashboard" },
    { text: "Booking", icon: <BookingIcon />, href: "/booking" },
    { text: "Cart", icon: <CartIcon />, href: "/cart" },
    { text: "Shop", icon: <ShopIcon />, href: "/shop" },
    { text: "Map", icon: <MapIcon />, href: "/map" },
  ];

  const serviceItems = [
    {
      image: "/img/aircon.jpg",
      text: "Air Conditioning Repair",
      link: "/airconrepair",
    },
    {
      image: "/img/engine.jpg",
      text: "Engine Repair/Replacement",
      link: "/engine-repair",
    },
    {
      image: "/img/tire.jpg",
      text: "Tire Repair/Replacement",
      link: "/tire-repair",
    },
    {
      image: "/img/aircon.jpg",
      text: "Air Conditioning Repair",
      link: "/airconrepair",
    },
    {
      image: "/img/tire.jpg",
      text: "Tire Conditioning Repair",
      link: "/tire-conditioning-repair",
    },
  ];

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
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            CARCARE
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            {menuItem.map((item) => (
              <Button
                key={item.text}
                color="inherit"
                sx={{
                  mr: 2,
                  fontSize: "14px",
                  "&:hover": { color: "red" },
                  fontFamily: "Arial, sans-serif",
                }}
                href={item.href}
                startIcon={item.icon}
              >
                {item.text}
              </Button>
            ))}
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
              {menuItems.map((item) => (
                <MenuItem
                  key={item.text}
                  onClick={handleMenuClose}
                  href={item.href}
                >
                  {item.text}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      <Box position="relative">
        <CardMedia
          component="img"
          image="/img/2.jpg"
          alt="Car Engine"
          sx={{
            objectFit: "cover",
            width: "100%",
            height: { xs: "50vh", sm: "60vh", md: "100vh" },
            opacity: 0.7,
          }}
        />
        <Box
          position="absolute"
          bottom={20}
          left={20}
          bgcolor="rgba(0, 0, 0, 0.0)"
          color="white"
          p={2}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            textAlign: "left",
            maxWidth: "80%",
          }}
        >
          <Typography variant="h2" fontWeight="bold" mb={2}>
            OUR SERVICE
          </Typography>
          <Typography
            variant="h6"
            mt={2}
            sx={{ fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" } }}
          >
            Get total care for your car. We offer a range of services provided
          </Typography>
          <Typography
            variant="h6"
            mb={2}
            sx={{ fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" } }}
          >
            by skilled and ASE-certified auto technicians.
          </Typography>
        </Box>
      </Box>

      <Container
        sx={{
          mb: 4,
          mt: 2,
          padding: 4,
          display: "flex",
          justifyContent: "center",
          borderRadius: "6px",
          maxWidth: "900px",
        }}
      >
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12}>
            <CardContent>
              <Typography
                variant="h4"
                gutterBottom
                mb={5}
                fontWeight="bold"
                textAlign="center"
              >
                Repair + Maintenance Services Offered
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 1,
                  justifyContent: "center",
                }}
              >
                {serviceItems.map((item) => (
                  <Box
                    key={item.text}
                    sx={{
                      display: "flex",
                      ml: 2,
                      flexDirection: "column",
                      alignItems: "center",
                      cursor: "pointer",
                      border: "1px solid #ddd",
                      borderRadius: "10px",
                      overflow: "hidden",
                      boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
                      transition: "0.3s",
                      width: "200px",
                      "&:hover": {
                        boxShadow: "0px 8px 16px rgba(0,0,0,0.2)",
                        transform: "scale(1.02)",
                      },
                    }}
                    onClick={() => (window.location.href = item.link)}
                  >
                    <CardMedia
                      component="img"
                      image={item.image}
                      alt={item.text}
                      sx={{
                        width: "200px",
                        height: "150px",
                        objectFit: "cover",
                      }}
                    />
                    <Box sx={{ p: 2, textAlign: "center" }}>
                      <Typography variant="body1" fontWeight="bold">
                        {item.text}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Grid>
        </Grid>
      </Container>
      <Footer /> {/* Add the Footer component */}
    </Box>
  );
}

export default App;
