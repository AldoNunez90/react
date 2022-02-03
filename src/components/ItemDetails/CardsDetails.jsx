import { useState } from "react/cjs/react.development";
import ItemCount from "../ItemCount";
import "./Styles.css";
import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";


const CardsDetails = ({ products}) => {
  const [Cart, setCart] = useState([]);
  const { id } = useParams();

  const addToCart = (cantidad) => {
    const newCart = { id: `${id}`, cantidad: `${cantidad}` };
    setCart([...Cart, newCart]);
    
  };
  
  console.log(Cart)



  if (Cart == 0) {return (
      <div className="detailsBox">
        <div className="detailsProducts">
          {/* <img className='imgCards' src={require(`../../imagenes/${products.img}`)} alt={products.title} /> */}
          <h4 className="priceDetails">$ {products.price}</h4>
          <ItemCount stock={products.stock} initial={1} />
          <button className="addToCartBtn" onClick={addToCart}>Agregar al carrito</button>
        </div>
        <div className="detailsText">
          <h1>{products.title}</h1>
          <h2>{products.details}</h2>
        </div>
      </div>
    );
  } else {
    return (
      <div className="detailsBox">
        <div className="detailsProducts">
          {/* <img className='imgCards' src={require(`../../imagenes/${products.img}`)} alt={products.title} /> */}
          <h4 className="priceDetails">$ {products.price}</h4>
          
          <button className="addToCartBtn"><Link to="/carrito">Finalizar compra</Link> </button>
        </div>
        <div className="detailsText">
          <h1>{products.title}</h1>
          <h2>{products.details}</h2>
        </div>
      </div>
    );
  }
    
};

export default CardsDetails;
