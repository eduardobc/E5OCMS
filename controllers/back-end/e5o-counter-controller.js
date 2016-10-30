'use strict';
var e5o_file_name = "e5o-counter-controller.js - ";
var e5o_counter_model = require('../../models/back-end/e5o-counter-model.js');


/* ===== start - controller ===== */

var E5OCounterController = {};

E5OCounterController.e5o_create = function e5o_create(arg_seq_data) {
    return new Promise(function(resolve, reject){
        e5o_counter_model.create_counter({id:arg_seq_data.id,seq:arg_seq_data.seq}, function(result){
            if( result.err ) {
                //console.log(e5o_file_name+"e5ojs_create_seq result:",result.err.message);
                reject(result.err.message);
            } else {
                //console.log(e5o_file_name+"e5ojs_create_seq result:",result);
                resolve(result);
            }
        });
    });
}


/* ===== end - controller ===== */

module.exports = E5OCounterController;
