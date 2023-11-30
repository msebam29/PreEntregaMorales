const NavLink = ({href, texto}) => {
    return (
        <a className="text-verde-lema text-lg font-semibold uppercase hover:text-hover" href={href}> {texto} </a>
    )
}
export default NavLink;


