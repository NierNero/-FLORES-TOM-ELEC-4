'use client';
import React, { useState } from 'react';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Divider,
  Button,
  Checkbox,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from '../../components/Sidebar';

function CanceledOrders() {
  const [open, setOpen] = useState(true);
  const [canceledOrders, setCanceledOrders] = useState([
    { id: 1, customer: 'Ryan Mijares', product: 'Belt', date: '2023-09-15', reason: 'Changed mind' },
    { id: 2, customer: 'James Detecio', product: 'Tire', date: '2023-09-16', reason: 'Found a better price' },
  ]);
  const [selectedOrders, setSelectedOrders] = useState(new Set());

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleSelectAll = (event) => {
    const checked = event.target.checked;
    const newSelectedOrders = checked
      ? new Set(canceledOrders.map(order => order.id))
      : new Set();
    setSelectedOrders(newSelectedOrders);
  };

  const handleDeleteSelected = () => {
    const remainingOrders = canceledOrders.filter(order => !selectedOrders.has(order.id));
    setCanceledOrders(remainingOrders);
    setSelectedOrders(new Set());
  };

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        bgcolor: "white",
        p: 3,
        transition: "margin 0.3s",
        marginLeft: open ? "240px" : "0",
        minHeight: "100vh"
      }}
    >
      <Sidebar open={open} handleDrawerToggle={handleDrawerToggle} />
      {!open && (
        <IconButton onClick={handleDrawerToggle} sx={{ color: "blue", mb: 2 }}>
          <MenuIcon />
        </IconButton>
      )}

      <Typography variant="h4" gutterBottom color='blue'>
        Canceled Orders
      </Typography>
      <Divider />

      <Button
        variant="contained"
        color='error'
        onClick={handleDeleteSelected}
        disabled={selectedOrders.size === 0}
        sx={{ mt: 2 }}
      >
        Delete Selected
      </Button>

      <TableContainer component={Paper} sx={{ mb: 3, boxShadow: 3, borderRadius: 2, mt: 4 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  checked={selectedOrders.size === canceledOrders.length}
                  onChange={handleSelectAll}
                />
              </TableCell>
              <TableCell sx={{ bgcolor: '#3f51b5', color: 'white', fontWeight: 'bold' }}>Order ID</TableCell>
              <TableCell sx={{ bgcolor: '#3f51b5', color: 'white', fontWeight: 'bold' }}>Customer</TableCell>
              <TableCell sx={{ bgcolor: '#3f51b5', color: 'white', fontWeight: 'bold' }}>Product</TableCell>
              <TableCell sx={{ bgcolor: '#3f51b5', color: 'white', fontWeight: 'bold' }}>Date</TableCell>
              <TableCell sx={{ bgcolor: '#3f51b5', color: 'white', fontWeight: 'bold' }}>Reason</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {canceledOrders.map(order => (
              <TableRow key={order.id} sx={{ '&:nth-of-type(odd)': { bgcolor: '#e3f2fd' } }}>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedOrders.has(order.id)}
                    onChange={() => {
                      const newSelectedOrders = new Set(selectedOrders);
                      newSelectedOrders.has(order.id) ? newSelectedOrders.delete(order.id) : newSelectedOrders.add(order.id);
                      setSelectedOrders(newSelectedOrders);
                    }}
                  />
                </TableCell>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.product}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>{order.reason}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default CanceledOrders;
