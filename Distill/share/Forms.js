var exp=require("express")
var bodyParser = require('body-parser');  
var obj=new exp()
obj.use(exp.static('public'));  
var urlencodedParser = bodyParser.urlencoded({ extended: false }) 
obj.get('/',(request,response)=>{
    response.write("<h1>Hello World</h1>")
    response.write("<h1>Hello World1</h1>")
    response.send()
})
obj.get('/about',(request,response)=>{
  
    response.send("Hi, its me")
})
obj.get('/json',(request,response)=>{
    response.json([{
        name:"arwin",
        age: 1
    },
    {
        name:"arwin",
        age: 1,
        a:null
    }])
})
var myLogger = function (req, res, next) {
    console.log('LOGGED')
    next()
 }
 obj.use(function(req, res, next) {

    console.log('happy holidays')
    
    next()
    
    })
obj.use(myLogger)
obj.get('/json2', (req,res)=>{
    var obj={
        a:null,
        b:undefined
    }
    var b1=JSON.stringify(obj)
    res.send(b1)
})

obj.get('/form',(request,response)=>{
    response.sendFile( __dirname + "/form1.html" )
})
// obj.get('/formprocessed', function (req, res) {  
//     res.send({  
//            first_name:req.query.first_name,  
//            last_name:req.query.last_name  
//        });  
//     })  
obj.post('/formprocessed', urlencodedParser, function (req, res) {  
    // Prepare output in JSON format  
    res.send({  
        first_name:req.body.first_name,  
        last_name:req.body.last_name  
    })   
     })  
obj.listen(3000, ()=>{console.log("running on port 3000")});
