const express = require('express');
const router = express.Router();
const productCtrl = require('../../controllers/api/products');

router.get('/', productCtrl.index);

module.exports = router;