'use strict';
var e5o_file_name = "e5o-page-model.js - ";
var e5o_mongoose = require('../../config/e5o-mongodb-connect.js');
var e5o_schema = e5o_mongoose.Schema;
var E5OCounterController = require('../../controllers/back-end/e5o-counter-controller.js');

/* NOTE: THIS WILL BE CHANGED BY THE MONGOOSE 5.0.0 USING NATIVE PROMISES */



/* ===== start - Model ===== */


/* -- start - collection model -- */

var e5o_page_schema = new e5o_schema({
    page_id  : { type: Number, required: true, unique: true },
    page_title : { type: String, required: true },
    page_content : { type: String, required: true, default: '' },
    page_excerpt : { type: String, required: true, default: '' },
    page_status : { type: String, required: true },
    page_date : { type: Date, required: true },
    page_modified_date : { type: Date, required: true },
    page_author : { type: Number, required: true, default: 1 },
    page_page_type_id : { type: String, required: true },
    page_template : { type: String, required: false },
    page_slug : { type: String, required: true },
}, { collection: 'e5o_page' });

/* -- end - collection model -- */


/* -- start - collection model DB functions -- */

e5o_page_schema.statics.create_page = function create_page(args_data, callback) {
    e5o_page_meta.create({
        page_id: args_data.id,
        page_title: args_data.title,
        page_content: args_data.content,
        page_excerpt: args_data.excerpt,
        page_status: args_data.status,
        page_date: args_data.date,
        page_modified_date: args_data.modified_date,
        page_author: args_data.author,
        page_page_type_id: args_data.page_type_id,
        page_template: args_data.template,
        page_slug: args_data.slug,
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

E5OCounterController.e5o_create({id:'e5o_page',seq:0}).then(function(result){
    console.log(e5o_file_name+"e5o_page init counter resolved:",result);
}).catch(function(error){
    console.log(e5o_file_name+"e5o_page init counter rejected:",error);
});

/* ===== end - create sequence ===== */

// create collection on DB automatically
var e5o_page = e5o_mongoose.model('e5o_page', e5o_page_schema);
module.exports = e5o_page;
