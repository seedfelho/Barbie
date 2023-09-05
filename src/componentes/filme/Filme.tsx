import './Filme.css'
type FilmeProps={
    titulo:string,
    sinopse:string,
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
                <p className="sinopse">{props.sinopse}</p>
            </div>
        </div>
    )
}

export default Filme