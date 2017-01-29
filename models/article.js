import mongoose from 'mongoose'

const articleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  konzumID: {
    type: String
  },
  quantity: {
    type: Number,
    default: 0
  }
})

export default mongoose.model('Article', articleSchema)
