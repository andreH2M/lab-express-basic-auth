'use strict';


const mongoose = require('mongoose');
const schema = new mongoose.Schema ( {

email: {

  type: String,
  required: true,
  trim: true,
  unique: true
},

passwordHash: {
  type: String,
  required: true
}




});

module.exports = mongoose.model('User', schema);

// User model goes here
