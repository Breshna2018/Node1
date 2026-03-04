const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send(`
    <h1>Private View</h1>
    <p><a href="/p">public</a></p>
    <p><a href="/foo">Foo</a></p>
`);
});
module.exports = router;