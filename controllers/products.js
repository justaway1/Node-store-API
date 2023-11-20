const Product = require('../modules/product')

const getAllProductsStatic = async (req, res) => {
  //${gt - greater than lt - less than}
  const products = await Product.find({ price: { $gt: 30 } })
    .sort('name')
    .select('rating price')
  res.status(200).json({ products, nbHits: products.length })
}
const getAllProducts = async (req, res) => {
  const { features, company, name, sort, fields, numericFilters } = req.query
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
  //Numeric filters
  if (numericFilters) {
    const operatorMap = {
      '>': '$gt',
      '<': '$lt',
      '>=': '$gte',
      '<=': '$lte',
      '=': '$eq'
    }
    const regEx = /\b(<|>|>=|<=|=)\b/g
    let filters = numericFilters.replace(
      regEx,
      match => `-${operatorMap[match]}-`
    )
    console.log(filters)

    const options = ['price', 'rating']
    filters = filters.split(',').forEach(item => {
      const [field, operator, value] = item.split('-')
      if (options.includes(field)) {
        queryObject[field] = { [operator]: Number(value) }
      }
    })
  }
  console.log(queryObject)
  let result = Product.find(queryObject)
  // Sort
  if (sort) {
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

  const page = +req.query.page || 1
  const limit = +req.query.limit || 10
  const skip = (page - 1) * limit
  result = result.skip(skip).limit(limit)

  const product = await result
  res.status(200).json({ product, nbHits: product.length })
}

module.exports = { getAllProducts, getAllProductsStatic }
