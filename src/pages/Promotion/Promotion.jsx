import "./Promotion.css";
import { NavLink, Outlet, useSearchParams } from "react-router-dom";
import { promotionList } from "../../mockPromotionList";

export function Promotion() {
  const [searchParam, setSearchParams] = useSearchParams();

  return (
    <>
      <h1 className="promoTitle">Nos promotion du moment</h1>
      <table className="promotion">
        <tbody>
          {promotionList.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>
                <NavLink
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "orange" : "mediumseagreen",
                      backgroundColor: searchParam.get("color"),
                    };
                  }}
                  to={`/promotions/${product.id}`}
                >
                  Voir description
                </NavLink>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Outlet />
    </>
  );
}
