const mongoose = require('mongoose')

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name must be provided']
    },
    price: {
      type: Number,
      required: [true, 'Price must be provided']
    },
    features: {
      type: Boolean,
      default: false
    },
    rating: {
      type: Number,
      default: 4.5
    },
    createdAt: {
      type: Date,
      default: Date.now()
    },
    company: {
      type: String,
      enum: {
        values: ['ikea', 'liddy', 'caressa', 'marcos'],
        message: '{VALUE} is not supported'
      }
      // enum: ['ikea', 'liddy', 'caressa', 'marcos']
    }
  }
  //Add custom name collection
  // {
  //   collection: 'MyCUSTOMCOLLECTION'
  // }
)

module.exports = mongoose.model('Product', productSchema)
