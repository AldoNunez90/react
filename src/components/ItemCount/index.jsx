import "./styles.css";
import { useState } from "react";

function ItemCount({ stock, initial, cantidad}) {
  const [amount, setAmount] = useState(initial);

  const decrement = () => {
    if (amount === initial) {
      amount(1);
    } else {
      setAmount((prevState) => prevState - 1);    
    }
  };
  const increment = () => {
    if (amount === stock) {
      amount(stock);
    } else {
      setAmount((prevState) => prevState + 1);
     
    }
  };
  return (
    <div>
      <div className="itemCountContainer">
        <button onClick={decrement} className="buttonSub">
          -
        </button>
        <h4 className="numContador">{amount}</h4>
        <button onClick={increment} className="buttonAdd">
          +
        </button>
      </div>
      <div className="stockContainer">
        <h5 className="stockDetail">Disponible: {stock}</h5>
      </div>
    </div>
  );
}

export default ItemCount;
