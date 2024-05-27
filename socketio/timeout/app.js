const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

let counter = 0;
let interval;

io.on('connection', (socket) => {
  console.log('A user connected');

  interval = setInterval(() => {
    counter += 2;
    socket.emit('number', counter);
  }, 2000);

  socket.on('disconnect', () => {
    clearInterval(interval);
    console.log('A user disconnected');
  });
});

app.get('/', (req, res) => {
  res.sendFile(__dirname+"/index.html");
});

server.listen(8081);