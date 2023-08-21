const Product = require('../models/product')

const getAllProducts = async (req, res) => {
    const {featured,company,name,sort} = req.query
    const queryObject = {}
    if (featured) {
        queryObject.featured = featured === 'true' ? true:false
    }
    if (company) {
        queryObject.company = company
    }
    if (name) {
        queryObject.name = {$regex:name,$options:'i'}
    }
    const products = await Product.find(queryObject)
    res.status(200).json({products,nbHits:products.length})
}

const getAllProdcutsStatic = async (req, res) => {
    const products = await Product.find({}).sort('name')
    res.status(200).json({ products,nbHits:products.length })
}

module.exports = {
    getAllProdcutsStatic,
    getAllProducts
}