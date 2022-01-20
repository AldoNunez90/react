import BookCards from "../BookCards/BookCards";

function ItemListContainer () {
    return(
        <div className="cardsContainer">
            <BookCards img={require('./imagenes/LasTresHermanas.jpg')} title='Las Tres Hermanas' price={1200} author={"Header Morris"} />
            <BookCards img={require('./imagenes/elLibrodeTuLibro.png')} title='El libro de tu libro' price={1200} author={"Angie Sammartino"} />
            <BookCards img={require('./imagenes/laVillaDeTelas.png')} title='La villa de telas' price={1200} author={"Anne Jacobs"} />
            <BookCards img={require('./imagenes/sapiens.png')} title='Sapiens' price={1200} author={"Yuval Noah Harari"} />
        </div>
    )
}

export default ItemListContainer 