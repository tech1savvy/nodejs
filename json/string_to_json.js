let str = '{"username":"a-kon","password":"b-kon"}'; // should contain (") enclosed inside (') single quotes

console.log("string: ");
console.log(str);
console.log("object: ");
console.log(JSON.parse(str));