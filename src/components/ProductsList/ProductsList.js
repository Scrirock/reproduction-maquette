import './ProductsList.css';
import {Product} from "../Product/Product";
import img1 from "../../assets/images/image1.png";
import img2 from "../../assets/images/image2.png";
import img3 from "../../assets/images/image3.png";
import img4 from "../../assets/images/image4.png";
import img5 from "../../assets/images/image5.png";

export function ProductsList() {
    const productsList = [
        {id:1, name:'Produit 1', description: 'description: lorem ipsum', img:img1, quantity:15, price:80},
        {id:2, name:'Produit 2', description: 'description: lorem ipsum', img:img2, quantity:54, price:18},
        {id:3, name:'Produit 3', description: 'description: lorem ipsum', img:img3, quantity:48, price:65},
        {id:4, name:'Produit 4', description: 'description: lorem ipsum', img:img4, quantity:65, price:15},
        {id:5, name:'Produit 5', description: 'description: lorem ipsum', img:img5, quantity:16, price:78},
    ];
    return (
        <div className="productsList">
            {productsList.map(product =>
                <Product id={product.id}
                         name={product.name}
                         description={product.description}
                         img={product.img}
                         quantity={product.quantity}
                         price={product.price}
                />
            )}
        </div>
    );
}