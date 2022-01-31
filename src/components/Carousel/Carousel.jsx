import "./styles.css"
// import { Component } from 'react';
// import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

const CarouselHome = ()=>{
    return (
        <Carousel>
            <div>
                <img src={require("../../imagenes/carouselCaravalSaga.png")} />
            </div>
            <div>
                <img src={require("../../imagenes/CarouselGataBlanca.png")} />
            </div>
            <div>
                <img src={require("../../imagenes/carouselIsabelAllende.png")} />
            </div>
        </Carousel>
    );


}

export default CarouselHome