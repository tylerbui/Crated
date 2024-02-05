import './LineItem.css';
export default function LineItem({ lineItem, isPaid, productQuantityChange }) {
    return (
      <div className="LineItem">
        <div className="line-item-name">
          <span>{lineItem.product.name}</span>
          <span>{lineItem.product.description}</span>
          <span>#{lineItem.product.category}</span>
        </div>
        <div className="Quantity">
          {!isPaid && (
            <>
              <button
                className="button-plus-qty"
                onClick={() => productQuantityChange(lineItem.item._id, lineItem.qty + 1)}
              >
                +
              </button>
              <span>{lineItem.qty}</span>
              <button
                className="button-minus-qty"
                onClick={() => productQuantityChange(lineItem.item._id, lineItem.qty - 1)}
              >
                -
              </button>
            </>
          )}
        </div>
        <div className="end-total">{lineItem.extPrice.toFixed(2)}</div>
      </div>
    );
  }