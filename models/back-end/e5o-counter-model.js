'use strict';
var e5o_file_name = "e5o-counter-model.js - ";
var e5o_mongoose = require('../../config/e5o-mongodb-connect.js');
var e5o_schema = e5o_mongoose.Schema;

/* NOTE: THIS WILL BE CHANGED BY THE MONGOOSE 5.0.0 USING NATIVE PROMISES */



/* ===== start - Model ===== */


/* -- start - collection model -- */

var e5o_counter_schema = new e5o_schema({
    counter_id  : { type: String, required: true, unique: true },
    counter_seq : { type: Number, required: true },
}, { collection: 'e5o_counter' });

/* -- end - collection model -- */


/* -- start - collection model DB functions -- */

e5o_counter_schema.statics.create_counter = function create_counter(args_data, callback) {
    e5o_counter.create({
        counter_id:  args_data.id,
        counter_seq: args_data.seq,
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


// create collection on DB automatically
var e5o_counter = e5o_mongoose.model('e5o_counter', e5o_counter_schema);
module.exports = e5o_counter;
