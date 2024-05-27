


var fs = require("fs");
var data = '';
// Create a readable stream
var reader = fs.createReadStream('test.txt');
// Set the encoding to be utf8.
reader.setEncoding('UTF8');
// Handle stream events --> data, end, and error
reader.on('data', function(chunk) {
   data = chunk;
});
reader.on('end',function() {
   console.log(data);
});
reader.on('error', function(err) {
   console.error(err);
});

