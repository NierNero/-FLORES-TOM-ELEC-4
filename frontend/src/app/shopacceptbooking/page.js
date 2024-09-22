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
  Divider,
  IconButton,
  Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from '../../components/Sidebar';

function Bookings() {
  const [open, setOpen] = useState(true);
  const [view, setView] = useState('accepted'); // State to toggle between views

  const acceptedBookings = [
    { id: 1, customer: 'Ryan Mijares', carname:'Toyota Supra 2027', date: '2023-09-15', service: 'Belt Repair', mechanic: 'Reyzl Tom Flores', status: 'Accepted' },
    { id: 2, customer: 'James Detecio', carname:'Toyota Supra KUltra', date: '2023-09-16', service: 'Tire Repair', mechanic: 'Reyzl Tom Flores', status: 'Accepted' },
  ];

  const canceledBookings = [
    { id: 1, customer: 'Sarah Lee', carname:'Toyota Supra 2027', date: '2023-09-17', service: 'Aircon Repair', mechanic: '---', reason: 'Changed mind' },
    { id: 2, customer: 'Tom Brown', carname:'Toyota Supra 2027', date: '2023-09-18', service: 'Tire Repair', mechanic: '---', reason: 'Found a better price' },
  ];

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
        Accepted/Canceled
      </Typography>
      <Divider />

      <Button 
        variant={view === 'accepted' ? 'contained' : 'outlined'} 
        onClick={() => setView('accepted')} 
        sx={{ mr: 2, mt: 2 }}
      >
        Accepted Bookings
      </Button>
      <Button 
    variant={view === 'canceled' ? 'contained' : 'outlined'} 
    color={view === 'canceled' ? 'error' : 'outlined'} 
    onClick={() => setView('canceled')} 
    sx={{ mt: 2 }}
>
    Canceled Bookings
</Button>


      <TableContainer component={Paper} sx={{ mb: 3, boxShadow: 3, borderRadius: 2, mt: 4 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ bgcolor: '#3f51b5', color: 'white', fontWeight: 'bold' }}>Booking ID</TableCell>
              <TableCell sx={{ bgcolor: '#3f51b5', color: 'white', fontWeight: 'bold' }}>Customer</TableCell>
              <TableCell sx={{ bgcolor: '#3f51b5', color: 'white', fontWeight: 'bold' }}>Car Name</TableCell>
              <TableCell sx={{ bgcolor: '#3f51b5', color: 'white', fontWeight: 'bold' }}>Date</TableCell>
              <TableCell sx={{ bgcolor: '#3f51b5', color: 'white', fontWeight: 'bold' }}>Service</TableCell>
              <TableCell sx={{ bgcolor: '#3f51b5', color: 'white', fontWeight: 'bold' }}>Mechanic</TableCell>
              {view === 'canceled' && (
                <TableCell sx={{ bgcolor: '#3f51b5', color: 'white', fontWeight: 'bold' }}>Reason</TableCell>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {(view === 'accepted' ? acceptedBookings : canceledBookings).map(booking => (
              <TableRow key={booking.id} sx={{ '&:nth-of-type(odd)': { bgcolor: '#e3f2fd' } }}>
                <TableCell>{booking.id}</TableCell>
                <TableCell>{booking.customer}</TableCell>
                <TableCell>{booking.carname}</TableCell>
                <TableCell>{booking.date}</TableCell>
                <TableCell>{booking.service}</TableCell>
                <TableCell>{booking.mechanic}</TableCell>
                {view === 'canceled' && <TableCell>{booking.reason}</TableCell>}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default Bookings;
