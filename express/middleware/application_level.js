// middleware is executed before a request is recieved by route handler
// and before the response is sent to the client

// Types of Middlewares
// 1: Application-Level Middleware : implemented using app.use() method, as used below for logger function
// ..
// 5: Third-party Middleware : ex: body-parser, cookie-parser, mongoose etc available as npm packages

const express = require('express');
const path = require('path');
const app = express();

let count = 1;

function logger(req,res,next){
    count--;
    console.log(count);
    next(); // to pass control to the next middleware function or route handler
}

app.use(logger); // adds the function to middleware

app.get('/',(req,res)=>{
    count++;
    res.send(String(count)); // = 1 becuase middleware is exceuted first
})

// add middleware directly to route handler
function logOriginalUrl (req, res, next) {
    console.log('Request URL:', req.originalUrl)
    next()
}
  
function logMethod (req, res, next) {
    console.log('Request Type:', req.method)
    next()
}
  
const logStuff = [logOriginalUrl, logMethod]
  app.get('/log', logStuff, (req, res) => {
    res.send('check console for url and request type')
  })

app.listen(8081);