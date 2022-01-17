import './style.css'

function BookCards ({img, title, price, author}) {
return (
    <div className='bookCardItem'>
        <div className='imgCardsContainer'>
            <img  className='imgCards' src={img}/>
        </div>
        <div className='desiptionCards'>   
            <p className='titleCards' >{title}</p>
            <p className='priceCards' >$ {price}</p>
            <p className='authorCards' >{author}</p>
        </div>
    </div>
)
}

export default BookCards