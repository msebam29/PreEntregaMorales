import CartWidget from './CartWidget'
import logo from '../../assets/logo.webp'
import { NavLink } from "react-router-dom";
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import Boton from '../Boton';

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

const NavBar = () => {
    const { user, logout } = useContext(UserContext)

    return (
        <header className="bg-fondo-header">
            <div className='container m-auto py-5 flex justify-between items-center'>
                <img className='w-60' src={logo} alt="logoLema" />
                <nav className='flex gap-6'>
                    {links.map((link) => (
                        <NavLink
                            key={link.href}
                            to={link.href}
                            className="text-verde-lema text-lg font-semibold uppercase hover:text-hover"
                        >
                            {link.label}
                        </NavLink>

                    ))}
                    <CartWidget />
                </nav>
            </div>
            {user.logged && <div className="flex gap-4 items-center justify-end container">
                <p className="text-verde-lema">{user.email}</p>
                <Boton onClick={logout}>Cerrar sesión</Boton>
            </div>}
        </header>
    )
}
export default NavBar;