import './App.css';
import {Header} from "../Header/Header";
import {Cart} from "../Cart/Cart";
import {Categories} from "../Categories/Categories";
import {ProductsList} from "../ProductsList/ProductsList";
import {TestEvent} from "../TestEvent/TestEvent";
import img1 from "../../assets/images/image1.png";
import img2 from "../../assets/images/image2.png";
import img3 from "../../assets/images/image3.png";
import img4 from "../../assets/images/image4.png";
import img5 from "../../assets/images/image5.png";
import {useState} from "react";

export default function App() {

    const productsList = [
        {id:1, category: 2, cart: 0, name:'Produit 1', description: 'description: lorem ipsum', img:img1, stock:15, price:80},
        {id:2, category: 1, cart: 0, name:'Produit 2', description: 'description: lorem ipsum', img:img2, stock:54, price:18},
        {id:3, category: 2, cart: 0, name:'Produit 3', description: 'description: lorem ipsum', img:img3, stock:48, price:65},
        {id:4, category: 1, cart: 0, name:'Produit 4', description: 'description: lorem ipsum', img:img4, stock:65, price:15},
        {id:5, category: 2, cart: 0, name:'Produit 5', description: 'description: lorem ipsum', img:img5, stock:16, price:78},
    ];

    const [products, setProducts] = useState([...productsList]);
    const [isProductUpdated, setIsProductUpdated] = useState(false);
    const [category, setCategory] = useState(0)

    if (isProductUpdated) {
        setProducts(products);
        setIsProductUpdated(false);
    }

  return (
      <>
        <Header />
        <div className="container">
            <Cart products={products} setIsProductUpdated={setIsProductUpdated} />
            <div style={{margin: '2rem'}}>
                <Categories setCategory={setCategory} />
                <ProductsList category={category} products={products} setIsProductUpdated={setIsProductUpdated} />
            </div>
        </div>
        <TestEvent />
      </>
  );
}