import { useContext } from "react"
import { BsCart4 } from "react-icons/bs"
import { NavLink } from "react-router-dom"
import { CartContext } from "../../context/CartContext"



const CartWidget = () => {
    const { itemsInCart } = useContext(CartContext)

    return (
        <div className="flex flex-col items-center justify-center relative h-14 w-14">
            <NavLink key="/cart" to= "/cart"className="text-verde-lema hover:text-hover font-bold" href="#">
                <BsCart4 className="h-10 w-10"/>
                <span className="absolute top-0 right-0">{ itemsInCart() }</span>
            </NavLink>
        </div>
    )
}
export default CartWidget;