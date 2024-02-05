import * as cartsAPI from '../../utilities/carts-api';
import { useState, useRef, useEffect } from 'react';
import {Link} from 'react-router-dom';
import CartDetail from '../../components/CartDetail/cartDetail';
import Category from '../../components/Category/Category';



export default function Cart({activeCat,setActiveCat,checkout}) {
    //state
    const [cart, setCart] = useState([]);
    const categoriesRef = useRef([]);
      
    useEffect(()=> {
      async function getCart() {
        const fetchCart = await cartsAPI.getCart();
        setCart(fetchCart);
      }
      getCart();
    },[]);
    

      /* Event Handler*/
      async function productAddToCart(productID){
        const cartUpdate = await cartsAPI.productAddToCart(productID)
        setCart(cartUpdate);
      }

      async function productRemoveFromCart(productID){
        const removeFromCart = cart.products.findIndex(product => product.id === productID);
        if (removeFromCart !== -1){
          cart.products.splice(removeFromCart, 1);
          setCart([...cart]); 
        } else {
          console.log(`Product with id ${productID} not found in the cart.`);
        }
      }

      async function productQuantityChange(productID, productQuantity) {
        const cartUpdate = await cartsAPI.productQtyInCart(productID,productQuantity)
        setCart(cartUpdate);
      }

    return(
        <main className="cart-page">
            <h1>Cart Page</h1>
            <aside>
              <div className="category-section">
              <Category
                categories={categoriesRef.current}
                activeCat={activeCat}
                setActiveCat={setActiveCat}
              />
              </div>
            <Link to="/cart" className="button btn-sm">PREVIOUS ORDERS</Link>
            <button className="checkout-button" onClick={() => checkout(cart)}>
              CHECKOUT
            </button>
            <CartDetail
              cart={cart}
              productAddToCart={productAddToCart}
              productQuantityChange={productQuantityChange}
              productRemoveFromCart={productRemoveFromCart}
              checkout={checkout}
              />
            </aside>
        </main>
    )
}