const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  title: 'string',
  content: 'string',
  value: 'string',
   userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

module.exports = mongoose.model('Route', schema);