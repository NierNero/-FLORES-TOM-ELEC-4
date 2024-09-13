"use client";
import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Box,
  CardMedia,
  Container,
  Grid,
  CardContent,
  Button,
  List,
  ListItem,
  Drawer,
  ListItemIcon,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import BookIcon from "@mui/icons-material/Book";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MapIcon from "@mui/icons-material/Map";
import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const open = Boolean(anchorEl);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);
  const handleDrawerToggle = () => setDrawerOpen(!drawerOpen);

  const menuItems = [
    { text: "Profile", href: "/profile", icon: <SettingsIcon /> },
    { text: "Settings", href: "/settings", icon: <SettingsIcon /> },
    { text: "Logout", href: "/login", icon: <ExitToAppIcon /> },
  ];

  const navLinks = [
    { text: "Home", href: "/dashboard", icon: <HomeIcon /> },
    { text: "Booking", href: "/booking", icon: <BookIcon /> },
    { text: "Cart", href: "/cart", icon: <ShoppingCartIcon /> },
    { text: "Map", href: "/map", icon: <MapIcon /> },
  ];

  return (
    <Box sx={{ backgroundColor: "white", minHeight: "100vh" }}>
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
                CARCARE
              </Typography>
            </>
          ) : (
            <>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                CARCARE
              </Typography>
              <Box sx={{ display: "flex", gap: 2 }}>
                {navLinks.map((link) => (
                  <Button
                    key={link.href}
                    color="white"
                    sx={{
                      mr: 2,
                      fontSize: "14px",
                      "&:hover": { color: "red" },
                      fontFamily: "Arial, sans-serif",
                    }}
                    href={link.href}
                    startIcon={link.icon}
                  >
                    {link.text}
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
                      sx={{ display: 'flex', alignItems: 'center' }}
                    >
                      {item.icon}
                      <Typography sx={{ ml: 1 }}>{item.text}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
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
            {navLinks.map((link) => (
              <ListItem button key={link.href} component="a" href={link.href}>
                <ListItemIcon>{link.icon}</ListItemIcon>
                <Typography>{link.text}</Typography>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

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
          <Typography
            variant="h1"
            fontWeight="bold"
            mb={1}
            ml={7}
            sx={{
              fontSize: { xs: "1rem", sm: "2rem", md: "3rem", lg: "4rem" },
            }}
          >
            HEATING AND AIR
          </Typography>
          <Typography
            variant="h1"
            fontWeight="bold"
            mb={12}
            ml={7}
            sx={{
              fontSize: { xs: "1rem", sm: "2rem", md: "3rem", lg: "4rem" },
            }}
          >
            CONDITIONING
          </Typography>
        </Box>
      </Box>

      <Container
        sx={{
          mb: 4,
          mt: 2,
          padding: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12}>
            <CardContent sx={{ textAlign: "left" }}>
              <Typography variant="h4" gutterBottom mb={5} fontWeight="bold">
                Minneapolis Heating and Air Conditioning
              </Typography>
              <Typography variant="h7" paragraph gutterBottom mb={4}>
                Your vehicle’s ability to properly heat and cool your car is
                central to your comfort and the comfort of your passengers.
                Without the heating and air conditioning systems in today’s
                modern vehicles, we would all be miserable driving to our
                destinations. We take for granted the heat that keeps us warm in
                the cold winter months, and the cool air that refreshes in the
                summer time. Our professional technicians are certified to
                diagnose and repair many components in your cooling system
                including the radiator, thermostat, water pump, belts and more!
                Green Garage offers a cooling system test procedure designed to
                pinpoint any issues that may exist within this complex system
                and provide solutions.
              </Typography>
              <Typography variant="h5" gutterBottom mb={5} fontWeight="bold">
                Common Issues With Heating & AC Systems
              </Typography>
              <Typography variant="h7" paragraph>
                You'll probably notice that your car's climate control systems
                are malfunctioning when you're driving around Minneapolis and no
                matter how much air your vehicle blows, you can't get warmer or
                cooler. Many issues can prevent your car's heating from working,
                such as:
              </Typography>
              <List sx={{ pl: 4, mb: 2 }}>
                <ListItem
                  sx={{
                    mb: 1,
                    display: "flex",
                    "&::before": { content: '"–"', color: "red", mr: 1 },
                  }}
                >
                  Heating controls clogging or breaking
                </ListItem>
                <ListItem
                  sx={{
                    mb: 1,
                    display: "flex",
                    "&::before": { content: '"–"', color: "red", mr: 1 },
                  }}
                >
                  Insufficient coolant levels
                </ListItem>
                <ListItem
                  sx={{
                    mb: 1,
                    display: "flex",
                    "&::before": { content: '"–"', color: "red", mr: 1 },
                  }}
                >
                  Radiator leakage
                </ListItem>
                <ListItem
                  sx={{
                    mb: 1,
                    display: "flex",
                    "&::before": { content: '"–"', color: "red", mr: 1 },
                  }}
                >
                  Thermostat malfunctioning
                </ListItem>
              </List>
              <Typography variant="h7" paragraph>
                All of these problems can keep your car from warming you up
                during Minnesota's cold winters. Meanwhile, some common problems
                that afflict AC systems in automobiles include:
              </Typography>
              <List sx={{ pl: 4, mb: 2 }}>
                <ListItem
                  sx={{
                    mb: 1,
                    display: "flex",
                    alignItems: "center",
                    "&::before": { content: '"–"', color: "red", mr: 1 },
                  }}
                >
                  Compressor breaking down
                </ListItem>
                <ListItem
                  sx={{
                    mb: 1,
                    display: "flex",
                    alignItems: "center",
                    "&::before": { content: '"–"', color: "red", mr: 1 },
                  }}
                >
                  Condenser clogging or breaking
                </ListItem>
                <ListItem
                  sx={{
                    mb: 1,
                    display: "flex",
                    alignItems: "center",
                    "&::before": { content: '"–"', color: "red", mr: 1 },
                  }}
                >
                  Cooling fans malfunctioning
                </ListItem>
                <ListItem
                  sx={{
                    mb: 1,
                    display: "flex",
                    alignItems: "center",
                    "&::before": { content: '"–"', color: "red", mr: 1 },
                  }}
                >
                  Refrigerant leakage
                </ListItem>
              </List>
              <Typography variant="h7" paragraph>
                Any of these issues can prevent your vehicle from cooling you
                down on a hot summer day. If your HVAC unit breaks down, it's
                important to have it fixed quickly so you don't spend the summer
                sweating and the winter shivering as you drive your car around
                Minneapolis.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mt: 4,
                }}
              >
                <Button
                  variant="contained"
                  color="error"
                  sx={{
                    backgroundColor: "red",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "darkred",
                    },
                    fontSize: "1rem",
                    minWidth: "150px",
                  }}
                  href="/booknow"
                >
                  Book Now
                </Button>
              </Box>
            </CardContent>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default App;
