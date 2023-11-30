import { BsCart4 } from "react-icons/bs"

const CartWidget = () => {
    return (
        <div className="flex flex-col items-center justify-center relative h-14 w-14">
            <a className="text-verde-lema hover:text-hover font-bold" href="#">
                <BsCart4 className="h-10 w-10"/>
                <span className="absolute top-0 right-0">4</span>
            </a>
        </div>
    )
}
export default CartWidget;