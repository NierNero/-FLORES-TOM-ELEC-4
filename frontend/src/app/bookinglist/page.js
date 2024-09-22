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
  Button,
  Divider,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from '../../components/Sidebar';

function BookingList() {
  const [open, setOpen] = useState(true);
  const [bookings, setBookings] = useState([
    { id: 1, customer: 'Ryan Mijares', date: '2023-09-15', service: 'Belt Repair', status: 'Confirmed' },
    { id: 2, customer: 'James Detecio', date: '2023-09-16', service: 'Tire Repair', status: 'Pending' },
    { id: 3, customer: 'Sarah Lee', date: '2023-09-17', service: 'Aircon Repair', status: 'Canceled' },
  ]);
  const [filteredBookings, setFilteredBookings] = useState(bookings);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleSearchChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    filterBookings(term, statusFilter);
  };

  const handleStatusChange = (event) => {
    const status = event.target.value;
    setStatusFilter(status);
    filterBookings(searchTerm, status);
  };

  const filterBookings = (term, status) => {
    let newBookings = bookings;
    if (term) {
      newBookings = newBookings.filter(b => b.customer.toLowerCase().includes(term.toLowerCase()));
    }
    if (status) {
      newBookings = newBookings.filter(b => b.status === status);
    }
    setFilteredBookings(newBookings);
  };

  const handleConfirm = (id) => {
    setBookings(bookings.map(b => (b.id === id ? { ...b, status: 'Confirmed' } : b)));
    filterBookings(searchTerm, statusFilter);
  };

  const handleCancel = (id) => {
    setBookings(bookings.map(b => (b.id === id ? { ...b, status: 'Canceled' } : b)));
    filterBookings(searchTerm, statusFilter);
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
        Customer Booking List
      </Typography>
      <Divider />

      <Box display="flex" justifyContent="space-between" mb={2} mt={4}>
      <TextField
        label="Search by Customer"
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
          fullWidth
          sx={{ marginRight: 2 }}
      />

      <FormControl variant="outlined">
        <InputLabel>Service</InputLabel>
        <Select
          value={statusFilter}
          onChange={handleStatusChange}
          label="Status"
          displayEmpty
          variant="outlined"
          sx={{ width: '110px' }}
        >
          <MenuItem value="Confirmed">Belt Repair</MenuItem>
          <MenuItem value="Pending">Tire Repair</MenuItem>
          <MenuItem value="Canceled">AirCon Repair</MenuItem>
        </Select>
      </FormControl>
      </Box>

      <TableContainer component={Paper} sx={{ mb: 3, boxShadow: 3, borderRadius: 2, mt: 4 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ bgcolor: '#3f51b5', color: 'white', fontWeight: 'bold' }}>Booking ID</TableCell>
              <TableCell sx={{ bgcolor: '#3f51b5', color: 'white', fontWeight: 'bold' }}>Customer</TableCell>
              <TableCell sx={{ bgcolor: '#3f51b5', color: 'white', fontWeight: 'bold' }}>Date</TableCell>
              <TableCell sx={{ bgcolor: '#3f51b5', color: 'white', fontWeight: 'bold' }}>Service</TableCell>
              <TableCell sx={{ bgcolor: '#3f51b5', color: 'white', fontWeight: 'bold' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredBookings.map(booking => (
              <TableRow key={booking.id} sx={{ '&:nth-of-type(odd)': { bgcolor: '#e3f2fd' } }}>
                <TableCell>{booking.id}</TableCell>
                <TableCell>{booking.customer}</TableCell>
                <TableCell>{booking.date}</TableCell>
                <TableCell>{booking.service}</TableCell>
                <TableCell>
                  <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={() => handleConfirm(booking.id)} 
                    disabled={booking.status === 'Confirmed'}
                  >
                    Confirm
                  </Button>
                  <Button 
                    variant="outlined" 
                    color="error" 
                    onClick={() => handleCancel(booking.id)} 
                    disabled={booking.status === 'Canceled'} 
                    sx={{ ml: 1 }}
                  >
                    Cancel
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

export default BookingList;
