'use strict';
var e5o_file_name = "e5o-user-model.js - ";
var e5o_mongoose = require('../../config/e5o-mongodb-connect.js');
var e5o_schema = e5o_mongoose.Schema;
var E5OCounterController = require('../../controllers/back-end/e5o-counter-controller.js');

/* NOTE: THIS WILL BE CHANGED BY THE MONGOOSE 5.0.0 USING NATIVE PROMISES */



/* ===== start - Model ===== */


/* -- start - collection model -- */

var e5o_user_schema = new e5o_schema({
    user_id  : { type: Number, required: true, unique: true },
    user_login : { type: Number, required: true },
    user_pass : { type: String, required: true },
    user_email : { type: String, required: true },
    user_slug : { type: String, required: true },
    user_status : { type: String, required: true, enum: ['active', 'deactive'] },
    user_display_name : { type: String, required: true },
}, { collection: 'e5o_user' });

/* -- end - collection model -- */


/* -- start - collection model DB functions -- */

e5o_user_schema.statics.create_user = function create_user(args_data, callback) {
    e5o_user.create({
        user_id: args_data.id,
        user_login: args_data.login,
        user_pass: args_data.pass,
        user_email: args_data.email,
        user_slug: args_data.slug,
        user_status: args_data.status,
        user_display_name: args_data.display_name,
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

E5OCounterController.e5o_create({id:'e5o_user',seq:0}).then(function(result){
    console.log(e5o_file_name+"e5o_user init counter resolved:",result);
}).catch(function(error){
    console.log(e5o_file_name+"e5o_user init counter rejected:",error);
});

/* ===== end - create sequence ===== */


// create collection on DB automatically
var e5o_user = e5o_mongoose.model('e5o_user', e5o_user_schema);
module.exports = e5o_user;
