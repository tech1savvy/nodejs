const express = require('express');
const bodyParser = require('body-parser');
const session = require('cookie-session');
const app=express();
var encoded = bodyParser.urlencoded({extended:true});
app.use(session({
    secret:'Your_secret_key',
    resave:false,
    saveUnitialized:true
}));
let users = [
    {id:1, username:'Aakash', password:'password1'},
    {id:2, username:'Rishu', password:'password2'},
];
var authenticate=function(req,res,next){
    if(req.session && req.session.user){
        return next();
    }
    else{
        return res.redirect('/login');
    }
}
app.get('/login',(req,res)=>{
    res.sendFile(__dirname+"/login.html");
})
app.post('/login',encoded,(req,res)=>{
    username1=req.body.username;
    password1=req.body.password;
    var user;
    for(let i=0;i<users.length;i++){
        if(users[i].username === username1 && users[i].password===password1){
            user=users[i];
            break;
        }
    }
    if(user){
        req.session.user=user;
        res.redirect('/home');
    }
    else{
        res.status(401).send('Invalid username or password');
    }
})
app.get('/logout',(req,res)=>{
    req.session=null;
    res.redirect('/login');
});
app.get('/home',authenticate,(req,res)=>{
    res.send(`Welcome ${req.session.user.username}! This is a home page. <a href="/logout">Logout</a> `);
})
app.listen(6001,()=>{
    console.log("Server is listening on port 6001");
})