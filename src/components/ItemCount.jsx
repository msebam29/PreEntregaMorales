import { useState } from 'react'
import Boton from './Boton'

const ItemCount = () => {
    const [counter, setCounter] = useState(1)

    const sumar = () =>{
        setCounter (counter + 1)
    }

    const restar = () =>{
        if (counter>0){
            setCounter(counter - 1)
        }
    }
    return(
        <section className="flex gap-5">
            <div className="bg-fondo-header flex items-center gap-2">
                <Boton children="-" onClick={restar}/>
                <p className=" mx-6 font-bold text-verde-lema">{counter}</p>          
                <Boton children="+" onClick={sumar}/>
            </div>
            <div>
                <Boton children="Agregar al Carrito" />
            </div>
        </section>
    )
}

export default ItemCount;


