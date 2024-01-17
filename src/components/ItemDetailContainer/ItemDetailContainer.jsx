import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";


const ItemDetailContainer = ()=>{
    const [loading, setLoading] = useState (true)
    const [item, setItem] = useState (null)

    const { itemId } = useParams()
    console.log(itemId);
    
    useEffect (()=>{
        setLoading(true)

        const docRef = doc(db, 'productos', itemId)
        getDoc(docRef)
            .then((docSnapshot) =>{
                const doc = {
                    ...docSnapshot.data(),
                    id: docSnapshot.id
                }
                setItem(doc)
            })
        .finally(()=> setLoading(false))
    }, [itemId] )

    return(
        <>
        {loading
        ?<h2 className="text-center mt-20 text-azul-paleta font-bold text-xl">Cargando...</h2>
        :<ItemDetail item={item}/>
        }      
        </>
    )
}

export default ItemDetailContainer;






