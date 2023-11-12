const getAllProductsStatic = async (req, res) => {
  res.status(200).json({ msg: `All products for testing` })
}
const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: `All product routes` })
}

module.exports = { getAllProducts, getAllProductsStatic }
