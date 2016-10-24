var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send('E5OCMS - API - index.js');
});

module.exports = router;
