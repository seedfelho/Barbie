import './Header.css'
import Logo from "../../assets/barbie.png"
function Header(){
    return(
            <header>
                <img className="logo"src={Logo} alt="" />
                <nav>
                    <ul>
                        <li>
                            <a href="#">Principal</a>
                        </li>
                        <li>
                            <a href="#">Sobre</a>
                        </li>
                        <li>
                            <a href="#">Notícia</a>
                        </li>
                        <li>
                            <a href="#">Contato</a>
                        </li>
                    </ul>
                </nav>
            </header>
    )
}

export default Header