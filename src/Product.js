import "./Product.css";
function Product({title,image,price,rating}) {
  return (
    <div className="product">
      <div className="product__info">
        <p>The Lean startup</p>
        <p className="product__price">
          <small>$</small>
          <strong>19.9</strong>
        </p>
        <div className="product__rating">
          <p>⭐</p>
        </div>
      </div>
      <img
        src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/LA/Jupiter22/Phase1/Ref-PC-CC-1x._SY304_CB610843507_.jpg"
        alt=""
        // className="product__image"
      />
      <button>Add TO Basket</button>
    </div>
  );
}
export default Product;
