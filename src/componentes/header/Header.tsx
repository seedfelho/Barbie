import './Header.css'
import { Link } from 'react-router-dom'
import Logo from "../../assets/barbie.png"
function Header(){
    return(
            <header>
                <Link to="/" className="">
                    <img className="logo"src={Logo} alt="" />
                </Link>
                <nav>
                    <ul>
                        <li>
                            <Link className="botao" to="/">Página inicial</Link>
                        </li>
                        <li>
                            <Link className="botao" to="/sobre">Sobre</Link>
                        </li>
                        <li>
                            <Link className="botao" to="/noticia">Noticia</Link>
                        </li>
                        <li>
                            <Link className="botao" to="/contato">Contato</Link>
                        </li>
                    </ul>
                </nav>
            </header>
    )
}

export default Header