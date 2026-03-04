const http = require('http');

// Home page
let serverEntery = (Response) => {
    Response.writeHead(200, {'Content-Type':'text/html'});
    Response.write('<h1>This is the home page</h1>');
    Response.write("<a href='/nextpage'>Go to next page</a>");
    Response.end();
}

// Next page
let servernextpage = (Response) => {
    Response.writeHead(200, {'Content-Type':'text/html'});
    Response.write('<h1>This is the next page</h1>');
    Response.write("<a href='/'>Go back to home</a>");
    Response.end();
}

// Handle requests
let onRequest = (Request, Response) => {
    if (Request.method === 'GET' && Request.url === '/') {
        serverEntery(Response);
    } 
    else if (Request.method === 'GET' && Request.url === '/nextpage') {
        servernextpage(Response);
    }
    else {
        Response.writeHead(404, {'Content-Type':'text/html'});
        Response.write('<h1>404 Not Found</h1>');
        Response.end();
    }
}

// Create server
http.createServer(onRequest).listen(3000, '127.0.0.1');
