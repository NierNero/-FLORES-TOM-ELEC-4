'use client';

import React from 'react';
import { Box, Card, CardContent, Typography, Button, Grid, Avatar, Divider, AppBar, Toolbar, IconButton, TextField } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const styles = {
  appBar: {
    backgroundColor: 'light blue',
    borderRadius: '0 0 20px 20px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    height: '40px',
    borderRadius: '50%',
  },
  
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  cardContent: {
    flexGrow: 1,
    padding: 2,
  },
  cardMedia: {
    height: '200px',
    borderTopLeftRadius: '15px',
    borderTopRightRadius: '15px',
  },
  button: {
    margin: 2,
  },
  container: {
    paddingTop: 4,
    paddingBottom: 4,
  },
  paper: {
    padding: 2,
    margin: 'auto',
    maxWidth: '100%',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  footer: {
    marginTop: 4,
    padding: 2,
    backgroundColor: '#f5f5f5',
  },
  imageMapContainer: {
    position: 'relative',
    width: '100%',
    height: 'auto',
  },
  imageMap: {
    width: '100%',
    height: 'auto',
    maxWidth: '1200px', 
  },
};

function App() {
  return (
    <Box sx={{
      backgroundColor: '#f0f0f0', 
      minHeight: '100vh', 

    }}>
      <AppBar position="static" sx={styles.appBar}>
  <Toolbar>
    <IconButton
      size="large"
      edge="start"
      color="inherit"
      aria-label="menu"
      sx={{ mr: 2 }}
    >
    </IconButton>
    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
      Carcare
    </Typography>
    <Button
      color="inherit"
      sx={{
        '&:hover': {
          backgroundColor: 'black', 
          color: '#fff',
        },
      }}
    >
      Home
    </Button>
    <Button
      color="inherit"
      sx={{
        '&:hover': {
          backgroundColor: 'black', 
          color: '#fff',
        },
      }}
    >
      Booking
    </Button>
    <Button
      color="inherit"
      sx={{
        '&:hover': {
          backgroundColor: 'black', 
          color: '#fff',
        },
      }}
    >
      Cart
    </Button>
    
    <TextField
      sx={{
        ...styles.search,
        width: '200px', // Adjust the width as needed
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'white',
          },
          '&:hover fieldset': {
            borderColor: 'white',
          },
          '&.Mui-focused fieldset': {
            borderColor: 'white',
          },
        },
        '& .MuiInputLabel-root': {
          color: 'Black',
        },
        '& .MuiInputBase-input': {
          color: 'black',
          fontSize: '0.750rem', 
          marginBottom: '4px'
        },
      }}
      label="Search"
      variant="outlined"
      size="small"
      placeholder="Search here..."
    />
    <Avatar src="profile.png" sx={{ ml: 1 }} />
    <Button
      color="inherit"
      sx={{
        '&:hover': {
          backgroundColor: 'black rgba(0, 0, 0, 0.5)', 
          color: '#fff',
        },
      }}
    >
      Logout
    </Button>
  </Toolbar>
</AppBar>

      <Typography variant="h5" gutterBottom sx={{ marginTop: 4, marginBottom: 2, marginLeft: 2}}>
            BOOKING
        </Typography>
        
        <Divider sx={{ marginY: 1 }} />
     
      <Card sx={{ maxWidth: '98%', margin: 'auto', mt: 5, padding: { xs: 2, sm: 3 }, boxShadow: 3 }}>
        <CardContent>
          <Grid container spacing={2} alignItems="center" flexDirection={{ xs: 'column', sm: 'row' }}>
            
            <Grid item xs={12} sm="auto">
              <Avatar
                alt="Nelson's Automotive Shop"
                src="/logo.png" 
                sx={{ width: { xs: 40, sm: 50 }, height: { xs: 40, sm: 50 } }}
              />
            </Grid>
            
            
            <Grid item xs>
              <Typography variant="h6" component="div">
                Nelson's Automotive Shop
              </Typography>
              <Typography color="text.secondary">
                John Doe
              </Typography>
            </Grid>
          </Grid>

          <Divider sx={{ my: 2 }} />

          <Grid container spacing={2} alignItems="center">
  <Grid item xs={12} sm={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
    <Typography variant="body1" component="div">
      Service:
    </Typography>
    <Typography variant="h6" component="div">
      Belts Repair
    </Typography>
  </Grid>

  <Grid item xs={10} sm={4} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
    <CalendarTodayIcon fontSize="small" sx={{ verticalAlign: 'middle', mr: 1 }} />
    <Typography variant="body1" component="span">
      Fri, December 29
    </Typography>
  </Grid>
</Grid>


          <Box textAlign="right" mt={-5}>
            <Button variant="contained" color="error">
              Cancel Booking
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default App;
