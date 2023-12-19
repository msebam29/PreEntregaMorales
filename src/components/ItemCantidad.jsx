import { useState } from 'react'
import Boton from './Boton'


const ItemCantidad = () => {
    const [cantidad, setCantidad] = useState(1)
    

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
        console.log(itemToCart)
    }

    return(
        <section className="flex items-center gap-5 h-15">
            <div className="bg-fondo-header flex items-center justify-center gap-2 h-12">
                <Boton children="-" onClick={restar}/>
                <p className=" mx-5 font-bold text-verde-lema">{cantidad}</p>          
                <Boton children="+" onClick={sumar}/>
            </div>
            <div>
                <Boton children="Agregar al Carrito" onClick = {handleAgregar}/>
            </div>
        </section>
    )
}

export default ItemCantidad;


