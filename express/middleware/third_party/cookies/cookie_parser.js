let express = require('express');
let cookieParser = require('cookie-parser');
let app = express();

/*
- used to parse cookies attached to the client request object. 
- i.e read cookie data sent from the client
- signed cookies: adds a signature that allows the server to verify that the cookie data has not been tampered with on the client side.
*/

app.use(cookieParser('your secret here')); // Add a secret for signed cookies

app.get('/setcookies', (req, res)=>{
   //Setting the normal cookie
   res.cookie('normalCookie', 'normalValue', { maxAge: 60*1000});
   
   //Setting the signed cookie
   res.cookie('signedCookie', 'signedValue', { maxAge: 60*1000, signed: true });
   
   return res.send('Cookies have been set');
});

app.get('/getcookies', (req, res) =>{
  //Getting the normal cookie
  let normalCookie = req.cookies.normalCookie;
  
  //Getting the signed cookie
  let signedCookie = req.signedCookies.signedCookie;

  if (normalCookie === undefined || signedCookie === undefined)
  {
    // no: set a new cookie
    res.send('No cookies for you');
  } 
  else
  {
    // yes, cookies were already present 
    res.send('normalCookie : ' + normalCookie + ', signedCookie : ' + signedCookie);
  } 
});

let server = app.listen(8081);