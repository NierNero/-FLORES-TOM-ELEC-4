// App.js
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
  Paper,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "../../components/Sidebar"; // Import the Sidebar component

const InventoryList = ({ items, onEdit, onDelete }) => {
  return (
    <List>
      {items.map((item, index) => (
        <ListItem
          key={item.id}
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
                image={item.image}
                alt={item.name}
                sx={{ objectFit: "cover", borderRadius: "4px" }}
              />
            </Grid>
            <Grid item xs={5}>
              <ListItemText
                primary={item.name}
                secondary={`Price: $${item.price}`}
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
                  onClick={() => onEdit(item.id)}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => onDelete(item.id)}
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

// Main App Component
function App() {
  const [open, setOpen] = useState(true);
  const [items, setItems] = useState([
    { id: 1, name: "Engine Belt", price: 50, image: "/img/belt1.jpg" },
    { id: 2, name: "Oil Filter", price: 150, image: "/img/oilfilter.jpg" },
    {
      id: 3,
      name: "Oil Filter (New)",
      price: 50,
      image: "/img/oilfilter1.jpg",
    },
    { id: 4, name: "Engine Belt", price: 50, image: "/img/belt1.jpg" },
    {
      id: 5,
      name: "Oil Filter (New)",
      price: 50,
      image: "/img/oilfilter1.jpg",
    },
  ]);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleEditItem = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id
        ? {
            ...item,
            name: prompt("Edit item name:", item.name) || item.name,
            price:
              parseFloat(prompt("Edit item price:", item.price)) || item.price,
          }
        : item
    );
    setItems(updatedItems);
  };

  const handleDeleteItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  return (
    <>
      <Sidebar open={open} handleDrawerToggle={handleDrawerToggle} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "white",
          p: 3,
          transition: "margin 0.3s",
          marginLeft: open ? "240px" : "0",
          height: "100vh",
          overflowY: "auto",
        }}
      >
        {!open && ( // Conditionally render the IconButton based on the `open` state
          <IconButton onClick={handleDrawerToggle} sx={{ color: "blue" }}>
            <MenuIcon />
          </IconButton>
        )}

        <Typography variant="h4" gutterBottom sx={{ mb: 2, color: "blue" }}>
          Product Management
        </Typography>
        <Divider sx={{ bgcolor: "white", mt: 2 }} />
        <InventoryList
          items={items}
          onEdit={handleEditItem}
          onDelete={handleDeleteItem}
        />
      </Box>
    </>
  );
}

export default App;
