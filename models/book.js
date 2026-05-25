const mongoose = require('mongoose')


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
  coverImg: {
    type: Buffer,
    required: true
  },
  coverImgType:{
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
  if (this.coverImg != null && this.coverImgType != null){
    return `data:${this.coverImgType};charset=utf-8;base64,${this.coverImg.toString('base64')}`
  }
})

//'Author' table in our db
module.exports = mongoose.model('Book', bookSchema)