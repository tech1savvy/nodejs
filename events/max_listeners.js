const events = require("events");
const eventEmitter = new events.EventEmitter();

eventEmitter.on("eventName", function listener1(){
	console.log("listener 1");
});

eventEmitter.on("eventName", function listener2(){
	console.log("listener 2");
});


// .setMaxListeners(n) : warns if the number of listeners of the object (we can create multiple objs like 'obj1 = new event.EventEmitter()') of EventEmitter class exceeds the limit, n
eventEmitter.setMaxListeners(2);

eventEmitter.on('eventName',()=>{
	console.log('listerner 3');
})

// .getMaxListeners() : returns the max limit of listeners set by .setMaxListeners() or defaults to EventEmitter.defaultMaxListeners
console.log(eventEmitter.getMaxListeners());
// .listeners(event) : returns an array of listeners for the specified event
console.log(eventEmitter.listeners('eventName'));