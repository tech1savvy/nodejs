const express = require('express');
const bodyParser = require('body-parser');
const session = require('cookie-session');
const app = express();
var encoded = bodyParser.urlencoded({extended: true});
app.use(session({
		secret: 'your_secret_key',
		resave: false,
		saveUninitialized: true
}));
let users = [
		{ id: 1, username: 'user1', password: 'password1'},
		{id: 2, username: 'user2',  password: 'password2'}
];

var authenticate = function (req, res, next){
		if (req.session && req.session.user){
				return next();
		}else{
				return res.redirect('/login');
		}
}

app.get('/login', function (req, res, next){
		res.sendFile(__dirname+'/login.html');
})
app.post('/login', encoded, (req, res) => {
		username1 = req.body.username;
		password1 = req.body.password;
		var user
		for(let i=0; i< users.length; i++){
				if(users[i].username === username1 && users[i].password === password1){
						user = users[i];
						break;
				}
		}
		if (user){
				req.session.user = user;
				res.redirect('/home');
		}else {
				res.status(401).send('invalid username or password');
		}
});
app.get('/logout', (req, res)=>{
		req.session = null;
		res.redirect('/login');
});
app.get('/home', authenticate, (req,res)=> {
		res.send(`welcome ${req.session.user.username}!`)
});
app.listen(8081, ()=>{
		console.log(`Server is listening on port 8081`);
})