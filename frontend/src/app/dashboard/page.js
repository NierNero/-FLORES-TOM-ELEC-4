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
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Star from "@mui/icons-material/Star";
import StarBorder from "@mui/icons-material/StarBorder";
import LocationOn from "@mui/icons-material/LocationOn";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import BookIcon from "@mui/icons-material/Book";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MapIcon from "@mui/icons-material/Map";
import StorefrontIcon from '@mui/icons-material/Storefront';
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import Footer from '../../components/Footer'; // Adjust the path as needed

const repairShops = [
  {
    name: "My Repair Shop",
    description: "Likoan Margindon Cebu",
    imageUrl: "/img/1.jpg",
    rating: 4,
  },
  {
    name: "Our Repair Shop",
    description: "Likoan Margindon Cebu",
    imageUrl: "/img/2.jpg",
    rating: 5,
  },
  {
    name: "Wala Repair Shop",
    description: "Likoan Margindon Cebu",
    imageUrl: "/img/3.jpg",
    rating: 4,
  },
  {
    name: "Another Repair Shop",
    description: "Likoan Margindon Cebu",
    imageUrl: "/img/4.jpg",
    rating: 3,
  },
  {
    name: "My Repair Shop",
    description: "Likoan Margindon Cebu",
    imageUrl: "/img/1.jpg",
    rating: 4,
  },
  {
    name: "Our Repair Shop",
    description: "Likoan Margindon Cebu",
    imageUrl: "/img/2.jpg",
    rating: 5,
  },
  {
    name: "Wala Repair Shop",
    description: "Likoan Margindon Cebu",
    imageUrl: "/img/3.jpg",
    rating: 4,
  },
  {
    name: "Another Repair Shop",
    description: "Likoan Margindon Cebu",
    imageUrl: "/img/4.jpg",
    rating: 3,
  },
  {
    name: "Another Repair Shop",
    description: "Likoan Margindon Cebu",
    imageUrl: "/img/4.jpg",
    rating: 2,
  },
  {
    name: "My Repair Shop",
    description: "Likoan Margindon Cebu",
    imageUrl: "/img/1.jpg",
    rating: 4,
  },
  {
    name: "Our Repair Shop",
    description: "Likoan Margindon Cebu",
    imageUrl: "/img/2.jpg",
    rating: 1,
  },
  {
    name: "Wala Repair Shop",
    description: "Likoan Margindon Cebu",
    imageUrl: "/img/3.jpg",
    rating: 4,
  },
];

const RepairShopCard = ({ shop }) => {
  const renderStars = () => {
    const fullStars = Array.from({ length: shop.rating }, (_, index) => (
      <Star key={index} sx={{ color: 'gold' }} />
    ));
    const emptyStars = Array.from({ length: 5 - shop.rating }, (_, index) => (
      <StarBorder key={index + shop.rating} sx={{ color: 'gold' }} />
    ));
    return [...fullStars, ...emptyStars];
  };

  return (
    <Card
      sx={{
        height: "auto",
        display: "flex",
        flexDirection: "column",
        marginTop: 2,
        borderRadius: "13px",
      }}
    >
      <CardMedia
        component="img"
        sx={{ height: 140, objectFit: "cover" }}
        image={shop.imageUrl}
        alt={shop.name}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <StorefrontIcon sx={{ marginRight: 1, color: 'text.secondary' }} />
          <Typography variant="h6" component="div">
            {shop.name}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 1 }}>
          <LocationOn sx={{ marginRight: 1, color: 'text.secondary' }} />
          <Typography variant="body2" color="text.secondary">
            {shop.description}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 1 }}>
          {renderStars()}
          <Typography variant="body2" sx={{ marginLeft: 1 }}>
            {shop.rating} Ratings
          </Typography>
        </Box>
      </CardContent>
      <Box
        sx={{
          padding: 2,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Button
          variant="contained"
          color="primary"
          sx={{ margin: 'auto' }}
          href="/service"
        >
          Visit Now
        </Button>
        <Button
          variant="outlined"
          color="error"
          sx={{
            margin: 'auto',
            borderColor: 'red',
            color: 'red',
            '&:hover': {
              borderColor: 'darkred',
              color: 'darkred',
            },
          }}
          href="/shop"
        >
          Shop
        </Button>
      </Box>
    </Card>
  );
};

const BackgroundOverlay = () => (
  <Box
  sx={{
    position: 'relative',
    top: 0,
    left: 0,
    width: '100%',
    height: '90vh',
    backgroundColor: 'white', // Fallback color
    backgroundImage: 'url(/img/1.jpg)', // Correct syntax for background image
    opacity: 0.8, // Adjust opacity here
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    zIndex: -1,
    pointerEvents: 'none',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    // Responsive adjustments
    '@media (max-width: 600px)': {
      height: '40vh',
    },
  }}
  >
    
    <Typography
      variant="h4"
      color="white"
      sx={{
        marginTop: 3,
        textAlign: 'center',
        '@media (max-width: 600px)': {
          fontSize: '1.5rem',
        },
      }}
    >
      Pangita Diri!
    </Typography>
    <TextField
      variant="outlined"
      placeholder="Search for repair shops..."
      sx={{
        backgroundColor: 'white',
        width: '80%',
        maxWidth: '600px',
        borderRadius: '25px',
        '& .MuiOutlinedInput-root': {
          borderRadius: '25px',
        },
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
    <Typography
      variant="h4"
      color="white"
      sx={{
        marginTop: 3,
        textAlign: 'center',
        '@media (max-width: 600px)': {
          fontSize: '1.5rem',
        },
      }}
    >
      Affordable ra kaayo dri!
    </Typography>
  </Box>
);

const App = () => {
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

  const handleClick = () => {
    console.log("Icon clicked");
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      <BackgroundOverlay />
      
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
          zIndex: 1, // Ensure the AppBar is above the background
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: '100%',
          }}
        >
          {isMobile && (
            <IconButton
              size="large"
              edge="start"
              color="white"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleDrawerOpen}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Carcare
          </Typography>
          {/* Navigation Buttons */}
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

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerClose}
      >
        <List>
          <ListItem button component="a" href="/dashboard">
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component="a" href="/booking">
            <ListItemIcon><BookIcon /></ListItemIcon>
            <ListItemText primary="Booking" />
          </ListItem>
          <ListItem button component="a" href="/cart">
            <ListItemIcon><ShoppingCartIcon /></ListItemIcon>
            <ListItemText primary="Cart" />
          </ListItem>
          <ListItem button component="a" href="/map">
            <ListItemIcon><MapIcon /></ListItemIcon>
            <ListItemText primary="Map" />
          </ListItem>
        </List>
      </Drawer>

      <Container
        sx={{
          marginTop: "-12%",
          marginBottom: "30px",
          padding: 2,
          backgroundColor: "white ",
          borderRadius: "4px",
          boxShadow: "0 3px 6px rgba(0, 0, 0, 0.4)",
        }}
      >
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ marginBottom: 2, mt: 2 }}
        >
          Our <span style={{  color: 'blue', fontSize: '3rem' }}>Repair Shops</span>
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
      <Footer /> {/* Add the Footer component */}
    </>
  );
};

export default App;
