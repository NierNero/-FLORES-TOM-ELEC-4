'use client';
import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Grid,
  Paper,
  InputAdornment,
  Button,
  Avatar,
  IconButton,
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
  Menu as MenuIcon,
} from '@mui/icons-material';
import Sidebar from '../../components/Sidebar'; // Ensure this path is correct

function ShopProfilePage() {
  const [open, setOpen] = useState(false); // State for sidebar toggle
  const [editing, setEditing] = useState(false);
  const [profilePic, setProfilePic] = useState("/profile.png"); // Default profile picture

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleEditClick = () => {
    setEditing(prevEditing => !prevEditing);
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
      <Sidebar open={open} handleDrawerToggle={handleDrawerToggle} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: 'white',
          p: 3,
          transition: 'margin 0.3s',
          marginLeft: open ? '240px' : '0', // Adjust margin based on sidebar state
          height: '100vh',
        }}
      >
        {!open && (
          <IconButton onClick={handleDrawerToggle} sx={{ color: 'blue' }}>
            <MenuIcon />
          </IconButton>
        )}
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
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
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
            <Grid item xs={12} sm={6} md={4}>
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
            <Grid item xs={12} sm={6} md={4}>
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
            <Grid item xs={12} sm={6} md={4}>
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
            <Grid item xs={12} sm={6} md={4}>
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
            <Grid item xs={12} md={4}>
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
            <Grid item xs={12} sm={6} md={4}>
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
            <Grid item xs={12} sm={6} md={4}>
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
            <Grid item xs={12} sm={6} md={4}>
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
                  readOnly: !editing
                }}
                InputLabelProps={{
                  shrink: true,
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
}

export default ShopProfilePage;
