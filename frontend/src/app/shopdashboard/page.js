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
import { LinearProgress } from "@mui/material";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

function App() {
  const [open, setOpen] = useState(true);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  // Sample data for metrics and charts
  const metrics = {
    totalRepairs: 150,
    averageRepairTime: '2.5 hrs',
    customerSatisfaction: 85,
    totalRevenue: 25000,
    pendingInvoices: 5,
  };

  const employeePerformance = [
    { name: 'Alice', repairs: 60 },
    { name: 'Bob', repairs: 50 },
    { name: 'Charlie', repairs: 40 },
  ];

  const revenueData = [
    { name: 'Tire Repair', value: 15000 },
    { name: 'Aircon Repair', value: 10000 },
    { name: 'Belt Repair', value: 5000 },
    { name: 'Engine Repair', value: 2000 },
  ];

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
        }}
      >
        {!open && ( 
          <IconButton onClick={handleDrawerToggle} sx={{ color: "#1976d2" }}>
            <MenuIcon />
          </IconButton>
        )}
        <Typography variant="h4" component="h1" sx={{ mb: 2, color: "blue" }}>
          Dashboard Overview
        </Typography>
        <Divider sx={{ mb: 2 }} />

        <Grid container spacing={3} mt={2}>
          {/* Key Metrics */}
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ backgroundColor: "#fff3e0", border: "1px solid #ffb300" }}>
              <CardContent>
                <Typography variant="h6" sx={{ color: "#ff6f20" }}>Total Repairs Completed</Typography>
                <Typography variant="h5" sx={{ fontWeight: "bold", color: "#ff9800" }}>{metrics.totalRepairs}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ backgroundColor: "#e1f5fe", border: "1px solid #0288d1" }}>
              <CardContent>
                <Typography variant="h6" sx={{ color: "#0277bd" }}>Average Repair Time</Typography>
                <Typography variant="h5" sx={{ fontWeight: "bold", color: "#039be5" }}>{metrics.averageRepairTime}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ backgroundColor: "#e8f5e9", border: "1px solid #43a047" }}>
              <CardContent>
                <Typography variant="h6" sx={{ color: "#388e3c" }}>Customer Satisfaction Score</Typography>
                <LinearProgress variant="determinate" value={metrics.customerSatisfaction} sx={{ bgcolor: "#a5d6a7" }} />
                <Typography variant="h5" sx={{ fontWeight: "bold", color: "#4caf50" }}>{metrics.customerSatisfaction}%</Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Revenue Metrics */}
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ backgroundColor: "#fffde7", border: "1px solid #ffeb3b" }}>
              <CardContent>
                <Typography variant="h6" sx={{ color: "#fbc02d" }}>Total Revenue</Typography>
                <Typography variant="h5" sx={{ fontWeight: "bold", color: "#f9a825" }}>${metrics.totalRevenue.toLocaleString()}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ backgroundColor: "#fce4ec", border: "1px solid #d81b60" }}>
              <CardContent>
                <Typography variant="h6" sx={{ color: "#d81b60" }}>Pending Invoices</Typography>
                <Typography variant="h5" sx={{ fontWeight: "bold", color: "#c2185b" }}>{metrics.pendingInvoices}</Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Revenue Breakdown */}
          <Grid item xs={12} md={6}>
            <Card sx={{ backgroundColor: "#ffe0b2", border: "1px solid #ff9800" }}>
              <CardContent>
                <Typography variant="h6" sx={{ color: "#ff5722" }}>Revenue Breakdown</Typography>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={revenueData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      dataKey="value"
                    >
                      {revenueData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={['#ff5722', '#ffc107', '#8bc34a','blue'][index]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </Grid>

          {/* Bar Chart for Employee Performance */}
          <Grid item xs={12} md={6}>
            <Card sx={{ backgroundColor: "#bbdefb", border: "1px solid #42a5f5" }}>
              <CardContent>
                <Typography variant="h6" sx={{ color: "#0d47a1" }}>Employee Repairs</Typography>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={employeePerformance}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="repairs" fill="#42a5f5" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default App;
