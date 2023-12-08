import { useState, useEffect } from "react"
import ItemList from "./ItemList";
import { pedirDatos } from "../../utils/utils";


const ItemListConteiner = () =>{
    const [productos, setProductos] = useState([])
    const [loading, setLoading]= useState (true)

    useEffect(()=>{
        setLoading(true)
        pedirDatos()
        .then ((data)=>{
            setProductos(data)
            setLoading(false)
            })
        }, [])
    
    return (
        <>
           {
                loading
                ?<h2>Cargando...</h2>
                :<ItemList productos={productos}/>

            }

        </>
        )
    
    }
export default ItemListConteiner;