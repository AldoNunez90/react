import CarouselHome from "../components/Carousel/Carousel";
import ItemListHome from "../components/ItemList/ItemListHome";

const HomePage = ()=> {
   return (
      <div className="homeContainer">
         <CarouselHome />
         <ItemListHome />
      </div>
   );
}

export default HomePage