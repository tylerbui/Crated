const express = require('express');
const router = express.Router();
const cartsCtrl = require('../../controllers/api/carts');


router.get('/carts', cartsCtrl.cart);
router.post('/products/:id', cartsCtrl.productAddToCart);
router.post('/carts/checkout', cartsCtrl.checkout);
router.put('/carts/qty', cartsCtrl.productQuantityChange);


module.exports = router;