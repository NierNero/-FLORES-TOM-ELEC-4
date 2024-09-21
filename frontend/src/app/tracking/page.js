'use client';
import React, { useState } from 'react';
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Divider,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from '@mui/material';
import Sidebar from '../../components/Sidebar';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';

function DeliveryTracking({ updateDeliveryStatus }) {
  const [deliveries, setDeliveries] = useState([
    { id: 1, orderId: 1, trackingNumber: 'TRK123456', status: 'In Transit', expectedDelivery: '2023-09-25' },
    { id: 2, orderId: 2, trackingNumber: 'TRK789012', status: 'Shipped', expectedDelivery: '2023-09-28' },
  ]);

  const [open, setOpen] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const filteredDeliveries = deliveries.filter(delivery => {
    const matchesSearch = delivery.trackingNumber.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter ? delivery.status === statusFilter : true;
    return matchesSearch && matchesStatus;
  });

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
        Delivery Tracking
      </Typography>
      <Divider />

      <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ mt: 2 }}>
        <TextField
          label="Search by Tracking Number"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          fullWidth
          sx={{ marginRight: 2 }}
        />
          <Select
          value={statusFilter}
          displayEmpty
          variant="outlined"
          sx={{ width: '200px' }}
        >
            <MenuItem value="">
              <em>All Statuses</em>
            </MenuItem>
            <MenuItem value="In Transit">In Transit</MenuItem>
            <MenuItem value="Shipped">Shipped</MenuItem>
            <MenuItem value="Delivered">Delivered</MenuItem>
          </Select>
      </Box>

      <TableContainer component={Paper} sx={{ mt: 4 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ bgcolor: '#3f51b5', color: 'white', fontWeight: 'bold' }}>Tracking Number</TableCell>
              <TableCell sx={{ bgcolor: '#3f51b5', color: 'white', fontWeight: 'bold' }}>Order ID</TableCell>
              <TableCell sx={{ bgcolor: '#3f51b5', color: 'white', fontWeight: 'bold' }}>Status</TableCell>
              <TableCell sx={{ bgcolor: '#3f51b5', color: 'white', fontWeight: 'bold' }}>Expected Delivery</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredDeliveries.map(delivery => (
              <TableRow key={delivery.id} sx={{ '&:nth-of-type(odd)': { bgcolor: '#e3f2fd' } }}>
                <TableCell>{delivery.trackingNumber}</TableCell>
                <TableCell>{delivery.orderId}</TableCell>
                <TableCell>{delivery.status}</TableCell>
                <TableCell>{delivery.expectedDelivery}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default DeliveryTracking;
