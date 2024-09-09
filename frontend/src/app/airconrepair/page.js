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
  List,
  ListItem,
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
                  href="/booking"
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
