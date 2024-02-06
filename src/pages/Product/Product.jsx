
import {useEffect,useState, useRef} from 'react';
import * as productAPI from '../../utilities/products-api';
import ProductList from '../../components/ProductList/ProductList';
import Category from '../../components/Category/Category';
import {Link} from 'react-router-dom';
import './Product.css';

export default function Product() {
    const [product,setProduct] = useState([]);
    const [cart, setCart] = useState(null);
    const [activeCat, setActiveCat] = useState('');
    const categoriesRef  = useRef();


    
    useEffect(() => {
        (async () => {
          try {
            const products = await productAPI.getAllProducts();
            categoriesRef.current = [...new Set(products.map(product => product.category.name))];
            setProduct(products);
            setActiveCat(categoriesRef.current[0]);
          } catch (error) {
           
            console.error('Error fetching products:', error);
          }
        })();
      }, []);

      async function addToCart(productId) {
        // 1. Call the addItemToCart function in ordersAPI, passing to it the itemId, and assign the resolved promise to a variable named cart.
        const updatedCart = await productAPI.productToCart(productId);
        // 2. Update the cart state with the updated cart received from the server
        setCart(updatedCart);
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
              addToCart={addToCart}
            />
            <Link to="/carts" className="carts"></Link>
        </main>
    )
}