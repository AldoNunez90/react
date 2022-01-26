import { Oval } from 'react-loader-spinner'
import "../../../node_modules/react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import ProductList from '../Item/Item'
import { useEffect } from "react";
import { useState } from "react";
import CardsDetails from './CardsDetails';


function ItemDetails () {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    const getProducts = () => {
        return new Promise((resolve, reject) => {
          setTimeout(() => resolve(ProductList), 2000);
        })}

    useEffect (()=>{
        setLoading(true)
        getProducts()
        .then((response)=> setProducts(response))
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
    }, [])


    return (
        <div>
          {loading ? (<div className="ovalLoading"><Oval color="blue" height={80} width={80} /></div>) :
            (
              <div className="detailsContainer">
                {products.map((product) => <CardsDetails key={product.id} products={product} />)}
              </div>
            )}
        </div>)
}

export default ItemDetails