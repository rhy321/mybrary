const mongoose = require('mongoose')

const coverImgBasePath = 'uploads/bookCovers' //will be inside public folder
const path = require('path')

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  publishDate: {
    type: Date,
    required: true
  },
  pageCount: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now
  },
  coverImgName: {
    type: String,
    required: true
  },
  authorId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Author'
  }
})

//create a virtual property thats acts the same as the actual variables in the bookSchema, but it will derive its value from those variables

//use function() to use 'this' property
bookSchema.virtual('coverImgPath').get(function(){
  if (this.coverImgName != null){
    return path.join('/', coverImgBasePath, this.coverImgName)
  }
})

//'Author' table in our db
module.exports = mongoose.model('Book', bookSchema)
module.exports.coverImgBasePath = coverImgBasePath