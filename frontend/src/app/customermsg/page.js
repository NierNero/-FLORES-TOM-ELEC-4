'use client';
import React, { useState } from 'react';
import { Box, Typography, TextField, Button, List, ListItem, IconButton, Paper, Card, CardContent, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from '../../components/Sidebar'; // Adjust the path as necessary

const staticMessages = [
    { id: 1, content: "Hello, I need help with my order.", name: "John Doe", profilePic: "/img/1.jpg" },
    { id: 2, content: "Can you provide more details about the product?", name: "Jane Smith", profilePic: "/img/1.jpg" },
    { id: 3, content: "I would like to return my purchase.", name: "Alice Johnson", profilePic: "/img/1.jpg" },
];

function MessagesPage() {
    const [open, setOpen] = useState(true);
    const [messages] = useState(staticMessages);
    const [reply, setReply] = useState('');

    const handleReply = (messageId) => {
        console.log(`Replying to message ${messageId}: ${reply}`);
        setReply('');
        // Here, you could add logic to handle the reply, e.g., updating state or sending to an API.
    };

    const handleDrawerToggle = () => {
        setOpen(!open);
    };

    return (
        <Box component="main"
            sx={{
                flexGrow: 1,
                bgcolor: "white",
                p: 3,
                transition: "margin 0.3s",
                marginLeft: open ? "240px" : "0",
                minHeight: "100vh"
            }}
        >
            <Sidebar open={open} handleDrawerToggle={handleDrawerToggle} />
            {!open && (
                <IconButton onClick={handleDrawerToggle} sx={{ color: "blue", mb: 2 }}>
                    <MenuIcon />
                </IconButton>
            )}
            <Box sx={{ flexGrow: 1, p: 3 }}>
                <Typography variant="h4" gutterBottom color='blue'>Customer Messages</Typography>
                <Divider />
                <Paper elevation={3} sx={{ p: 3, mt: 4 }}>
                    <List>
                        {messages.map((message) => (
                            <ListItem key={message.id} sx={{ mb: 2 }}>
                                <Card sx={{ width: '100%', padding: 2 }}>
                                    <CardContent>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <img src={message.profilePic} alt={message.name} style={{ borderRadius: '50%', width: 40, height: 40, marginRight: 8 }} />
                                            <Typography variant="body1" fontWeight="bold">{message.name}</Typography>
                                        </Box>
                                        <Typography variant="body1">{message.content}</Typography>
                                        <Box sx={{ display: 'flex', mt: 2 }}>
                                            <TextField
                                                value={reply}
                                                onChange={(e) => setReply(e.target.value)}
                                                placeholder="Type your reply"
                                                variant="outlined"
                                                fullWidth
                                            />
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                onClick={() => handleReply(message.id)}
                                                sx={{ ml: 1 }}
                                            >
                                                Send Reply
                                            </Button>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </ListItem>
                        ))}
                    </List>
                </Paper>
            </Box>
        </Box>
    );
}

export default MessagesPage;
