import './Header.css'
import Logo from "../../assets/barbie.png"
function Header(){
    let texto ="Sergio";
    function mudaTexto(){
        texto = "Eduardo"
    }
    return(
        <>
            <header>
                <img className="logo"src={Logo} alt="" />
                <nav>
                    <ul>
                        <li>
                            <input className="barrapesquisa" type="text" />
                        </li>
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
            <div>
                <p className="texto_digitado">Pesquisa: {texto}</p>    
            </div>
        </>
    )
}

export default Header