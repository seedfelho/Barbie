import './Filme.css'
type FilmeProps={
    titulo:string,
    descricao:string,
    imagem:string
}

function Filme(props:FilmeProps){
    return(
        <div className="filme_content">
            <div className="foto_filme">
                <img className="imgbar" src={props.imagem} alt=""/>
            </div>
            <div className="textofoto">
                <h1>{props.titulo}</h1>
                <p className="sinopse">{props.descricao}</p>
            </div>
        </div>
    )
}

export default Filme