export default function ProductItem({ productItem, productAddToCart }) {
    // Check if productItem exists
    if (!productItem) {
      return null; // or handle the case where productItem is not available
    }
  
    // Destructure productItem properties
    const { name, description, price, category } = productItem;
  
    return (
      <div className="ProductItem">
        <div className="productName">{name || 'No Name'}</div>
        <div className="productDescription">{description || 'No Description'}</div>
        <div className="purchased">
          <span className="productPrice">${(price || 0).toFixed(2)}</span>
        </div>
        <div className="productCategory">{category || 'No Category'}</div>
        <button className="btn-product-cartadd" onClick={() => productAddToCart(productItem._id)}>
          Add to Cart
        </button>
      </div>
    );
  }
  