import './ProductsList.css';
import {Product} from "../Product/Product";

export function ProductsList({products, setIsProductUpdated, category}) {
    return (
        <div className="productsList">
            {products
                .filter(product => category === 0 || product.category === category)
                .map(product => <Product key={product.id} product={product} setIsProductUpdated={setIsProductUpdated}/>
            )}
        </div>
    );
}