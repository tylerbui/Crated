const express = require('express');
const router = express.Router();
const productsCtrl = require('../../controllers/api/products');

router.get('', productsCtrl.index);
router.get('/:id', productsCtrl.show);
router.post('/cart/products/:id',productsCtrl.addToCart);


module.exports = router;