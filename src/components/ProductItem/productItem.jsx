
export default function ProductItem({productItem,productAddToCart}) {
 return (
    <div className="ProductItem">
        <div className="productName">{productItem.name}</div>
        <div className="productDescription">{productItem.description}</div>
        <div className ="purchased">
            <span className="productPrice">${productItem.price.toFixed(2)}</span>
        </div>
        <div className="productCategory">{productItem.category}</div>
        <button className="btn-product-cartadd" onClick={() => productAddToCart(productItem._id)}>
            Add to Cart
        </button>
        

    </div>
 )
}