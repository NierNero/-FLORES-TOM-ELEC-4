import * as React from 'react';
import { Container, Typography, Card, CardContent, Button, Grid, AppBar, Toolbar, Box, IconButton, Link } from '@mui/material';
import LocalCarWashIcon from '@mui/icons-material/LocalCarWash'; 
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; 

function App() {
  return (
    <Box sx={{
      backgroundColor: '#f0f0f0', 
      minHeight: '100vh', 
      padding: 3,
    }}>
      <AppBar position="static" sx={{
        borderRadius: '0 0 15px 15px', 
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
        backgroundColor: '#333',
      }}>
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

        <Typography variant="body2" align="center" mt={4} color="textSecondary">
          © 2024 Nelson's Automotive. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default App;
