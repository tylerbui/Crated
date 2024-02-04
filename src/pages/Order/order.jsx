import * as ordersAPI from '../../utilities/orders-api';
import { useState, useRef } from 'react';
import {Link} from 'react-router-dom';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import Category from '../../components/Category/Category';
import UserLogOut from '../../components/UserLogOut/UserLogOut';



export default function Order({activeCat,setActiveCat,user,setUser,checkout}) {
    //state
    const [cart, setCart] = useState(null);
    const categoriesRef = useRef('');
    
      async function getCart() {
        const cart = await ordersAPI.getCart();
        setCart(cart);
      }
      getCart();

      /* Event Handler*/
      async function productAddToCart(productID){
        const cartUpdate = await ordersAPI.productAddToCart(productID)
        setCart(cartUpdate);
      }

      async function productRemoveFromCart(productID){
        const removeFromCart = cart.products.findByIndex(product => product.id === productID);
        if (removeFromCart !== 1){
          cart.product.splice(removeFromCart, 1);
        } else {
          console.log(`Product with id ${productID} not found in the cart.`);
        }
      }

      async function productQuantityChange(productID, productQuantity) {
        const cartUpdate = await ordersAPI.productQtyInCart(productID,productQuantity)
        setCart(cartUpdate);
      }

    return(
        <main className="order-page">
            
            <aside>
            <Category
              categories={categoriesRef.current}
              activeCat={activeCat}
              setActiveCat={setActiveCat}
            />
            <Link to="/orders" className="button btn-sm">PREVIOUS ORDERS</Link>
            <UserLogOut user={user} setUser={setUser} />
            <OrderDetail
              order={cart}
              productAddToCart={productAddToCart}
              productQuantityChange={productQuantityChange}
              productRemoveFromCart={productRemoveFromCart}
              checkout={checkout}
            />
            </aside>
        </main>
    )
}