import { useState } from 'react'
import Boton from './Boton'


const ItemCantidad = () => {
    const [cantidad, setCantidad] = useState(1)
    

    const sumar = () =>{
        setCantidad (cantidad + 1)
    }

    const restar = () =>{
        if (cantidad>0){
            setCounter(cantidad - 1)
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
        <section className="flex gap-5">
            <div className="bg-fondo-header flex items-center gap-2">
                <Boton children="-" onClick={restar}/>
                <p className=" mx-6 font-bold text-verde-lema">{counter}</p>          
                <Boton children="+" onClick={sumar}/>
            </div>
            <div>
                <Boton children="Agregar al Carrito" onClick = {handleAgregar}/>
            </div>
        </section>
    )
}

export default ItemCantidad;


