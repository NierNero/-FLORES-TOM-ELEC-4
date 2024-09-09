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

  const serviceItems = [
    {
      image: "/img/aircon.jpg",
      text: "Air Conditioning Repair",
      link: "/airconrepair",
    },
    {
      image: "/img/engine.jpg",
      text: "Engine Repair/Replacement",
      link: "link-to-engine-repair-replacement-page",
    },
    {
      image: "/img/tire.jpg",
      text: "Tire Repair/Replacement",
      link: "link-to-tire-repair-replacement-page",
    },
    {
      image: "/img/aircon.jpg",
      text: "Air Conditioning Repair",
      link: "link-to-air-conditioning-repair-page",
    },
    {
      image: "/img/tire.jpg",
      text: "Tire Conditioning Repair",
      link: "link-to-air-conditioning-repair-page",
    },
  ];

  return (
    <Box sx={{ backgroundColor: "white", minHeight: "100vh" }}>
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
          />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            CARCARE
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            {["/dashboard", "/booking", "/cart", "/map"].map((href, index) => (
              <Button
                key={href}
                color="inherit"
                sx={{
                  fontSize: "14px",
                  "&:hover": { color: "red" },
                  fontWeight: "bold",
                  fontFamily: "Arial, sans-serif",
                }}
                href={href}
              >
                {["Home", "Booking", "Cart", "Map"][index]}
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
          bottom={0}
          left={0}
          bgcolor="rgba(0, 0, 0, 0.0)"
          color="black"
          p={2}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            textAlign: "left",
            maxWidth: "80%",
          }}
        >
          <Typography variant="h2" fontWeight="bold" mb={2} ml={3}>
            OUR SERVICE
          </Typography>
          <Typography
            variant="h6"
            mt={2}
            ml={3}
            sx={{ fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" } }}
          >
            Get total care for your car. We offer a range of services provided
          </Typography>
          <Typography
            variant="h6"
            mb={2}
            ml={3}
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
          backgroundColor: "white",
          borderRadius: "6px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
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
                Repair + Maintenance Services Offered:
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 1,
                  justifyContent: "center",
                  mb: "2%",
                }}
              >
                {serviceItems.map((item) => (
                  <Box
                    key={item.text}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      cursor: "pointer",
                      border: "1px solid #ddd",
                      borderRadius: "10px",
                      overflow: "hidden",
                      boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
                      transition: "0.3s",
                      width: "200px",
                      mr: "1%",
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
    </Box>
  );
}

export default App;
