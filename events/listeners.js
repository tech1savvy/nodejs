// import events module
const events = require("events");
// create an object of EventEmitter class
const eventEmitter = new events.EventEmitter();

// define the event listerner using on()
eventEmitter.on("eventName", (msg) => {
    console.log("inside callback function by on()");
    console.log(msg);
});

// define the event and callback dunction using addListener()
eventEmitter.addListener("eventName", () => {
    console.log("inside callback function by addListener()");
});

// define the event and callback dunction using once()
// fires only once and then removes the listener
eventEmitter.once("eventName", () => {
    console.log("inside callback function by once()");
});

// emit the event
eventEmitter.emit("eventName", "hello world");
// emit again
eventEmitter.emit("eventName");