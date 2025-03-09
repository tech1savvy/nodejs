// creating a http server, using nodejs built-in http module

const { Socket } = require("socket.io");

// otherwise we can also use express
const http = require("http").createServer();

const io = require("socket.io")(http, {
  cors: { origin: "*" },
});

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("message", (message) => {
    // messaged recieved by the server
    console.log(message);
    // messaged boardcasted to other users in the group/connection
    io.emit("message", `${socket.id.substr(0, 2)} said ${message}`);
  });
});

http.listen(8080, () => console.log("litening on http://localhost:8080"));
