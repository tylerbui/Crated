import './productItem.css';


export default function ProductItem({ product, productAddToCart}) {

    const { name, description, price, category } = product;
  
    return (
      <div className="ProductItem">
        <div className="productName">Product: {name || 'No Name'}</div>
        <div className="productDescription">Description:{description || 'No Description'}</div>
        <div className="purchased">
          <span className="productPrice">Price: ${(price || 0).toFixed(2)}</span>
        </div>
        <div className="productCategory">Category:{category.name || 'No Category'}</div>
        <button className="btn-product-cartadd" onClick={() => productAddToCart(product._id)}>
          Add to Cart 
        </button>
      </div>
    );
  }
  