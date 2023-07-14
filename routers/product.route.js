const productController = require('../controllers/product.controller')

const router = require('express').Router();

router.post('/addProduct', productController.addProduct)

router.get('/allProducts', productController.getAllProducts)

router.get('/published', productController.publishedProducts)



router.get('/:id', productController.getSingleProduct)

router.put('/:id', productController.updateProduct)

router.delete('/:id', productController.deleteProduct)


module.exports = router;

