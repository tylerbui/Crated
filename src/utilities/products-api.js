import sendRequest from "./send-request";
const BASE_URL = '/api/products';

export async function getAllProducts() {
  return sendRequest(BASE_URL);
}


export async function getById(id) {
  try {
    const response = await sendRequest(`${BASE_URL}/${id}`);

    if (!response.ok) {
      throw new Error(`Failed to fetch product with id ${id}. Status: ${response.status}, StatusText: ${response.statusText}`);
    }

    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      throw new Error(`Invalid content type. Expected JSON. Actual: ${contentType}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Error in getById(${id}):`, error.message);
    throw error;
  }
}


// Add an item to the cart
export function productToCart(productId) {
  // Just send itemId for best security (no pricing)
  return sendRequest(`${BASE_URL}/cart/products/${productId}`, 'POST');
}


