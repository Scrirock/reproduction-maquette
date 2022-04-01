import "./Product.css";

export function Product({ product, setIsProductUpdated = null }) {
  function handleMinusClick(e) {
    if (product.cart > 0) {
      product.cart -= 1;
      setIsProductUpdated(true);
    }
  }

  function handlePlusClick(e) {
    if (product.cart < product.stock) {
      product.cart += 1;
      setIsProductUpdated(true);
    }
  }

  return (
    <div key={product.id} className="product">
      <img src={product.img} alt="image of the product" />
      <div className="info">
        <div className="flex">
          <p className="bold">{product.name}</p>
          <p>heart</p>
        </div>
        <div className="description">{product.description}</div>
        <div className="flex bottom">
          {null !== setIsProductUpdated && (
            <div className="quantitySelector">
              <button className="button minus" onClick={handleMinusClick}>
                -
              </button>
              <span className="quantity">{product.cart}</span>
              <button className="button plus" onClick={handlePlusClick}>
                +
              </button>
            </div>
          )}
          <p className="bold">${product.price}</p>
        </div>
      </div>
    </div>
  );
}
