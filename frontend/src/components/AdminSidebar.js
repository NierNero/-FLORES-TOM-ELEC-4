'use client';
import React, { useState, useEffect } from "react";
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
  Person as PersonIcon,
  ListAlt,
  LocalShipping as TrackingIcon,
  Cancel as CanceledIcon,
  MonetizationOn as RefundIcon,
} from "@mui/icons-material";
import BuildIcon from "@mui/icons-material/Build"; 
import InventoryIcon from "@mui/icons-material/Inventory";
import MessageIcon from '@mui/icons-material/Message'; 

const AdminSidebar = ({ open, handleDrawerToggle }) => {
  const [anchorEl, setAnchorEl] = useState(false);
  const [anchorEl1, setAnchorEl1] = useState(false);
  

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

  useEffect(() => {
    setAnchorEl(null);
    setAnchorEl1(null);
  }, []);

  const openPopover = Boolean(anchorEl);
  const openPopover1 = Boolean(anchorEl1);

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={handleDrawerToggle}
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
        <span style={{ fontSize: '1.2em', }}>WelcomeAdmin!</span>
      </Box>
      <Divider sx={{ bgcolor: "white" }} />

      <Button
        sx={{
          display: "flex",
          alignItems: "center",
          color: "white",
          mt: 2,
          ml: '5px',
          justifyContent: 'flex-start',
          "&:hover": { bgcolor: "#3A3A4D", opacity: 0.8 },
          width: '100%',
        }}
        href="/admindashboard"
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
          ml: '5px',
          justifyContent: 'flex-start',
          "&:hover": { bgcolor: "#3A3A4D", opacity: 0.8 },
          width: '100%',
        }}
        href="/users"
      >
        <PersonIcon sx={{ mr: 1 }} />
        USers
      </Button>

      <Button
        sx={{
          display: "flex",
          alignItems: "center",
          color: "white",
          mt: 2,
          ml: '5px',
          justifyContent: 'flex-start',
          "&:hover": { bgcolor: "#3A3A4D", opacity: 0.8 },
          width: '100%',
        }}
        href="/shopowner"
      >
        <PersonIcon sx={{ mr: 1 }} />
        Shop Owner
      </Button>
      <Divider sx={{ bgcolor: "white", mt: 2 }} />

      <Button
        sx={{
          display: "flex",
          alignItems: "center",
          color: "white",
          mt: 2,
          ml: '5px',
          justifyContent: 'flex-start',
          "&:hover": { bgcolor: "#3A3A4D", opacity: 0.8 },
          width: '100%',
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
          ml: '5px',
          justifyContent: 'flex-start',
          "&:hover": { bgcolor: "#3A3A4D", opacity: 0.8 },
          width: '100%',
        }}
      >
        <ContactMailIcon sx={{ mr: 1 }} />
        Contact
      </Button>
    </Drawer>
  );
};

export default AdminSidebar;
