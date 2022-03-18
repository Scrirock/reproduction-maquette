import './Product.css';
import {QuantitySelector} from "../QuantitySelector/QuantitySelector";

export function Product({id, name, description, img, quantity, price}) {

    return (
        <div key={id} className="product">
            <img src={img} alt="image of the product"/>
            <div className="info">
                <div className="flex">
                    <p className="bold">{name}</p>
                    <p>heart</p>
                </div>
                <div className="description">{description}</div>
                <div className="flex bottom">
                    <QuantitySelector />
                    <p className="bold">${price}</p>
                </div>
            </div>
        </div>
    );
}