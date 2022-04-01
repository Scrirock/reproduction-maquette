import { useEffect, useState } from "react";
import { Header } from "../../components/Header/Header";
import { Cart } from "../../components/Cart/Cart";
import { Categories } from "../../components/Categories/Categories";
import { ProductsList } from "../../components/ProductsList/ProductsList";
import { Counter } from "../../components/Counter/Counter";
import { productsList } from "../../mockProductList";

export function Home() {
  const [products, setProducts] = useState([...productsList]);
  const [isProductUpdated, setIsProductUpdated] = useState(false);
  const [category, setCategory] = useState(0);

  useEffect(() => {
    document.title = "Home";
  }, []);

  if (isProductUpdated) {
    setProducts(products);
    setIsProductUpdated(false);
  }

  const [factor, setFactor] = useState(0);
  useEffect(() => {
    setFactor(Math.floor(Math.random() * 100));
  }, [category, setFactor]);

  return (
    <>
      <div className="container">
        <Cart products={products} setIsProductUpdated={setIsProductUpdated} />
        <div style={{ margin: "2rem" }}>
          <Categories setCategory={setCategory} />
          <ProductsList
            category={category}
            products={products}
            setIsProductUpdated={setIsProductUpdated}
          />
        </div>
      </div>
      <Counter factor={factor} />
    </>
  );
}
