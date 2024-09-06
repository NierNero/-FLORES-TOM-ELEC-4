import * as React from 'react';
import { Container, Avatar, Typography, Card, CardContent, Button, Grid, AppBar, Toolbar, Box, IconButton, Link } from '@mui/material';
import LocalCarWashIcon from '@mui/icons-material/LocalCarWash'; 
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; 

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

      <Container maxWidth="md" sx={{ mt: 10, marginBottom: 20 }}>
        <Typography variant="h3" align="center" gutterBottom>
          Welcome to Nelson's Automotive
        </Typography>

        <Typography variant="body1" align="center" gutterBottom>
          We take care of the cars and people in our community with quality and commitment.
        </Typography>

        <Grid container spacing={4} mt={4}>
          <Grid item xs={12} sm={6}>
            <Card sx={{
              borderRadius: '15px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s',
              '&:hover': { transform: 'scale(1.03)' },
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
              <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <LocalCarWashIcon sx={{ fontSize: 40, color: '#333', mr: 2 }} />
                <Box>
                  <Typography variant="h5" component="div">
                    <Link href="/services" underline="none" color="inherit">
                      Our Services
                    </Link>
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Card sx={{
              borderRadius: '15px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s',
              '&:hover': { transform: 'scale(1.03)' },
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
              <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ShoppingCartIcon sx={{ fontSize: 40, color: '#333', mr: 2 }} />
                <Box>
                  <Typography variant="h5" component="div">
                    <Link href="/shop" underline="none" color="inherit">
                      Shop
                    </Link>
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Box mt={4} sx={{ textAlign: 'center' }}>
        </Box>
      </Container>
    </Box>
  );
}

export default App;
