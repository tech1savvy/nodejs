var express = require('express');
var fs = require('fs');
var app = express();

app.get('/', function(req, res) {

    // readFile
    fs.readFile('json/data.json', 'utf8', function(err, data) {
        if (err) {
            console.error(err);
            res.status(500).send('Error reading file');
        } else {
            console.log(data);
            res.send(data);
        }
    });
});

app.listen(8081);