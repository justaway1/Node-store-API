require('dotenv').config()

const connectDB = require('./db/connect')

const Product = require('./modules/product')
const jsonProduct = require('./products.json')

const start = async () => {
  try {
    console.log('Success')
    await connectDB(process.env.MONGO_URI)
    await Product.deleteMany()
    await Product.create(jsonProduct)
    process.exit(0)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

start()
