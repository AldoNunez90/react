import { Oval } from 'react-loader-spinner'
import "../../../node_modules/react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { useEffect } from "react";
import { useState } from "react";
import CardsDetails from './CardsDetails';


function ItemDetails () {

    const [details, setDetails] = useState([])
    const [errors, setErrors] = useState(null)
    const [loading, setLoading] = useState(false)

    
    useEffect (()=>{
      const getProducts = async ()=>{
        const getProductDetails = "http://localhost:3001/productList"
        setLoading(true)
        try{
          const response = await fetch(getProductDetails);
          const data = await response.json();
          setDetails(data)
        } catch(error){setErrors(error)}
        finally{setLoading(false)}
      };
      getProducts()
    }, [])
    if (errors) {
      return <p>Hubo un error</p>
    } else {
      
      console.log(details)
      return (
        <div>
          {loading ? (<div className="ovalLoading"><Oval color="blue" height={80} width={80} /></div>) :
            (
              <div className="detailsContainer">
                {details.map((product) => <CardsDetails key={product.id} products={product} />)}
              </div>
            )}
        </div>)
}

}

export default ItemDetails