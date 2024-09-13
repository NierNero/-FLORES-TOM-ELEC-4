'use client';

import React, { useState, useEffect } from 'react';
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
} from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import BookIcon from "@mui/icons-material/Book";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MapIcon from '@mui/icons-material/Map';
import { useTheme } from '@mui/material/styles';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    console.log('Icon clicked');
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: 'Home', icon: <HomeIcon />, link: '/dashboard' },
    { text: 'Booking', icon: <BookIcon />, link: '/booking' },
    { text: 'Cart', icon: <ShoppingCartIcon />, link: '/cart' },
    { text: 'Map', icon: <MapIcon />, link: '/map' },
  ];

  return (
    <Box sx={{ minHeight: '100vh' }}>
      <AppBar 
        position="fixed" 
        sx={{
          backgroundColor: scrolled ? 'rgba(0, 0, 0, 1)' : 'rgba(13, 71, 161, 1)', 
          boxShadow: "0 3px 5px rgba(0, 0, 0, 0.4)",
          height: '70px',
          display: 'flex',
          justifyContent: 'center',
          transition: 'background-color 0.3s ease', 
        }}
      >
        <Toolbar 
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {isMobile && (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          )}
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
              width: '200px',
              '& fieldset': {
                border: 'none',
              },
              '& .MuiInputLabel-root': {
                color: 'black',
              },
              '& .MuiInputBase-input': {
                color: 'white', 
              },
              '& .MuiInputAdornment-root': {
                color: 'white', 
              },
            }}
            size="small"
            placeholder="Search here..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleClick}>
                    <SearchIcon sx={{ color: 'white' }} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Avatar 
            src="/profile.png" 
            sx={{ ml: 1, cursor: 'pointer' }} 
            onClick={handleMenuOpen} 
          />
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            PaperProps={{
              sx: {
                width: '200px',
              },
            }}
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
        onClose={toggleDrawer(false)}
      >
        <List>
          {menuItems.map((item) => (
            <ListItem button key={item.text} onClick={() => window.location.href = item.link}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Box sx={{ marginTop: '70px', padding: 2 }}>
        <Button
          variant="text"
          color="white"
          sx={{
            '&:hover': {
              color: 'red',
            },
            '&:active': {
              color: 'darkred', 
            },
            fontFamily: 'Arial, sans-serif',
            textAlign: 'left',
            fontSize: '1.1rem',
            textTransform: 'none',
            marginLeft: '6%'
          }}
          href="/booking"
        >
          Pending Book
        </Button>

        <Button
          variant="text"
          color="white"
          sx={{
            '&:hover': {
              color: 'red',
            },
            '&:active': {
              color: 'darkred', 
            },
            fontFamily: 'Arial, sans-serif',
            textAlign: 'left',
            fontSize: '1.1rem',
            textTransform: 'none',
            marginLeft: '3%'
          }}
          href="/acceptbook"
        >
          Accepted Book
        </Button>

        <Button
          variant="text"
          color="white"
          sx={{
            '&:hover': {
              color: 'red',
            },
            '&:active': {
              color: 'darkred', 
            },
            fontFamily: 'Arial, sans-serif',
            textAlign: 'left',
            fontSize: '1.1rem',
            textTransform: 'none',
            marginLeft: '3%'
          }}
          href="/cancelbook"
        >
          Canceled Book
        </Button>
        <Divider sx={{
          mb: 2,
          width: '88%', 
          margin: 'auto', 
        }}/>

        <Card sx={{
          mt: { xs: 2, sm: 3, md: 3 }, 
          borderRadius: '15px',
          boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
          transition: 'transform 0.3s',
          width: '88%',
          margin: 'auto', 
        }}>
          <CardContent>
            <Grid container spacing={2} alignItems="center" >
              <Grid item xs={2} sm="auto">
                <Avatar
                  alt="Nelson's Automotive Shop"
                  src="/logo.png" 
                  sx={{ width: { xs: 40, sm: 50 }, 
                  height: { xs: 40, sm: 50 }, 
                  borderRadius: '8px'  }}
                />
              </Grid>
              <Grid item xs>
                <Typography variant="h6" component="div">
                  Nelson's Automotive Shop
                </Typography>
                <Typography color="text.secondary">
                  John Doe
                </Typography>
              </Grid>
            </Grid>

            <Divider sx={{ my: 2 }} />

            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} sm={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <Typography variant="body1" component="div">
                  Service:
                </Typography>
                <Typography variant="h6" component="div">
                  Belts Repair
                </Typography>
              </Grid>

              <Grid item xs={10} sm={4} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                <CalendarTodayIcon fontSize="small" sx={{ verticalAlign: 'middle', mr: 1 }} />
                <Typography variant="body1" component="span">
                  Fri, December 29
                </Typography>
              </Grid>
            </Grid>

            <Box textAlign="right" mt={-5}>
              <Button variant="contained" color="error">
                Cancel Booking
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}

export default App;
