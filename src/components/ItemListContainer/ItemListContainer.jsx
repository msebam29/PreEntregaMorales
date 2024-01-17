import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../firebase/config"


const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoriaId } = useParams()

    useEffect(() => {
        setLoading(true)

        const productosRef = collection(db, 'productos')
        const docsRef = categoriaId
            ? query(productosRef, where('categoria', '==', categoriaId))
            : productosRef
        getDocs(docsRef)
            .then((querySnapshot) => {
                const docs = querySnapshot.docs.map(doc => {
                    return {
                        ...doc.data(),
                        id: doc.id
                    }
                })
                setProductos(docs)
            })
            .finally(() => setLoading(false))
    }, [categoriaId])

    return (
        <>
            {
            loading
                ? <h2 className="text-center mt-20 text-azul-paleta font-bold text-xl">Cargando...</h2>
                : <ItemList productos={productos} />
            }
        </>
    )
}
export default ItemListContainer;