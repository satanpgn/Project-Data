const router = require('express').Router();
const productController = require("../controller/productControllers");
const { authGuard,authGuardAdmin } = require('../middleware/authGuard');

router.post('/create_product',authGuardAdmin, productController.createProduct)

// get all products
router.get("/get_products", productController.getProducts)

// single product
router.get("/get_product/:id", productController.getSingleProduct)

// update product
router.put("/update_product/:id",authGuardAdmin, productController.updateProduct)

// delete product
router.delete("/delete_product/:id",authGuardAdmin ,productController.deleteProduct)

module.exports = router;