// Define a function that will be used as a callback
function sayHello() {
    console.log('Hello, world!');
  }
  
  // Use setTimeout to call sayHello after 2 seconds (2000 milliseconds)
  setTimeout(sayHello, 2000);
  
  // Use setInterval to call sayHello every 3 seconds (3000 milliseconds)
  let intervalId = setInterval(sayHello, 3000);
  
  // Use setTimeout to clear the interval after 10 seconds
  setTimeout(function() {
    clearInterval(intervalId);
    console.log('Stopped repeating hello');
  }, 10000);