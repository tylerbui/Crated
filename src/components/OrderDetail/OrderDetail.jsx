import LineItem from "../LineItem/LineItem";

export default function OrderDetail({order,productQuantityChange,checkout}) {
    if(!order) return null;
    const lineItems = order.lineItems.map(product =>
        <LineItem
            lineItem={product}
            isPaid={order.isPaid}
            handleChangeQty={productQuantityChange}
            key={[product]._id}
        />
    );
    return(
        <main className="OrderDetail">
            <div className="orderdetail-info">
                {order.isPaid ?
                    <span>ORDER <span className="smaller">{order.orderId}</span></span>
                    :
                    <span>NEW ORDER</span>
                }
            </div>
            <div className="orderdetail-container-main-detail">
                <>
                    <section className="detail-total">
                        {order.isPaid ?
                        <span className="right">TOTAL&nbsp;&nbsp;</span>
                        :
                        <button
                          className="btn-sm"
                          onClick={checkout}
                          disabled={!lineItems.length}
                        >CHECKOUT</button>
                        }
                        <span className="totaly-quantity">
                            {order.totalQty}
                        </span>
                    </section>
                </>
            </div>
        </main> 
    )
}