const Product = require('../../models/product');

module.exports = {
    index,
};

async function index(req,res) {
    const products = await Product.find({}).sort('name').populate('category').exec();
    items.sort((a,b) => a.category.sortOrder - b.category.sortOrder);
    res.json(products);
}
