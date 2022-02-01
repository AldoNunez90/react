
import { useNavigate } from 'react-router-dom';
import './style.css'



const BookCards = ({products})=> {
  const navigate = useNavigate();
     
    return (
      <div className='bookCardItem'>
          <img className='imgCards' src={require(`../../imagenes/${products.img}`)} alt={products.title} />
          <h2 className='titleCards'>{products.title}</h2>
          <h4 className='authorCards'>{products.author}</h4>
        <h4 className='priceCards'>$ {products.price}</h4>
        <div className='btnContainer'>
        <button onClick={()=> navigate(`/libros/${products.id}`)} className='detailsBtn'>Detalles</button>
        </div>
        </div>
      );
    };
  
    
    
    export default BookCards