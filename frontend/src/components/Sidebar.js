// Sidebar.js
import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Box,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  Info as InfoIcon,
  ContactMail as ContactMailIcon,
  Settings as SettingsIcon,
} from "@mui/icons-material";
import BuildIcon from "@mui/icons-material/Build"; 
import InventoryIcon from "@mui/icons-material/Inventory";

const Sidebar = ({ open, handleDrawerToggle }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

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
          bgcolor: "#3f51b5",
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
        <a
          href="/shopprofile"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Avatar
            src="/profile.png"
            sx={{ cursor: "pointer" }}
            onClick={handleMenuOpen}
          />
        </a>
        <span>Dashboard</span>
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
          mt: "15px",
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
          mt: "15px",
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
          mt: "15px",
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
          mt: "15px",
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
          mt: "15px",
        }}
      >
        <ContactMailIcon sx={{ mr: 1 }} />
        Contact
      </Button>
    </Drawer>
  );
};

export default Sidebar;
