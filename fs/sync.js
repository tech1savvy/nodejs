// when fs sync methods are invoked, node waits for the method to complete its execution before moving to next

const { readFileSync, writeFileSync } = require("fs");
/* or
const fs = require('fs')
fs.readFileSync
*/

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

// or const second = readFileSync('./content/second.txt') // utf8 is the default encoding

console.log(first, second);

writeFileSync(
	"./content/result-sync.txt",
	`Here is the result: ${first}, ${second}`,
); // if file already exists then it is overriddden

// to only append
writeFileSync(
	"./content/result-sync.txt",
	`\nHere is the result again: ${first}, ${second}`,
	{ flag: "a" }, // append mode
);
