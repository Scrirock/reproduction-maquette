import './CartItem.css';
import trash from "../../assets/images/trash.svg";

export function CartItem({product, setIsProductUpdated}) {

    function handleClick() {
        product.cart = 0;
        setIsProductUpdated(true);
    }
    
    return (
        <div className="cartItem">
            <img src={trash} alt="trash icon" className="trashIcon" onClick={handleClick} />
            <div>
                <p>{product.name}</p>
                <span className="cartQuantity">({product.cart})</span>
            </div>
        </div>
    );
}