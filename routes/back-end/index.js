var e5o_file_name = "router/back-end/index.js";
var express = require('express');
var router = express.Router();

var e5o_views_directory = "back-end/";

/* ===== start - instances controller ===== */

var E5OMediaController = require('../../controllers/back-end/e5o-media-controller.js');
var E5OPostMetaController = require('../../controllers/back-end/e5o-post-meta-controller.js');
var E5OPostController = require('../../controllers/back-end/e5o-post-controller.js');
var E5OPageController = require('../../controllers/back-end/e5o-page-controller.js');
var E5OPostTypeController = require('../../controllers/back-end/e5o-post-type-controller.js');
var E5OOptionController = require('../../controllers/back-end/e5o-option-controller.js');
var E5OUserController = require('../../controllers/back-end/e5o-user-controller.js');
var E5OCommentController = require('../../controllers/back-end/e5o-comment-controller.js');
var E5OCommentMetaController = require('../../controllers/back-end/e5o-comment-meta-controller.js');
var E5OUserMetaController = require('../../controllers/back-end/e5o-user-meta-controller.js');

/* ===== start - instances controller ===== */







/* ===== start - back-end router ===== */

router.get('/', function(req, res, next) {
    console.log("/e5o_admin/ - E5OCMS ADMIN");
    res.render(e5o_views_directory+'index', { title: 'E5OCMS - index.js' });
});

/* ===== end - back-end router ===== */




module.exports = router;
