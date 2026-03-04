const http = require('http');
const express = require('express');
const app = express();
const publicRouter = require('./routers/public');
const privateRouter = require('./routers/private');
const fooRouter = require('./routers/foo');
app.use('/', publicRouter);
app.use('/private', privateRouter);
app.use('/foo', fooRouter);
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});