import * as React from 'react';
import { Container, Typography, Card, CardContent, CardMedia, Button, Grid, AppBar, Toolbar, Box, IconButton } from '@mui/material';

function App() {
  return (
    <Box sx={{
      backgroundColor: '#f0f0f0', // Background color for the entire page
      minHeight: '100vh', // Ensure it covers the full height of the viewport
      padding: 3,
    }}>
    <div>
    <AppBar position="static" sx= {{borderRadius: '15px',}}>
  <Toolbar>
    <IconButton
      size="large"
      edge="start"
      color="inherit"
      aria-label="menu"
      sx={{ mr: 2 }}
    >
      {/* Add your logo or icon here */}
    </IconButton>
    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
      Nelson's Automotive
    </Typography>
    <Button
      color="inherit"
      sx={{
        '&:hover': {
          backgroundColor: 'primary.main',
          color: 'black',
        },
      }}
    >
      Home
    </Button>
    <Button
      color="inherit"
      sx={{
        '&:hover': {
          backgroundColor: 'primary.main',
          color: 'black',
        },
      }}
    >
      Booking
    </Button>
    <Button
      color="inherit"
      sx={{
        '&:hover': {
          backgroundColor: 'primary.main',
          color: 'black',
        },
      }}
    >
      Cart
    </Button>
    <Button
      color="inherit"
      sx={{
        '&:hover': {
          backgroundColor: 'primary.main',
          color: 'black',
        },
      }}
    >
      Logout
    </Button>
  </Toolbar>
</AppBar>

      <Container maxWidth="md" sx={{ mt: 10, marginBottom: 20 }}>
        <Typography variant="h3" align="center" gutterBottom>
          You got a guy. Here at Wala Repair Shop...
        </Typography>

        <Typography variant="body1" align="center" gutterBottom>
          We take care of the cars and people in our community, and we always provide quality without compromise.
        </Typography>

        <Grid container spacing={4} mt={4}>
          <Grid item xs={12} sm={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div" align="center">
                  Our Services
                </Typography>
                <Typography variant="body2">
                  {/* Add your services here */}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div" align="center"> 
                  Shop
                </Typography>
                <Typography variant="body2">
                  {/* Add contact information here */}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>



        <Box mt={4}>
          {/* Add your image or video here */}
        </Box>

        <Typography variant="body2" align="center" mt={4} color="textSecondary">
        </Typography>
      </Container>
    </div>
    </Box>
  );
}

export default App;
