const express = require('express');
const path = require('path');
const { body, validationResult } = require('express-validator');

const app = express();

app.use(express.urlencoded({extended: true}));


app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname ,'signup.html'));
})

app.post('/signup', 
  // Validation chain
  [
    body('name').notEmpty().withMessage('Name is required'),
    body('age').notEmpty().withMessage('Age is required').isInt({ min: 13, max: 100 }).withMessage('Age must be more than 13'),
    body('mobile').notEmpty().withMessage('Mobile number is required').isMobilePhone().withMessage('Invalid mobile number'),
    body('mail').notEmpty().withMessage('Email is required').isEmail().withMessage('Invalid email address'),
    body('password').notEmpty().withMessage('Password is required').isLength({ min: 8 }).withMessage('Password must be at least 8 characters'),
  ], 
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // If validation passes, continue with your logic here
    res.send('Signup successful');
});

app.listen(8081);