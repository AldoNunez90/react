import { useEffect } from "react";
import { useState } from "react";
import BookCards from "../BookCards/BookCards";
import Productos from '../Item/Item'
import "../../../node_modules/react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Oval } from  'react-loader-spinner'
import "./styles.css"

function ItemListContainer () {

    const [products, setProducts] = useState([]);
    const [cargando, setCargando] = useState(false);

    const getProductos = ()=> {
        return new Promise((resolve, reject) => {
          setTimeout(() => resolve(Productos), 2000);
        },)}

    useEffect(()=>{
        setCargando(true);
        getProductos()
        .then((data)=> setProducts(data))
        .catch((error)=> console.log(error))
        .finally(()=> setCargando(false))
                   },
                   []);

                   return(
                    <div>
                    {cargando ? (<div className="ovalCargando"><Oval color="black" height={80} width={80} /></div>) : 
                    (
                    <div className="cardsContainer">
                    {products.map((producto)=> <BookCards key={producto.id} products={producto}/>)}
                    </div>
                    )}
                    </div>
)
                    }


export default ItemListContainer 