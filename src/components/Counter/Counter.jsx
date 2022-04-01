import "./Counter.css";
import { useEffect, useState } from "react";

export function Counter({ factor }) {
  // const [count, setCount] = useState(0);
  // const [factor, setFactor] = useState(2);
  // useEffect(() => {
  //   document.title = "Compteur: " + count + ", facteur: " + factor;
  // }, [count, factor]);

  const [count, setCount] = useState(0);
  // useEffect(() => {
  //   document.title = "Compteur: " + count;
  // }, [count]);

  return (
    <div className="counter">
      <div>
        <button onClick={() => setCount(count + factor)}>
          Incrementer de {factor}
        </button>
        <button onClick={() => setCount(count - factor)}>
          Decrementer de {factor}
        </button>
        <button onClick={() => setCount(count * factor)}>Fois {factor}</button>
        <button onClick={() => setCount(count / factor)}>Div {factor}</button>
      </div>
      {/*<button onClick={() => setFactor(factor + 1)}>incrementer le facteur de 1</button>*/}
      <p>Compteur: {count}</p>
      <p>Facteur: {factor}</p>
    </div>
  );
}
