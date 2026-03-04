const http=require('http');
let onRequest=(Request,Response)=>{
    console.log('clint made a request');
    console.log( Request.url);
    console.log(request, method);
    Response.end()
}
http.createServer(onRequest).listen(3000,'127.0.0.1');

