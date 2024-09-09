"use client";
import React from "react";
import {
  Container,
  Grid,
  Typography,
  Button,
  TextField,
  IconButton,
  AppBar,
  Toolbar,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Box,
  Link,
} from "@mui/material";
import { Phone, Email, Map, Chat, Logout } from "@mui/icons-material";
import { useState } from "react";

function App() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleMenuClick = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);
  const handleDrawerToggle = () => setDrawerOpen(!drawerOpen);

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={handleDrawerToggle}>
            <Menu />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Carcare
          </Typography>
          <Button color="inherit" onClick={handleMenuClick}>
            My Account
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
        <List>
          <ListItem button>
            <ListItemIcon>
              <Phone />
            </ListItemIcon>
            <ListItemText primary="Contact" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Map />
            </ListItemIcon>
            <ListItemText primary="Change Location" />
          </ListItem>
        </List>
      </Drawer>

      <Container sx={{ mt: 2 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4">BOOK A SERVICE</Typography>
            <Typography variant="body1">
              Book a service at very affordable price
            </Typography>
            <TextField
              fullWidth
              label="What Services do you want?"
              variant="outlined"
              margin="normal"
            />
            <Button variant="contained" color="primary">
              Search
            </Button>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h5">All Services</Typography>
            <Grid container spacing={2}>
              {/* Repeat for each service */}
              <Grid item xs={6} md={3}>
                <Link href="servicesbycategory/1.html">
                  <img src="images/sercat/service-icon.png" alt="Turbo" />
                  <Typography variant="subtitle1">Turbo</Typography>
                </Link>
              </Grid>
              {/* More services */}
            </Grid>
          </Grid>
        </Grid>
      </Container>

      <footer>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6">CONTACT US</Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <Map />
                  </ListItemIcon>
                  <ListItemText primary="Faridabad, Haryana, India" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Email />
                  </ListItemIcon>
                  <ListItemText primary="contact@surfsidemedia.in" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Phone />
                  </ListItemIcon>
                  <ListItemText primary="+91-1234567890" />
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body2">
                &copy; 2024 Carcare. All Rights Reserved.
              </Typography>
              <Box mt={2}>
                <Link href="about-us.html">About Us</Link> |
                <Link href="contact-us.html">Contact Us</Link> |
                <Link href="terms-of-use.html">Terms of Use</Link> |
                <Link href="privacy.html">Privacy</Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </footer>
    </div>
  );
}

export default App;
