import "./ProductDescription.css";
import { useParams } from "react-router-dom";
import { productsList } from "../../mockProductList";
import { Product } from "../../components/Product/Product";

export function ProductDescription() {
  const { productId } = useParams();

  const product = productsList.find(
    (product) => product.id === parseInt(productId)
  );

  return (
    <div>
      <h3>Jusqu'au 12/10/2023</h3>
      <Product product={product} />
    </div>
  );
}
