const express = require('express')
const router = express.Router()
const { getAllProdcutsStatic, getAllProducts } = require('../controllers/products')

router.route('/').get(getAllProducts)
router.route('/static').get(getAllProdcutsStatic)

module.exports = router
