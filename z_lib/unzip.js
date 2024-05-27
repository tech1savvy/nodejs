const zlib = require('zlib')
const fs = require('fs')

const unzip = zlib.createUnzip()
const inp = fs.createReadStream('demo.txt.gz')
const out = fs.createWriteStream('demodoc.txt')

inp.pipe(unzip).pipe(out);