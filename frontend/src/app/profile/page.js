'use client'
import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  TextField,
  Grid,
  Paper,
  IconButton,
  InputAdornment,
  Button,
  Avatar,
  Menu,
  MenuItem,
  AppBar,
  Toolbar
} from '@mui/material';
import {
  AccountCircle,
  Email,
  Phone,
  Home,
  DirectionsCar,
  ConfirmationNumber,
  Cake,
  CameraAlt,
} from '@mui/icons-material';
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import BookIcon from "@mui/icons-material/Book";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MapIcon from "@mui/icons-material/Map";

const ProfilePage = () => {
  const [scrolled, setScrolled] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);
  const [editing, setEditing] = useState(false);
  const [profilePic, setProfilePic] = useState("/profile.png"); // Default profile picture

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    const handleResize = () => setIsMobile(window.innerWidth < 600);

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerOpen = () => {
    // Logic to open the drawer
  };

  const handleEditClick = () => {
    setEditing(!editing);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
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
            justifyContent: { xs: "space-between", md: "space-between" },
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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: { xs: "none", md: "block" } }}>
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
          <Avatar
            src="/profile.png"
            sx={{ ml: 1, cursor: "pointer" }}
            onClick={handleMenuOpen}
          />
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
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
      <Box sx={{ padding: 3, maxWidth: 800, margin: 'auto', marginTop: '80px', textAlign: 'center' }}>
        <Paper elevation={6} sx={{ padding: 4, borderRadius: 2, textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom sx={{ mb: 2, fontWeight: 'bold' }}>
            Profile Information
          </Typography>
          <Avatar
            src={profilePic}
            sx={{
              width: 120,
              height: 120,
              margin: 'auto',
              mb: 2,
              border: '4px solid #3f51b5',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)'
            }}
          />
          {editing && (
            <Button
              variant="outlined"
              component="label"
              startIcon={<CameraAlt />}
              sx={{ mb: 2, borderColor: '#3f51b5', color: '#3f51b5', '&:hover': { borderColor: '#303f9f' } }}
            >
              Upload
              <input
                type="file"
                accept="image/*"
                hidden
                onChange={handleFileChange}
              />
            </Button>
          )}
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="First Name"
                variant="outlined"
                defaultValue="James"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                  readOnly: !editing
                }}
                sx={{ bgcolor: editing ? 'white' : 'transparent' }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Last Name"
                variant="outlined"
                defaultValue="Crispe"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                  readOnly: !editing
                }}
                sx={{ bgcolor: editing ? 'white' : 'transparent' }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                type="email"
                defaultValue="Crispe@gmail.com"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email />
                    </InputAdornment>
                  ),
                  readOnly: !editing
                }}
                sx={{ bgcolor: editing ? 'white' : 'transparent' }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Phone"
                variant="outlined"
                defaultValue="09123456789"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Phone />
                    </InputAdornment>
                  ),
                  readOnly: !editing
                }}
                sx={{ bgcolor: editing ? 'white' : 'transparent' }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Address"
                variant="outlined"
                defaultValue="Diri Sa Amoa Lapu-Lapu City"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Home />
                    </InputAdornment>
                  ),
                  readOnly: !editing
                }}
                sx={{ bgcolor: editing ? 'white' : 'transparent' }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Vehicle Name"
                variant="outlined"
                defaultValue="Toyota Supra"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <DirectionsCar />
                    </InputAdornment>
                  ),
                  readOnly: !editing
                }}
                sx={{ bgcolor: editing ? 'white' : 'transparent' }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Plate No."
                variant="outlined"
                defaultValue="8"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <ConfirmationNumber />
                    </InputAdornment>
                  ),
                  readOnly: !editing
                }}
                sx={{ bgcolor: editing ? 'white' : 'transparent' }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Birthday"
                variant="outlined"
                type="date"
                defaultValue="2000-01-01"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Cake />
                    </InputAdornment>
                  ),
                }}
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{
                  readOnly: !editing
                }}
                sx={{ bgcolor: editing ? 'white' : 'transparent' }}
              />
            </Grid>
          </Grid>
          <Box sx={{ mt: 3, textAlign: 'right' }}>
            <Button
              variant="contained"
              color={editing ? "secondary" : "primary"}
              onClick={handleEditClick}
              sx={{ textTransform: 'none' }}
            >
              {editing ? "Save" : "Edit"}
            </Button>
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default ProfilePage;
