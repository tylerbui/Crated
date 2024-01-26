import sendRequest from './send-request';

const BASE_URL = '/api/orders';

// Retrieve an unpaid order for the logged in user
export function getCart() {
  return sendRequest(`${BASE_URL}/cart`);
}

export function productAddToCart(productID) {
  // Just send itemId for best security (no pricing)
  return sendRequest(`${BASE_URL}/cart/products/${productID}}`, 'POST');
}

export function productQuanityChange(productID, productQuantity) {
  return sendRequest(`${BASE_URL}/cart/qty`, 'PUT', { productID, productQuantity });
}

export function productQtyInCart(itemId, newQty) {
  return sendRequest(`${BASE_URL}/cart/qty`, 'PUT', { itemId, newQty });
}