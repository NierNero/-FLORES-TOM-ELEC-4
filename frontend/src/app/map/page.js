'use client';
import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  TextField,
  IconButton,
  Avatar,
  Container,
  Box,
  Paper,
  Link,
  Divider,
  Tooltip,
} from '@mui/material';
import { ShoppingCart, Search, Home, CalendarToday, Info } from '@mui/icons-material';
import InputAdornment from '@mui/material/InputAdornment';

// Custom styles using MUI's `sx` prop
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
    maxWidth: '1200px', // Adjust as needed
  },
};

const App = () => {
  return (
    <div>
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
      Nelson's Automotive
    </Typography>
    <Button
      color="inherit"
      sx={{
        '&:hover': {
          backgroundColor: '#555', 
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
          backgroundColor: '#555', 
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
          backgroundColor: '#555', 
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
          color: 'white',
        },
        '& .MuiInputBase-input': {
          color: 'black',
          fontSize: '0.875rem', // Adjust font size as needed
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
          backgroundColor: '#555', 
          color: '#fff',
        },
      }}
    >
      Logout
    </Button>
  </Toolbar>
</AppBar>



      
      <Container maxWidth="lg" sx={styles.container}>
        <Typography variant="h4" align="center" gutterBottom>
          Nearby Repair Shop(s)
        </Typography>
        <Divider/>
        <Grid container spacing={4} marginTop={1}>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={styles.card}>
              <CardMedia
                sx={styles.cardMedia}
                image="https://www.nelsonautomotive.com/wp-content/uploads/2020/06/Nelson-Automotive-Logo-2-1-scaled.jpg"
                title="Nelson Automotive Shop"
              />
              <CardContent sx={styles.cardContent}>
                <Typography gutterBottom variant="h5" component="div">
                  Nelson Automotive Shop
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Location: Pajo, Lapu-Lapu City
                </Typography>
              </CardContent>
              <Box sx={{ padding: 2, display: 'flex', justifyContent: 'center' }}>
                <Button variant="contained" color="primary" sx={styles.button}>
                  View Shop
                </Button>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={styles.card}>
              <CardMedia
                sx={styles.cardMedia}
                image="https://www.goodwheelmotorservices.com/wp-content/uploads/2019/12/goodwheel-motorservices-logo.png"
                title="Goodwheel Motor Services"
              />
              <CardContent sx={styles.cardContent}>
                <Typography gutterBottom variant="h5" component="div">
                  Goodwheel Motor Services
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Location: Pajo, Lapu-Lapu City
                </Typography>
              </CardContent>
              <Box sx={{ padding: 2, display: 'flex', justifyContent: 'center' }}>
                <Button variant="contained" color="primary" sx={styles.button}>
                  View Shop
                </Button>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Paper sx={styles.paper}>
              <Box sx={styles.imageMapContainer}>
                <img
                  src="/img/map.png" // Your image map
                  useMap="#image-map"
                  alt="Interactive Map"
                  style={styles.imageMap}
                />
                <map name="image-map">
                  <area
                    shape="rect"
                    coords="34,44,270,350" // Adjust coordinates as needed
                    href="/location1"
                    alt="Location 1"
                  />
                  <area
                    shape="rect"
                    coords="290,172,333,250"
                    href="/location2"
                    alt="Location 2"
                  />
                  <area
                    shape="rect"
                    coords="340,350,500,450"
                    href="/location3"
                    alt="Location 3"
                  />
                </map>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default App;
