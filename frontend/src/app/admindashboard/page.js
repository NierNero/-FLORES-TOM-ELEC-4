'use client'
import React, { useState } from 'react';
import {
  Box,
  Typography,
  IconButton,
  Divider,
  Grid,
  Card,
  CardContent,
  CardHeader,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AdminSidebar from "../../components/AdminSidebar";

function Admin() {
    const [open, setOpen] = useState(false);
    const handleDrawerToggle = () => setOpen(!open);

    const overviewMetrics = {
        shopOwnerRequest: 10,
        totalRevenue: 5000,
        totalUsers: 300,
        totalShopOwners: 10,
        totalAdmins: 5,
    };

    return (
        <>
            <AdminSidebar open={open} handleDrawerToggle={handleDrawerToggle} />
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    bgcolor: "#f0f4f8",
                    p: 3,
                    transition: "margin 0.3s",
                    marginLeft: open ? "240px" : "0",
                    minHeight: '100vh',
                }}
            >
                {!open && (
                    <IconButton onClick={handleDrawerToggle} sx={{ color: "#1976d2" }}>
                        <MenuIcon />
                    </IconButton>
                )}
                <Typography variant="h4" component="h1" sx={{ mb: 2, color: "#333", fontWeight: 'bold' }}>
                    Dashboard
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <Grid container spacing={3}>
                    {Object.entries(overviewMetrics).map(([key, value]) => (
                        <Grid item xs={12} sm={6} md={3} key={key}>
                            <Card sx={{ bgcolor: '#fff', boxShadow: 3, display: 'flex', flexDirection: 'column', height: '100%' }}>
                                <CardHeader 
                                    title={key.replace(/([A-Z])/g, ' $1').toUpperCase()} 
                                    sx={{ textAlign: 'center', bgcolor: '#1976d2', color: '#fff', borderTopLeftRadius: 2, borderTopRightRadius: 2 }} 
                                />
                                <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexGrow: 1 }}>
                                    <Typography variant="h5" sx={{ color: '#1976d2' }}>{value}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    );
}

export default Admin;
