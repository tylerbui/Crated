const Cart = require('../../models/cart');

module.exports = {
    cart,
    productAddToCart,
    productQuantityChange,
    checkout,
}

async function cart(req,res){
    const cart = await Cart.getCart(req.user_id);
    res.json(cart);
}

async function productAddToCart(req,res) {
    const cart = await Cart.getCart(req.user_id);
    await cart.productAddToCart(req.params._id);
    res.json(cart);
}

async function productQuantityChange(req,res) {
    const cart = await Cart.getCart(req.user._id);
    await cart.setProductQuantity(req.body.itemId, req.body.newQty);
    res.json(cart);
}

async function checkout(req, res) {
    const cart = await Cart.getCart(req.user._id);
    cart.isPaid = true;
    await cart.save();
    res.json(cart);
  }