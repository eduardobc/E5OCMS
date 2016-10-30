'use strict';
var e5o_file_name = "e5o-post-model.js - ";
var e5o_mongoose = require('../../config/e5o-mongodb-connect.js');
var e5o_schema = e5o_mongoose.Schema;
var E5OCounterController = require('../../controllers/back-end/e5o-counter-controller.js');

/* NOTE: THIS WILL BE CHANGED BY THE MONGOOSE 5.0.0 USING NATIVE PROMISES */



/* ===== start - Model ===== */


/* -- start - collection model -- */

var e5o_post_schema = new e5o_schema({
    post_id  : { type: Number, required: true, unique: true },
    post_title : { type: String, required: true },
    post_content : { type: String, required: true, default: '' },
    post_excerpt : { type: String, required: true, default: '' },
    post_status : { type: String, required: true, enum: ['publish', 'pending', 'future', 'transh'] },
    post_date : { type: Date, required: true },
    post_modified_date : { type: Date, required: true },
    post_author : { type: Number, required: true, default: 1 },
    post_post_type_id : { type: String, required: true },
}, { collection: 'e5o_post' });

/* -- end - collection model -- */


/* -- start - collection model DB functions -- */

e5o_post_schema.statics.create_post = function create_post(args_data, callback) {
    e5o_post_meta.create({
        post_id: args_data.id,
        post_title: args_data.title,
        post_content: args_data.content,
        post_excerpt: args_data.excerpt,
        post_status: args_data.status,
        post_date: args_data.date,
        post_modified_date: args_data.modified_date,
        post_author: args_data.author,
        post_post_type_id: args_data.post_type_id,
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

E5OCounterController.e5o_create({id:'e5o_post',seq:0}).then(function(result){
    console.log(e5o_file_name+"e5o_post init counter resolved:",result);
}).catch(function(error){
    console.log(e5o_file_name+"e5o_post init counter rejected:",error);
});

/* ===== end - create sequence ===== */


// create collection on DB automatically
var e5o_post = e5o_mongoose.model('e5o_post', e5o_post_schema);
module.exports = e5o_post;
