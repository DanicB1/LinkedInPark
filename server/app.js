//////////////////////////////////////////////////////////////////////
// Configuration file: Middleware, route, registration.........
//////////////////////////////////////////////////////////////////////

const express = require("express");
const cors = require("cors");

const app = express();

// Middleware configuration
app.use(express.json());                            // Parse incoming JSON requests
app.use(express.urlencoded({ extended: false }));   // Parse URL-encoded data
app.use(cors());                                    // Enable CORS for cross-origin requests



const http = require("http");
require("dotenv").config();

const server = http.createServer(app); // Create an HTTP server using the Express app
const PORT = process.env.PORT || 3000;

const router = require('./src/routes/route');

app.use('/', router);


// Start the server and listen on the specified port
server.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});

module.exports = app;