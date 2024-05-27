const express = require('express');
const bodyParser = require('body-parser'); // an thrid-party middleware
const path = require('path');

const app = express();


// .post():
// - Used for sending data to the server.
// - Data in the Body part
// - No data length restrictions.
// - Not cached by browsers, so suitable for sensitive data

// middlware to parse the route request url
app.use(bodyParser.urlencoded({ extended: false }));
// If POST URL = `user[name]=John&user[age]=30`
// extended: true: , then `req.body` = `{ user: { name: 'John', age: '30' } }`. (a nested object structure)
// extended: false, then  `req.body` = `{ 'user[name]': 'John', 'user[age]': '30' }`. (flat object structure with no nesting)

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname ,'form.html')); //sending file to webpage
});

// handle get request at /post route
app.get('/post', (req, res) => {
  res.send('Post Created');
});

// handle post request at /post route
app.post('/post', (req, res) =>{

  console.log(req.body);
  // Extracting request from body
  const { title, content } = req.body;
  // OR
  // const title = req.body.title; const content = req.body.content;

  console.log('Received POST request with title:', title, 'and content:', content);
});


app.listen(8081);