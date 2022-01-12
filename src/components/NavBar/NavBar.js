function NavBar() {
    const eBooks = () => {
        console.log('Libros digitales')
    };
    const papel = () => {
        console.log('Papel')
    };
    const contacto = () => {
        console.log('Contacto')
    };
    const novedades = () => {
        console.log('Novedades')
    };
    return (

        <nav className='navBarHome'>
            <div className='logoPrincipal'><a href={require('../../index')}><span className='tituloLogo'>Mort</span></a></div>
            <div className='navPrincipal'>
                <ul className='listaNav'>
                    <li onClick={eBooks} className='itemsNavPrincipal'><a href="#">E-Books</a></li>
                    <li onClick={papel} className='itemsNavPrincipal'><a href="#">Papel</a></li>
                    <li onClick={novedades} className='itemsNavPrincipal'><a href="#">Novedades</a></li>
                    <li onClick={contacto} className='itemsNavPrincipal'><a href="#">Contacto</a></li>
                </ul>
            </div>
            <div className='navLogin'>
                <a href='#' className='loginText'>login</a> 
                <a href='#'><img className='cartLogo' src={require('../../imagenes/cartLogo.png')} /></a>
            </div>
        </nav>
    )

};

export default NavBar