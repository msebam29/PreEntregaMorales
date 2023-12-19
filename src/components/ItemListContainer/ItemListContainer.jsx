import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList";
import { pedirDatos } from "../../utils/utils";
import { useParams } from "react-router-dom";


const ItemListConteiner = () =>{
    const [productos, setProductos] = useState([])
    const [loading, setLoading]= useState (true)

    const { categoriaId } = useParams()
    console.log(categoriaId);

    useEffect(()=>{
        setLoading(true)
        pedirDatos()
        .then ((data)=>{
            const items = categoriaId
                            ? data.filter(prod => prod.categoria === categoriaId)
                            : data
            setProductos(items)
            
            })
            .finally (()=> setLoading(false))
        }, [categoriaId])
    
    return (
        <>
           {
                loading
                ?<h2 className="text-center mt-20 text-azul-paleta font-bold text-xl">Cargando...</h2>
                :<ItemList productos={productos}/>
            }
        </>
        )    
    } 
export default ItemListConteiner;