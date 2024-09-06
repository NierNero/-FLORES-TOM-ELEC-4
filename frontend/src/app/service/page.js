import * as React from 'react';
import { Container, Avatar, Typography, Card, CardContent, CardMedia, Button, Grid, AppBar, Toolbar, Box, IconButton, Link } from '@mui/material';

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

      <Container maxWidth="md">
        <Typography variant="h4" align="center" gutterBottom marginTop={2}>
          Our Services
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          Get total care for your car. We offer a range of services provided by skilled and ASE-certified auto technicians.
        </Typography>

        <Grid container spacing={4} mt={2}>
          <Grid ite sx={{width: '1000px' }}>
              <CardMedia
                component="img"
                height="300"
                image="/img/1.jpg" 
                alt="Car Engine"
                sx={{ objectFit: 'cover', width: '100%' }} 
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Repair + Maintenance Services Offered:
                </Typography>
                
                <ul>
                  <li><Link href="link-to-air-conditioning-repair-page" sx={{ textDecoration: 'none', color: 'black', '&:hover': { color: 'blue', textDecoration: 'red' } }}>Air Conditioning Repair</Link></li>
                  <li><Link href="link-to-engine-repair-replacement-page" sx={{ textDecoration: 'none', color: 'black', '&:hover': { color: 'blue', textDecoration: '' } }}>Engine Repair/Replacement</Link></li>
                  <li><Link href="link-to-brake-repair-page" sx={{ textDecoration: 'none', color: 'black', '&:hover': { color: 'blue', textDecoration: '' } }}>Brake Repair</Link></li>
                  <li><Link href="link-to-suspension-steering-repair-page" sx={{ textDecoration: 'none', color: 'black', '&:hover': { color: 'blue', textDecoration: '' } }}>Suspension & Steering Repair</Link></li>
                  <li><Link href="link-to-oil-change-page" sx={{ textDecoration: 'none', color: 'black', '&:hover': { color: 'blue', textDecoration: '' } }}>Oil Change</Link></li>
                  <li><Link href="link-to-tire-rotation-page" sx={{ textDecoration: 'none', color: 'black', '&:hover': { color: 'blue', textDecoration: '' } }}>Tire Rotation</Link></li>
                  <li><Link href="link-to-belt-repair-page" sx={{ textDecoration: 'none', color: 'black', '&:hover': { color: 'blue', textDecoration: '' } }}>Belt Repair</Link></li>
                </ul>
                
              </CardContent>
            
          </Grid>
        </Grid>

        <Box mt={4} display="flex" justifyContent="center">
          <Button variant="contained" size="large" href="#book">
            Book a Service
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default App;
