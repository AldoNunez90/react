import CartWidget from "../CartWidget/CartWidget";
import "./styles.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navBarHome">
    

      <Link to="/">
        <img
          className="principalLogo"
          src={require("../../imagenes/logoFirma.png")}
        />
      </Link>
      <div className="principalNav">
        <ul className="navList">
          <li className="itemsNavPrincipal">
            <Link to="/">Novedades</Link>
          </li>
          <li className="itemsNavPrincipal">
            <Link to="libros">Libros</Link>
          </li>
          <li className="itemsNavPrincipal">
            <Link to="products">Nosotros</Link>
          </li>
          <li className="itemsNavPrincipal">
            <Link to="/">Contacto</Link>
          </li>
        </ul>
      </div>
      <div className="navLoginCart">
        <div className="loginContainer">
          <a href="#" className="loginText">
            login
          </a>
        </div>
        <div className="cartWidget">
          <CartWidget />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
