"use client";
import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Grid,
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  OutlinedInput,
  FormHelperText,
  Avatar,
  Menu,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import BookIcon from "@mui/icons-material/Book";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MapIcon from "@mui/icons-material/Map";
import { useTheme } from "@mui/material/styles";

function BookingPage() {
  const [formData, setFormData] = useState({
    firstName: "James",
    lastName: "Crispe",
    email: "Crispe@gmail.com",
    phone: "09123456789",
    address: "Diri Sa Amoa Lapu-Lapu City",
    vehicleName: "Toyota Supra",
    plateNo: "8",
    service: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [scrolled, setScrolled] = useState(false);
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 2000); // Simulate a network request
  };

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);
  const handleDrawerOpen = () => setDrawerOpen(true);
  const handleDrawerClose = () => setDrawerOpen(false);

  if (submitted) {
    return (
      <Container sx={{ mt: 4, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Typography variant="h4" mb={2}>
          Thank You!
        </Typography>
        <Typography variant="h6" mb={4}>
          Your booking request has been submitted successfully.
        </Typography>
        <Button variant="contained" color="primary" href="/service">
          Back to Service
        </Button>
      </Container>
    );
  }

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
          <ListItem button onClick={handleDrawerClose} component="a" href="/dashboard" sx={{ py: 1.5 }}>
            <ListItemIcon sx={{ minWidth: "35px" }}>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" sx={{ ml: 1 }} />
          </ListItem>
          <ListItem button onClick={handleDrawerClose} component="a" href="/booking" sx={{ py: 1.5 }}>
            <ListItemIcon sx={{ minWidth: "35px" }}>
              <BookIcon />
            </ListItemIcon>
            <ListItemText primary="Booking" sx={{ ml: 1 }} />
          </ListItem>
          <ListItem button onClick={handleDrawerClose} component="a" href="/cart" sx={{ py: 1.5 }}>
            <ListItemIcon sx={{ minWidth: "35px" }}>
              <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="Cart" sx={{ ml: 1 }} />
          </ListItem>
          <ListItem button onClick={handleDrawerClose} component="a" href="/map" sx={{ py: 1.5 }}>
            <ListItemIcon sx={{ minWidth: "35px" }}>
              <MapIcon />
            </ListItemIcon>
            <ListItemText primary="Map" sx={{ ml: 1 }} />
          </ListItem>
        </List>
      </Drawer>

      <Container sx={{ mt: 10, padding: 2 }}>
        <Card elevation={3} sx={{ borderRadius: "10px" }}>
          <CardHeader
            title="Book Your Service"
            sx={{
              color: "black ",
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
            }}
          />
          <CardContent>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="First Name"
                    name="firstName"
                    value={formData.firstName}
                    InputProps={{ readOnly: true }}
                    sx={{ bgcolor: "background.paper", borderRadius: "5px" }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    InputProps={{ readOnly: true }}
                    sx={{ bgcolor: "background.paper", borderRadius: "5px" }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    InputProps={{ readOnly: true }}
                    sx={{ bgcolor: "background.paper", borderRadius: "5px" }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Phone"
                    name="phone"
                    value={formData.phone}
                    InputProps={{ readOnly: true }}
                    sx={{ bgcolor: "background.paper", borderRadius: "5px" }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Address"
                    name="address"
                    value={formData.address}
                    InputProps={{ readOnly: true }}
                    sx={{ bgcolor: "background.paper", borderRadius: "5px" }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Vehicle Name"
                    name="vehicleName"
                    value={formData.vehicleName}
                    InputProps={{ readOnly: true }}
                    sx={{ bgcolor: "background.paper", borderRadius: "5px" }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Plate No."
                    name="plateNo"
                    value={formData.plateNo}
                    InputProps={{ readOnly: true }}
                    sx={{ bgcolor: "background.paper", borderRadius: "5px" }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel id="service-label">Service</InputLabel>
                    <Select
                      labelId="service-label"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      input={<OutlinedInput label="Service" />}
                      required
                    >
                      <MenuItem value="Repair">Air Conditioning</MenuItem>
                      <MenuItem value="Maintenance">Tire Repairing</MenuItem>
                      <MenuItem value="Inspection">Engine Repairing</MenuItem>
                      <MenuItem value="Upgrade">Belt Repairing</MenuItem>
                    </Select>
                    <FormHelperText>Select the type of service</FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    sx={{ bgcolor: "background.paper", borderRadius: "5px" }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Box display="flex" justifyContent="center" mt={2}>
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      disabled={loading}
                      sx={{ minWidth: "150px", borderRadius: "5px" }}
                    >
                      {loading ? <CircularProgress size={24} /> : "Submit"}
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}

export default BookingPage;
