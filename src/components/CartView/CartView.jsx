import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { CartContext } from "../../context/CartContext";
import EmptyCart from "./EmptyCart";
import Boton from "../Boton";
import { BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";

const CartView = () => {
    const { cart, totalCart, clearCart, removeItem } = useContext(CartContext)
    const { user } = useContext (UserContext)

    /* if (!user.email) return <h2>No existe el usuario</h2> */
    if (cart.length === 0) return <EmptyCart />

    return(
        <section className="container m-auto mt-8">
            {/* <p>Bienvenido: {user.email}</p> */}
            <h2 className="text-4xl font-semibold">Tu Compra</h2>
            <hr />

            <ul>
                {cart.map((item) => (
                    <li key={item.id} clasName="flex gap-3 border-b my-4">
                        <img src={item.imagen} alt="Cart img" className="w-32" />
                        <div>
                            <h3>{item.nombre}</h3>
                            <p className="text-2xl font-bold">$ {item.precio * item.cantidad}</p>
                            <p>Cantidad: {item.cantidad}</p>
                            <Boton children={<BsTrash className="w-4"/>} onClick= {() => removeItem(item.id)}/>                             
                        </div>
                    </li>
                ))}
            </ul>
            <h4 className="text-4xl font-semibold">Total: ${totalCart()}</h4>
            <Boton children="Vaciar Carrito" onClick={clearCart}/>
            <Boton children={<Link to="/checkout">Terminar mi compra</Link>}/>
        </section>
    )
}

export default CartView;