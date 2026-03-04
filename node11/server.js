const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>This HTML page for Node</h1>');
    res.end();
});

server.listen(3000, '127.0.0.1', () => {
    console.log('Server is running at http://127.0.0.1:3000');
});