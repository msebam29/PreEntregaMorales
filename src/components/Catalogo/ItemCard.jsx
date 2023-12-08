import ItemCount from "../ItemCount";

const ItemCard = ({item}) => {
    return (
        <article className="w-75 text-azul-paleta">
            <img src={item.imagen} alt={item.nombre} />
            <h3 className="text-2xl font-bold "> {item.nombre} </h3>
            <h4 className= "text-xl font-semibold">{item.autor}</h4>
            <p className="text-xl font-bold">${item.precio}</p>
            <p className="text-l">{item.descripcion}</p>
            <ItemCount/>
        </article>

    )
}

export default ItemCard;


