import React from "react";
import "./styles.css"

function ItemCount ({stock, initial}){

const [amount, setAmount] = React.useState(initial)

const subtract = ()=> {
    if (amount === initial){
        amount (1)
    } else {
        setAmount (amount - 1)
    }
}

const addAmount = ()=> {
    if(amount === stock){
        amount (stock)
    } else{
        setAmount (amount + 1)
    }
}
    return(
        <div className="itemCountContainer">
            <button onClick={subtract} className="buttonSub">-</button>
            <h4 className="numContador">{amount}</h4>
            <button onClick={addAmount} className="buttonAdd">+</button>
        </div>
    );
}

export default ItemCount