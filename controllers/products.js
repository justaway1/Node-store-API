const Product = require('../modules/product')

const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({}).sort('-name')
  res.status(200).json({ products, nbHits: products.length })
}
const getAllProducts = async (req, res) => {
  const { features, company, name, sort, fields } = req.query
  const queryObject = {}

  if (features) {
    queryObject.features = features === 'true' ? true : false
  }

  if (company) {
    queryObject.company = company
  }

  if (name) {
    //Регулярен израз, с който търсим по зададения query parametar
    queryObject.name = { $regex: name, $options: 'i' }
  }

  let result = Product.find(queryObject)
  // Sort
  if (sort) {
    console.log(sort)
    const sortList = sort.split(',').join(' ')
    result = result.sort(sortList)
  } else {
    result = result.sort('createdAt')
  }

  //Select Fields
  if (fields) {
    const fieldList = fields.split(',').join(' ')
    result = result.select(fieldList)
  }

  const product = await result
  res.status(200).json({ product, nbHits: product.length })
}

module.exports = { getAllProducts, getAllProductsStatic }
