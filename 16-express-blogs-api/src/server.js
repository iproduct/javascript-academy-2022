const express = require('express');
const http = require('http');
const path = require('path');``
const { Server } = require("socket.io");
const cors = require('cors');
const logger = require('morgan');
const MongoClient = require('mongodb').MongoClient;
const usersRouter = require('./routes/users-router');
const sendErrorResponse = require('./utils/utils').sendErrorResponse;


const mongoUrl = 'mongodb://127.0.0.1:27017';
const dbName = 'blogs2022';

const HOST = '127.0.0.1';
const PORT = 5000;

const app = express();
const server = http.createServer(app);
const io = new Server(server, {transports:	['websocket', 'polling']});

const corsOpts = {
    origin: 'http://localhost:3000'
}

// apply express middleware
app.use(cors(corsOpts))
app.use(logger('dev'));
app.use(express.json({limit: '10mb'}))

// add feature routers
app.use('/api/users', usersRouter);

// add static resources
app.use(express.static(path.join(__dirname, '../public')));


// add index.html -> app only
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
})

// add socket.io (websocket) server push api
io.on('connection', function(socket) {
    socket.join('room1');
    console.log("Client connected: " + socket.id);
    socket.on('chat message', function(msg) {
        console.log('Message received: ' + msg);
        io.of("/").to("room1").emit('chat message', msg);
    })
})

// Connect to MongoDB and start server
// Create a new MongoClient
const client = new MongoClient(mongoUrl);
async function run() {
  try {
    // Connect the client to the server
    await client.connect();
    // Establish and verify connection
    await client.db(dbName).command({ ping: 1 });
    console.log("Connected successfully to MongoDB server");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);










server.on('error', (e) => {
    if (e.code === 'EADDRINUSE') {
        console.log('Address in use, retrying...');
        setTimeout(() => {
            server.close();
            server.listen(port, host);
        }, 5000);
    } else {
        console.log('Error starting server:', err);
    }
});

server.listen(PORT, HOST, () => {
    console.log(`HTTP Server running on http://${HOST}:${PORT}/`);
});