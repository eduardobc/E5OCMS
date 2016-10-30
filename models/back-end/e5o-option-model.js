'use strict';
var e5o_file_name = "e5o-option-model.js - ";
var e5o_mongoose = require('../../config/e5o-mongodb-connect.js');
var e5o_schema = e5o_mongoose.Schema;
var E5OCounterController = require('../../controllers/back-end/e5o-counter-controller.js');

/* NOTE: THIS WILL BE CHANGED BY THE MONGOOSE 5.0.0 USING NATIVE PROMISES */



/* ===== start - Model ===== */


/* -- start - collection model -- */

var e5o_option_schema = new e5o_schema({
    option_id  : { type: Number, required: true, unique: true },
    option_name : { type: String, required: true },
    option_value : { type: String, required: true },
}, { collection: 'e5o_option' });

/* -- end - collection model -- */


/* -- start - collection model DB functions -- */

e5o_option_schema.statics.create_option = function create_option(args_data, callback) {
    e5o_option.create({
        option_id: args_data.id,
        option_name: args_data.name,
        option_value: args_data.value,
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

E5OCounterController.e5o_create({id:'e5o_option',seq:0}).then(function(result){
    console.log(e5o_file_name+"e5o_option init counter resolved:",result);
}).catch(function(error){
    console.log(e5o_file_name+"e5o_option init counter rejected:",error);
});

/* ===== end - create sequence ===== */

// create collection on DB automatically
var e5o_option = e5o_mongoose.model('e5o_option', e5o_option_schema);
module.exports = e5o_option;
