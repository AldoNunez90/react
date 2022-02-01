import ItemCount from '../ItemCount';
import "./Styles.css"



const CardsDetails = ({products})=> {
   return (
    <div className='detailsBox'>
            <div className='detailsProducts'>
          {/* <img className='imgCards' src={require(`../../imagenes/${products.img}`)} alt={products.title} /> */}
          <h4 className='priceDetails'>$ {products.price}</h4>
          <ItemCount stock= {products.stock} initial= {1} />
            </div>
            <div className='detailsText'>
                <h2>{products.details}</h2>
            </div>
        </div>
      );
    };


export default CardsDetails