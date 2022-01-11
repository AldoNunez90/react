function NavBar() {
    return (
        <nav className='navBarHome'>
            <div className='logoPrincipal'><a href={require('../index')}><img src={require('../imagenes/libroLogo2.png')} className='imgLogo'/></a></div>
            <div className='navPrincipal'>
                <ul className='listaNav'>
                    <li className='itemsNavPrincipal'><a href="#">E-Books</a></li>
                    <li className='itemsNavPrincipal'><a href="#">Papel</a></li>
                    <li className='itemsNavPrincipal'><a href="#">Más buscados</a></li>
                    <li className='itemsNavPrincipal'><a href="#">Novedades</a></li>
                </ul>
            </div>
        </nav>
    )
    
};

export default NavBar