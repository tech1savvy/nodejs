// 2: Router-Level Middleware : implemented using router.use()

const express = require('express');
const router = express.Router();
const app = express();

// A middleware function with no mount path. 
// This code is executed for every routing request
router.use((req, res, next) => {
    console.log('Time:', Date.now());
    next();
});


router.get('/', (req, res) => {
    res.send('Home page');
});

router.get('/about', (req, res) => {
    res.send('About page');
});

app.use(router) // add router to middleware
app.listen(8081);