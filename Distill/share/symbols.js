// // const k1=Symbol("Arwin");
// // const k2=Symbol("Dhillon");
// // myobj={};
// // myobj[k1]="First Name";
// // myobj[k2]="Last Name";
// // myobj["k1"]="Kaur";
// // console.log(myobj.k1); //"k1"
// // for(i in myobj) {
// // console.log(i,myobj[i]);
// // }

// // const firstobj={firstname: "arwin", lastname: "Dhillon", marks:25 };
// // console.log(firstobj.firstname + " " + firstobj.lastname + firstobj.marks);

// // const person = {};
// // person.firstName = "John";
// // person.lastName = "Doe";
// // person.age = 50;
// // person.eyeColor = "blue";
// // person["height"]=165;
// // console.log(person);
// // console.log(person["height"]);
// // console.log(person.height);

// // const firstobj = new Object();
// // firstobj.name="arwin";
// // firstobj.last="dhillon";
// // firstobj["marks"]=50;
// // console.log(firstobj);


// // const person = {
// //     firstName:"John",
// //     lastName:"Doe",
// //     age:50, eyeColor:"blue"
// //   }

// // person.firstName="hello";
// // console.log(person);


// // function Person(first, last, age, eye) {
// //     this.firstName = first;
// //     this.lastName = last;
// //     this.age = age;
// //     this.eyeColor = eye;
// //   }
// //   const obj=new Person("john","walker",60,"black");
// //   console.log(obj);
// //   obj["weight"]=70;
// //   obj.height=100;
// //   console.log(obj);

class Book
 {
constructor (bookName, publisher, numberOfCopies) {
this.bookName = bookName;
this.publisher = publisher;
this.numberOfCopies = numberOfCopies; }
}
const book = new Book("Harry Potter", "Bloomsberry", 100);
console.log(book);

// // Arrays

// // const arr=[10,20,30,40];
// // console.log(arr[0]);

// // const arr1=Array(10,20,30,50);
// // console.log(arr1);
// // console.log(arr1[2]);
// // arr1[5]=60;
// // console.log(arr1);

// // const arr2=new Array();
// // arr2[0]=10;
// // console.log(arr2);


// // const arr=[10,20,30,40,50]
// // const arr1=[100,200,300,400,500]
// // const arr2=[60,70];
// // const arr3=arr.concat(arr1,arr2);
// // console.log(arr3)

// const arr=[10,20,30,40,50];
// console.log(arr.length);
// console.log(arr.at(2));
// //console.log(arr.join(" "));
// arr.push(200);
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.shift();
// console.log(arr);
// arr.unshift(10);
// console.log(arr);
// arr[0] =200;
// console.log(arr);
// arr[arr.length]=2000;
// console.log(arr);
// arr.copyWithin(2,0,3);
// console.log(arr);
// arr.splice(2,1);
// console.log(arr);

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1);
// console.log(citrus);
// arr[6]=20;
// console.log(arr.indexOf(20));
// console.log(arr.lastIndexOf(20));
// console.log(arr.includes(1000));
// arr.sort();
// console.log(arr);
// arr.reverse();
// console.log(arr);


// var numbers = [10, 4, 8, 12,3];

// var even = numbers.every(function(x)
// {

//   return x%2 == 0;

// });

// console.log(even);

// var array_1 = [2, 3, 4, 5, 6];
// array_1.forEach(function(num, i) {

//     array_1[i] *= 2

// });

// console.log(array_1);

// var numbers = [1, 2, 3];

// var val = numbers.entries();
// console.log(val.next().value);  

// console.log(val.next().value);  

// console.log(val.next().value);


// // from

// console.log(Array.from("hello"));


// // keys
// arr4=[10,20,30,40];
// console.log(Array.from(arr4.keys()))

/// operators starts from here


// var a=1;
// var b=2;
// a=b;
// console.log(a);
// a=a+b // a+=b
// console.log(a);
// a**=b;
// console.log(a);

// console.log('true'&&'true');
// console.log('true'&&'false');
// console.log('true'||'false');
// console.log(!true);

// var age=19;
// var age = 19

// var status = (age >= 18) ? (console.log('adult'), console.log('can watch movie')) : (console.log('minor'), console.log('cant watch movie'));

// var x=[0,1,2,3];

// var arr1=[x, x];
// for(i=0, j=3; i<=j; i++, j--)
// {
//   console.log(arr1[i][j]);
// }

// const book={

//     bookname : "Harry Potter and the Prisoner of Azkaban",
    
//     publisher : "Bloomsburry",
    
//     numberOfCopies :100
    
//     }
    
    
//     console.log(book.bookname); // returns Harry Potter and the Prisoner of Azkaban
    
//     console.log(delete book.bookname); //returns true
    
//     console.log(book.bookname); // returns undefined
    
    
//     console.log(delete book); // returns false, can only delete properties
    
    
// relational operator

// var a=[10,20,30,40,50];
// console.log(0 in a);

// var b=["10","20","30","40","50"];
// console.log("find" in a);

// var obj={first:"a", last:"b"};
// console.log('a' in obj);

// var a=[10,20,30,40,50];
// var b=[50,60,...a];
// console.log(b);
// console.log(...a, ...b);

// var obj={a:10, b:20};
// var obj1={c:30, ...obj};
// console.log(obj1);

// var [a,...b]=[10, 20,30,40];
// console.log(a);
// console.log(b);

// const book={

//     bookname:'Node js basics',
    
//     publisher:'TMH',
    
//     CopiesBought:200,
    
//     CopiesLeft:100
    
//     }
    
    
//     const{bookname, publisher, ...Copies} = book;
    
//     console.log(Copies);

// var arrt=[10,20,40];
// console.log(arrt[0]);

// var foo = ["One", "Two", "Three"]

// var [one, two, three] = foo;

// console.log(one);

// console.log(two);

// console.log(three);

// var a=10; 
// b=20;
// c=30;
// if(a>b && a>c){console.log("a is the greatest")
// }    else if (b>a && b>c)
// {console.log("b is the greatest")}
//     else{console.log("c is the greatest")};

// var x=7;
// switch(x){
//     case 0:
//         console.log("Sunday");
//         break;
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//             console.log("Tuesdat");
//             break;
//     default:
//                 console.log("No day");
//                 break;

// }

// for(var i=0; i<5;i++)
// {
//     console.log(i);
// }

// i=0;
// do
// {
//     console.log(i);
//     i++;
// }while(i<5);

// i=0;
// while(i<5)
// {console.log(i);
//     i++; 
// }

const obj={firstname:"Arwin", lastname:"Dhillon", marks:10};
for(i in obj)
{
    console.log(obj[i]+" ");
}

var array=[10,20,30]
for(i of array)
{
    console.log(i+" ");
}

for(i=0;i<5;i++)
{
    if(i===3)
    {continue;
    }
    console.log(i);
}
