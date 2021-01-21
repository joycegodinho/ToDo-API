'use strict';

const mongoose = require("mongoose");

// declare schema and assing schema class
const Schema = mongoose.Schema;

//create Schema instance 

const TodoScrema = new Schema({
    text: {
        type: String,
        required: true
    },

    status: { 
        type: Boolean,
        required: true
    },

    createdOn: {
        type: Date,
        default: Date.now
    }
});

//create and exports the model

module.exports = mongoose.model("todoModel", TodoScrema);