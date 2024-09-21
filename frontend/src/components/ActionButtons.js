import React from 'react';
import { Button, Divider } from '@mui/material';

const ActionButtons = () => {
  return (
    <div>
      <Button
        variant="text"
        sx={{
          color: 'black',
          '&:hover': { color: 'red' },
          '&:active': { color: 'darkred' },
          fontFamily: 'Arial, sans-serif',
          textAlign: 'left',
          fontSize: '1.1rem',
          textTransform: 'none',
        }}
        href="/shoporder"
      >
        Order Status
      </Button>

      <Button
        variant="text"
        sx={{
          color: 'black',
          '&:hover': { color: 'red' },
          '&:active': { color: 'darkred' },
          fontFamily: 'Arial, sans-serif',
          textAlign: 'left',
          fontSize: '1.1rem',
          textTransform: 'none',
          marginLeft: '3%',
        }}
        href="/tracking"
      >
       Deliver Tracking
      </Button>

      <Button
        variant="text"
        sx={{
          color: 'black',
          '&:hover': { color: 'red' },
          '&:active': { color: 'darkred' },
          fontFamily: 'Arial, sans-serif',
          textAlign: 'left',
          fontSize: '1.1rem',
          textTransform: 'none',
          marginLeft: '3%',
        }}
        href="/gicancel"
      >
        Canceled
      </Button>
      <Divider sx={{ mb: 2, width: '100%', margin: 'auto' }} />
    </div>
  );
};

export default ActionButtons;
