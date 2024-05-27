const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'downloader.html'));
})

// send file to download
app.post('/download',(req,res)=>{
    const {fileName} = req.body
    console.log(fileName);
    res.download(path.join(__dirname,fileName));
})

app.listen(8081);