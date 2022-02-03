import { Link } from "react-router-dom";
import "./styles.css";

const CartWidget = () => {
  return (
    <Link to="carrito">
      <img
        className="cartLogo"
        alt="Logo de Carrito"
        src={require("../../imagenes/cartLogo.png")}
        />
    </Link>
   
  );
};

export default CartWidget;
