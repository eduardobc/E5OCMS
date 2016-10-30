'use strict';
var e5o_file_name = "e5o-post-meta-model.js - ";
var e5o_mongoose = require('../../config/e5o-mongodb-connect.js');
var e5o_schema = e5o_mongoose.Schema;
var E5OCounterController = require('../../controllers/back-end/e5o-counter-controller.js');

/* NOTE: THIS WILL BE CHANGED BY THE MONGOOSE 5.0.0 USING NATIVE PROMISES */



/* ===== start - Model ===== */


/* -- start - collection model -- */

var e5o_post_meta_schema = new e5o_schema({
    post_meta_id  : { type: Number, required: true, unique: true },
    post_meta_post_id : { type: Number, required: true },
    post_meta_name : { type: String, required: true },
    post_meta_value : { type: String, required: true },
}, { collection: 'e5o_post_meta' });

/* -- end - collection model -- */


/* -- start - collection model DB functions -- */

e5o_post_meta_schema.statics.create_post_meta = function create_post_meta(args_data, callback) {
    e5o_post_meta.create({
        post_meta_id: args_data.id,
        post_meta_post_id: args_data.post_id,
        post_meta_name: args_data.name,
        post_meta_value: args_data.value,
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

E5OCounterController.e5o_create({id:'e5o_post_meta',seq:0}).then(function(result){
    console.log(e5o_file_name+"e5o_post_meta init counter resolved:",result);
}).catch(function(error){
    console.log(e5o_file_name+"e5o_post_meta init counter rejected:",error);
});

/* ===== end - create sequence ===== */

// create collection on DB automatically
var e5o_post_meta = e5o_mongoose.model('e5o_post_meta', e5o_post_meta_schema);
module.exports = e5o_post_meta;
