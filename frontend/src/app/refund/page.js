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

function ReturnRefund() {
  const [open, setOpen] = useState(true);
  const [requests, setRequests] = useState([
    { id: 1, customer: 'Ryan Mijares', orderId: '1001', reason: 'Defective item', status: 'Pending' },
    { id: 2, customer: 'James Detecio', orderId: '1002', reason: 'Wrong item sent', status: 'Pending' },
    { id: 3, customer: 'Sarah Lee', orderId: '1003', reason: 'Changed mind', status: 'Approved' },
    { id: 4, customer: 'Tom Chen', orderId: '1004', reason: 'Defective item', status: 'Denied' },
  ]);
  const [filteredRequests, setFilteredRequests] = useState(requests);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleApprove = (id) => {
    setRequests(requests.map(req => (req.id === id ? { ...req, status: 'Approved' } : req)));
    filterRequests(searchTerm, statusFilter);
  };

  const handleDeny = (id) => {
    setRequests(requests.map(req => (req.id === id ? { ...req, status: 'Denied' } : req)));
    filterRequests(searchTerm, statusFilter);
  };

  const handleSearchChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    filterRequests(term, statusFilter);
  };

  const handleStatusChange = (event) => {
    const status = event.target.value;
    setStatusFilter(status);
    filterRequests(searchTerm, status);
  };

  const filterRequests = (term, status) => {
    let newRequests = requests;
    if (term) {
      newRequests = newRequests.filter(req => req.customer.toLowerCase().includes(term.toLowerCase()) || req.orderId.includes(term));
    }
    if (status) {
      newRequests = newRequests.filter(req => req.status === status);
    }
    setFilteredRequests(newRequests);
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
        Return/Refund Requests
      </Typography>
      <Divider />

      <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ mt: 2 }}>
      <TextField
        label="Search"
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
          <MenuItem value="">All Status</MenuItem>
          <MenuItem value="Pending">Pending</MenuItem>
          <MenuItem value="Approved">Approved</MenuItem>
          <MenuItem value="Denied">Denied</MenuItem>
        </Select>
        </Box>

      <TableContainer component={Paper} sx={{ mb: 3, boxShadow: 3, borderRadius: 2, mt: 4 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ bgcolor: '#3f51b5', color: 'white', fontWeight: 'bold' }}>Request ID</TableCell>
              <TableCell sx={{ bgcolor: '#3f51b5', color: 'white', fontWeight: 'bold' }}>Customer</TableCell>
              <TableCell sx={{ bgcolor: '#3f51b5', color: 'white', fontWeight: 'bold' }}>Order ID</TableCell>
              <TableCell sx={{ bgcolor: '#3f51b5', color: 'white', fontWeight: 'bold' }}>Reason</TableCell>
              <TableCell sx={{ bgcolor: '#3f51b5', color: 'white', fontWeight: 'bold' }}>Status</TableCell>
              <TableCell sx={{ bgcolor: '#3f51b5', color: 'white', fontWeight: 'bold' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRequests.map(req => (
              <TableRow key={req.id} sx={{ '&:nth-of-type(odd)': { bgcolor: '#e3f2fd' } }}>
                <TableCell>{req.id}</TableCell>
                <TableCell>{req.customer}</TableCell>
                <TableCell>{req.orderId}</TableCell>
                <TableCell>{req.reason}</TableCell>
                <TableCell>{req.status}</TableCell>
                <TableCell>
                  <Button variant="contained" color="primary" onClick={() => handleApprove(req.id)} disabled={req.status !== 'Pending'}>
                    Approve
                  </Button>
                  <Button variant="outlined" color="error" onClick={() => handleDeny(req.id)} disabled={req.status !== 'Pending'} sx={{ ml: 1 }}>
                    Deny
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

export default ReturnRefund;
