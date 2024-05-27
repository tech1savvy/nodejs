var fs = require("fs");


// Create a readable stream
var reader = fs.createReadStream('test.txt');
// Create a writable stream
var writer = fs.createWriteStream('test3.txt');
writer.on('unpipe', () => {
   console.log('unpiping occurred');
 });

 //reader.pipe(writer);

 reader.unpipe(writer);