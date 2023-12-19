import { Link } from "react-router-dom";
import Boton from "../Boton";


const ItemCard = ({item}) => {
    return (
        <article className="w-60 text-azul-paleta flex flex-col items-stretch text-center my-4">
            <img src={item.imagen} alt={item.nombre} className="w-60"/>
            <h3 className="text-2xl font-bold "> {item.nombre} </h3>
            <h4 className= "text-xl font-semibold">{item.autor}</h4>
            <p className="text-xl font-bold">${item.precio}</p>
            <Boton>
                <Link to={`/item/${item.id}`}> Ver más </Link>
            </Boton> 
        </article>

    )
}

export default ItemCard;


