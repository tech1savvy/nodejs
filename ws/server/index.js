const WebSocket = require("ws");
const server = new WebSocket.Server({ port: "8080" });

// event 1: connection from client
server.on("connection", (socket) => {
  // event 2: liten for messages
  socket.on("message", (message) => {
    // event 3: reply back to the cleint
    console.log(`From client: ${message}`);
    socket.send(`hii`);
  });
});
