'use client';
import React, { useState } from "react";
import {
  Drawer,
  Divider,
  Box,
  IconButton,
  Avatar,
  Popover,
  Button,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  ContactMail as ContactMailIcon,
  Settings as SettingsIcon,
  Person,
} from "@mui/icons-material";
import BuildIcon from "@mui/icons-material/Build"; 
import InventoryIcon from "@mui/icons-material/Inventory";

const Sidebar = ({ open, handleDrawerToggle }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorEl1, setAnchorEl1] = useState(null);

  const handleOrderMenuToggle = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleBookingMenuToggle = (event) => {
    setAnchorEl1(anchorEl1 ? null : event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setAnchorEl1(null);
  };

  const openPopover = Boolean(anchorEl);
  const openPopover1 = Boolean(anchorEl1);

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={open}
      sx={{
        width: 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 240,
          bgcolor: "#1E1E2F",
          color: "white",
          boxSizing: "border-box",
          border: "none",
          pt: 2,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 2,
          mb: 2,
        }}
      >
        <a href="/shopprofile" style={{ textDecoration: "none", color: "inherit" }}>
          <Avatar src="/profile.png" sx={{ cursor: "pointer" }} />
        </a>
        <span style={{ fontWeight: 'bold', fontSize: '1.2em' }}>Dashboard</span>
        <IconButton onClick={handleDrawerToggle} sx={{ color: "white" }}>
          <MenuIcon />
        </IconButton>
      </Box>
      <Divider sx={{ bgcolor: "white" }} />

      <Button
        sx={{
          display: "flex",
          alignItems: "center",
          color: "white",
          mt: 2,
          "&:hover": { bgcolor: "#3A3A4D", opacity: 0.8 }
        }}
        href="/shopdashboard"
      >
        <HomeIcon sx={{ mr: 1 }} />
        Dashboard
      </Button>

      <Button
        sx={{
          display: "flex",
          alignItems: "center",
          color: "white",
          mt: 2,
          "&:hover": { bgcolor: "#3A3A4D", opacity: 0.8 }
        }}
        onClick={handleOrderMenuToggle}
      >
        <Person sx={{ mr: 1 }} />
        Customer Order
      </Button>

      <Popover
        open={openPopover}
        anchorEl={anchorEl}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        sx={{
          "& .MuiPopover-paper": {
            bgcolor: "white",
            color: "black",
            borderRadius: 4,
            mt: 1,
            width: '200px'
          }
        }}
      >
        <Box sx={{ p: 1 }}>
          <Button
            onClick={handleMenuClose}
            component="a"
            href="/shoporder"
            sx={{ color: "black", width: "100%", justifyContent: "flex-start", mb: 1 }}
          >
            Order Status
          </Button>
          <Button
            onClick={handleMenuClose}
            component="a"
            href="/tracking"
            sx={{ color: "black", width: "100%", justifyContent: "flex-start", mb: 1 }}
          >
            Delivery Tracking
          </Button>
          <Button
            onClick={handleMenuClose}
            component="a"
            href="/gicancel"
            sx={{ color: "black", width: "100%", justifyContent: "flex-start", mb: 1 }}
          >
            Canceled
          </Button>
          <Button
            onClick={handleMenuClose}
            component="a"
            href="/refund"
            sx={{ color: "black", width: "100%", justifyContent: "flex-start" }}
          >
            Return/Refund
          </Button>
        </Box>
      </Popover>

      <Button
        sx={{
          display: "flex",
          alignItems: "center",
          color: "white",
          mt: 2,
          "&:hover": { bgcolor: "#3A3A4D", opacity: 0.8 }
        }}
        onClick={handleBookingMenuToggle}
      >
        <Person sx={{ mr: 1 }} />
        Customer Booking
      </Button>

      <Popover
        open={openPopover1}
        anchorEl={anchorEl1}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        sx={{
          "& .MuiPopover-paper": {
            bgcolor: "white",
            color: "black",
            borderRadius: 4,
            mt: 1,
            width: '200px'
          }
        }}
      >
        <Box sx={{ p: 1 }}>
          <Button
            onClick={handleMenuClose}
            component="a"
            href="/bookingstatus"
            sx={{ color: "black", width: "100%", justifyContent: "flex-start", mb: 1 }}
          >
            Booking Status
          </Button>
          <Button
            onClick={handleMenuClose}
            component="a"
            href="/shopacceptbooking"
            sx={{ color: "black", width: "100%", justifyContent: "flex-start", mb: 1 }}
          >
            Accepted Booking
          </Button>
          <Button
            onClick={handleMenuClose}
            component="a"
            href="/shopcancel"
            sx={{ color: "black", width: "100%", justifyContent: "flex-start" }}
          >
            Canceled
          </Button>
        </Box>
      </Popover>

      <Button
        sx={{
          display: "flex",
          alignItems: "center",
          color: "white",
          mt: 2,
          "&:hover": { bgcolor: "#3A3A4D", opacity: 0.8 }
        }}
        href="/shopservice"
      >
        <BuildIcon sx={{ mr: 1 }} />
        Services
      </Button>

      <Button
        sx={{
          display: "flex",
          alignItems: "center",
          color: "white",
          mt: 2,
          "&:hover": { bgcolor: "#3A3A4D", opacity: 0.8 }
        }}
        href="/inventory"
      >
        <InventoryIcon sx={{ mr: 1 }} />
        Inventory
      </Button>

      <Divider sx={{ bgcolor: "white", mt: 2 }} />

      <Button
        sx={{
          display: "flex",
          alignItems: "center",
          color: "white",
          mt: 2,
          "&:hover": { bgcolor: "#3A3A4D", opacity: 0.8 }
        }}
      >
        <SettingsIcon sx={{ mr: 1 }} />
        About
      </Button>

      <Button
        sx={{
          display: "flex",
          alignItems: "center",
          color: "white",
          mt: 2,
          "&:hover": { bgcolor: "#3A3A4D", opacity: 0.8 }
        }}
      >
        <ContactMailIcon sx={{ mr: 1 }} />
        Contact
      </Button>
    </Drawer>
  );
};

export default Sidebar;
