const express = require('express');
const router = express.Router();
const orderCtrl = require('../../controllers/api/orders');


router.get('/cart', orderCtrl.cart);
// POST /api/orders/cart/items/:id
router.post('/cart/products/:id', orderCtrl.productAddToCart);
// POST /api/orders/cart/checkout
router.post('/cart/checkout', orderCtrl.checkout);
// POST /api/orders/cart/qty
router.put('/cart/qty', orderCtrl.productQuantityChange);

module.exports = router;