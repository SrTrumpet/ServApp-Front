


const Navbar = () => {
    const content = <>
    <div className="bg-[1B4332] hidden sm:flex text-[18px] sm:w-[438px] sm:place-content around sm:text-[16px] sm:items-center">
        <ul>
            <Link to="Home">
                <li>Inicio</li>
            </Link>
            <Link to="Cuenta">
                <li>Cuenta</li>
            </Link>
            <Link to="Contacto">
                <li>Contacto</li>
            </Link>
        </ul>
    </div>
    </>
    return (
        <nav/>
        
    )
}