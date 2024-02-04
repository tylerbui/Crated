import './Product.css';
import {useEffect,useState, useRef} from 'react';
import * as productAPI from '../../utilities/products-api';
import ProductList from '../../components/ProductList/ProductList';
import Category from '../../components/Category/Category';

export default function Product() {
    const [product,setProduct] = useState([]);
    const [productItem,SetProductItem] = useState([]);
    const [activeCat, setActiveCat] = useState('');
    const categoriesRef  = useRef();

    useEffect(function() {
        async function getProducts() {
          const products = await productAPI.getAll();
          categoriesRef.current = [...new Set(products.map(product => product.category.name))];
          setProduct(products);
          SetProductItem(products);
          setActiveCat(categoriesRef.current[0]);
        }
        getProducts();
    }, []);

    
    return(
        <main className="Product">
            <div>
            <h1>Product Page</h1>
            </div>
            <aside className="Category">
                {categoriesRef.current &&
                <Category
                    categories={categoriesRef.current}
                    activeCat={activeCat}
                    setActiveCat={setActiveCat}
                />} 
            </aside>
            <ProductList 
                productItem={productItem.filter(product => product.category.name === activeCat)} 
                product={product}
                setProductItem={SetProductItem}
            />
        </main>
    )
}