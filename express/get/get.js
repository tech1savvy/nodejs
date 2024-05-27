const express = require('express');
const app = express(); // object to use express funcitons
const path = require('path');

// routing : handle how server responds to client requests

// .get() : sends data to header, handle GET requests made in url
// '/' : root
app.get('/',(req,res)=>{
	// inside handler or callback function
	res.statusCode = 200; // 200 to 299 HTML response codes: successful response
	res.send('hello world');
})

// send html code
app.get('/about',(req,res)=>{
	res.send(`<h1> About Us</h1>`);
})

// sends html file
app.get('/home',(req,res)=>{
	res.sendFile(path.join(__dirname,'home.html'));
})

// req.query : object containing the property for each query string in the route
// open http://localhost:8081/search?keyword=express&location=sanfrancisco
app.get('/search',(req,res)=>{
	res.send(req.query);
})

// send file to download
app.get('/download',(req,res)=>{
    res.download(path.join(__dirname,'file.txt'));
})

// match more than one url suing single route
app.all('/social/*',(req,res)=>{
	// try /social/github
	// try /social/leetcode
    console.log(req.url);
	res.send("our social media handles : @github , @leetcode");
});

// should be added at the end
app.get('*', (req, res) => { // match any url, used when no other route to handle that url is available
    res.statusCode = 404; // 400 to 400 : client response error
	// here, its the client's error to send wrong url
    res.end('<p>The page is not found on Server</p>');

});


// app.listen(8081);
app.listen(8081, ()=>{
	console.log('server is listening on http://localhost:8081');
});