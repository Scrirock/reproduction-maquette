import './Cart.css';
import {CartItem} from "../CartItem/CartItem";

export function Cart() {
    return (
        <div className="cartContainer">
            <p className="cartTitle">Vos articles</p>
            <div className="cartItemContainer">
                <CartItem id={1} name="Produit 1" stock="5" />
                <CartItem id={2} name="Produit 2" stock="0" />
                <CartItem id={3} name="Produit 3" stock="50" />
            </div>
            <button className="emptyCartButton">Vider le panier</button>
        </div>
    );
}