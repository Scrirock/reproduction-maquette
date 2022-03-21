import './App.css';
import {Header} from "../Header/Header";
import {Cart} from "../Cart/Cart";
import {Categories} from "../Categories/Categories";
import {ProductsList} from "../ProductsList/ProductsList";
import {TestEvent} from "../TestEvent/TestEvent";

export default function App() {
  return (
      <>
        <Header />
        <div className="container">
            <Cart />
            <div style={{margin: '2rem'}}>
                <Categories />
                <ProductsList />
            </div>
        </div>
        <TestEvent />
      </>
  );
}