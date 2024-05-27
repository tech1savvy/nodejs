// var a=10;
// console.log(typeof a);

// var b=BigInt("0xf0000000000000000000fffffffffffffffff");
// console.log(typeof b);

// var d=Symbol();
// var e=Symbol("h");
// var f=Symbol("h");
// console.log(e===f);

 const k1=Symbol("Arwin");
 const k2=Symbol("Dhillon");
 myobj={};
 console.log(myobj);
myobj[k1]="First Name";
myobj[k2]="Last Name";
console.log(myobj);
console.log(myobj.[k1]);
// // myobj["k1"]="Kaur";
// // console.log(myobj.k1);

var obj1={firstname:"hello", lastname:"nrn"};
console.log(obj1.firstname);




obj1["age"]=47;
console.log(obj1);
var obj2=new Object();
obj2["age"]=47;

var arr=[10,20,30,40,50];
console.log(arr);
var arr1=new Array();
arr1[0]=10;
arr1[10]=100;


arr3=new Array(5);
arr3[0]=10;
arr3[1]=20;
arr3[2]=30;
arr3[3]=40;
arr3[4]=50;
console.log(arr3.length);
arr3.push(60);
arr3.pop();

console.log(arr3.join("*"))



var a=10;
var b=10;
console.log(a===b);

'true' && 'true'
'true' && (10<=20)
!true

var age=20

age<18?minor:adult)


obj={fruit1:"A",fruit2:"B"}
delete(obj)

arr1=[10,20,30]
arr2=[40,50,60]
arr3=[10,...arr1,...arr2]


