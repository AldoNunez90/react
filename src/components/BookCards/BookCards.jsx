import ItemCount from '../ItemCount';
import './style.css'

const BookCards = ({products})=> {

    

    return (
        <div className='bookCardItem'>
          <img className='imgCards' src={products.img} alt={products.title} />
          <h2 className='titleCards'>{products.title}</h2>
          <h4 className='authorCards'>{products.author}</h4>
          <h4 className='priceCards'>$ {products.price}</h4>
          <button>Detalles</button>
        </div>
      );
    };


export default BookCards