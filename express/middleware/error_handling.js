// Error-Handling Middleware

const express = require('express')
const app = express();

app.get('/', (req, res)=>{
   let err = new Error("Something went wrong");
   next(err);
 });

app.use((err, req, res, next)=> {
    res.status(500); // 500 to 599 : used to denote server-response errors
    res.send("Oops, something went wrong.")
 });

app.listen(8081)