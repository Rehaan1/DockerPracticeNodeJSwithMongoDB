const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
  age: {
    type: Number,
    required: true
  },
  gender: {
    type: String,
    required: true
  }
})

const User = mongoose.model('user', userSchema)

module.exports = User
