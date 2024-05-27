const events = require("events");

const eventEmitter = new events.EventEmitter();

function listener1() {
	console.log("inside listener1");
};
function listener2(){
	console.log("inside listener2");
};
function listener3(){
	console.log("inside listener3");
};

eventEmitter.on("eventName", listener1);
eventEmitter.on("eventName", listener2);
eventEmitter.on("eventName", listener3);

// removeListener()
eventEmitter.removeListener("eventName", listener1);
eventEmitter.emit("eventName"); // listener1 won't be called

// removeAllListeners()
// eventEmitter.removeAllListeners(); // removes all event listener irrespective of the event name
eventEmitter.removeAllListeners("eventName");
eventEmitter.emit("eventName"); // no listeners will be called
