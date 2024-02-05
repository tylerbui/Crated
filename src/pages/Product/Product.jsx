
import {useEffect,useState, useRef} from 'react';
import * as productAPI from '../../utilities/products-api';
import ProductList from '../../components/ProductList/ProductList';
import Category from '../../components/Category/Category';
import {Link} from 'react-router-dom';
import './Product.css';

export default function Product() {
    const [product,setProduct] = useState([]);
    const [activeCat, setActiveCat] = useState('');
    const categoriesRef  = useRef();


    
    useEffect(() => {
        (async () => {
          try {
            const products = await productAPI.getAllProducts({
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              }
            });
      
            categoriesRef.current = [...new Set(products.map(product => product.category.name))];
            setProduct(products);
            setActiveCat(categoriesRef.current[0]);
          } catch (error) {
            // Handle and log any errors here
            console.error('Error fetching products:', error);
          }
        })();
      }, []);
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
            />
            <Link to="/carts" className="carts"></Link>
        </main>
    )
}