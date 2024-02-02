const express = require('express');
const router = express.Router();
const productCtrl = require('../../controllers/api/products');

router.get('/', productCtrl.index);
router.get('/:id', productCtrl.show);
module.exports = router;