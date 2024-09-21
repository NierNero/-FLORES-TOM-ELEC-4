import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button, Link } from '@mui/material';

const ServiceCard = ({ image, text, link }) => {
  return (
    <Card sx={{ maxWidth: 345, boxShadow: 3, borderRadius: 2, ml: 3 }}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt={text}
        sx={{ objectFit: 'cover', ml: 10}}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
