

var fs = require("fs");
var reader = fs.createReadStream('test.txt');
// Create a writable stream
var writer = fs.createWriteStream('test2.txt');

writer.on('pipe', () => {
   console.log('Something is piping into the writer.');
 });
 reader.pipe(writer);