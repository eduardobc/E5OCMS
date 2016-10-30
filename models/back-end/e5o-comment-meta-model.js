'use strict';
var e5o_file_name = "e5o-comment-meta-model.js - ";
var e5o_mongoose = require('../../config/e5o-mongodb-connect.js');
var E5OCounterController = require('../../controllers/back-end/e5o-counter-controller.js');
var e5o_schema = e5o_mongoose.Schema;

/* NOTE: THIS WILL BE CHANGED BY THE MONGOOSE 5.0.0 USING NATIVE PROMISES */



/* ===== start - Model ===== */


/* -- start - collection model -- */

var e5o_comment_meta_schema = new e5o_schema({
    comment_meta_id  : { type: Number, required: true, unique: true },
    comment_meta_name : { type: String, required: true },
    comment_meta_value : { type: String, required: true },
}, { collection: 'e5o_comment_meta' });

/* -- end - collection model -- */


/* -- start - collection model DB functions -- */

e5o_comment_meta_schema.statics.create_comment_meta = function create_comment_meta(args_data, callback) {
    e5o_comment_meta.create({
        comment_meta_id: args_data.id,
        comment_meta_name: args_data.name,
        comment_meta_value: args_data.value,
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

E5OCounterController.e5o_create({id:'e5o_comment_meta',seq:1}).then(function(result){
    console.log(e5o_file_name+"e5o_comment_meta init counter resolved:",result);
}).catch(function(error){
    console.log(e5o_file_name+"e5o_comment_meta init counter rejected:",error);
});

/* ===== end - create sequence ===== */




// create collection on DB automatically
var e5o_comment_meta = e5o_mongoose.model('e5o_comment_meta', e5o_comment_meta_schema);
module.exports = e5o_comment_meta;
