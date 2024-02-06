import sendRequest from './send-request';

const BASE_URL = '/api/carts';

export function getCart() {
  return sendRequest(BASE_URL);
}

export function productAddToCart(productID) {
  return sendRequest(`${BASE_URL}/products/${productID}`, 'POST');
}

export function productQuanityChange(productID, productQuantity) {
  return sendRequest(`${BASE_URL}/cart/qty`, 'PUT', { productID, productQuantity });
}

export function productQtyInCart(productID, newQty) {
  return sendRequest(`${BASE_URL}/cart/qty`, 'PUT', { productID, newQty });
}

export function checkout(){
  return sendRequest(`${BASE_URL}/checkout`, 'POST');
}

