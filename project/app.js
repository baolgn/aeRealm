const express = require('express');
const path = require('path');
const io = require('./socket');
const post = require('./post');

const app = express();
const port = 3000;


// Middleware to serve static files like CSS and images
app.use(express.static('public'));

// Middleware to parse incoming requests with JSON payloads
app.use(express.json());

// Handle other routes
app.use((req, res) => {
    res.status(404).send('<h1>Error 404: Resource not found</h1>');
});

// Start the server
const httpServer = require('http').Server(app);
httpServer.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
