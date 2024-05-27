


var zlib = require('zlib');
var fs = require('fs');
var gzip = zlib.createGzip();
var r = fs.createReadStream('test.txt');
var w = fs.createWriteStream('test.txt.gz');
r.pipe(gzip).pipe(w);

var zlib = require('zlib');
var fs = require('fs');
var brot = zlib.createBrotliCompress();
var r = fs.createReadStream('test.txt');
var w = fs.createWriteStream('test.txt.gz');
r.pipe(brot).pipe(w);


var zlib = require('zlib');
var fs = require('fs');
var defl = zlib.createDeflate();
var r = fs.createReadStream('test.txt');
var w = fs.createWriteStream('test.txt.gz');
r.pipe(defl).pipe(w);