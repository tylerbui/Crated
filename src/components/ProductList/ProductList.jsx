// import './ProductList.css'
import './ProductList.css';
import ProductItem from '../ProductItem/productItem';

export default function ProductList({ product, productAddToCart }) {
    const products = product && product.map((product) => (
      <ProductItem key={product._id} product={product} productAddToCart={productAddToCart} />
    ));
  
  
    return (
      <main className="ProductList">
        <h1>Product List</h1>
        <div className="product-list-index">
          {products}
          </div>
      </main>
    );
  }