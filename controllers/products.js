const Product = require('../modules/product')

const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({ company: 'marcos' })
  res.status(200).json({ products, nbHits: products.length })
}
const getAllProducts = async (req, res) => {
  const product = await Product.find(req.query)
  res.status(200).json({ product, nbHits: product.length })
}

module.exports = { getAllProducts, getAllProductsStatic }
