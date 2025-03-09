// here, ws is the defining the protocol to use
// & it will auotmatically start the handshake for TCP/IP connection
const socket = new WebSocket("ws://localhost:8080");

// event1: listen for messages
socket.onmessage = ({ data }) => {
  console.log(`From Server: `, data);
};

// event2: send messages
document.querySelector("button").onclick = () => {
  socket.send("hello");
};
