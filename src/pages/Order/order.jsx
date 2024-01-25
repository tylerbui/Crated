import * as productAPI from '../../utilities/products-api';
import * as ordersAPI from '../../utilities/orders-api';
import ProductList from '../../components/ProductList/ProductList';
import { useEffect, useState, useRef } from 'react';


export default function Order({user, setUser}) {
    //state
    const [activeCat, setActiveCat] = useState('');
    const [cart, setCart] = useState(null);
    //ref
    const categoriesRef = useRef([]);
    
    useEffect(function() {
        async function getProducts() {
          const products = await productAPI.getAll();
          categoriesRef.current = [...new Set(products.map(product => product.category.name))];
          setMenuItems(products);
          setActiveCat(categoriesRef.current[0]);
        }
        getProducts();
    
        // Load cart (a cart is the unpaid order for the logged in user)
        async function getCart() {
          const cart = await ordersAPI.getCart();
          setCart(cart);
        }
        getCart();
      }, []);

      /* Event Handler*/
      async function productAddToCart(productID){
        const cartUpdate = await ordersAPI.productAddToCart(productID)
        setCart(cartUpdate);
      }

      async function productQuantityChange(productID, productQuantity) {
        const cartUpdate = await ordersAPI.productQtyInCart(productID,productQuantity)
        setCart(cartUpdate);
      }

    return(
        <main className="OrderPage">
            <aside>
                
            </aside>
        </main>
    )
}