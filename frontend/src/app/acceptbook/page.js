"use client";

import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  Avatar,
  Divider,
  AppBar,
  Toolbar,
  IconButton,
  TextField,
  InputAdornment,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import BookingIcon from "@mui/icons-material/Assignment";
import CartIcon from "@mui/icons-material/ShoppingCart";
import MapIcon from "@mui/icons-material/Map";

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const open = Boolean(anchorEl);
  
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
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

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleAcceptBooking = () => {
    console.log("Booking Accepted");
  };

  const menuItems = [
    { text: 'Home', icon: <HomeIcon />, href: '/dashboard' },
    { text: 'Booking', icon: <BookingIcon />, href: '/booking' },
    { text: 'Cart', icon: <CartIcon />, href: '/cart' },
    { text: 'Map', icon: <MapIcon />, href: '/map' }
  ];

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
          {isSmallScreen ? (
            <>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleDrawerToggle}
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Carcare
              </Typography>
            </>
          ) : (
            <>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                {/* Add menu icon here if needed */}
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Carcare
              </Typography>
              {menuItems.map((item) => (
                <Button
                  key={item.text}
                  color="inherit"
                  sx={{
                    "&:hover": {
                      color: "red",
                    },
                    fontWeight: "bold",
                    fontFamily: "Arial, sans-serif",
                  }}
                  href={item.href}
                >
                  {item.text}
                </Button>
              ))}
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
            </>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerToggle}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={handleDrawerToggle}
          onKeyDown={handleDrawerToggle}
        >
          <List>
            {menuItems.map((item) => (
              <ListItem button key={item.text} component="a" href={item.href}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      <Box sx={{ marginTop: "70px", padding: 2 }}>
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
            marginLeft: "6%",
          }}
          href="/booking"
        >
          Pending Book
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
            fontFamily: "Arial, sans-serif",
            textAlign: "left",
            fontSize: "1.1rem",
            textTransform: "none",
            marginLeft: "3%",
          }}
          href="/acceptbook"
        >
          Accepted Book
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
            fontFamily: "Arial, sans-serif",
            textAlign: "left",
            fontSize: "1.1rem",
            textTransform: "none",
            marginLeft: "3%",
          }}
          href="/cancelbook"
        >
          Canceled Book
        </Button>

        <Divider
          sx={{
            mb: 2,
            width: "88%",
            margin: "auto",
          }}
        />

        <Card
          sx={{
            mt: { xs: 2, sm: 3, md: 3 },
            borderRadius: "15px",
            boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.3s",
            "&:hover": { transform: "scale(1.02)" },
            width: "88%",
            margin: "auto",
          }}
        >
          <CardContent>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={2} sm="auto">
                <Avatar
                  alt="Nelson's Automotive Shop"
                  src="/logo.png"
                  sx={{
                    width: { xs: 40, sm: 50 },
                    height: { xs: 40, sm: 50 },
                    borderRadius: "8px",
                  }}
                />
              </Grid>
              <Grid item xs>
                <Typography variant="h6" component="div">
                  Nelson's Automotive Shop
                </Typography>
                <Typography color="text.secondary">John Doe</Typography>
              </Grid>
            </Grid>

            <Divider sx={{ my: 2 }} />

            <Grid container spacing={2} alignItems="center">
              <Grid
                item
                xs={12}
                sm={6}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <Typography variant="body1" component="div">
                  Service:
                </Typography>
                <Typography variant="h6" component="div">
                  Belts Repair
                </Typography>
              </Grid>

              <Grid
                item
                xs={10}
                sm={4}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <CalendarTodayIcon
                  fontSize="small"
                  sx={{ verticalAlign: "middle", mr: 1 }}
                />
                <Typography variant="body1" component="span">
                  Fri, December 29
                </Typography>
              </Grid>
            </Grid>

            <Box textAlign="right" mt={-5}>
              <Button
                variant="contained"
                color="success"
                disabled
              >
                Booking Accepted
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}

export default App;
