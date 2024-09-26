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

const Sidebar = ({ open, handleDrawerToggle }) => {
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
        <span style={{ fontSize: '1.2em', marginRight: '70px' }}>Welcome!</span>
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
          ml: '5px',
          justifyContent: 'flex-start',
          "&:hover": { bgcolor: "#3A3A4D", opacity: 0.8 },
          width: '100%',
        }}
        onClick={handleOrderMenuToggle}
      >
        <PersonIcon sx={{ mr: 1 }} />
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
            href="/shoporderlist"
            sx={{ color: "black", width: "100%", justifyContent: "flex-start", mb: 1 }}
          >
            <ListAlt sx={{ mr: 1 }} />
            Order List
          </Button>
          <Button
            onClick={handleMenuClose}
            component="a"
            href="/tracking"
            sx={{ color: "black", width: "100%", justifyContent: "flex-start", mb: 1 }}
          >
            <TrackingIcon sx={{ mr: 1 }} />
            Delivery Tracking
          </Button>
          <Button
            onClick={handleMenuClose}
            component="a"
            href="/gicancel"
            sx={{ color: "black", width: "100%", justifyContent: "flex-start", mb: 1 }}
          >
            <CanceledIcon sx={{ mr: 1 }} />
            Canceled
          </Button>
          <Button
            onClick={handleMenuClose}
            component="a"
            href="/refund"
            sx={{ color: "black", width: "100%", justifyContent: "flex-start" }}
          >
            <RefundIcon sx={{ mr: 1 }} />
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
          ml: '5px',
          justifyContent: 'flex-start',
          "&:hover": { bgcolor: "#3A3A4D", opacity: 0.8 },
          width: '100%',
        }}
        onClick={handleBookingMenuToggle}
      >
        <PersonIcon sx={{ mr: 1 }} />
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
            width: '230px'
          }
        }}
      >
        <Box sx={{ p: 1 }}>
          <Button
            onClick={handleMenuClose}
            component="a"
            href="/bookinglist"
            sx={{ color: "black", width: "100%", justifyContent: "flex-start", mb: 1 }}
          >
            <ListAlt sx={{ mr: 1 }} />
            Booking List
          </Button>
          <Button
            onClick={handleMenuClose}
            component="a"
            href="/shopacceptbooking"
            sx={{ color: "black", width: "100%", justifyContent: "flex-start", mb: 1 }}
          >
            <PersonIcon sx={{ mr: 1 }} />
            Accepted/Canceled
          </Button>
        </Box>
      </Popover>

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
          ml: '5px',
          justifyContent: 'flex-start',
          "&:hover": { bgcolor: "#3A3A4D", opacity: 0.8 },
          width: '100%',
        }}
        href="/inventory"
      >
        <InventoryIcon sx={{ mr: 1 }} />
        Inventory
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
        href="/customermsg"
      >
        <MessageIcon sx={{ mr: 1 }} />
        Customer Messages
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

export default Sidebar;
