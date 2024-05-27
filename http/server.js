const http = require('http');

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        if (req.url === '/') { // Homepage
            res.statusCode = 200;
            
            res.end('Welcome to the homepage!\n');
        } else if (req.url === '/support') { // Support page
            res.statusCode = 200;
            
            res.end('Welcome to the support page!\n');
        } else {
            res.statusCode = 404;
            
            res.end('Page not found\n');
        }
    } else {
        res.statusCode = 400;

        res.end('Invalid request\n');
    }
});

server.listen(3000, '127.0.0.1', () => {
    console.log('Server is listening on port 3000');
});