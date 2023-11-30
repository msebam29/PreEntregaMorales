import NavLink from './NavLink'
import CartWidget from './CartWidget'
import logo from '../../assets/logo.webp'

const NavBar = () =>{
    return(
        <header className= "bg-fondo-header">
            <div className='container m-auto py-5 flex justify-between items-center'>
                <img className='w-60' src={logo} alt="logoLema"/>
                <nav className='flex gap-6'>
                    <NavLink href="#" texto="Libros"/>
                    <NavLink href="#" texto="Ofertas"/>
                    <NavLink href="#" texto="Novedades"/>
                    <NavLink href="#" texto="Tematicas"/>
                    <NavLink href="#" texto="Contacto"/>
                </nav>
                <CartWidget />
            </div>
        </header>
    )
}
export default NavBar;