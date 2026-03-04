const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send(`
    <h1>foo View</h1>
    <p><a href="/p">Private</a></p>
    <p><a href="/foo">publicn</a></p>
`);
});
module.exports = router;