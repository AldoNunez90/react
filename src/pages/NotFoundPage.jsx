
import { Link } from "react-router-dom";


const NotFoundPage = ()=>{
return (<div className="notFoundContainer">
    <img src={require("../imagenes/NotFound.png")} alt="NotFound" className="notFound"/>
    <button className="toHomeBtn"><Link to="/">Volver al inicio</Link></button>
    </div>
);
}

export default NotFoundPage;