import CardsDetails from './CardsDetails';
import { useEffect } from "react";
import { useState } from "react";
import "../../../node_modules/react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Oval } from 'react-loader-spinner'
import { useParams } from 'react-router-dom';


function ItemDetails () {

    const [details, setDetails] = useState([])
    const [errors, setErrors] = useState(null)
    const [loading, setLoading] = useState(false)

    
    const {id} = useParams();
  
    useEffect (()=>{
        const getProducts = async ()=>{
        setLoading(true)
        try{
          const getProductDetails = `http://localhost:3001/productList/${id}`
          const response = await fetch(getProductDetails);
          const data = await response.json();
          setDetails(data)
        } catch(error){setErrors(error)}
        finally{setLoading(false)}
      };
      getProducts()
    }, [])
    if(loading){
      return <div className="ovalLoading"><Oval color="black" height={80} width={80} /></div>
    } else if (errors) {
      return <p>Hubo un error</p>;
    } else {
      return (
        <div className='detailsHero'>
          
              <div className="detailsContainer">
               <CardsDetails key={details.id} products={details} />
              </div>
          
        </div>)}
}

export default ItemDetails