import './productItem.css';
export default function ProductItem({ product, productAddToCart }) {

    if (!product) {
      return null; 
    }
    const { name, description, price, category } = product;
  
    return (
      <div className="ProductItem">
        <div className="productName">{name || 'No Name'}</div>
        <div className="productDescription">{description || 'No Description'}</div>
        <div className="purchased">
          <span className="productPrice">${(price || 0).toFixed(2)}</span>
        </div>
        <div className="productCategory">{category || 'No Category'}</div>
        <button className="btn-product-cartadd" onClick={() => productAddToCart(product._id)}>
          Add to Cart
        </button>
      </div>
    );
  }
  