import './productItem.css';
import * as cartAPI from '../../utilities/carts-api';


export default function ProductItem({ product, productAddToCart}) {

    const { name, description, price, category } = product;
  
    return (
      <div className="ProductItem">
        <div className="productName">{name || 'No Name'}</div>
        <div className="productDescription">{description || 'No Description'}</div>
        <div className="purchased">
          <span className="productPrice">${(price || 0).toFixed(2)}</span>
        </div>
        <div className="productCategory">{category.name || 'No Category'}</div>
        <button className="btn-product-cartadd" onClick={() => productAddToCart(product._id)}>
          Add to Cart 
        </button>
      </div>
    );
  }
  