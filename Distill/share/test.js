//const b= require("pblish");
//console.log(b.add(7,8));
//var a=["erwin","hello"];
//console.log(a[0]);
//a[0]="arwin";
//console.log(a[0]);
//var s="arwin";
//s="e";
//console.log(s);
var a=10;
console.log(typeof a);
var b=BigInt(12345678907543214568000000000000000000000000000000000000000000000);
console.log(typeof b);
var c=12345678907543214568000000000000000000000000000000000000000000000n;
console.log(typeof c);
const safeInt = Number.MAX_SAFE_INTEGER // -> 9_007_199_254_740_991
console.log(safeInt + 1) // -> 9_007_199_254_740_992
console.log(safeInt + 2)
console.log(safeInt + 1 === safeInt + 2) // -> true
console.log(BigInt("1111111111111111111111111111111111111"));

// -> 1111111111111111111111111111111111111n

// Binary

BigInt(0b100000000000000000000000000000000000000000000000000000000000000000000001111111)

// -> 151115727451828646838272n

// Hexadecimal

BigInt(0xfffffffffffffffffffffffffffffffffff9fff9fffffffffffffffff)

// -> 95780971304118053647396689196894323976171195136475136n

// Octal

BigInt(0o40000000000000000000000000000000000000000011112444)

const obj = {
    [Symbol('hiddenProperty')]: 'This is a hidden property',
    visibleProperty: 'This is a visible property'
  };
  
  console.log(Object.keys(obj)); // ['visibleProperty']

  const points = new Array(40, 100, 1, 5, 25, 10);
  console.log(points);
  a=10;
  console.log(++a);
  console.log(a++);

  const obj1 = {
    key1: 'value1',
    key2: 'value2'
  };
  
  // Deleting a property from an object
  delete obj1.key1;
  
  console.log(obj1); // { key2: 'value2' }
  

const myObject = { key1: 'value1', key2: 'value2' };

console.log('key1' in myObject); // true
console.log('key3' in myObject); // false


const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6];

console.log(arr2); // [1, 2, 3, 4, 5, 6]

// Example of using the rest operator with arrays
const fruits = ['apple', 'banana', 'orange', 'kiwi', 'mango'];

// Using rest operator to gather the remaining elements into a new array
const [first, second, ...remainingFruits] = fruits;

console.log('First fruit:', first); // Output: First fruit: apple
console.log('Second fruit:', second); // Output: Second fruit: banana
console.log('Remaining fruits:', remainingFruits); // Output: Remaining fruits: ['orange', 'kiwi', 'mango']
console.log('fruits:', fruits);

var x = [0,1,2,3,4,5,6,7,8,9]

var a = [x, x, x, x, x];

for (var i = 0, j = 9; i <= j; i++, j--)

//                                ^

  console.log('a[' + i + '][' + j + ']= ' + a[i][j]);

  var foo = ["One", "Two", "Three"]

var [one, two, three] = foo;

console.log(one);

console.log(two);

console.log(three);