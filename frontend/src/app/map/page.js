"use client";
import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Avatar,
  Container,
  Box,
  Paper,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import BookingIcon from "@mui/icons-material/Assignment";
import CartIcon from "@mui/icons-material/ShoppingCart";
import MapIcon from "@mui/icons-material/Map";
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
    <div>
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
            Carcare
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
                startIcon={<BookingIcon />}
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
                startIcon={<CartIcon />}
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
                  textTransform: "none",
                  color: "#FF6600",
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
            PaperProps={{
              sx: { width: "200px" },
            }}
          >
            <MenuItem onClick={handleMenuClose}>
              <Button href="/profile" sx={{ textDecoration: "none", color: "inherit" }}>
                Profile
              </Button>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Button href="/login" sx={{ textDecoration: "none", color: "inherit" }}>
                Logout
              </Button>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ paddingTop: 11, paddingBottom: 4 }}>
        <Box
          sx={{
            borderRadius: "15px",
            overflow: "hidden",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            backgroundColor: "background.paper",
            padding: 2,
          }}
        >
          <Typography variant="h4" align="center" gutterBottom>
            Map?
          </Typography>
          <Grid container spacing={2} marginTop={1}>
            <Grid item xs={12}>
              <Paper
                sx={{
                  padding: 2,
                  margin: "auto",
                  borderRadius: "10px",
                  boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
                  mb: 1,
                }}
              >
                <Box
                  sx={{ position: "relative", width: "100%", height: "auto" }}
                >
                  <img
                    src="/img/map.png"
                    useMap="#image-map"
                    alt="Interactive Map"
                    style={{
                      width: "100%",
                      height: "auto",
                      maxWidth: "1200px",
                    }}
                  />
                  <map name="image-map">
                    <area
                      shape="rect"
                      coords="34,44,270,350"
                      href="/location1"
                      alt="Location 1"
                    />
                    <area
                      shape="rect"
                      coords="290,172,333,250"
                      href="/location2"
                      alt="Location 2"
                    />
                    <area
                      shape="rect"
                      coords="340,350,500,450"
                      href="/location3"
                      alt="Location 3"
                    />
                  </map>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Box>

        <Box
          sx={{
            borderRadius: "15px",
            overflow: "hidden",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            backgroundColor: "background.paper",
            padding: 2,
            marginTop: 4,
          }}
        >
          <Typography variant="h4" align="center" gutterBottom>
            Nearby Repair Shop(s)
          </Typography>
          <Grid container spacing={2} marginTop={3}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "15px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  width: "100%", 
                  maxWidth: "300px", 
                  margin: "auto",
                }}
              >
                <CardMedia
                  sx={{
                    height: "150px",
                    borderTopLeftRadius: "15px",
                    borderTopRightRadius: "15px",
                  }}
                  image="/img/1.jpg"
                  title="Nelson Automotive Shop"
                />
                <CardContent sx={{ flexGrow: 1, padding: 2 }}>
                  <Typography gutterBottom variant="h5" component="div">
                    Nelson Automotive Shop
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Location: Pajo, Lapu-Lapu City
                  </Typography>
                </CardContent>
                <Box
                  sx={{ padding: 2, display: "flex", justifyContent: "center" }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ margin: 2 }}
                  >
                    View Shop
                  </Button>
                </Box>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "15px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  width: "100%", 
                  maxWidth: "300px", 
                  margin: "auto",
                }}
              >
                <CardMedia
                  sx={{
                    height: "150px",
                    borderTopLeftRadius: "15px",
                    borderTopRightRadius: "15px",
                  }}
                  image="/img/2.jpg"
                  title="Goodwheel Motor Services"
                />
                <CardContent sx={{ flexGrow: 1, padding: 2 }}>
                  <Typography gutterBottom variant="h5" component="div">
                    Goodwheel Motor Services
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Location: Pajo, Lapu-Lapu City
                  </Typography>
                </CardContent>
                <Box
                  sx={{ padding: 2, display: "flex", justifyContent: "center" }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ margin: 2 }}
                  >
                    View Shop
                  </Button>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default App;
