import './ProductList.css'
import ProductItem from '../../components/ProductItem';
export default function ProductList({ productItem }) {
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