// // const fs = require('fs');
// // let rawdata = fs.readFileSync('students.json',{encoding:'utf8'});
// // let student = JSON.parse(rawdata);
// // console.log(student);
// // console.log(rawdata);

// // let fs=require('fs');
// // let data=fs.readFileSync('students.json');
// // let parseddata=JSON.parse(data);
// // console.log(parseddata);
// // console.log(data);

// // const fs = require('fs');
// // fs.readFile('students.json', (err, data) => {
// //     if (err) throw err;
// //     let student = JSON.parse(data);
// //    console.log(JSON.stringify(student,null,5));
// //      console.log(JSON.stringify(student,['Title'],10));
// //     console.log(student);
// // });



// var fs=require('fs')
// //var data= fs.readFileSync('students.json');
// //var data1=JSON.parse(data)
// //var data2=JSON.stringify(data1,["Genre"],"     ")
// //console.log(data2)

// // fs.readFile('students.json',(err,data)=>{
// //   if(err) throw err;
// //   var data4=JSON.parse(data);
// //   console.log(data4);
// // });

// // const student={
// //   name:"Arwin",
// //   age:29,
// //   Marks:100
// // };
// // var sdata=JSON.stringify(student,['Marks'],5)
// // //var wdata=fs.writeFileSync('students1.json',sdata)
// // //console.log(wdata)
// // fs.writeFile('students1.json',sdata,(err)=>{
// //   console.log("Data written succesfully");
// // })

// //fs.renameSync('students.json','hello.json')
// // fs.rename('students1.json','student.json',(err)=>{
// //   if (err) throw err;
// //   console.log("file rename successfully")
// // })

// //fs.unlinkSync('student.json')

// // const students={
// //   name:"Arwin"
// // }
// // var parse=JSON.stringify(students)
// // fs.writeFile('students.json',parse,(err)=>{
// // if(err) throw err
// // console.log("data written successfulyy")
// // })
// // fs.unlink('students.json',(err)=>{
// //   if (err) throw err
// //   console.log("data removed")
// // })

// //fs.copyFileSync('hello.json','hello1.json',7)
// // fs.copyFile('hello.json','hello2.json',(err)=>{
// //   if (err) throw err
// //   console.log("copied successfully")
// // })
// // var data={color:'red'}
// // var data1=JSON.stringify(data)
// // fs.appendFileSync('hello3.json',data1)

// //fs.openSync('hello4.json','w')

// var data=fs.readFileSync('hello3.json')
// var parseddata=JSON.parse(data)
// var sp=JSON.stringify(parseddata)
// console.log(parseddata)
// console.log(sp)



// const fs=require('fs')
// // var b=fs.readFileSync('hello4.json')
// // var parsed=JSON.parse(b)
// // console.log(parsed);

// var b=fs.readFile("hello4.json",(err)=>
// {
//     if (err) throw error
//     console.log(b)
// })

// var fs=require("fs")
// var b=fs.readFileSync('hello.json')
// parseddata=JSON.parse(b)

// console.log(parseddata);

// fs.readFile('hello.json',(err,data)=>{
//     if (err) return err
//     let parsed=JSON.parse(data)
//     console.log(parsed);
// })

// var json1={
//     name:"Arwin",
//     age:13,
//     Marks:34
// }
// var parsed= JSON.stringify(json1)
// var b=fs.writeFileSync("student.json",parsed)
// console.log(b)

// fs.writeFile('students1.json',parsed,(err)=>{
//     if (err) return error

//   console.log("Data written succesfully");
// })

// fs.unlinkSync("hello1.JSON")


// fs.unlink('students.json',(err)=>{
//   if (err) throw err
//   console.log("data removed")
// })

// fs.renameSync("hello1.json","student2.json")

// fs.rename("hello1.json","student2.json", (err)=>{
//     if (err) throw err
//     console.log("data renamed")}
// )

// fs.copyFileSync("hello1.json","student2.json")

// -fs.copyFile("hello1.json","student2.json", (err)=>{
//     if (err) throw err
//     console.log("data renamed")}
// )


// var a=require("fs")
// var b=a.readFileSync('file.json',{encoding:"utf8"})
// var parsed=JSON.parse(b)
// console.log(parsed)

// a.readfile('file.json',(err, data)=>{
//     if (err) throw err;
//     let parse=JSON.stringify(data)
//     console.log(parse);
// })

// var json1={
//     name:"A",
//     age:29,
//     marks:10
// }
// var parsed=JSON.stringify(json1)
// var b=fs.writeFileSync("students.json",parsed)
// console.log(b)

// fs.writeFile("students.json",parsed,(err)=>{
//     if(err) throw err
//     console.log("File written successfully")
// })

// fs.unlinkSync("hello1.json")

// fs.unlink("hello.json",(err)=>{
//     if(err) throw err
//     console.log("File written successfully")
// })

// fs.renameSync("hello1.json","hello2.json")
// fs.rename("hello.json","hello2.json",(err)=>{
//     if(err) throw err
//     console.log("File written successfully")
// })




// fs.copyFileSync("hello1.json","hello2.json")




// var a=require('fs')
// var b=a.readFileSync("hello.json",{encoding:"UTF8"})
// var parsed=JSON.parse(b)
// var parsed1=JSON.stringify(parsed, ["Marks"],5)
// console.log(parsed1);


// a.readFile("hello.json", (err,data)=>{
//     if (err) return err;

// let parsed=JSON.parse(data)
// console.log(parsed)
// })

// var fs=require('fs')

// var a={
//     Name:"Arwin",
//     Age:19
// }
// var parsed=JSON.stringify(a)
// var b=fs.writeFileSync("Students.json",parsed)
// console.log(b)


// fs.writeFile("staudent1.json",parsed,(err)=>{
//     if (err) throw err
//     console.log("Written async")
// })

// fs.unlinkSync("student1.json")

// fs.unlink("Student2.json", (err)=>{
//     if (err) throw err
//     console.log("deleted async")
// })

// fs.copyFileSync("Student.json","hello.json")

// fs.copyFile("Student.json","hello.json", (err)=>{
//     if (err) throw err
//     console.log("renamed async")
// })


var fs = require("fs"); 
    
// Asynchronous read 
console.log("Asynchronous read method:"); 
fs.readFile('test.txt', function (err, data) { 
   if (err) { 
      return console.error(err); 
   } 
   console.log("Data in the file is - " + data.toString()); 
});

//
var fs = require("fs"); 

// Synchronous read 
console.log("Synchronous read method:"); 
var data = fs.readFileSync('test.txt'); 
console.log("Data in the file sync is - " + data.toString()); 

