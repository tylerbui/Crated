
import * as ordersAPI from '../../utilities/orders-api';
import { useState } from 'react';
import OrderDetail from '../OrderDetail/OrderDetail';


export default function Order({user, setUser}) {
    //state
    const [cart, setCart] = useState(null);
    
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

      async function productQuantityChange(productID, productQuantity) {
        const cartUpdate = await ordersAPI.productQtyInCart(productID,productQuantity)
        setCart(cartUpdate);
      }

    return(
        <main className="OrderPage">
            <aside>
            <OrderDetail
              order={cart}
              productAddToCart={productAddToCart}
              productQuantityChange={productQuantityChange}
              // handleCheckout={handleCheckout}
            />
            </aside>
        </main>
    )
}