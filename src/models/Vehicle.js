const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  patent: 'string',
  brand: 'string',
  model: 'string',
  year: 'string',
  colour: 'string',
  ability: 'string',  
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

module.exports = mongoose.model('Vehicle', schema);