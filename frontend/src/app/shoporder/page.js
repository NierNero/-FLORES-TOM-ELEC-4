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
  TextField,
  MenuItem,
  Select,
  Button,
  IconButton,
  Divider
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from '../../components/Sidebar';

function App() {
  const [open, setOpen] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [orders, setOrders] = useState([
    { id: 1, customer: 'Ryan Jay Suazo', product: 'Belt Haha', status: 'Shipped', date: '2023-09-20' },
    { id: 2, customer: 'James Mijares', product: 'Tire', status: 'Pending', date: '2023-09-21' },
    { id: 3, customer: 'Luisse Crispe', product: 'Oil Filter', status: 'Delivered', date: '2023-09-18' },
  ]);

  const updateOrderStatus = (id, newStatus) => {
    setOrders(orders.map(order => (order.id === id ? { ...order, status: newStatus } : order)));
  };

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.customer.toLowerCase().includes(searchTerm.toLowerCase())
      || order.product.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter ? order.status === statusFilter : true;
    return matchesSearch && matchesStatus;
  });

  const handleDrawerToggle = () => {
    setOpen(!open);
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
        Order List
      </Typography>
      <Divider/>
      
      <Box display="flex" justifyContent="space-between" mb={2} mt={4}>
        <TextField
          label="Search by Customer or Product"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          fullWidth
          sx={{ marginRight: 2 }}
        />
        <Select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          displayEmpty
          variant="outlined"
          sx={{ width: '200px' }}
        >
          <MenuItem value="">All Statuses</MenuItem>
          <MenuItem value="Shipped">Shipped</MenuItem>
          <MenuItem value="Pending">Pending</MenuItem>
          <MenuItem value="Delivered">Delivered</MenuItem>
        </Select>
      </Box>

      <TableContainer component={Paper} sx={{ mb: 3, boxShadow: 3, borderRadius: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ bgcolor: '#3f51b5', color: 'white', fontWeight: 'bold' }}>Order ID</TableCell>
              <TableCell sx={{ bgcolor: '#3f51b5', color: 'white', fontWeight: 'bold' }}>Customer</TableCell>
              <TableCell sx={{ bgcolor: '#3f51b5', color: 'white', fontWeight: 'bold' }}>Product</TableCell>
              <TableCell sx={{ bgcolor: '#3f51b5', color: 'white', fontWeight: 'bold' }}>Status</TableCell>
              <TableCell sx={{ bgcolor: '#3f51b5', color: 'white', fontWeight: 'bold' }}>Date</TableCell>
              <TableCell sx={{ bgcolor: '#3f51b5', color: 'white', fontWeight: 'bold' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredOrders.map(order => (
              <TableRow key={order.id} sx={{ '&:nth-of-type(odd)': { bgcolor: '#e3f2fd' } }}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.product}</TableCell>
                <TableCell>{order.status}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color={order.status === 'Pending' ? 'success' : 'primary'} // Changed to green for Pending
                    onClick={() => updateOrderStatus(order.id, order.status === 'Pending' ? 'Shipped' : 'Delivered')}
                  >
                    {order.status === 'Pending' ? 'Ship Order' : 'Deliver Order'}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default App;
