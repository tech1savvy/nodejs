// Import required modules
const express = require('express');
const fs = require('fs');

const app = express();

app.get('/', (req, res) => {

    const readableStream = fs.createReadStream('student.txt');
    // Pipe the data from the stream to the response
    readableStream.pipe(res);
});

app.listen(8081);