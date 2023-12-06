
const Boton = ({children, className = "", onClick}) =>{
    return(
        <button onClick={onClick} className={'bg-fondo-header rounded flex items-center py-3 px-5 text-center text-verde-lema font-bold my-4 ${className}'}>
            {children}
        </button>
    )
}

export default Boton;

