import * as cartsAPI from '../../utilities/carts-api';
import { useState, useRef, useEffect } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import CartDetail from '../../components/CartDetail/cartDetail';
import Category from '../../components/Category/Category';
import LineItem from '../../components/LineItem/LineItem';


export default function Cart({activeCat,setActiveCat,checkout}) {
    //state
    const [cart, setCart] = useState([]);
    const categoriesRef = useRef([]);
    const navigate = useNavigate();
      
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

      async function handleCheckout() {
        await cartsAPI.checkout();
        navigate('/orders');
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
            <Link to="/products" className="button btn-sm">Products</Link>
            <CartDetail
              cart={cart} 
              productQuantityChange={productQuantityChange}
              productRemoveFromCart={productRemoveFromCart}
              checkout={checkout}
              />
            <LineItem />
            <button className="checkout-button" onClick={() => handleCheckout(cart)}>
              CHECKOUT
            </button>
            </aside>
        </main>
    )
}