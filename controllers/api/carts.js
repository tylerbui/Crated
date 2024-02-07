const Cart = require('../../models/cart');

module.exports = {
    cart,
    productAddToCart,
    productQuantityChange,
    checkout,
}

async function cart(req,res){
    const cart = await Cart.getCart(req.user._id);
    res.json(cart);
}

async function productAddToCart(req,res) {
    console.log('here');
    const cart = await Cart.getCart(req.user._id);
    console.log(cart);
    await cart.productAddToCart(req.params.id);
    res.json(cart);
}

async function productQuantityChange(req,res) {
    const cart = await Cart.getCart(req.user._id);
    await cart.setProductQuantity(req.body.productId, req.body.newQty);
    res.json(cart);
}

async function checkout(req, res) {
    const cart = await Cart.getCart(req.user._id);
    cart.isPaid = true;
    await cart.save();
    res.json(cart);
  }