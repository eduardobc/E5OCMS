'use strict';
var e5o_file_name = "e5o-media-model.js - ";
var e5o_mongoose = require('../../config/e5o-mongodb-connect.js');
var e5o_schema = e5o_mongoose.Schema;
var E5OCounterController = require('../../controllers/back-end/e5o-counter-controller.js');

/* NOTE: THIS WILL BE CHANGED BY THE MONGOOSE 5.0.0 USING NATIVE PROMISES */



/* ===== start - Model ===== */


/* -- start - collection model -- */

var e5o_media_schema = new e5o_schema({
    media_id  : { type: Number, required: true, unique: true },
    media_name : { type: String, required: true },
    media_file_name : { type: String, required: true },
    media_file_name_clean : { type: String, required: true },
    media_mime_type : { type: String, required: true },
    media_date : { type: Date, required: true },
}, { collection: 'e5o_media' });

/* -- end - collection model -- */


/* -- start - collection model DB functions -- */

e5o_media_schema.statics.create_media = function create_media(args_data, callback) {
    e5o_media.create({
        media_id: args_data.id,
        media_name: args_data.name,
        media_file_name: args_data.file_name,
        media_file_name_clean: args_data.file_name_clean,
        media_mime_type: args_data.mime_type,
        media_date: args_data.date,
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

E5OCounterController.e5o_create({id:'e5o_media',seq:0}).then(function(result){
    console.log(e5o_file_name+"e5o_media init counter resolved:",result);
}).catch(function(error){
    console.log(e5o_file_name+"e5o_media init counter rejected:",error);
});

/* ===== end - create sequence ===== */


// create collection on DB automatically
var e5o_media = e5o_mongoose.model('e5o_media', e5o_media_schema);
module.exports = e5o_media;
