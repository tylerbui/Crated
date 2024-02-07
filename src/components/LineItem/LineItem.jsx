import './LineItem.css';
export default function LineItem({cart,product, isPaid, productQuantityChange }) {
  const { quantity, extPrice } = product || {};
  
  return (
    <div className="LineItem">
      <div className="line-item-property">
        <span>{product?.name || 'No Name'}:</span>
        <span>{product?.description || 'No Description'}:</span>
        <span>{product?.category || 'No Category'}:</span>
      </div>
      <div className="Quantity">
        {!isPaid && (
          <>
            <button
              className="button-plus-qty"
              onClick={() => productQuantityChange(product._id, quantity + 1)}
            >
              +
            </button>
            <span>{quantity}</span>
            <button
              className="button-minus-qty"
              onClick={() => productQuantityChange(product._id, quantity - 1)}
            >
              -
            </button>
          </>
        )}
      </div>
      <div className="end-total">{extPrice ? extPrice.toFixed(2) : "Price not available"}</div>
    </div>
  );
}
