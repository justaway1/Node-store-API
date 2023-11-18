const Product = require('../modules/product')

const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({ company: 'marcos' })
  res.status(200).json({ products, nbHits: products.length })
}
const getAllProducts = async (req, res) => {
  const { features, company, name } = req.query
  const queryObject = {}

  if (features) {
    queryObject.features = features === 'true' ? true : false
  }

  if (company) {
    queryObject.company = company
  }

  if (name) {
    queryObject.name = name
  }

  console.log(queryObject)
  const product = await Product.find(queryObject)
  res.status(200).json({ product, nbHits: product.length })
}

module.exports = { getAllProducts, getAllProductsStatic }
