const socket = io("ws://localhost:8080");

// receive messages
socket.on("message", (data) => {
  // creating elemnts(tags) in the html using DOM Web API
  const el = document.createElement("li");
  el.innerHTML = data;
  document.querySelector("ul").appendChild(el);
});

// send messages
document.querySelector("button").onclick = () => {
  const data = document.querySelector("input").value;
  socket.emit("message", data);
};
