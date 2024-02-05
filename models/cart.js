const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const productSchema = require('./productSchema');

const lineItemSchema = new Schema({
  qty: { type: Number, default: 1 },
  product: productSchema
}, {
  timestamps: true,
  toJSON: { virtuals: true }
});

lineItemSchema.virtual('extPrice').get(function() {
  // 'this' keyword is bound to the lineItem document
  return this.qty * this.product.price;
});

const cartSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  lineItems: [lineItemSchema],
  isPaid: { type: Boolean, default: false } 
}, {
  timestamps: true,
  toJSON: { virtuals: true }
});

cartSchema.virtual('cartTotal').get(function() {
  return this.lineItems.reduce((total, product) => total + product.extPrice, 0);
});

cartSchema.virtual('cartQty').get(function() {
  return this.lineItems.reduce((total, product) => total + product.qty, 0);
});

cartSchema.virtual('cartId').get(function() {
  return this.id.slice(-6).toUpperCase();
});

cartSchema.statics.getCart = function(userId) {
  return this.findOneAndUpdate(
    // query object
    { user: userId, isPaid: false },
    // update doc - provides values when inserting
    { user: userId, isPaid: false },
    // upsert option
    { upsert: true, new: true }
  );
};

// Instance method for adding an item to a cart (unpaid order)
cartSchema.methods.productAddToCart = async function (productID) {
  // 'this' keyword is bound to the cart (order doc)
  const cart = this;
  // Check if the item already exists in the cart
  const lineItem = cart.lineItems.find(lineItem => lineItem.product._id.equals(productID));
  if (lineItem) {
    // It already exists, so increase the qty
    lineItem.qty += 1;
  } else {
    // Get the item from the "catalog"
    // Note how the mongoose.model method behaves as a getter when passed one arg vs. two
    const Product = mongoose.model('product');
    const product = await Product.findById(productID);
    // The qty of the new lineItem object being pushed in defaults to 1
    cart.lineItems.push({ product });
  }
  // return the save() method's promise
  return cart.save();
};

// Instance method to set an item's qty in the cart
cartSchema.methods.setItemQty = function(productID, newQty) {
  // this keyword is bound to the cart (order doc)
  const cart = this;
  // Find the line item in the cart for the menu item
  const lineItem = cart.lineItems.find(lineItem => lineItem.product._id.equals(productID));
  if (lineItem && newQty <= 0) {
    // Calling deleteOne, removes the lineItem subdoc from the cart.lineItems array
    lineItem.deleteOne();
  } else if (lineItem) {
    // Set the new qty - positive value is assured thanks to prev if
    lineItem.qty = newQty;
  }
  // return the save() method's promise
  return cart.save();
};

module.exports = mongoose.model('Cart', cartSchema);
