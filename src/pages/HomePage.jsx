import CarouselHome from "../components/Carousel/Carousel";
import ItemListContainer from "../components/ItemList/ItemListContainer";


const HomePage = ()=> {
   return (
      <div className="homeContainer">
         <CarouselHome />
         <ItemListContainer />
      </div>
   );
}

export default HomePage