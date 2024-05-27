const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'calculator.html'));
});


//getting input
app.post('/post', (req, res) => {

    let result;
    const { num1, num2, operator } = req.body;
    console.log(req.body);
    if (operator === '+') {
        console.log(num1);
        result = parseInt(num1) + parseInt(num2);
    }
    else if (operator === '-') {
        result = parseInt(num1) - parseInt(num2);
    }
    else if (operator === '*') {
        result = parseInt(num1) * parseInt(num2);
    }
    else if (operator === '/') {
        result = parseInt(num1) / parseInt(num2);
    }
    res.send(`The result is ${result}`);
});

app.listen(8081);