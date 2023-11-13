require('dotenv').config()

const connectDB = require('./db/connect')

const Product = require('./modules/Product')
const jsonProduct = require('./products.json')

const start = async () => {
  try {
    console.log('Success')
    await connectDB(process.env.MONGO_URI)
    await Product.deleteMany()
    await Product.create(jsonProduct)
  } catch (error) {
    console.log(error)
  }
}

start()
