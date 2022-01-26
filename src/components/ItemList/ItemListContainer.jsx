import { useEffect } from "react";
import { useState } from "react";
import BookCards from "../BookCards/BookCards";
import ProductList from '../Item/Item'
import "../../../node_modules/react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Oval } from 'react-loader-spinner'
import "./styles.css"


function ItemListContainer() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const getProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(ProductList), 2000);
    })
  }

  useEffect(() => {
    setLoading(true);
      getProducts()
      .then((response) => setProducts(response))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  },
    []);

  return (
    <div>
      {loading ? (<div className="ovalLoading"><Oval color="black" height={80} width={80} /></div>) :
        (
          <div className="cardsContainer">
            {products.map((product) => <BookCards key={product.id} products={product} />)}
          </div>
        )}
    </div>
  )
}


export default ItemListContainer 