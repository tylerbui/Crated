
import * as ordersAPI from '../../utilities/orders-api';
import { useState } from 'react';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import { checkout } from '../../../routes/api/orders';


export default function Order() {
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

      async function productRemoveFromCart(productID){
        const removeFromCart = cart.products.findByIndex(product => product.id == productID);
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
            <CategoryList
              categories={categoriesRef.current}
              activeCat={activeCat}
              setActiveCat={setActiveCat}
            />
            <ProductList />
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