'use strict';
var e5o_file_name = "e5o-post-type-model.js - ";
var e5o_mongoose = require('../../config/e5o-mongodb-connect.js');
var e5o_schema = e5o_mongoose.Schema;
var E5OCounterController = require('../../controllers/back-end/e5o-counter-controller.js');

/* NOTE: THIS WILL BE CHANGED BY THE MONGOOSE 5.0.0 USING NATIVE PROMISES */



/* ===== start - Model ===== */


/* -- start - collection model -- */

var e5o_post_type_schema = new e5o_schema({
    post_type_id  : { type: Number, required: true, unique: true },
    post_type_title : { type: String, required: true },
    post_type_name : { type: String, required: true, default: '' },
    post_type_description : { type: String, required: true, default: '' },
    post_type_status : { type: String, required: true, enum: ['active', 'deactive'] },
    post_type_archive_template : { type: String, required: false },
    post_type_single_template : { type: String, required: false },
    post_type_slug : { type: String, required: true },
}, { collection: 'e5o_post_type' });

/* -- end - collection model -- */


/* -- start - collection model DB functions -- */

e5o_post_type_schema.statics.create_post_type = function create_post_type(args_data, callback) {
    e5o_post_type.create({
        post_type_id: args_data.id,
        post_type_title: args_data.title,
        post_type_name: args_data.name,
        post_type_description: args_data.description,
        post_type_status: args_data.status,
        post_type_archive_template: args_data.archive_template,
        post_type_single_template: args_data.single_template,
        post_type_slug: args_data.slug,
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

E5OCounterController.e5o_create({id:'e5o_post_type',seq:0}).then(function(result){
    console.log(e5o_file_name+"e5o_post_type init counter resolved:",result);
}).catch(function(error){
    console.log(e5o_file_name+"e5o_post_type init counter rejected:",error);
});

/* ===== end - create sequence ===== */


// create collection on DB automatically
var e5o_post_type = e5o_mongoose.model('e5o_post_type', e5o_post_type_schema);
module.exports = e5o_post_type;
