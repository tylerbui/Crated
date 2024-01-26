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
            {products}
        </main>
    );
}