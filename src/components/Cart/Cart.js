import './Cart.css';
import {CartItem} from "../CartItem/CartItem";

export function Cart({products, setIsProductUpdated}) {

    function handleClick() {
        products.map(product => product.cart = 0);
        setIsProductUpdated(true);
    }

    return (
        <div className="cartContainer">
            <p className="cartTitle">Vos articles</p>
            <div className="cartItemContainer">
                {products.map(product =>
                    product.cart > 0 && <CartItem key={product.id} product={product} setIsProductUpdated={setIsProductUpdated} />
                )}
            </div>
            <button className="emptyCartButton" onClick={handleClick}>Vider le panier</button>
        </div>
    );
}