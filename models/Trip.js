const mongoose = require('mongoose')

const TripSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim : true
  },
  body: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: 'private',
    enum : ['public','private']
  },
    User: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('Trip', TripSchema)
