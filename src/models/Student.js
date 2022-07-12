const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  firstName: 'string',
  lastName: 'string',
  grade: 'string',
  address:'string',
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

module.exports = mongoose.model('Student', schema);