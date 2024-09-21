"use client";
import React, { useState } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Grid,
  CardMedia,
  Divider,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "../../components/Sidebar"; // Import the Sidebar component

const ServiceList = ({ services, onEdit, onDelete }) => {
  return (
    <List>
      {services.map((service, index) => (
        <ListItem
          key={service.id}
          sx={{
            borderBottom: "1px solid #ddd",
            bgcolor: "#fafafa",
            borderRadius: "4px",
            mb: 1,
          }}
        >
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={1}>
              <Typography variant="body1" sx={{ color: "black" }}>
                {index + 1}
              </Typography>{" "}
              {/* Item Number */}
            </Grid>
            <Grid item xs={2}>
              <CardMedia
                component="img"
                height="100"
                image={service.image}
                alt={service.text}
                sx={{ objectFit: "cover" }}
              />
            </Grid>
            <Grid item xs={5}>
              <ListItemText
                primary={service.text}
                secondary={service.description}
                primaryTypographyProps={{
                  variant: "h6",
                  sx: { color: "black" },
                }}
                secondaryTypographyProps={{
                  variant: "body2",
                  sx: { color: "black" },
                }}
              />
            </Grid>
            <Grid item xs={4}>
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  aria-label="edit"
                  onClick={() => onEdit(service.id)}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => onDelete(service.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </Grid>
          </Grid>
        </ListItem>
      ))}
    </List>
  );
};

function App() {
  const [open, setOpen] = useState(true);
  const [services, setServices] = useState([
    {
      id: 1,
      image: "/img/aircon.jpg",
      text: "Air Conditioning Repair",
      description: "Expert repair for all air conditioning systems.",
    },
    {
      id: 2,
      image: "/img/Tire.jpg",
      text: "Tire Installation",
      description: "Professional installation of tires.",
    },
    {
      id: 3,
      image: "/img/Belt.jpg",
      text: "Belt Services",
      description: "Professional installation of belts.",
    },
  ]);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleEdit = (id) => {
    const updatedServices = services.map((service) =>
      service.id === id
        ? {
            ...service,
            text: prompt("Edit service name:", service.text) || service.text,
            description:
              prompt("Edit service description:", service.description) ||
              service.description,
          }
        : service
    );
    setServices(updatedServices);
  };

  const handleDelete = (id) => {
    const updatedServices = services.filter((service) => service.id !== id);
    setServices(updatedServices);
  };

  return (
    <>
      {/* Sidebar */}
      <Sidebar open={open} handleDrawerToggle={handleDrawerToggle} />

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "white",
          p: 3,
          transition: "margin 0.3s",
          marginLeft: open ? "240px" : "0",
          height: "100vh",
        }}
      >
        {!open && (
          <IconButton onClick={handleDrawerToggle} sx={{ color: "blue" }}>
            <MenuIcon />
          </IconButton>
        )}

        <Typography variant="h4" gutterBottom sx={{ mb: 2, color: "blue" }}>
          Service Management
        </Typography>
        <Divider sx={{ bgcolor: "white", mt: 2 }} />
        <ServiceList
          services={services}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </Box>
    </>
  );
}

export default App;
