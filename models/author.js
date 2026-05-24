const mongoose = require('mongoose')

const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
})

//'Author' table in our db
module.exports = mongoose.model('Author', authorSchema)