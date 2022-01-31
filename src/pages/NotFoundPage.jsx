import NotFound from "../imagenes/NotFound.png"

const NotFoundPage = ()=>{
return (<div>
    <img src={require("../imagenes/NotFound.png")} alt="NotFound" className="notFound"/>
    </div>
);
}

export default NotFoundPage;