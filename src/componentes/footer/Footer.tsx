import './Footer.css'

function Footer(){
    return(
        <footer>
            <div className='container'>
                <div className="infos">
                    <h1 className="text2">Barbie</h1></div>
                    <nav className="product">
                        <ul><a className="text">Product</a>
                            <li>
                                <a className="padrao" href="#">Maquiagem</a>
                            </li>
                            <li>
                                <a className="padrao" href="#">Brinquedos</a>
                            </li>
                            <li>
                                <a className="padrao" href="#">Sapatos</a>
                            </li>
                            <li>
                                <a className="padrao" href="#">Roupas</a>
                            </li>
                            <li>
                                <a className="padrao" href="#">Acessórios</a>
                            </li>
                            <li>
                                <a className="padrao" href="#">Casas</a>
                            </li>
                            <li>
                                <a className="padrao" href="#">Comunismo</a>
                            </li>
                        </ul>
                    </nav>
                    <nav className="company">
                        <ul><a className="text">Company</a>
                            <li>
                                <a className="padrao" href="#">Matell</a>
                            </li>
                            <li>
                                <a className="padrao" href="#">Barbie trembolona</a>
                            </li>
                            <li>
                                <a className="padrao" href="#">Durateston</a>
                            </li>
                            <li>
                                <a className="padrao" href="#">Barbie crossfitera</a>
                            </li>
                        </ul>
                    </nav>
                    <nav className="learn">
                        <ul><a className="text">Learn</a>
                            <li>
                                <a className="padrao" href="#">Barbie Tere</a>
                            </li>
                            <li>
                                <a className="padrao" href="#">Barbie Ana linda</a>
                            </li>
                            <li>
                                <a className="padrao" href="#">Barbie princesa Andy</a>
                            </li>
                            <li>
                                <a className="padrao" href="#">Barbie Manu</a>
                            </li>
                        </ul>
                    </nav>
                    <nav className="community">
                        <ul><a className="text">Community</a>
                            <li>
                                <a className="padrao" href="#">discord</a>
                            </li>
                            <li>
                                <a className="padrao" href="#">twiter</a>
                            </li>
                            <li>
                                <a className="padrao" href="#">facebook</a>
                            </li>
                            <li>
                                <a className="padrao" href="#">instagram</a>
                            </li>
                        </ul>
                    </nav>
            </div>
        </footer>
    )
}

export default Footer