const Product = require('../../models/product');

module.exports = {
    index,
    show,
    addToCart,
};

async function index(req,res) {
    const products = await Product.find({}).sort('name').populate('category').exec();
    products.sort((a,b) => a.category.sortOrder - b.category.sortOrder);
    res.json(products);
}

async function show(req,res) {
    const product = await Product.findById(req.params.id);
    res.json(product);
}

//product.getCart is not a function????
async function addToCart(req,res){
  const cart = await Product.getCart(req.user._id);
  await cart.addToCart(req.params.id);
  res.json(cart);
}