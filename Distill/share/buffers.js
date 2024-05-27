const buf = Buffer.alloc(5);

console.log(buf.fill('a',2,5,'UTF8'));

const buf1 = Buffer.from('buffer');

const buf2 = Buffer.from(buf1);

console.log(buf1.toString());

// Prints: buffer

console.log(buf2);

// Prints: buffer

const buf3 = Buffer.from('This is Node.js class');

const buf4 = Buffer.from('54686973206973204e6f64652e6a7320636c617373', 'utf16le');

console.log(buf3.toString());

console.log(buf4.toString('utf16le'));

buf5 = new Buffer.alloc(50);

n = buf5.write('This is Node.js class');
console.log(buf5.toString())
console.log('The number of octets are: '+ n);

var buf6 = Buffer.from('wow');

var buf7 = Buffer.from('hell');

var buf8 = Buffer.concat([buf6,buf7],7);

console.log("The contents are " + buf8.toString());

var buffer1 = Buffer.from('wow');

var buffer2 = Buffer.alloc(7);

buffer1.copy(buffer2);

console.log("buffer2 content: " + buffer2.toString());

var buffer1 = Buffer.from('Classofnodejs');

var buffer2 = buffer1.slice(0,7);

console.log("buffer2 content: " + buffer2.toString());

const buf9 = Buffer.from('this is a buffer');

console.log(buf9.includes('this'));

// Prints: true

console.log(buf9.includes('is'));

// Prints: true

console.log(buf9.includes(Buffer.from('a buffer')));

// Prints: true

console.log(buf9.includes(100));

// Prints: true (97 is the decimal ASCII value for 'a')