import './ProductList.css'
import ProductItem from '../ProductItem/productItem';

export default function ProductList({ product, addToCart}) {
    console.log('ProductList props:', product);
    const products = product.map((product) => (
      <ProductItem 
        key={product._id} 
        product={product} 
        addToCart={addToCart}/>
    ));
  
    // console.log(products);
    return (
      <main className="ProductList">
        <h1>Product List</h1>
        <div className="product-list-index">
          {products}
          </div>
      </main>
    );
  }