
import {useEffect,useState, useRef} from 'react';
import * as productAPI from '../../utilities/products-api';
import ProductList from '../../components/ProductList/ProductList';
import Category from '../../components/Category/Category';
import {Link} from 'react-router-dom';
import './Product.css';
import * as cartsAPI from '../../utilities/carts-api';

export default function Product() {
    const [product,setProduct] = useState([]);
    const [activeCat, setActiveCat] = useState('');
    const [cart, setCart] = useState(null);
    const categoriesRef  = useRef();


    
    useEffect(() => {
        (async () => {
          try {
            const products = await productAPI.getAllProducts();
            categoriesRef.current = [...new Set(products.map(product => product.category.name))];
            const fetchCart = await cartsAPI.getCart();
            setCart(fetchCart);
            setProduct(products);
            setActiveCat(categoriesRef.current[0]);
          } catch (error) {
           
            console.error('Error fetching products:', error);
          }
        })();
      }, []);
      
      async function productAddToCart(productID){
        const cartUpdate = await cartsAPI.productAddToCart(productID)
        setCart(cartUpdate);
      }

    return(
        <main className="Product">
            <h1>Product Page</h1>
            <aside className="Category">
                {categoriesRef.current &&
                <Category
                    categories={categoriesRef.current}
                    activeCat={activeCat}
                    setActiveCat={setActiveCat}
                />} 
            </aside>
            <ProductList 
              product={product.filter((product) => product.category.name === activeCat)} 
              productAddToCart={productAddToCart}
            />
            <Link to="/carts" className="carts"></Link>
        </main>
    )
}