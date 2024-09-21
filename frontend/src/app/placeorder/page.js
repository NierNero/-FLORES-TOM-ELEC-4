'use client';
import React from "react";
import {
  Box,
  Typography,
  Button,
  Paper,
  Divider,
  Checkbox,
  TextField,
  Grid,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  IconButton,
  CircularProgress,
  Container,
} from "@mui/material";
import { LocalShipping, ArrowBack } from "@mui/icons-material";

const CheckoutPage = () => {
  const [paymentMethod, setPaymentMethod] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);

  const handlePaymentChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handlePlaceOrder = () => {
    const confirmOrder = window.confirm("Are you sure you want to place the order?");
    if (confirmOrder) {
      setLoading(true);
      setTimeout(() => {
        console.log("Order placed!");
        setLoading(false);
        setSubmitted(true);
      }, 2000); 
    }
  };

  if (submitted) {
    return (
      <Container
        sx={{
          mt: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" mb={2}>
          Thank You!
        </Typography>
        <Typography variant="h6" mb={4}>
          Thank you for your purchase!
        </Typography>
        <Button variant="contained" color="primary" href="/pending">
          Done
        </Button>
      </Container>
    );
  }

  return (
    <Box sx={{ maxWidth: 800, margin: "auto", padding: 3 }}>
      <Paper elevation={3} sx={{ padding: 3 }}>
        {/* Header */}
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <IconButton
            onClick={() => console.log("Back")}
            aria-label="back"
            href="/shop"
          >
            <ArrowBack />
          </IconButton>
          <Typography variant="h5" sx={{ flexGrow: 1, ml: 2, color: "blue" }}>
            Checkout
          </Typography>
        </Box>

        <Divider sx={{ marginY: 3 }} />

        {/* Free Shipping */}
        <Box display="flex" alignItems="center" bgcolor="#ffffcc" p={2} mb={3}>
          <LocalShipping sx={{ marginRight: 1 }} />
          <Typography>Free shipping discount applied</Typography>
        </Box>

        {/* Delivery Address */}
        <Box display="flex" flexDirection="column" mb={3}>
          <Typography variant="body1" fontWeight="bold">
            Delivery Address
          </Typography>
          <Typography variant="body2">
            Reyzl Tom Flores | (+63) 994 226 1142
          </Typography>
          <Typography variant="body2">
            Likoan Basketball Court, Sitio Likoan, Marigondon, Lapu-Lapu City,
            Cebu, Visayas, 6015
          </Typography>
        </Box>

        {/* Product Details */}
        <Grid container spacing={2} alignItems="center" mb={3}>
          <Grid item xs={3}>
            <img
              src="/img/belt1.jpg"
              alt="Product"
              style={{ width: "100%", height: "auto" }}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1">Engine Belt</Typography>
            <Typography variant="body2" color="primary">
              ₱50
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography align="right">x1</Typography>
          </Grid>
        </Grid>

        <Box mt={2}>
          <Checkbox />
          <Typography variant="body2" component="span">
            Merchandise Protection <strong>₱8</strong>
          </Typography>
        </Box>

        {/* Vouchers and Shipping */}
        <Divider sx={{ marginY: 3 }} />
        <TextField label="Shop Vouchers" fullWidth margin="normal" />
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mt={1}
        >
          <Typography>Shipping Option</Typography>
          <Typography color="primary">₱45</Typography>
        </Box>
        <Typography variant="body2">Standard Local (24 - 30 Sept)</Typography>

        {/* Payment Method Dropdown */}
        <Box mt={3}>
          <FormControl fullWidth>
            <InputLabel id="payment-method-label">Payment Option</InputLabel>
            <Select
              labelId="payment-method-label"
              value={paymentMethod}
              onChange={handlePaymentChange}
            >
              <MenuItem value="cash">Cash on Delivery</MenuItem>
              <MenuItem value="spaylater">
                SPayLater (₱83.52 x 3 months)
              </MenuItem>
              <MenuItem value="creditcard">Credit Card</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Divider sx={{ marginY: 3 }} />
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="body1" mt={1}>
            Merchandise Subtotal
          </Typography>
          <Typography variant="body1" mt={1}>
            ₱50
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="body1" mt={1}>
            Shipping Subtotal
          </Typography>
          <Typography variant="body1" mt={1}>
            ₱100
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="body1" mt={1}>
            Shipping Discount
          </Typography>
          <Typography variant="body1" mt={1}>
            -₱10
          </Typography>
        </Box>

        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h5" mt={1}>
            Total Payment
          </Typography>
          <Typography variant="h5" mt={1} color="primary">
            ₱140
          </Typography>
        </Box>

        <Button
          variant="contained"
          color="primary"
          type="button"
          fullWidth
          disabled={loading}
          sx={{ marginTop: 3 }}
          onClick={handlePlaceOrder}
        >
          {loading ? <CircularProgress size={24} /> : "Place Order"}
        </Button>
      </Paper>
    </Box>
  );
};

export default CheckoutPage;
