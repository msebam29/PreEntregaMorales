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
            <h3 className="text-2xl font-bold "> {item.nombre} </h3>
            <hr/>
            <div className="flex gap-6 pt-4">
                <img src={item.imagen} alt={item.nombre} />
            </div>
            <div>
                <h4 className= "text-xl font-semibold">{item.autor}</h4>
                <p className="text-l">{item.descripcion}</p>
                <p className="text-xl font-bold">${item.precio}</p>
            </div>
            <ItemCantidad/>
            <Boton children="Volver" onClick ={handleVolver}/>
        </div>    
    )

}

export default ItemDetail;