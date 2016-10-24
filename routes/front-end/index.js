var express = require('express');
var router = express.Router();

var e5o_views_directory = "front-end/";



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render(e5o_views_directory+'index', { title: 'E5OCMS - index.js' });
});

module.exports = router;
