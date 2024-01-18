import { Link } from "react-router-dom"
import Boton from "../Boton"



const EmptyCart = () => {
    return (
        <section className="container m-auto mt-8 text-center">
        <h2 className="text-4xl font-semibold text-azul-paleta">Tu carrito está vacío</h2>
        <hr />
        <p className="mt-5 font-semibold text-azul-paleta">Agrega algún producto a tu carrito</p>
        <Boton children={<Link to={"/"}>Volver</Link>} />
      </section>
    )
}

export default EmptyCart