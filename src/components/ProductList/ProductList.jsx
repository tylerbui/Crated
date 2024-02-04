// import './ProductList.css'
import ProductItem from '../ProductItem/productItem';

export default function ProductList({ productItem, productAddToCart }) {
    const products = productItem.map(product => 
    <ProductItem 
        key={product.id}
        productItem={product}
        productAddToCart={productAddToCart}
    />

    )
    return(
        <main className="ProductList">
            <div className="product-list-index">
            {products}
            </div>
            <h1>Product List</h1>
        </main>
    );
}