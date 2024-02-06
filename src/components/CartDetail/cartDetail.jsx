import LineItem from "../LineItem/LineItem";

export default function cartDetail({cart,productQuantityChange,checkout}) {
  if (!cart || !cart.products || cart.products.length === 0) {
    return <p>Your cart is empty.</p>;
  }

    const lineItems = cart.lineItems.map(product =>
        <LineItem
            lineItem={product}
            isPaid={cart.isPaid}
            handleChangeQty={productQuantityChange}
            key={product._id}
        />
    );
    return(
        <main className="CartDetail">
      <h1>Cart Detail Page</h1>
      <div className="cart-detail-info">
        {cart.isPaid ? (
          <span>
            ORDER <span className="smaller">{cart.cartId}</span>
          </span>
        ) : (
          <span>NEW ORDER</span>
        )}
      </div>
      <div className="cart-detail-container-main-detail">
        <>
          <section className="detail-total">
            {cart.isPaid ? (
              <span className="right">TOTAL&nbsp;&nbsp;</span>
            ) : (
              <button
                className="btn-sm"
                onClick={checkout}
                disabled={!lineItems.length}
              >
                CHECKOUT
              </button>
            )}
            <span className="totaly-quantity">{cart.totalQty}</span>
          </section>
        </>
      </div>
    </main>
    )
}