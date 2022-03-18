import './QuantitySelector.css';

export function QuantitySelector() {
    return (
        <div className="quantitySelector">
            <button className="button minus">-</button>
            <span className="quantity">10</span>
            <button className="button plus">+</button>
        </div>
    );
}