//Zlib is used for compressinng and decompressing data files.

const fs =  require('fs');
const zlib = require('zlib');

const zip = zlib.createGzip()
const inp = fs.createReadStream('demo.txt')
const out = fs.createWriteStream('demo.txt.gz')

inp.pipe(zip).pipe(out);