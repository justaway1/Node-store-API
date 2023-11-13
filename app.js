require('dotenv').config()
require('express-async-errors')

//Imports
const express = require('express')
const app = express()
const connectDB = require('./db/connect')
const productsRoute = require('./routes/products')

const errorHandler = require('./middlewares/error-handler')
const notFoundMiddleware = require('./middlewares/not-found')

//middlewares
app.use(express.json())

//routes

app.get('/', (req, res) => {
  res.send(`<h1>Store API</h1><a href='/api/v1/products'>Products list</a>`)
})

app.use('/api/v1/products', productsRoute)

app.use(notFoundMiddleware)
app.use(errorHandler)

//PORT
const port = process.env.PORT || 3000

const start = async () => {
  try {
    //connect DB
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`Server is listening on ${port}...`))
  } catch (error) {
    console.log(error)
  }
}

start()
