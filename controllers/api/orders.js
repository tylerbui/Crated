const Order = require('../../models/order');

module.exports = {
    cart,
    productAddToCart,
    productQuantityChange,
}

async function cart(req,res){
    const cart = await Order.getCart(req.user_id);
    res.json(cart);
}
