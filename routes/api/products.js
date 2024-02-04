const express = require('express');
const router = express.Router();
const productCtrl = require('../../controllers/api/products');

router.get('/product', productCtrl.index);
router.get('/product/:id', productCtrl.show);
module.exports = router;