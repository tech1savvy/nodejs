var express = require('express');  
var app = express();  
var bodyParser = require('body-parser');  

var urlencodedParser = bodyParser.urlencoded({ extended: false })  
app.use(express.static('public'));  
app.get('/form', function (req, res) {  
   res.sendFile( __dirname + "/" + "form.html" );  
})  
app.post('/formprocessed', urlencodedParser, function (req, res) {  
   // Prepare output in JSON format  
   res.send({  
       first_name:req.body.first_name,  
       last_name:req.body.last_name  
   })  
})  
var server = app.listen(8000, function () {  
  var host = server.address().address  
  var port = server.address().port  
  console.log("Example app listening at http://%s:%s", host, port)  
})  