/* import NavLink from './NavLink' */
import CartWidget from './CartWidget'
import logo from '../../assets/logo.webp'
import { Link, NavLink } from "react-router-dom";

const links = [
    {
        label: "Libros",
        href: "/",
    },
    {
        label: "Juveniles",
        href: "/libros/juveniles",
    },
    {
        label: "Biografías",
        href: "/libros/biografias",
    },
    {
        label: "Aventura y Ciencia Ficción",
        href: "/libros/aventura-ciencia-ficcion",
    },
]

const NavBar = () =>{
    return(
        <header className= "bg-fondo-header">
            <div className='container m-auto py-5 flex justify-between items-center'>
                <img className='w-60' src={logo} alt="logoLema"/>
                <nav className='flex gap-6'>
                    {links.map((link)=>(
                        <NavLink 
                        key = {link.href} 
                        to = {link.href}
                        className="text-verde-lema text-lg font-semibold uppercase hover:text-hover"
                        >
                            {link.label}
                        </NavLink>

                    ))}
                </nav>
                <CartWidget />
            </div>
        </header>
    )
}
export default NavBar;