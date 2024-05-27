// Built-in Middleware : there is only one, `express.static`
//      used to load static-assets like HTML files, images etc on client browser
//      should be add at the top before any route handler

const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res)=>{
    res.send('inspect the page and check sources');
})

app.listen(8081);