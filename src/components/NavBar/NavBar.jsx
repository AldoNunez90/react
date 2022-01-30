import CartWidget from '../CartWidget/CartWidget';
import './styles.css';


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
            <div className='logoContainer'><a href={require('../../index')}><img className='principalLogo' src={require('../../imagenes/logoFirma.png')} /></a></div>
            <div className='principalNav'>
                <ul className='navList'>
                    <li onClick={eBooks} className='itemsNavPrincipal'><a href="#">E-Books</a></li>
                    <li onClick={papel} className='itemsNavPrincipal'><a href="#">Papel</a></li>
                    <li onClick={novedades} className='itemsNavPrincipal'><a href="#">Novedades</a></li>
                    <li onClick={contacto} className='itemsNavPrincipal'><a href="#">Contacto</a></li>
                </ul>
            </div>
            <div className='navLoginCart'>
                <div className='loginContainer'><a href='#' className='loginText' >login</a></div>
                <div className='cartWidget'><CartWidget /></div>
            </div>
        </nav>
    )

};

export default NavBar