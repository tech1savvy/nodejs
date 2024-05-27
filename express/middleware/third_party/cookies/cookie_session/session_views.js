const express = require('express');
const cookieSession = require('cookie-session');
const path = require('path');
const app = express();

app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2'],
  maxAge: 60 * 1000 // session will exprire after 1 minute
}));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'session_views.html'));
   
});

app.post('/views', (req, res) => {
  console.log(req.session);
  if(req.session.views){
    req.session.views++;
    res.send(req.session.views.toString());
  }else{ // req.session.views does not exist
    req.session.views = 1; // creates
    res.send(req.session.views.toString());
  }
});

app.listen(8081);