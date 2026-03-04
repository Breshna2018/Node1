const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send(`
    <h1>Public View</h1>
    <p><a href="/p">Private</a></p>
    <p><a href="/foo">Foo</a></p>
`);
});
module.exports = router;