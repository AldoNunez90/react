import React from "react";
import "./styles.css"

function ItemCount ({stock, initial}){

const [cantidad, setCantidad] = React.useState(initial)

const restar = ()=> {
    if (cantidad === initial){
        cantidad (1)
    } else {
        setCantidad (cantidad - 1)
    }
}

const sumar = ()=> {
    if(cantidad === stock){
        cantidad (stock)
    } else{
        setCantidad (cantidad + 1)
    }
}
    return(
        <div className="itemCountContainer">
            <button onClick={restar} className="buttonSub">-</button>
            <h4 className="numContador">{cantidad}</h4>
            <button onClick={sumar} className="buttonAdd">+</button>
        </div>
    );
}

export default ItemCount