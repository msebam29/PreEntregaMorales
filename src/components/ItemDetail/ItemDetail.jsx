import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ItemCantidad from "../ItemCantidad";
import Boton from "../Boton";

const ItemDetail = ({item}) =>{
    const navigate = useNavigate()


    const handleVolver = () =>{
         navigate (-1) 
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
                <ItemCantidad/>
            </div>
        </div>
    </div>
    )

}

export default ItemDetail;