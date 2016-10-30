'use strict';
var e5o_file_name = "e5o-comment-model.js - ";
var e5o_mongoose = require('../../config/e5o-mongodb-connect.js');
var e5o_schema = e5o_mongoose.Schema;
var E5OCounterController = require('../../controllers/back-end/e5o-counter-controller.js');

/* NOTE: THIS WILL BE CHANGED BY THE MONGOOSE 5.0.0 USING NATIVE PROMISES */



/* ===== start - Model ===== */


/* -- start - collection model -- */

var e5o_comment_schema = new e5o_schema({
    comment_id  : { type: Number, required: true, unique: true },
    comment_post_id : { type: String, required: true },
    comment_author_id : { type: String, required: true },
    comment_email : { type: String, required: true, default: '' },
    comment_date : { type: Date, required: true },
    comment_content : { type: String, required: true },
    comment_parent : { type: Number, required: true },
}, { collection: 'e5o_comment' });

/* -- end - collection model -- */


/* -- start - collection model DB functions -- */

e5o_comment_schema.statics.create_comment = function create_comment(args_data, callback) {
    e5o_comment_meta.create({
        comment_id: args_data.id,
        comment_post_id: args_data.post_id,
        comment_author_id: args_data.author_id,
        comment_email: args_data.email,
        comment_date: args_data.date,
        comment_content: args_data.content,
        comment_parent: args_data.parent,
    }, function (err, result) {
        if( err ) {
            callback({err:err,result:result});
        } else {
            callback({result:result});
        }
    });
};

/* -- end - collection model DB functions -- */


/* ===== end - Model ===== */


/* ===== start - create sequence ===== */

E5OCounterController.e5o_create({id:'e5o_comment',seq:0}).then(function(result){
    console.log(e5o_file_name+"e5o_comment init counter resolved:",result);
}).catch(function(error){
    console.log(e5o_file_name+"e5o_comment init counter rejected:",error);
});

/* ===== end - create sequence ===== */


// create collection on DB automatically
var e5o_comment = e5o_mongoose.model('e5o_comment', e5o_comment_schema);
module.exports = e5o_comment;
