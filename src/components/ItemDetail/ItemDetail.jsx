import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Boton from "../Boton";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({item}) =>{
    const navigate = useNavigate()
    const [cantidad, setCantidad] = useState(1)
    const { addToCart, isInCart} = useContext(CartContext)

    const handleVolver = () =>{
         navigate (-1) 
    }
    const sumar = () =>{
        setCantidad (cantidad + 1)
    }

    const restar = () =>{
        if (cantidad>0){
            setCantidad(cantidad - 1)
        }
    }
    const handleAgregar = () =>{
        const itemToCart = {
            ...item,
            cantidad
        }
        addToCart(itemToCart)
    }
    return (
    <div className="container m-auto mt-8">
        <Boton children="Volver" onClick={handleVolver} />
        <h3 className="mt-4 text-2xl font-bold text-center text-azul-paleta">{item.nombre}</h3>
        <p className="text-xl font-semibold text-center text-azul-paleta">{item.autor}</p>
        <hr />
        <div className="flex gap-8 pt-4">
            <img src={item.imagen} alt={item.nombre} className="w-64"/>
            <div className="m-auto">
                <p className="my-2 w-4/5 text-justify text-azul-paleta">{item.descripcion}</p>
                <p className="text-xl font-bold my-2 text-azul-paleta">Precio: ${item.precio}</p>
            </div>    
        </div>
        {isInCart(item.id)
        ? <Boton> <Link to={`/cart`}> Terminar mi Compra </Link></Boton> 
        : <section className="flex gap-5 justify-center">
            <div className="flex items-center gap-5 h-15">
                <div className="bg-fondo-header flex items-center justify-center gap-2 h-12">
                    <Boton children="-" onClick={restar}/>
                    <p className=" mx-5 font-bold text-verde-lema">{cantidad}</p>          
                    <Boton children="+" onClick={sumar}/>
                </div>
            </div>
            <Boton children="Agregar al Carrito" onClick = {handleAgregar} /* disabled = {item.stock ===0} *//>
          </section>
        }
        
    </div>
    )

}

export default ItemDetail;