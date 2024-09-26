'use client';
import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  TextField,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TablePagination,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Paper,
  Divider,
  DialogContentText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AdminSidebar from "../../components/AdminSidebar";

function UserManagement({ users = [], totalUsers }) {
  const [open, setOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleDrawerToggle = () => setSidebarOpen(!sidebarOpen);
  
  const handleUserClick = (user) => {
    setSelectedUser(user);
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
    setSelectedUser(null);
  };

  return (
    <>
      <AdminSidebar open={sidebarOpen} handleDrawerToggle={handleDrawerToggle} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "#f0f4f8",
          p: 3,
          transition: "margin 0.3s",
          marginLeft: sidebarOpen ? "240px" : "0",
          minHeight: '100vh',
        }}
      >
        {!sidebarOpen && (
          <IconButton onClick={handleDrawerToggle} sx={{ color: "#1976d2" }}>
            <MenuIcon />
          </IconButton>
        )}
        <Typography variant="h4" component="h1" sx={{ mb: 2, color: "#333", fontWeight: 'bold' }}>
          User Dashboard
        </Typography>

        <TextField label="Search Users..." variant="outlined" fullWidth sx={{ mb: 2 }} />

        <Paper elevation={3} sx={{ overflow: 'hidden' }}>
          <Table>
          <TableHead>
  <TableRow>
    <TableCell sx={{ fontWeight: 'bold' }}>User ID</TableCell>
    <TableCell sx={{ fontWeight: 'bold' }}>Username</TableCell>
    <TableCell sx={{ fontWeight: 'bold' }}>Email</TableCell>
    <TableCell sx={{ fontWeight: 'bold' }}>Role</TableCell>
    <TableCell sx={{ fontWeight: 'bold' }}>Status</TableCell>
    <TableCell sx={{ fontWeight: 'bold' }}>Registration Date</TableCell>
  </TableRow>
</TableHead>

            <TableBody>
              {users.map((user) => (
                <TableRow 
                  key={user.id} 
                  onClick={() => handleUserClick(user)} 
                  sx={{ cursor: 'pointer', '&:hover': { backgroundColor: '#e3f2fd' } }}
                >
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.username}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>{user.status}</TableCell>
                  <TableCell>{user.registrationDate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <Divider />

          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={totalUsers}
            rowsPerPage={5}
            page={0}
            onPageChange={() => {}}
            onRowsPerPageChange={() => {}}
          />
        </Paper>

        {/* User Details Modal */}
        <Dialog open={open} onClose={handleCloseModal} sx={{ backdropFilter: 'blur(5px)' }}>
  <DialogTitle sx={{ bgcolor: '#1976d2', color: '#fff' }}>User Details</DialogTitle>
  <DialogContent sx={{ bgcolor: '#f7f7f7', mt: 1 }}>
    {selectedUser && (
      <>
        <DialogContentText>
          <Typography><strong>User ID:</strong> {selectedUser.id}</Typography>
          <Typography><strong>Username:</strong> {selectedUser.username}</Typography>
          <Typography><strong>Email:</strong> {selectedUser.email}</Typography>
          <Typography><strong>Role:</strong> {selectedUser.role}</Typography>
          <Typography><strong>Status:</strong> {selectedUser.status}</Typography>
          <Typography><strong>Registration Date:</strong> {selectedUser.registrationDate}</Typography>
        </DialogContentText>
      </>
    )}
  </DialogContent>
  <DialogActions sx={{ bgcolor: '#e0e0e0' }}>
    <Button onClick={handleCloseModal} color="primary">Close</Button>
  </DialogActions>
</Dialog>
      </Box>
    </>
  );
}

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      // Replace with your API call
      const data = [
        { id: 1, username: 'johndoe', email: 'john@example.com', role: 'Admin', status: 'Active', registrationDate: '2023-01-15' },
        { id: 2, username: 'janedoe', email: 'jane@example.com', role: 'User', status: 'Inactive', registrationDate: '2023-02-20' },
      ];
      setUsers(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;

  return <UserManagement users={users} totalUsers={users.length} />;
};

export default App;
