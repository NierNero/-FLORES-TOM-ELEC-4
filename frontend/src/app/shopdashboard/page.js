"use client";
import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Divider,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "../../components/Sidebar"; // Import the Sidebar component

function App() {
  const [open, setOpen] = useState(true);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      {/* Sidebar */}
      <Sidebar open={open} handleDrawerToggle={handleDrawerToggle} />

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "white",
          p: 3,
          transition: "margin 0.3s",
          marginLeft: open ? "240px" : "0", 
          height: "100vh", 
        }}
      >
        {!open && ( 
          <IconButton onClick={handleDrawerToggle} sx={{ color: "blue" }}>
            <MenuIcon />
          </IconButton>
        )}
        <Typography variant="h4" component="h1" sx={{ mb: 2, color: "black" }}>
          Dashboard Overview
        </Typography>
        <Divider />
        <Grid container spacing={3} mt={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Overview</Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  This section provides an overview of the current status.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Statistics</Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Detailed statistics and analytics are displayed here.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Recent Activity</Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Review recent activities and updates in this section.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default App;
