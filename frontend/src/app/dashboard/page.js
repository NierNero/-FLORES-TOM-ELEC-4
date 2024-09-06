import React from 'react';
import { Container, Typography, Card, CardContent, CardMedia, Button, Grid, AppBar, Toolbar, Box, IconButton, Divider, Menu, MenuItem, Avatar, TextField } from '@mui/material';

const repairShops = [
  {
    name: 'My Repair Shop',
    description: 'Simple Shop',
    imageUrl: '/img/1.jpg',
  },
  {
    name: 'Our Repair Shop',
    description: 'Simple Shop',
    imageUrl: '/img/2.jpg',
  },
  {
    name: 'Wala Repair Shop',
    description: 'Simple Shop',
    imageUrl: '/img/3.jpg',
  },
  {
    name: 'Another Repair Shop',
    description: 'Simple Shop',
    imageUrl: '/img/4.jpg',
  },
];
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

const RepairShopCard = ({ shop }) => (
  <Card sx={{ height: 'auto', display: 'flex', flexDirection: 'column', marginTop: 2, borderRadius: '10px' }}>
    <CardMedia
      component="img"
      sx={{ height: 140, objectFit: 'cover' }} 
      image={shop.imageUrl}
      alt={shop.name}
    />
    <CardContent sx={{ flexGrow: 1 }}>
      <Typography variant="h6" component="div">
        {shop.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {shop.description}
      </Typography>
    </CardContent>
    <Box sx={{ padding: 2 }}>
      <Button variant="contained" color="primary" fullWidth>
        Visit Now
      </Button>
    </Box>
  </Card>
);

const App = () => {
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
          color: 'white',
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

      <Container>
        <Typography variant="h4" align="center" gutterBottom sx={{ marginTop: 4, marginBottom: 4 }}>
          Available Repair Shops
        </Typography>
        <Divider sx={{ marginY: 1 }} />
        <Grid container spacing={3} justifyContent="center">
          {repairShops.map((shop, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <RepairShopCard shop={shop} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default App;
