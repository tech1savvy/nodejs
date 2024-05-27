var a=require('url')
var b=require('querystring')
let exampleUrl = 'http://localhost:8080/admin?month=feb&year=2024';
let parsed_Url = a.parse(exampleUrl);
let parsed_queryString = b.parse(parsed_Url.query);
console.log("This is parsed URL :",parsed_Url);
console.log("This is parsed Query String :",parsed_queryString);





const q2=b.stringify({
   
    month:'feb',
    year:'2024'
   });  
console.log(q2);
// there is another mothod named encode which works the same way
let obj = {
    name:'localhost',
    page:'admin',
    month:'feb',
    year:'2024'
};
let queryString = b.encode(obj);
console.log(queryString)
// Decode alias for parse method
let str = "f=Categories%3AShorts%3A%3AGender%3Aboys%2Cboys%20girls&plaEnabled=false"; 
let output = b.decode(str); 
console.log("Output: ", output);


const valueToEncode = 'This is node js';
const encodedValue = b.escape(valueToEncode);
console.log(encodedValue); 


const encodedValue1 = 'f=Categories%3AShorts%3A%3AGender%3Aboys%2Cboys%20girls&plaEnabled=false';
const decodedValue = b.unescape(encodedValue1);
console.log(decodedValue); 
