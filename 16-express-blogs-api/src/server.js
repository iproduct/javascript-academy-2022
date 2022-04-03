const express = require('express');
const http = require('http');
const path = require('path');``
const { Server } = require("socket.io");
const cors = require('cors');
const morgan = require('morgan');
const MongoClient = require('mongodb').MongoClient;
const usersRouter = require('./routes/users-router');
const sendErrorResponse = require('./utils').sendErrorResponse;


const mongoUrl = 'mongodb://127.0.0.1:27017';
const db = 'blogs2022';

const HOST = '127.0.0.1';
const PORT = 5000;

const app = express();
const server = http.createServer(app);
const io = new Server(server, {transports:	['websocket', 'polling']});

app.use(cors)

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
})

io.on('connection', function(socket) {
    socket.join('room1');
    console.log("Client connected: " + socket.id);
    socket.on('chat message', function(msg) {
        console.log('Message received: ' + msg);
        io.of("/").to("room1").emit('chat message', msg);
    })
})










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