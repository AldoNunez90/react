import { useEffect } from "react";
import { useState } from "react";
import BookCards from "../BookCards/BookCards";
import "../../../node_modules/react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Oval } from 'react-loader-spinner'
import "./styles.css"


function ItemListContainer() {
  
  const [elements, setElements] = useState([])
  const [errors, setErrors] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(()=> {
    
    const getProductList = async ()=> {
      setLoading(true)
      try{
        const jsonList = "http://localhost:3001/productList"
        const response = await fetch(jsonList);
        const data = await response.json();
        setElements(data)
      } catch(err){
        setErrors(err)
      } finally{
        setLoading(false)
      }

      };
    getProductList()
  },[])

  if(loading){
    return <div className="ovalLoading"><Oval color="black" height={80} width={80} /></div>
  } else if (errors){
    return <p>No se pudo cargar</p>
  } else {

  return (
    <div>
        <div className="cardsContainer">
            {elements.map((product) => <BookCards key={product.id} products={product} />)}
          </div>
    </div>
  )
}

}
export default ItemListContainer 