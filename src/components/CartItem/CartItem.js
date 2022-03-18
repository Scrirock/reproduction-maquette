import './CartItem.css';
import trash from "../../assets/images/trash.svg";

export function CartItem({id, name, stock}) {

    return (
        <div key={id} className="cartItem">
            <img src={trash} alt="trash icon" className="trashIcon" />
            <div>
                <p>{name}</p>
                <span className="cartQuantity">({stock})</span>
            </div>
        </div>
    );
}