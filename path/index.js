const path = require('path')

// path separator specific to current os
console.log(path.sep)

// returns path string, joined with os specific path separator
const filePath = path.join('/content/','subfolder', 'test.txt')
console.log(filePath)

// returns basename of from path i.e. the file
const base = path.basename(filePath)
console.log(base)

// returns absolute path
const absolute = path.resolve(__dirname,'content','subfolder','test.txt');
console.log(absolute)

// - ! how path.resolve is different from path.join
// https://stackoverflow.com/questions/35048686/whats-the-difference-between-path-resolve-and-path-join

console.log(path.join('/a','/b'))
console.log(path.resolve('/a','/b'))
